
import { Footer } from '@/components/landing/footer';
import { Header } from '@/components/landing/header';
import { AnimatedSection } from '@/components/landing/animated-section';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Bot, Coins, Ellipsis, ScanSearch, Users, Wallet } from 'lucide-react';
import { CyclingText } from '@/components/landing/cycling-text';
import { cn } from '@/lib/utils';

const heroImage = PlaceHolderImages.find(
  (image) => image.id === 'landing-hero'
);

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

const cyclingSentences = [
  'A massive opportunity to unify the chaos.',
  'We built SIM — the first truly intelligent, all-in-one AI based trading platform',
  'That brings stocks, crypto, no-code algorithmic trading, and a vibrant investor community',
  'Together in one seamless experience.',
  'No more app-hopping.',
  'No more guesswork.',
  'No more gatekeeping.',
];

const competitiveEdgeSentences = [
    "Our **proprietary AI core (SIMBOT)**.",
    "Our commitment to being a **true all-in-one platform**.",
    "The **democratization of algorithmic trading** through our no-code builder.",
    "Simulated Trading experience for risk free and knowledgeable trading experience",
    "Community segment with Special tagging for professionals to give best investment advisory.",
    "Manual Crypto wallet management with Automation facility for transparent and better wallet management.",
    "A Colour Flexible Platform and more",
    "Last but not least, Full Entertainment and Flexibility."
]

