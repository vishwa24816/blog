import type {
  Holding,
  PortfolioPerformanceData,
  NewsArticle,
  User,
} from '@/types';

export const user: User = {
  name: 'Alex Doe',
  email: 'alex.doe@example.com',
  avatar: '/avatar.png',
};

export const holdings: Holding[] = [
  {
    ticker: 'AAPL',
    name: 'Apple Inc.',
    shares: 50,
    avgCost: 150.25,
    currentPrice: 172.5,
  },
  {
    ticker: 'GOOGL',
    name: 'Alphabet Inc.',
    shares: 20,
    avgCost: 2800.0,
    currentPrice: 2850.75,
  },
  {
    ticker: 'MSFT',
    name: 'Microsoft Corp.',
    shares: 30,
    avgCost: 300.5,
    currentPrice: 330.0,
  },
  {
    ticker: 'TSLA',
    name: 'Tesla, Inc.',
    shares: 15,
    avgCost: 700.0,
    currentPrice: 750.0,
  },
  {
    ticker: 'AMZN',
    name: 'Amazon.com, Inc.',
    shares: 10,
    avgCost: 3400.0,
    currentPrice: 3450.0,
  },
];

export const portfolioPerformance: PortfolioPerformanceData[] = [
  { month: 'Jan', value: 100000 },
  { month: 'Feb', value: 102500 },
  { month: 'Mar', value: 101000 },
  { month: 'Apr', value: 105000 },
  { month: 'May', value: 108500 },
  { month: 'Jun', value: 110200 },
  { month: 'Jul', value: 112300 },
];

export const marketNews: NewsArticle[] = [
  {
    id: '1',
    source: 'Bloomberg',
    headline: 'Federal Reserve Signals Potential Rate Hikes in Q3',
    summary:
      'The Federal Reserve has indicated that it may implement interest rate hikes sooner than expected to combat rising inflation.',
    url: '#',
    time: '2h ago',
  },
  {
    id: '2',
    source: 'Reuters',
    headline: 'Tech Stocks Rally on Strong Earnings Reports',
    summary:
      'Major technology companies reported better-than-expected earnings, leading to a significant rally in the tech sector.',
    url: '#',
    time: '4h ago',
  },
  {
    id: '3',
    source: 'Wall Street Journal',
    headline: 'Global Supply Chain Issues Continue to Impact Manufacturing',
    summary:
      'Ongoing disruptions in the global supply chain are causing delays and increasing costs for manufacturers worldwide.',
    url: '#',
    time: '1d ago',
  },
  {
    id: '4',
    source: 'Financial Times',
    headline: 'Oil Prices Surge Amid Geopolitical Tensions',
    summary:
      'Crude oil prices have reached a new high as geopolitical tensions in key oil-producing regions escalate.',
    url: '#',
    time: '1d ago',
  },
];
