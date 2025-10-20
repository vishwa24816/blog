
import { Footer } from '@/components/landing/footer';
import { Header } from '@/components/landing/header';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Check, DollarSign, Package, Banknote } from 'lucide-react';
import Image from 'next/image';

const offerings = [
  {
    title: 'Total Adressable Market (TAM)',
    description:
      'The total value of retail-accessible investment assets in India (stocks + crypto), as SIM targets Indian users.',
    features: [
      'Indian stocks cap: $5.32T (Statista, 2025). Retail share: ~25% (SEBI data via Reuters, 2025; retail drives 25-30% of equity volume).',
      'India crypto trading volume: ~$300B annualized (Chainalysis 2025 Index; India is no. 1 in adoption, i.e ~13% of APAC $2.36T).',
      'Retail share: 80% (high retail dominance in India crypto per CoinSwitch Q2 2025).',
      'Refined Value: $1.78T (conservative: $1.33T stocks retail + $0.45T crypto retail equivalent).',
    ],
    image: {
      src: 'https://picsum.photos/seed/platform/800/600',
      alt: 'Customizable trading platform dashboard',
      hint: 'customizable dashboard',
    },
  },
  {
    title: 'Serviceable Available Market (SAM)',
    description:
      "The combined market of retail stocks and crypto traders i.e 220M+ users with Indian retail investors i.e 110M+ Demat accounts, and the projected $805M algorithmic trading market as per Data.",
    features: [
      "India-specific retail algo/AI trading subset (SIM's core differentiator).",
      'Algo market: $1.15B (2025 est.; interpolated from IMARC $562M 2024 + 9.5% CAGR).',
      'Retail penetration: 70% (SEBI; 70% platforms lack AI)',
    ],
    image: {
      src: 'https://picsum.photos/seed/education/800/600',
      alt: 'A graph showing market share and growth',
      hint: 'market share graph',
    },
  },
  {
    title: 'Share Of Market (SOM)',
    description:
      'With a $80.5K revenue potential (0.01% of $805M in algo segment ; With a estimated power users 1,000 users by the year 1 at ₹10K average ( conservative side ) annual trade value × 0.4% fee ( with an estimate of users using our first live product i.e crypto exchange).',
    features: [
      'Realistic Year 1 capture of SAM via GTM (community/social).',
      'Formula: SOM = SAM × Market share target (0.001% conservative for new entrant).',
      'Cross-reference: Angel One and CoinDCX captured 0.05% SOM in Year 1 (Economic Times 2025).',
    ],
    image: {
      src: 'https://picsum.photos/seed/treasury/800/600',
      alt: 'A corporate executive analyzing financial charts',
      hint: 'corporate finance',
    },
  },
];

const businessModel = [
  {
    icon: <DollarSign className="h-8 w-8" />,
    title: 'Crypto Trading Fees',
    description:
      'We charge competitive maker/taker fees of 0.4% of traded value on spot and 0.04% of notional value in futures, with a 20% premium for orders executed via SIMBOT, reflecting the added value and convenience. But Don’t worry, 100% of the fees paid can be earned back.',
  },
  {
    icon: <Package className="h-8 w-8" />,
    title: 'SaaS Subscription',
    description:
      'An annual fee of ₹499 + GST for premium features, including access to our powerful No-Code Algo Flow builder, Bactester, and more',
  },
  {
    icon: <Banknote className="h-8 w-8" />,
    title: 'Future Monetization',
    description:
      'In Future, we plan to expand our offerings i.e making crypto cum stocks platform a reality so that we can earn brokerage fees for stocks, Futures & Options (F&O), and mutual funds, further diversifying our revenue streams.',
  },
];

const partnerBenefits = [
  'Innovative Technology',
  'Rapid Deployment',
  'Cost-Effectiveness',
  'Expert Support',
  'Scalable Solutions',
  'Enhanced User Engagement',
];

