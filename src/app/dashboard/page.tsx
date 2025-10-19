import { holdings, portfolioPerformance, marketNews } from '@/lib/data';
import AppHeader from '@/components/layout/app-header';
import PortfolioOverview from '@/components/dashboard/portfolio-overview';
import PortfolioChart from '@/components/dashboard/portfolio-chart';
import HoldingsTable from '@/components/dashboard/holdings-table';
import MarketNews from '@/components/dashboard/market-news';
import AiAnalystTool from '@/components/dashboard/ai-analyst-tool';

export default function DashboardPage() {
  return (
    <>
      <AppHeader title="Dashboard" />
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <PortfolioOverview holdings={holdings} />
        <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
          <div className="space-y-4 xl:col-span-2">
            <PortfolioChart data={portfolioPerformance} />
            <HoldingsTable holdings={holdings} />
          </div>
          <div className="space-y-4">
            <MarketNews articles={marketNews} />
            <AiAnalystTool holdings={holdings} />
          </div>
        </div>
      </main>
    </>
  );
}
