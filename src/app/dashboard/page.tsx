'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import AppHeader from '@/components/layout/app-header';
import PortfolioOverview from '@/components/dashboard/portfolio-overview';
import PortfolioChart from '@/components/dashboard/portfolio-chart';
import { HoldingsTable } from '@/components/dashboard/holdings-table';
import AiAnalystTool from '@/components/dashboard/ai-analyst-tool';
import MarketNews from '@/components/dashboard/market-news';

import { holdings, portfolioPerformance, marketNews } from '@/lib/data';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

export default function Dashboard() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <AppHeader title="Dashboard" />
      <main className="flex-1">
        <Carousel
          className="w-full h-full"
          opts={{
            loop: true,
          }}
        >
          <CarouselContent className="-ml-0">
            <CarouselItem className="pl-0">
              <div className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
                <PortfolioOverview holdings={holdings} />
                <HoldingsTable holdings={holdings} />
              </div>
            </CarouselItem>
            <CarouselItem className="pl-0">
              <div className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
                <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
                  <div className="xl:col-span-2">
                    <PortfolioChart data={portfolioPerformance} />
                  </div>
                  <div className="grid gap-4">
                    <MarketNews articles={marketNews} />
                    <AiAnalystTool holdings={holdings} />
                  </div>
                </div>
                 <HoldingsTable holdings={holdings} />
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </main>
    </div>
  );
}
