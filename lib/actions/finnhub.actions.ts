'use server';

const FINNHUB_BASE_URL = 'https://finnhub.io/api/v1';
const FINNHUB_API_KEY = process.env.FINNHUB_API_KEY || '';

interface FinnhubArticle {
  id?: string;
  headline: string;
  summary: string;
  source: string;
  url: string;
  image?: string;
  datetime: number;
  category?: string;
}

interface FormattedArticle {
  headline: string;
  summary: string;
  source: string;
  url: string;
  image?: string;
  datetime: string;
  symbol?: string;
}

async function fetchJSON<T>(url: string, revalidateSeconds?: number): Promise<T> {
  try {
    const fetchOptions: RequestInit = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    if (revalidateSeconds !== undefined) {
      fetchOptions.cache = 'force-cache';
      fetchOptions.next = { revalidate: revalidateSeconds };
    } else {
      fetchOptions.cache = 'no-store';
    }

    const response = await fetch(url, fetchOptions);
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }

    return response.json();
  } catch (error) {
    console.error('Fetch error:', error);
    throw error;
  }
}

function isValidArticle(article: any): article is FinnhubArticle {
  return (
    typeof article === 'object' &&
    article !== null &&
    typeof article.headline === 'string' &&
    typeof article.summary === 'string' &&
    typeof article.source === 'string' &&
    typeof article.url === 'string' &&
    typeof article.datetime === 'number'
  );
}

function formatArticle(article: FinnhubArticle, symbol?: string): FormattedArticle {
  return {
    headline: article.headline,
    summary: article.summary,
    source: article.source,
    url: article.url,
    image: article.image,
    datetime: new Date(article.datetime * 1000).toISOString(),
    ...(symbol && { symbol }),
  };
}

export async function getNews(symbols?: string[]): Promise<FormattedArticle[]> {
  try {
    const articles: FormattedArticle[] = [];

    if (symbols && symbols.length > 0) {
      // Clean and uppercase symbols
      const cleanSymbols = symbols
        .map((s) => s.trim().toUpperCase())
        .filter((s) => s.length > 0);

      if (cleanSymbols.length === 0) {
        return getGeneralNews();
      }

      // Round-robin through symbols, max 6 iterations
      const maxRounds = Math.min(6, cleanSymbols.length);
      const seenUrls = new Set<string>();

      for (let round = 0; round < maxRounds; round++) {
        const symbol = cleanSymbols[round % cleanSymbols.length];

        try {
          const url = `${FINNHUB_BASE_URL}/company-news?symbol=${symbol}&limit=10&token=${FINNHUB_API_KEY}`;
          const data = await fetchJSON<any[]>(url, 3600); // Cache for 1 hour

          if (!Array.isArray(data)) {
            console.warn(`Invalid data format for symbol ${symbol}`);
            continue;
          }

          // Find first valid article not yet added
          for (const item of data) {
            if (isValidArticle(item) && !seenUrls.has(item.url)) {
              articles.push(formatArticle(item, symbol));
              seenUrls.add(item.url);
              break;
            }
          }
        } catch (error) {
          console.error(`Error fetching news for ${symbol}:`, error);
          continue;
        }
      }

      // If we still don't have enough articles, fetch general news
      if (articles.length < 3) {
        const generalNews = await getGeneralNews();
        for (const article of generalNews) {
          if (!seenUrls.has(article.url) && articles.length < 6) {
            articles.push(article);
            seenUrls.add(article.url);
          }
        }
      }
    } else {
      // No symbols provided, fetch general market news
      return getGeneralNews();
    }

    // Sort by datetime descending
    articles.sort((a, b) => new Date(b.datetime).getTime() - new Date(a.datetime).getTime());

    // Return max 6 articles
    return articles.slice(0, 6);
  } catch (error) {
    console.error('Error fetching news:', error);
    throw new Error('Failed to fetch news');
  }
}

async function getGeneralNews(): Promise<FormattedArticle[]> {
  try {
    const url = `${FINNHUB_BASE_URL}/news?category=general&minId=0&limit=20&token=${FINNHUB_API_KEY}`;
    const data = await fetchJSON<any[]>(url, 3600); // Cache for 1 hour

    if (!Array.isArray(data)) {
      console.error('Invalid general news data format');
      return [];
    }

    const articles: FormattedArticle[] = [];
    const seenHeadlines = new Set<string>();

    for (const item of data) {
      if (isValidArticle(item)) {
        // Deduplicate by headline
        const headlineKey = item.headline.toLowerCase();
        if (!seenHeadlines.has(headlineKey)) {
          articles.push(formatArticle(item));
          seenHeadlines.add(headlineKey);

          if (articles.length >= 6) break;
        }
      }
    }

    // Sort by datetime descending
    articles.sort((a, b) => new Date(b.datetime).getTime() - new Date(a.datetime).getTime());

    return articles.slice(0, 6);
  } catch (error) {
    console.error('Error fetching general news:', error);
    throw new Error('Failed to fetch news');
  }
}
