
import { Footer } from '@/components/landing/footer';
import { Header } from '@/components/landing/header';
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
import { Coins, Ellipsis, Rocket, ScanSearch, Wallet } from 'lucide-react';
import { CyclingText } from '@/components/landing/cycling-text';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Link from 'next/link';
import { AnimatedSection } from '@/components/landing/animated-section';

const heroImage = PlaceHolderImages.find(
  (image) => image.id === 'landing-hero'
);

const features = [
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
    title: 'Prompt based Trading, Screening and Backtesting',
    description:
      "Our AI-powered screener cuts through market noise, analyzing technicals, fundamentals, and social sentiment to help you find actionable opportunities. Trading must be as easy as using Whatsapp, ChatGPT, or even a smart band. That's why we brought MCP and AI integration for Trading",
  },
  {
    icon: <Ellipsis className="h-10 w-10" />,
    title: 'And More',
    description:
      'And more solutions which are great, but you don’t need to waste your time reading them. You can experience them from the launch.',
  },
];

const competitiveEdgeSentences = [
    "Our proprietary AI core (SIMBOT).",
    "Our commitment to being a true all-in-one platform.",
    "The democratization of algorithmic trading through our no-code builder.",
    "Simulated Trading experience for risk free and knowledgeable trading experience",
    "Community segment with Special tagging for professionals to give best investment advisory.",
    "Manual Crypto wallet management with Automation facility for transparent and better wallet management.",
    "A Colour Flexible Platform and more",
    "Last but not least, Full Entertainment and Flexibility."
]

const storyImages = [
  {
    src: 'https://lh3.googleusercontent.com/d/1RDjiavEQiUOzn9INIejVqnqq2TGJgxJ6',
    alt: 'A frustrated trader looking at multiple screens.',
    hint: 'frustrated trader',
  },
  {
    src: 'https://lh3.googleusercontent.com/d/1AjcnFRfWD0kNO7Ind2UleKQAzGOh-9Gw',
    alt: 'A simplified, unified trading dashboard on a laptop.',
    hint: 'clean dashboard',
  },
  {
    src: 'https://lh3.googleusercontent.com/d/1tJ-1u32vtQXecbEth12T1YywIZuXC_9B',
    alt: 'new image',
    hint: 'new image hint',
  },
  {
    src: 'https://lh3.googleusercontent.com/d/1CBc6XF134NCQ0INI0PBSogSbqi4wDKXa',
    alt: 'A person easily using a no-code algo builder.',
    hint: 'visual programming',
  },
  {
    src: 'https://lh3.googleusercontent.com/d/1WlApkDM4xGJKGwy7AHLyMx9H0z7g0sJf',
    alt: 'A person looking at a screen with lots of data.',
    hint: 'data analysis',
  },
  {
    src: 'https://lh3.googleusercontent.com/d/1DrV6gx-GBwxdvw2KPqdJhy8CFhxr5DGe',
    alt: 'A person looking at a screen with lots of data.',
    hint: 'data analysis',
  },
  {
    src: 'https://lh3.googleusercontent.com/d/1Hgi6hUP60Hdn6LI8hdGggVyJKOP2YVmG',
    alt: 'A person looking at a screen with lots of data.',
    hint: 'data analysis',
  },
  {
    src: 'https://lh3.googleusercontent.com/d/1Sf7GFUTzy_p5e09i46eYdDfwORFa4cmo',
    alt: 'A person looking at a screen with lots of data.',
    hint: 'data analysis',
  },
  {
    src: 'https://lh3.googleusercontent.com/d/1fVpGTKhqEcvR7OcuTmqdB0N7IVVMWUmB',
    alt: 'A diagram showing the various features of the SIM platform.',
    hint: 'features diagram',
  },
  {
    src: 'https://lh3.googleusercontent.com/d/1gnSi8BmgimjhU683OWzIhYmfKbDdNTfs',
    alt: 'A diagram showing the various features of the SIM platform.',
    hint: 'features diagram',
  },
  {
    src: 'https://lh3.googleusercontent.com/d/11c-sLIFDo3UF4c3LJTWYw4Lilv-sq5OY',
    alt: 'A diagram showing the various features of the SIM platform.',
    hint: 'features diagram',
  },
  {
    src: 'https://lh3.googleusercontent.com/d/1XKDde3qXnijPXkblUc_XULJU5hGJOrOn',
    alt: 'A diagram showing the various features of the SIM platform.',
    hint: 'features diagram'
  },
];

