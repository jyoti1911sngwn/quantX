import TradingViewWidget from "@/components/TradingViewWidget"
import { Button } from "@/components/ui/button"
import { MARKET_DATA_WIDGET_CONFIG, MARKET_OVERVIEW_WIDGET_CONFIG, TOP_STORIES_WIDGET_CONFIG } from "@/lib/constants"

const Home = () => {
  const scriptURL = `https://s3.tradingview.com/external-embedding/embed-widget-`
  return (
    <div className="flex min-h-screen home-wrapper">
      <section className="grid w-full gap-8 home-section">
        <div className="h-full md:col-span-1 xl:col-span-1">
          <TradingViewWidget
          title="Market Overview"
          scriptUrl={`${scriptURL}market-overview.js`}
          config={
            MARKET_OVERVIEW_WIDGET_CONFIG
          }
          height={600}
          className="custom-chart"
          />
        </div>
        <div className="h-full md-col-span xl:col-span-2">
          <TradingViewWidget
          title="Stock Overview"
          scriptUrl={`${scriptURL}stock-heatmap.js`}
          config={
            MARKET_OVERVIEW_WIDGET_CONFIG
          }
          height={600}
          className="custom-chart"
          />
        </div>
      </section>
      <section className="grid w-full gap-8 home-section">
        <div className="h-full md:col-span-1 xl:col-span-1">
          <TradingViewWidget
          title="Market Overview"
          scriptUrl={`${scriptURL}timeline.js`}
          config={
            TOP_STORIES_WIDGET_CONFIG
          }
          height={600}
          className="custom-chart"
          />
        </div>
        <div className="h-full md-col-span xl:col-span-2">
          <TradingViewWidget
          title="Stock Overview"
          scriptUrl={`${scriptURL}market-quotes.js`}
          config={
            MARKET_DATA_WIDGET_CONFIG
          }
          height={600}
          className="custom-chart"
          />
        </div>
      </section>
    </div>
  )
}

export default Home
