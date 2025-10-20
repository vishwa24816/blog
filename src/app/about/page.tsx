
import { Footer } from '@/components/landing/footer';
import { Header } from '@/components/landing/header';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Image from 'next/image';

const teamMembers = [
  {
    name: 'Vishwa Lingam',
    role: 'Founder & CEO',
    avatarUrl: 'https://picsum.photos/seed/ceo/200/200',
    bio: 'CMA Inter qualified professional with a year of experience in Fintech has overviewed the  entire Fintech space, especially in Product Operations,  management and Equity Research perspective , I understand  how the Finance industry transforming to Fintech Industry  but still lack the leverage of AI and hence I am passionate to furthermore contribute by applying  my knowledge and skills in AI to make the world trade  and invest with the leverage of AI.',
  },
];

export default function AboutPage() {
  return (
    <div className="bg-background text-foreground">
      <Header />
      <main className="container mx-auto px-4 md:px-6 py-12 md:py-24">
        <section className="text-center">
          <p className="font-headline text-primary font-semibold">ABOUT US</p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mt-2">
            We are not just building a trading platform, we are building the
            future of intelligent investing.
          </h1>
          <p className="text-muted-foreground mt-4 max-w-3xl mx-auto">
            SIM is an AI-powered, all-in-one trading platform designed to
            democratize sophisticated investing for everyone.
          </p>
          <div className="relative w-full h-[400px] my-8">
            <Image
              src="https://picsum.photos/seed/teamwork/1200/400"
              alt="Team working together"
              fill
              style={{ objectFit: 'cover' }}
              className="mx-auto rounded-lg"
              data-ai-hint="teamwork collaboration"
              priority
            />
          </div>
        </section>

        <section className="mt-24 md:mt-32 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold font-headline">
              Our Mission
            </h2>
            <p className="text-muted-foreground mt-4">
              Our mission is to empower individuals to achieve financial
              independence by providing intuitive, intelligent, and accessible
              trading tools. We believe that everyone, regardless of their
              experience level, deserves access to the same powerful resources
              that were once reserved for financial institutions. We’re here to
              break down barriers, simplify complexity, and create a level
              playing field for all investors.
            </p>
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold font-headline">
              Our Vision
            </h2>
            <p className="text-muted-foreground mt-4">
              We envision a world where investing is not intimidating but
              empowering. A world where technology works for the investor, not
              against them. We aim to be the most trusted and comprehensive
              platform for retail investors, creating a global community of
              informed, confident, and successful traders who are in control of
              their financial futures.
            </p>
          </div>
        </section>

        <section className="mt-24 md:mt-32">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-headline">
              Our Story
            </h2>
          </div>
          <div className="max-w-4xl mx-auto space-y-6 text-muted-foreground text-left">
            <p>
              SIM (Simulation Exchange) was born from a simple but powerful
              observation: the trading world was a mess. As passionate traders
              ourselves, we were frustrated by the fragmented landscape of tools
              and platforms. We were juggling multiple apps for stocks, crypto,
              and market analysis, wrestling with clunky interfaces, and feeling
              like the most powerful tools—like algorithmic trading—were locked
              away behind a wall of code and complexity.
            </p>
            <p>
              We saw investors paying hefty fees for so-called "expert" advice
              that often underperformed the market. We saw a gap between the
              capabilities of AI and its practical application in retail
              investing. And we saw a massive opportunity to unify the chaos.
            </p>
            <p>
              So, we built SIM. We started with a clear goal: to create the
              first truly intelligent, all-in-one platform that brings stocks,
              crypto, no-code algorithmic trading, and a vibrant investor
              community together in one seamless experience. No more
              app-hopping. No more guesswork. No more gatekeeping. Just smart,
              effortless, and powerful trading for everyone.
            </p>
          </div>
        </section>

        <section className="mt-24 md:mt-32">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-headline">
              Our Team
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              We are a diverse team of builders, innovators, and traders united
              by a single mission.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            {teamMembers.map((member) => (
              <Card key={member.name} className="text-center">
                <CardHeader>
                  <Avatar className="w-24 h-24 mx-auto mb-4">
                    <AvatarImage src={member.avatarUrl} alt={member.name} />
                    <AvatarFallback>
                      {member.name
                        .split(' ')
                        .map((n) => n[0])
                        .join('')}
                    </AvatarFallback>
                  </Avatar>
                  <CardTitle>{member.name}</CardTitle>
                  <p className="text-primary font-semibold">{member.role}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mt-24 md:mt-32 text-center bg-card p-8 rounded-lg">
          <h2 className="text-3xl font-bold font-headline">Join Us</h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Be part of a community that’s shaping the future of finance.
            Whether you’re a seasoned trader or just starting out, SIM has the
            tools you need to succeed.
          </p>
          <div className="mt-8 flex gap-4 justify-center">
            <Button size="lg">Join the Waitlist</Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