export default function BusinessPage() {
  return (
    <div className="bg-background text-foreground">
      <Header />
      <main className="container mx-auto px-4 md:px-6 py-12 md:py-24">
        <section className="text-center">
          <p className="font-headline text-primary font-semibold">For Business and Investors</p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mt-2">
            AI-Powered Solutions for You
          </h1>
          <p className="text-muted-foreground mt-4 max-w-3xl mx-auto">
            At SIM (Simulation Exchange), we believe that sophisticated
            investing should be accessible to everyone. In today's fast-paced
            financial landscape, traders face a myriad of challenges:
            fragmented platforms, complex interfaces, and the daunting task of
            mastering algorithmic strategies. We're here to change that. SIM is
            an AI-powered, all-in-one trading platform designed to democratize
            sophisticated investing, making it simple, intuitive, and
            ultimately, more profitable for our users.
          </p>
          <div className="relative w-full h-[400px] my-8">
            <Image
              src="https://picsum.photos/seed/business-meeting/1200/400"
              alt="Professional business meeting"
              fill
              style={{ objectFit: 'cover' }}
              className="mx-auto rounded-lg"
              data-ai-hint="business meeting"
              priority
            />
          </div>
        </section>

        <section className="mt-24 md:mt-32">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-headline">
              Market Opportunity & Growth
            </h2>
            <p className="text-muted-foreground mt-4 max-w-3xl mx-auto">
              We are strategically positioned at the intersection of three high-growth sectors, targeting a massive global market:
            </p>
          </div>
          <div className="space-y-20">
            {offerings.map((offering, index) => (
              <div
                key={offering.title}
                className={`grid md:grid-cols-2 gap-12 md:gap-16 items-center ${
                  index % 2 !== 0 ? 'md:grid-flow-col-dense' : ''
                }`}
              >
                <div
                  className={`${index % 2 !== 0 ? 'md:col-start-2' : ''}`}
                >
                  <h3 className="text-2xl md:text-3xl font-bold font-headline">
                    {offering.title}
                  </h3>
                  <p className="text-muted-foreground mt-4">
                    {offering.description}
                  </p>
                  <ul className="mt-6 space-y-4">
                    {offering.features.map((feature) => (
                      <li key={feature} className="flex items-start">
                        <Check className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                        <span className="text-muted-foreground">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div
                  className={`relative h-80 rounded-lg overflow-hidden ${
                    index % 2 !== 0 ? 'md:col-start-1' : ''
                  }`}
                >
                  <Image
                    src={offering.image.src}
                    alt={offering.image.alt}
                    fill
                    style={{ objectFit: 'cover' }}
                    data-ai-hint={offering.image.hint}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-24 md:mt-32">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-headline">
              And Why Now?
            </h2>
            <p className="text-muted-foreground mt-4 max-w-3xl mx-auto">
              There are 2 Major Shifts in this industry supporting the potential of this startup.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <ul className="space-y-4 text-muted-foreground list-disc list-inside">
              <li>
                <strong>The AI Revolution:</strong> AI Revolution is so versatile and so trending that people are now selling a pen saying it is AI Powered.
              </li>
              <li>
                <strong>The Democratization of Finance:</strong> Finance industry democratized today so much that startups are Lending P2P , Buying Stocks are commission free and more.
              </li>
            </ul>
          </div>
        </section>

        <section className="mt-24 md:mt-32">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-headline">
              Our Business Model
            </h2>
            <p className="text-muted-foreground mt-4 max-w-3xl mx-auto">
              SIM operates on a diversified and scalable revenue model designed for sustainable growth:
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {businessModel.map((item) => (
              <Card key={item.title} className="bg-card/50 backdrop-blur-sm border-border/50">
                <CardHeader>
                  <div className="bg-primary/10 text-primary p-3 rounded-full w-fit mb-4">
                    {item.icon}
                  </div>
                  <CardTitle>{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mt-24 md:mt-32">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-headline">
              Why Partner with SIM?
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-center">
            {partnerBenefits.map((benefit) => (
              <div
                key={benefit}
                className="bg-card p-4 rounded-lg flex items-center justify-center"
              >
                <p className="font-semibold">{benefit}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-24 md-mt-32 text-center bg-card p-8 rounded-lg">
          <h2 className="text-3xl font-bold font-headline">Get in Touch</h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Interested in learning more about how SIM can transform your
            business? Contact our business development team to schedule a demo
            and discuss your specific needs.
          </p>
          <div className="mt-8 flex gap-4 justify-center">
            <Button size="lg">Contact Sales</Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
