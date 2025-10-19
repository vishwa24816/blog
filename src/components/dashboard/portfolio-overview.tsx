import { DollarSign, TrendingDown, TrendingUp } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import type { Holding } from '@/types';

type PortfolioOverviewProps = {
  holdings: Holding[];
};

export default function PortfolioOverview({ holdings }: PortfolioOverviewProps) {
  const totalValue = holdings.reduce(
    (acc, holding) => acc + holding.currentPrice * holding.shares,
    0
  );
  const totalCost = holdings.reduce(
    (acc, holding) => acc + holding.avgCost * holding.shares,
    0
  );

  const totalReturn = totalValue - totalCost;
  const totalReturnPercentage = (totalReturn / totalCost) * 100;

  // Mocked day's gain
  const dayGain = totalValue * 0.012;
  const dayGainPercentage = 1.2;

  const formatCurrency = (value: number) =>
    new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(value);

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Value</CardTitle>
          <DollarSign className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">
            {formatCurrency(totalValue)}
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Day's Gain</CardTitle>
          <TrendingUp className="h-4 w-4 text-green-500" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-green-600 dark:text-green-500">
            {formatCurrency(dayGain)}
          </div>
          <p className="text-xs text-muted-foreground">
            +{dayGainPercentage.toFixed(2)}%
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Return</CardTitle>
          {totalReturn >= 0 ? (
            <TrendingUp className="h-4 w-4 text-green-500" />
          ) : (
            <TrendingDown className="h-4 w-4 text-red-500" />
          )}
        </CardHeader>
        <CardContent>
          <div
            className={`text-2xl font-bold ${
              totalReturn >= 0
                ? 'text-green-600 dark:text-green-500'
                : 'text-red-600 dark:text-red-500'
            }`}
          >
            {formatCurrency(totalReturn)}
          </div>
          <p className="text-xs text-muted-foreground">
            {totalReturnPercentage.toFixed(2)}% All-time
          </p>
        </CardContent>
      </Card>
      <Card className="flex items-center justify-center bg-primary text-primary-foreground">
        <CardContent className="p-4 text-center">
            <button className="text-sm font-semibold">
                Simulate New Strategy
            </button>
        </CardContent>
      </Card>
    </div>
  );
}
