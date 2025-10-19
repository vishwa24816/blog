export type Holding = {
  ticker: string;
  name: string;
  shares: number;
  avgCost: number;
  currentPrice: number;
};

export type PortfolioPerformanceData = {
  month: string;
  value: number;
};

export type NewsArticle = {
  id: string;
  source: string;
  headline: string;
  summary: string;
  url: string;
  time: string;
};

export type User = {
  name: string;
  email: string;
  avatar: string;
};