const FeatureCard = ({ feature }: { feature: (typeof features)[0] }) => (
  <Card className="bg-card/50 backdrop-blur-sm border-border/50 h-full flex flex-col mx-4 w-[350px] flex-shrink-0">
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

export default function LandingPage() {
  return (
    <div className="bg-background text-foreground">
      <Header />
      <main className="container mx-auto px-4 md:px-6 py-12 md:py-24">
        <AnimatedSection>
          <section className="text-center">
            {heroImage && (
              <div className="relative w-full h-[400px] mb-8">
                <Image
                  src={heroImage.imageUrl}
                  alt={heroImage.description}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="mx-auto rounded-lg"
                  data-ai-hint={heroImage.imageHint}
                  priority
                />
              </div>
            )}

            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">
              The Future of Intelligent Investing is Here
            </h1>
            <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
              SIM is an AI-powered, all-in-one trading platform that makes
              sophisticated investing simple, efficient, and profitable.
            </p>
            <div className="mt-8 flex gap-4 justify-center">
              <Button size="lg">Get Started</Button>
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </div>
          </section>
        </AnimatedSection>
        
        <AnimatedSection>
          <section className="mt-24 md:mt-32 grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold">
                Let's face it
              </h2>
              <p className="text-lg text-muted-foreground mt-4">
                Navigating the world of trading can feel like trying to solve a Rubik's Cube blindfolded. You're juggling multiple apps, wrestling with clunky interfaces, and maybe even feeling left behind by the algorithmic revolution. If this sounds familiar, you're not alone. In fact, a staggering 70% of trading platforms are missing a huge opportunity by not fully leveraging AI and machine learning for a truly intuitive experience.
              </p>
            </div>
            <div className="relative h-80 rounded-lg overflow-hidden">
                <Image src="https://picsum.photos/seed/sad-person/600/400" alt="Frustrated person with a phone" fill objectFit="cover" data-ai-hint="sad person mobile" />
            </div>
          </section>
        </AnimatedSection>

        <AnimatedSection>
          <section className="mt-24 md:mt-32 text-center">
            <h2 className="text-3xl md:text-4xl font-bold">
              Introducing SIM: The Intelligent Trading Terminal
            </h2>
            <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">
              That's where <strong>SIM (Simulation Exchange)</strong> comes in. We're an <strong>AI-powered, all-in-one trading platform</strong> designed to democratize sophisticated investing for everyone. Our mission is simple: to make trading simple, efficient, and even profitable, without that usual headaches.
            </p>
          </section>
        </AnimatedSection>
        
        <AnimatedSection>
          <section className="mt-24 md:mt-32 text-center">
            <h2 className="text-3xl md:text-4xl font-bold">
              The Problem We're Solving (And Why It Matters?)
            </h2>
            <div className="text-lg text-muted-foreground mt-4 space-y-6">
              <p>
                Tired of bouncing between apps just to manage your stocks, crypto, and strategies? Don’t Know how to trade without risking your own money? Ever thought your crypto wallet from your crypto exchange is managed actually in a decentralised way? Ever felt difficult to use Algo Trading? Have you ever thought your broker or exchange is not just leveraging or optimizing your training experience with AI? You’re not alone.
              </p>
              <p>
                Today’s trading landscape is broken with fragmented tools, scattered data, and advanced features like algorithmic trading locked behind walls of code and complexity. It’s messy. It’s inefficient. And it’s costing everyday investors real opportunities.
              </p>
              <p className="font-semibold text-foreground">
                At <strong>SIM (Simulation Exchange)</strong>, we saw what others didn’t:
              </p>
            </div>
            
            <CyclingText sentences={cyclingSentences} className="mt-8" />

            <p className="text-lg text-muted-foreground mt-8 max-w-3xl mx-auto">
              Just smart, effortless, and powerful trading made for everyone. And now you can trade peacefully like never before because all your problem will be solved.
            </p>
          </section>
        </AnimatedSection>

        <AnimatedSection>
          <section className="mt-24 md:mt-32">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold">
                But How SIM Makes Trading Simple (and Smart)
              </h2>
              <p className="text-muted-foreground mt-4 max-w-3xl mx-auto">
                Today’s trading landscape is fragmented. SIM unifies your entire
                trading journey, from stocks and crypto to automated
                strategies, and community insights, all powered by AI.
              </p>
            </div>
            <div className="relative mt-12 w-full overflow-hidden h-[420px]">
                <div className="flex animate-marquee hover:[animation-play-state:paused]">
                    {[...features, ...features].map((feature, index) => (
                        <FeatureCard key={index} feature={feature} />
                    ))}
                </div>
            </div>
          </section>
        </AnimatedSection>
        
        <AnimatedSection>
          <section className="mt-24 md:mt-32 grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold">
                Why Now is the Perfect Time for SIM
              </h2>
              <p className="text-lg text-muted-foreground mt-4">
                The world is changing, and so is finance. We're perfectly positioned to thrive thanks to two major shifts:
              </p>
              <ul className="list-disc list-inside mt-6 space-y-4 text-muted-foreground">
                <li>
                  <strong>The AI Revolution:</strong> Recent advancements in conversational AI and natural language processing have made tools like SIMBOT a reality. We can now build a truly intuitive and powerful platform that was previously unimaginable.
                </li>
                <li>
                  <strong>The Democratization of Finance:</strong> A new generation of retail investors is demanding seamless, unified, and intelligent tools to navigate increasingly complex financial markets. Traditional platforms simply aren't meeting this demand, leaving a massive opportunity for innovation.
                </li>
              </ul>
            </div>
            <div className="relative h-80 rounded-lg overflow-hidden">
                <Image src="https://picsum.photos/seed/ai-finance/600/400" alt="AI in finance" fill objectFit="cover" data-ai-hint="AI finance" />
            </div>
          </section>
        </AnimatedSection>

        <AnimatedSection>
          <section className="mt-24 md:mt-32 text-center">
            <h2 className="text-3xl md:text-4xl font-bold">
              Our Competitive Edge: Unifying AI and Accessibility
            </h2>
            <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">
              While many trading platforms exist, none offer the unified, AI-driven experience that SIM provides. We're not just another trading app; we're building a truly intelligent ecosystem.
            </p>
            <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">
                Our defensible moat lies in:
            </p>
            <CyclingText sentences={competitiveEdgeSentences} className="mt-8" />
            <p className="text-lg text-muted-foreground mt-8 max-w-3xl mx-auto">
                SIM is poised to revolutionize how individuals interact with financial markets. By combining intuitive design with powerful AI, we are not just building a trading platform; we are building the future of intelligent investing.
            </p>
          </section>
        </AnimatedSection>

        <AnimatedSection>
          <section className="mt-24 md:mt-32 text-center">
            <h2 className="text-3xl md:text-4xl font-bold">
              Join the Waitlist
            </h2>
            <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
              Ready to take the guesswork out of investing? Our private beta is
              launching soon. Sign up to be among the first to experience the future of trading.
            </p>
            <div className="mt-8 flex gap-4 justify-center">
              <Button size="lg">Sign Up Now</Button>
            </div>
          </section>
        </AnimatedSection>
      </main>
      <Footer />
    </div>
  );
}

    

    