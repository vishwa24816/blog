'use client';

import {
  Area,
  AreaChart,
  CartesianGrid,
  XAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  ChartConfig,
  ChartContainer,
  ChartTooltipContent,
} from '@/components/ui/chart';
import type { PortfolioPerformanceData } from '@/types';

const chartConfig = {
  value: {
    label: 'Portfolio Value',
    color: 'hsl(var(--primary))',
  },
} satisfies ChartConfig;

type PortfolioChartProps = {
  data: PortfolioPerformanceData[];
};

export default function PortfolioChart({ data }: PortfolioChartProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-headline">Portfolio Performance</CardTitle>
        <CardDescription>
          Your portfolio value over the last 6 months.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-[300px] w-full">
          <AreaChart
            data={data}
            margin={{
              top: 5,
              right: 20,
              left: -10,
              bottom: 0,
            }}
          >
            <CartesianGrid vertical={false} strokeDasharray="3 3" />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
            />
            <Tooltip
              cursor={{ fill: 'hsl(var(--accent) / 0.1)', stroke: 'hsl(var(--primary))' }}
              content={<ChartTooltipContent 
                formatter={(value) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value as number)}
                indicator="dot" 
              />}
            />
            <Area
              dataKey="value"
              type="natural"
              fill="hsl(var(--primary) / 0.2)"
              stroke="hsl(var(--primary))"
              stackId="a"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
