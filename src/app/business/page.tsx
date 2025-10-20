
import { Footer } from '@/components/landing/footer';
import { Header } from '@/components/landing/header';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Check } from 'lucide-react';
import Image from 'next/image';

const offerings = [
  {
    title: 'White-Label Trading Platform',
    description:
      'Launch your own branded trading service without the cost and complexity of building from scratch. Our white-label solution is a fully customizable, turnkey platform that integrates seamlessly with your existing brand and infrastructure.',
    features: [
      'Fully customizable branding and UI',
      'Multi-asset support (stocks, crypto, etc.)',
      'AI-powered analytics and tools (SIMBOT)',
      'Secure, scalable, and reliable infrastructure',
    ],
    image: {
      src: 'https://picsum.photos/seed/platform/800/600',
      alt: 'Customizable trading platform dashboard',
      hint: 'customizable dashboard',
    },
  },
  {
    title: 'Educational Partnerships',
    description:
      'Bring real-world trading and investment education to the classroom. We partner with universities, colleges, and training institutions to provide students with a safe, simulated trading environment, equipped with professional-grade tools.',
    features: [
      'Risk-free simulated trading accounts',
      'Access to real-time market data and analysis',
      'Curriculum support and guest lectures',
      'Student performance tracking and analytics',
    ],
    image: {
      src: 'https://picsum.photos/seed/education/800/600',
      alt: 'Students in a modern classroom learning about finance',
      hint: 'finance classroom',
    },
  },
  {
    title: 'Corporate Treasury Solutions',
    description:
      'Optimize your corporate treasury strategy with our advanced AI-driven analytics and portfolio management tools. We help businesses manage cash, hedge risks, and generate returns on corporate assets with greater efficiency and insight.',
    features: [
      'AI-powered cash flow forecasting',
      'Automated risk management strategies',
      'Multi-asset portfolio optimization',
      'Secure and compliant transaction environment',
    ],
    image: {
      src: 'https://picsum.photos/seed/treasury/800/600',
      alt: 'A corporate executive analyzing financial charts',
      hint: 'corporate finance',
    },
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
          <p className="font-headline text-primary font-semibold">FOR BUSINESS</p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mt-2">
            AI-Powered Solutions for Your Enterprise
          </h1>
          <p className="text-muted-foreground mt-4 max-w-3xl mx-auto">
            Welcome to SIM for Business, where we empower financial
            institutions, educational organizations, and corporate partners
            with our cutting-edge, AI-powered trading and investment solutions.
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
              Our B2B Offerings
            </h2>
            <p className="text-muted-foreground mt-4 max-w-3xl mx-auto">
              We provide a suite of versatile solutions designed to meet the
              unique needs of our business clients.
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

        <section className="mt-24 md:mt-32 text-center bg-card p-8 rounded-lg">
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
