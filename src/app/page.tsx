
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
import { Coins, Ellipsis, ScanSearch, Users, Wallet } from 'lucide-react';
import { CyclingText } from '@/components/landing/cycling-text';
import { cn } from '@/lib/utils';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Link from 'next/link';

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
    src: 'https://lh3.googleusercontent.com/d/1HLi03bYCOFVBZWbG7N_1D_CUdzUyp93r',
    alt: 'A vibrant community of investors discussing trades.',
    hint: 'investor community',
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

export default function LandingPage() {
  return (
    <div className="bg-background text-foreground">
      <Header />
      <main className="container mx-auto px-4 md:px-6 py-12 md:py-24">
        <AnimatedSection>
          <section className="text-center">
            {heroImage && (
              <div className="relative w-full h-auto mb-8">
                <Image
                  src={heroImage.imageUrl}
                  alt={heroImage.description}
                  width={1200}
                  height={675}
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
            <p className="text-muted-foreground mt-4">
              SIM is an AI-powered, all-in-one trading platform that makes
              sophisticated investing simple, efficient, and profitable.
            </p>
            <div className="mt-8 flex gap-4 justify-center">
              <Button size="lg" asChild>
                <Link
                  href="https://simulationexchange.vercel.app/login"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Sign In
                </Link>
              </Button>
            </div>
          </section>
        </AnimatedSection>
        
        <AnimatedSection>
          <section className="mt-24 md:mt-32 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Scrolling is boring, but wait , listen to this story.
              <br />
              Once upon a time, there was a Gen Z scrolling social media just like how you are doing usually and found this
            </h2>
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
          </section>
        </AnimatedSection>

        <AnimatedSection>
          <section className="mt-24 md:mt-32 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Want to know one more thing? Another story for you
            </h2>
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
          </section>
        </AnimatedSection>

        <AnimatedSection>
          <section className="mt-24 md:mt-32 text-center">
            <h2 className="text-3xl md:text-4xl font-bold">
              Introducing SIM: The Intelligent Trading Terminal
            </h2>
            <p className="text-muted-foreground mt-4">
              That's where <strong>SIM (Simulation Exchange)</strong> comes in. We're an <strong>AI-powered, all-in-one trading platform</strong> designed to democratize sophisticated investing for everyone. Our mission is simple: to make trading simple, efficient, and even profitable, without that usual headaches.
            </p>
          </section>
        </AnimatedSection>
        
        <AnimatedSection>
          <section className="mt-24 md:mt-32">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold">
                But How SIM Makes Trading Simple (and Smart)
              </h2>
              <p className="text-muted-foreground mt-4">
                Today’s trading landscape is fragmented. SIM unifies your entire
                trading journey, from stocks and crypto to automated
                strategies, and community insights, all powered by AI.
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
        </AnimatedSection>
        
        <AnimatedSection>
          <section className="mt-24 md:mt-32 grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold">
                Why Now is the Perfect Time for SIM
              </h2>
              <p className="text-muted-foreground mt-4">
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
            <div className="relative rounded-lg overflow-hidden">
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
          </section>
        </AnimatedSection>

        <AnimatedSection>
          <section className="mt-24 md:mt-32 grid md:grid-cols-2 gap-16 items-center">
            <div className="text-left">
              <h2 className="text-3xl md:text-4xl font-bold">
                Our Competitive Edge: Unifying AI and Accessibility
              </h2>
              <p className="text-muted-foreground mt-4">
                While many trading platforms exist, none offer the unified, AI-driven experience that SIM provides. We're not just another trading app; we're building a truly intelligent ecosystem.
              </p>
              <p className="text-muted-foreground mt-4">
                  Our defensible moat lies in:
              </p>
              <CyclingText sentences={competitiveEdgeSentences} className="mt-8 !text-left !w-auto" />
              <p className="text-muted-foreground mt-8">
                  SIM is poised to revolutionize how individuals interact with financial markets. By combining intuitive design with powerful AI, we are not just building a trading platform; we are building the future of intelligent investing.
              </p>
            </div>
            <div className="relative rounded-lg overflow-hidden">
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
          </section>
        </AnimatedSection>

        <AnimatedSection>
          <section className="mt-24 md:mt-32 text-center">
            <h2 className="text-3xl md:text-4xl font-bold">
              Join the Waitlist
            </h2>
            <p className="text-muted-foreground mt-4">
              Ready to take the guesswork out of investing? Our private beta is
              launching soon. Sign up to be among the first to experience the future of trading.
            </p>
            <div className="mt-8 flex gap-4 justify-center">
              <Button size="lg" asChild>
                <Link
                  href="https://simulationexchange.vercel.app/login"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Sign Up Now
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link
                  href="https://forms.gle/NVpMwxqqgXU1ZjRi6"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Share Your Experience
                </Link>
              </Button>
            </div>
          </section>
        </AnimatedSection>
      </main>
      <Footer />
    </div>
  );
}
