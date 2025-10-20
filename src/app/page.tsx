
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
import { Bot, Coins, Users } from 'lucide-react';

const heroImage = PlaceHolderImages.find(
  (image) => image.id === 'landing-hero'
);

const features = [
  {
    icon: <Bot className="h-10 w-10" />,
    title: 'Prompt Trading with SIMBOT',
    description:
      'Execute trades with simple language commands. Our Agentic AI makes complex strategies accessible to everyone.',
  },
  {
    icon: <Users className="h-10 w-10" />,
    title: 'Community & Professional Insights',
    description:
      'Connect with a community of traders and get insights from SEBI registered professionals with special verification tags.',
  },
  {
    icon: <Coins className="h-10 w-10" />,
    title: 'No-Code Algo Builder',
    description:
      'Create, backtest, and deploy automated trading strategies with our intuitive drag-and-drop builder. No coding required.',
  },
];

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
          <section className="mt-24 md:mt-32">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold">
                Why SIM?
              </h2>
              <p className="text-muted-foreground mt-4 max-w-3xl mx-auto">
                Today’s trading landscape is fragmented. SIM unifies your entire
                trading journey, from stocks and crypto to automated
                strategies and community insights, all powered by AI.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              {features.map((feature, index) => (
                <Card
                  key={index}
                  className="bg-card/50 backdrop-blur-sm border-border/50"
                >
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
              ))}
            </div>
          </section>
        </AnimatedSection>
        
        <AnimatedSection>
          <section className="mt-24 md:mt-32 grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold">
                The AI Revolution in Finance
              </h2>
              <p className="text-lg text-muted-foreground mt-4">
                Recent advancements in conversational AI have made tools like SIMBOT a reality. We're building an intuitive and powerful platform that was previously unimaginable, democratizing finance for a new generation of investors.
              </p>
              <ul className="list-disc list-inside mt-6 space-y-2 text-muted-foreground">
                <li>Proprietary AI core (SIMBOT)</li>
                <li>True all-in-one platform</li>
                <li>No-code algorithmic trading</li>
                <li>Simulated trading experience</li>
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
