'use server';

import { connectToDatabase } from '@/database/mongoose';
import { Watchlist } from '@/database/models/watchlist.model';
import { getAuth } from '@/lib/better-auth/auth';
import { headers } from 'next/headers';

export async function getWatchlistSymbolsByEmail(email: string): Promise<string[]> {
  try {
    // Connect to database
    await connectToDatabase();

    // Get the auth instance
    const auth = await getAuth();

    // Fetch user session to get userId (Better Auth stores user data)
    const session = await auth.api.getSession({
      headers: {
        cookie: (await headers()).get('cookie') || '',
      },
    });

    // If no session, query Better Auth database directly
    let userId: string | null = null;

    if (session?.user?.id) {
      userId = session.user.id;
    } else {
      // Fallback: query the user collection directly if session unavailable
      // Better Auth uses a 'user' collection in the database
      const conn = await connectToDatabase();
      const db = conn?.connection?.db ?? null;
      if (!db) {
        console.error('Database connection not available');
        return [];
      }

      const user = await db.collection('user').findOne({ email });
      if (!user) {
        console.log(`User with email ${email} not found`);
        return [];
      }
      userId = user.id;
    }

    // Query watchlist by userId
    const watchlistItems = await Watchlist.find({ userId }).select('symbol').lean();

    // Extract and return symbols
    const symbols = watchlistItems.map((item: { symbol: string }) => item.symbol);
    return symbols;
  } catch (error) {
    console.error('Error fetching watchlist symbols:', error);
    return [];
  }
}

export async function addToWatchlist(
  userId: string,
  symbol: string,
  company: string
): Promise<{ success: boolean; message: string }> {
  try {
    await connectToDatabase();

    const upperSymbol = symbol.toUpperCase().trim();

    // Check if already exists
    const existing = await Watchlist.findOne({ userId, symbol: upperSymbol });
    if (existing) {
      return { success: false, message: 'Symbol already in watchlist' };
    }

    // Add to watchlist
    await Watchlist.create({
      userId,
      symbol: upperSymbol,
      company: company.trim(),
      addedAt: new Date(),
    });

    return { success: true, message: 'Added to watchlist' };
  } catch (error) {
    console.error('Error adding to watchlist:', error);
    return { success: false, message: 'Failed to add to watchlist' };
  }
}

export async function removeFromWatchlist(
  userId: string,
  symbol: string
): Promise<{ success: boolean; message: string }> {
  try {
    await connectToDatabase();

    const upperSymbol = symbol.toUpperCase().trim();
    const result = await Watchlist.deleteOne({ userId, symbol: upperSymbol });

    if (result.deletedCount === 0) {
      return { success: false, message: 'Symbol not found in watchlist' };
    }

    return { success: true, message: 'Removed from watchlist' };
  } catch (error) {
    console.error('Error removing from watchlist:', error);
    return { success: false, message: 'Failed to remove from watchlist' };
  }
}