const secondStoryImages = [
  {
    src: 'https://lh3.googleusercontent.com/d/1XUubsdyY0ezLJjLTjpcZmNa7bAd3HKPw',
    alt: 'A frustrated trader looking at multiple screens.',
    hint: 'frustrated trader',
  },
  {
    src: 'https://lh3.googleusercontent.com/d/1P6y6L1GsJb5sfW9HaNvVEP0DuUQPJa15',
    alt: 'A simplified, unified trading dashboard on a laptop.',
    hint: 'clean dashboard',
  },
  {
    src: 'https://lh3.googleusercontent.com/d/1oHT-nE8vTCKlWLJoUeIk2zlxYrNPCq5u',
    alt: 'A person easily using a no-code algo builder.',
    hint: 'visual programming',
  },
  {
    src: 'https://lh3.googleusercontent.com/d/1H1c68oHHzIRq_pPGXY9TkCNrkNv-jIat',
    alt: 'A happy and confident investor checking their portfolio.',
    hint: 'confident investor',
  },
  {
    src: 'https://lh3.googleusercontent.com/d/1XKDde3qXnijPXkblUc_XULJU5hGJOrOn',
    alt: 'A diagram showing the various features of the SIM platform.',
    hint: 'features diagram'
  }
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

const sections = [
  { id: 'hero', color: '#3498db' },
  { id: 'story1', color: '#27ae60' },
  { id: 'story2', color: '#e74c3c' },
  { id: 'intro', color: '#e67e22' },
  { id: 'features', color: '#9b59b6' },
  { id: 'why-now', color: '#34495e' },
  { id: 'competitive-edge', color: '#1abc9c' },
  { id: 'waitlist', color: '#f1c40f' },
];

export default function LandingPage() {
  return (
    <div className="bg-transparent text-foreground">
      <Header />
      <main className="container mx-auto px-4 md:px-6">
        <AnimatedSection id="hero">
          <section className="py-12 md:py-24 min-h-screen flex items-center text-center">
            <div className="w-full max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-base font-medium mb-8">
                <Rocket className="w-5 h-5" />
                The Simulation is Loading...
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter">
                The Future of
                <br />
                <span className="bg-gradient-to-r from-chart-2 via-chart-3 to-chart-4 bg-clip-text text-transparent">
                  Intelligent Investing
                </span>
              </h1>
              <p className="text-muted-foreground mt-6 text-lg md:text-xl max-w-2xl mx-auto">
                SIM is an AI-powered trading platform that makes
                sophisticated investing simple, efficient, and profitable.
              </p>
              <div className="mt-8">
              </div>
            </div>
          </section>
        </AnimatedSection>

        <AnimatedSection id="story1">
          <section
            className="py-24 md:py-32 min-h-screen flex items-center"
          >
            <div className="w-full grid md:grid-cols-2 gap-16 items-center">
               <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-8 text-left">
                  Scrolling is boring, but wait , listen to this story.
                  <br />
                  <br />
                  Once upon a time, there was a Gen Z scrolling social media just
                  like how you are doing usually and found this
                </h3>
              </div>
              <Carousel
                opts={{
                  align: 'start',
                  loop: true,
                }}
                className="w-full max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto"
              >
                <CarouselContent>
                  {storyImages.map((image, index) => (
                    <CarouselItem key={index}>
                      <div className="relative w-full aspect-video">
                        <Image
                          src={image.src}
                          alt={image.alt}
                          fill
                          className="rounded-lg object-contain"
                          data-ai-hint={image.hint}
                          unoptimized={image.src.includes('googleusercontent')}
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="hidden md:flex" />
                <CarouselNext className="hidden md:flex" />
              </Carousel>
            </div>
          </section>
        </AnimatedSection>
        
        <AnimatedSection id="story2">
          <section
            className="py-24 md:py-32 min-h-screen flex items-center"
          >
            <div className="w-full grid md:grid-cols-2 gap-16 items-center">
              <Carousel
                opts={{
                  align: 'start',
                  loop: true,
                }}
                className="w-full max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto"
              >
                <CarouselContent>
                  {secondStoryImages.map((image, index) => (
                    <CarouselItem key={index}>
                      <div className="relative w-full aspect-video">
                        <Image
                          src={image.src}
                          alt={image.alt}
                          fill
                          className="rounded-lg object-contain"
                          data-ai-hint={image.hint}
                          unoptimized={image.src.includes('googleusercontent')}
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="hidden md:flex" />
                <CarouselNext className="hidden md:flex" />
              </Carousel>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-8 text-right">
                  Want to know one more thing? Another story for you
                </h3>
              </div>
            </div>
          </section>
        </AnimatedSection>

        <AnimatedSection id="intro">
          <section
            className="py-24 md:py-32 min-h-screen flex items-center text-center"
          >
            <div className="w-full">
              <h2 className="text-3xl md:text-4xl font-bold">
                Introducing SIM: The Intelligent Trading Terminal
              </h2>
              <p className="text-muted-foreground mt-4">
                That's where <strong>SIM (Simulation Exchange)</strong> comes
                in. We're an <strong>AI-powered, all-in-one trading platform</strong>{' '}
                designed to democratize sophisticated investing for everyone. Our
                mission is simple: to make trading simple, efficient, and even
                profitable, without that usual headaches.
              </p>
            </div>
          </section>
        </AnimatedSection>
        
        <AnimatedSection id="features">
          <section
            className="py-24 md:py-32 min-h-screen flex items-center"
          >
            <div className="w-full">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold">
                  But How SIM Makes Trading Simple (and Smart)
                </h2>
                <p className="text-muted-foreground mt-4 max-w-3xl mx-auto">
                  Today’s trading landscape is fragmented. SIM unifies your
                  entire trading journey, from stocks and crypto to automated
                  strategies, and community insights, all powered by AI.
                </p>
              </div>
              <Carousel
                opts={{ align: 'start' }}
                className="w-full max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto"
              >
                <CarouselContent>
                  {features.map((feature, index) => (
                    <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                      <div className="p-1 h-full">
                         <FeatureCard feature={feature} />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          </section>
        </AnimatedSection>
        
        <AnimatedSection id="why-now">
          <section
            className="py-24 md:py-32 min-h-screen flex items-center"
          >
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold">
                  Why Now is the Perfect Time for SIM
                </h2>
                <p className="text-muted-foreground mt-4">
                  The world is changing, and so is finance. We're perfectly
                  positioned to thrive thanks to two major shifts:
                </p>
                <ul className="list-disc list-inside mt-6 space-y-4 text-muted-foreground">
                  <li>
                    <strong>The AI Revolution:</strong> Recent advancements in
                    conversational AI and natural language processing have made
                    tools like SIMBOT a reality. We can now build a truly
                    intuitive and powerful platform that was previously
                    unimaginable.
                  </li>
                  <li>
                    <strong>The Democratization of Finance:</strong> A new
                    generation of retail investors is demanding seamless,
                    unified, and intelligent tools to navigate increasingly
                    complex financial markets. Traditional platforms simply
                    aren't meeting this demand, leaving a massive opportunity for
                    innovation.
                  </li>
                </ul>
              </div>
              <div className="relative rounded-lg overflow-hidden mt-8 md:mt-0">
                <Image
                  src="https://lh3.googleusercontent.com/d/1VNAwNdBxAoVA-ceq159mR5cN9m-C8lEy"
                  alt="AI in finance"
                  width={860}
                  height={484}
                  unoptimized
                  className="w-full h-auto object-cover"
                  data-ai-hint="AI finance"
                />
              </div>
            </div>
          </section>
        </AnimatedSection>
        
        <AnimatedSection id="competitive-edge">
          <section
            className="py-24 md:py-32 min-h-screen flex items-center"
          >
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="text-left md:order-2">
                <h2 className="text-3xl md:text-4xl font-bold">
                  Our Competitive Edge: Unifying AI and Accessibility
                </h2>
                <p className="text-muted-foreground mt-4">
                  While many trading platforms exist, none offer the unified,
                  AI-driven experience that SIM provides. We're not just another
                  trading app; we're building a truly intelligent ecosystem.
                </p>
                <p className="text-muted-foreground mt-4">
                  Our defensible moat lies in:
                </p>
                <CyclingText
                  sentences={competitiveEdgeSentences}
                  className="mt-8 !text-left !w-auto"
                />
                <p className="text-muted-foreground mt-8">
                  SIM is poised to revolutionize how individuals interact with
                  financial markets. By combining intuitive design with powerful
                  AI, we are not just building a trading platform; we are
                  building the future of intelligent investing.
                </p>
              </div>
              <div className="relative rounded-lg overflow-hidden mt-8 md:mt-0 md:order-1">
                <Image
                  src="https://lh3.googleusercontent.com/d/1jw5TmqKRiNRfcVNM-lOxKXzC6YYYvN30"
                  alt="Competitive edge diagram"
                  width={960}
                  height={540}
                  unoptimized
                  className="w-full h-auto object-cover"
                  data-ai-hint="competitive advantage"
                />
              </div>
            </div>
          </section>
        </AnimatedSection>

        <AnimatedSection id="waitlist">
          <section
            className="py-24 md:py-32 min-h-screen flex items-center text-center"
          >
            <div className="w-full">
              <h2 className="text-3xl md:text-4xl font-bold">
                Join the Waitlist
              </h2>
              <p className="text-muted-foreground mt-4">
                Ready to take the guesswork out of investing? Our private beta
                is launching soon. Sign up to be among the first to experience
                the future of trading.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link
                    href="https://simulationexchange.vercel.app/login"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Get Started
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link
                    href="https://simulationexchange.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Experience The Future of Trading and Investing
                  </Link>
                </Button>
              </div>
            </div>
          </section>
        </AnimatedSection>
      </main>
      <Footer />
    </div>
  );
}
