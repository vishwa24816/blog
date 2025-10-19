import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from '@/components/ui/table';
import { Card, CardContent } from '@/components/ui/card';
import { TrendingUp, TrendingDown } from 'lucide-react';
import type { Holding } from '@/types';

type HoldingsTableProps = {
  holdings: Holding[];
};

export function HoldingsTable({ holdings }: HoldingsTableProps) {
  const formatCurrency = (value: number) =>
    new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(value);

  return (
    <Card>
      <CardContent className="p-0">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Ticker</TableHead>
              <TableHead className="hidden md:table-cell">Name</TableHead>
              <TableHead className="text-right">Shares</TableHead>
              <TableHead className="text-right hidden sm:table-cell">
                Avg. Cost
              </TableHead>
              <TableHead className="text-right">Price</TableHead>
              <TableHead className="text-right">Value</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {holdings.map((holding) => {
              const value = holding.shares * holding.currentPrice;
              const isUp = holding.currentPrice > holding.avgCost;

              return (
                <TableRow key={holding.ticker}>
                  <TableCell className="font-medium">
                    {holding.ticker}
                  </TableCell>
                  <TableCell className="hidden md:table-cell">
                    {holding.name}
                  </TableCell>
                  <TableCell className="text-right">{holding.shares}</TableCell>
                  <TableCell className="text-right hidden sm:table-cell">
                    {formatCurrency(holding.avgCost)}
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex items-center justify-end gap-2">
                      <span>{formatCurrency(holding.currentPrice)}</span>
                      {isUp ? (
                        <TrendingUp className="h-4 w-4 text-green-500" />
                      ) : (
                        <TrendingDown className="h-4 w-4 text-red-500" />
                      )}
                    </div>
                  </TableCell>
                  <TableCell className="text-right font-semibold">
                    {formatCurrency(value)}
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
