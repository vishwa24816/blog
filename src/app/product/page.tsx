
import { Footer } from '@/components/landing/footer';
import { Header } from '@/components/landing/header';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Bot, Coins, Ellipsis, ScanSearch, Users, Wallet } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

const features = [
  {
    icon: <Bot className="h-10 w-10" />,
    title: 'Prompt Trading with SIMBOT',
    description:
      'Imagine executing trades with simple language or voice commands, even on your favorite messaging apps. SIMBOT, our "Agentic AI for trading," eliminates manual entry errors and makes complex strategies accessible to everyone. It\'s like having a seasoned trader in your pocket!. Also SIMBOT will soon be available in call flow which makes sure you trade in a call.',
  },
  {
    icon: <Users className="h-10 w-10" />,
    title: 'Community & Professional Insights',
    description:
      'Nowadays, Scammers are more famous than SEBI registered Professionals creating identity, authenticity and trust issues. To Solve this, we have made a community segment where users can take trades, discuss, etc where SEBI Registered professionals get special tag for more importance.',
  },
  {
    icon: <Coins className="h-10 w-10" />,
    title: 'No-Code Algo Builder',
    description:
      "Want to automate your strategies but don't know how to code? Our visual, drag-and-drop builder (think n8n for trading) lets anyone create, backtest, and deploy automated trading strategies without writing a single line of code. This is truly democratizing algorithmic trading and more.",
  },
  {
    icon: <Wallet className="h-10 w-10" />,
    title: 'Multi Wallet management system',
    description:
      'Users can have 2 types of crypto wallets, Custodial ( as per FIU laws ) and Personal ( with user’s public key where users have the flexibility over which wallet to transact.',
  },
  {
    icon: <ScanSearch className="h-10 w-10" />,
    title: 'Prompt based Screening and Backtesting',
    description:
      'Our AI-powered screener cuts through market noise, analyzing technicals, fundamentals, and social sentiment to help you find actionable opportunities',
  },
  {
    icon: <Ellipsis className="h-10 w-10" />,
    title: 'And More',
    description:
      'And more solutions which are great, but you don’t need to waste your time reading them. You can experience them from the launch.',
  },
];

const FeatureCard = ({ feature }: { feature: (typeof features)[0] }) => (
  <Card className="bg-card/50 backdrop-blur-sm border-border/50 h-full flex flex-col">
    <CardHeader>
      <div className="bg-primary/10 text-primary p-3 rounded-full w-fit mb-4">
        {feature.icon}
      </div>
      <CardTitle>{feature.title}</CardTitle>
    </CardHeader>
    <CardContent>
      <CardDescription>{feature.description}</CardDescription>
    </CardContent>
  </Card>
);

export default function ProductPage() {
  return (
    <div className="bg-background text-foreground">
      <Header />
      <main className="container mx-auto px-4 md:px-6 py-12 md:py-24">
        <section>
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mt-2">
              Review The Product
            </h1>
            <p className="text-muted-foreground mt-4 max-w-3xl mx-auto">
              Today’s trading landscape is fragmented. SIM unifies your entire
              trading journey, from stocks and crypto to automated strategies,
              and community insights, all powered by AI.
            </p>
          </div>
          <div className="relative mt-12">
            <Carousel
              opts={{
                align: 'start',
                loop: true,
              }}
              className="w-full max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto"
            >
              <CarouselContent>
                {features.map((feature, index) => (
                  <CarouselItem
                    key={index}
                    className="sm:basis-1/2 lg:basis-1/3 p-4"
                  >
                    <div className="h-full">
                      <FeatureCard feature={feature} />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex" />
              <CarouselNext className="hidden md:flex" />
            </Carousel>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
