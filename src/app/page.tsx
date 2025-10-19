import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Header } from '@/components/landing/header';
import { Footer } from '@/components/landing/footer';
import { HoldingsTable } from '@/components/dashboard/holdings-table';
import { holdings } from '@/lib/data';

const heroImage = PlaceHolderImages.find(
  (image) => image.id === 'landing-hero'
);
const spongebobImage = PlaceHolderImages.find(
  (image) => image.id === 'spongebob'
);
const bearsImage = PlaceHolderImages.find((image) => image.id === 'bears');
const memesImage = PlaceHolderImages.find((image) => image.id === 'memes');
const logo = PlaceHolderImages.find((image) => image.id === 'logo-color');

export default function LandingPage() {
  return (
    <div className="bg-background text-foreground">
      <Header />
      <main className="container mx-auto px-4 md:px-6 py-12 md:py-24">
        <section className="text-center">
          {heroImage && (
            <Image
              src={heroImage.imageUrl}
              alt={heroImage.description}
              width={1200}
              height={400}
              className="mx-auto rounded-lg"
              data-ai-hint={heroImage.imageHint}
            />
          )}
          {logo && (
            <Image
              src={logo.imageUrl}
              alt={logo.description}
              width={100}
              height={100}
              className="mx-auto mt-[-50px] bg-background p-2 rounded-full"
            />
          )}
          <h1 className="text-4xl md:text-5xl font-bold mt-4">
            SIM - Your AI-Powered Path to Smarter Investing
          </h1>
          <p className="text-lg text-muted-foreground mt-4">
            Authored by SIM Team | 2 days ago
          </p>
        </section>

        <section className="mt-16">
          <p className="text-lg leading-relaxed">
            Welcome to the inaugural post of the SIM blog! We're thrilled to
            launch this platform where we'll share insights, updates, and discussions
            about the future of investing. At SIM, we believe in empowering
            investors with powerful, AI-driven tools to navigate the complexities
            of the market with confidence. Our mission is to democratize access
            to sophisticated investment analysis, making it easier for everyone to
            achieve their financial goals. Join us on this journey as we explore
            the cutting edge of financial technology and share our vision for a
            smarter, more accessible investing landscape.
          </p>
        </section>

        <section className="mt-16">
          <h2 className="text-3xl font-bold">
            Introducing SIM: The Intelligent Investing Assistant
          </h2>
          <p className="text-lg mt-4 leading-relaxed">
            SIM is more than just a portfolio tracker. It's a comprehensive
            investment assistant designed to give you a clear, real-time picture
            of your financial assets. By leveraging advanced AI, SIM provides
            personalized insights, risk analysis, and performance tracking, all
            tailored to your unique investment style. Whether you're a seasoned
            investor or just starting, SIM offers the tools you need to make
            informed decisions and stay ahead of the curve.
          </p>
        </section>

        <section className="mt-16">
          <h2 className="text-3xl font-bold">
            How SIM Puts You in Control of Your Financial Future
          </h2>
          <p className="text-lg mt-4 leading-relaxed">
            "Financial freedom is a journey, not a destination." - We designed
            SIM with this philosophy at its core. Our platform helps you
            understand the 'why' behind your portfolio's performance. By
            simulating different market scenarios and analyzing your holdings
            against various risk factors, SIM gives you the foresight to adjust
            your strategy proactively. This isn't about predicting the market;
-           it's about understanding your exposure and making decisions that
            align with your long-term goals.
          </p>
          <p className="text-lg mt-4 leading-relaxed">
            Our platform provides a holistic view of your investments, breaking
            down complex data into actionable insights. With SIM, you can:
          </p>
          <ul className="list-disc list-inside mt-4 text-lg space-y-2">
            <li>
              Gain a clear understanding of your portfolio's risk exposure.
            </li>
            <li>
              Simulate how your investments might perform under different market
              conditions.
            </li>
            <li>
              Receive personalized alerts and recommendations based on your
              goals.
            </li>
            <li>
              Track your performance against benchmarks and identify
              opportunities for growth.
            </li>
            <li>
              Access institutional-grade analytics, simplified for every
              investor.
            </li>
          </ul>
        </section>

        {spongebobImage && (
          <section className="mt-16">
            <Image
              src={spongebobImage.imageUrl}
              alt={spongebobImage.description}
              width={800}
              height={450}
              className="mx-auto rounded-lg"
              data-ai-hint={spongebobImage.imageHint}
            />
          </section>
        )}

        <section className="mt-16">
          <h2 className="text-3xl font-bold">
            But How Does SIM Make Trading Simple (and Stress-Free)?
          </h2>
          <p className="text-lg mt-4 leading-relaxed">
            At its core, SIM is built on a few simple principles designed to
            demystify the investment process:
          </p>
          <ul className="list-disc list-inside mt-4 text-lg space-y-2">
            <li>
              <strong>Clarity Through AI:</strong> Our AI algorithms analyze
              your portfolio and provide straightforward, easy-to-understand
              insights. No more jargon, just clear, actionable advice. We tell
              you what's working, what's not, and why, so you're always in the
              know.
            </li>
            <li>
              <strong>Risk-Aware Recommendations:</strong> SIM doesn't just
              focus on returns; it prioritizes risk management. Our platform
              assesses your risk tolerance and helps you build a resilient
              portfolio that can weather market volatility. We provide a path to
              sustainable growth by balancing risk and reward intelligently.
            </li>
          </ul>
        </section>

        {bearsImage && (
          <section className="mt-16">
            <Image
              src={bearsImage.imageUrl}
              alt={bearsImage.description}
              width={800}
              height={533}
              className="mx-auto rounded-lg"
              data-ai-hint={bearsImage.imageHint}
            />
          </section>
        )}

        <section className="mt-16">
          <h2 className="text-3xl font-bold">
            Safety Nets and Expert Guardrails from the Get-Go
          </h2>
          <p className="text-lg mt-4 leading-relaxed">
            We've built SIM with guardrails to protect you from common investing
            pitfalls. Our system is designed to help you avoid emotional
            decisions and stick to your long-term strategy.
          </p>
          <ul className="list-disc list-inside mt-4 text-lg space-y-2">
            <li>
              <strong>The AI Co-Pilot:</strong> Think of SIM as your experienced
              co-pilot. It runs thousands of simulations to stress-test your
              portfolio, highlighting potential weaknesses and suggesting
              adjustments before problems arise. This proactive approach helps
              you stay on track, even when the market is turbulent.
            </li>
            <li>
              <strong>Behavioral Nudges:</strong> The platform is designed to
              promote healthy investing habits. By providing context and
              long-term perspective, SIM helps you filter out the noise and
              focus on what truly matters for your financial future. No more
              chasing hot stocks - just steady, disciplined growth.
            </li>
          </ul>
        </section>

        {memesImage && (
          <section className="mt-16">
            <Image
              src={memesImage.imageUrl}
              alt={memesImage.description}
              width={800}
              height={800}
              className="mx-auto rounded-lg"
              data-ai-hint={memesImage.imageHint}
            />
          </section>
        )}

        <section className="mt-16">
          <h2 className="text-3xl font-bold">
            Our Commitment to Objectivity, Intelligibility and Accessibility
          </h2>
          <p className="text-lg mt-4 leading-relaxed">
            At SIM, we believe that everyone deserves access to high-quality
            financial tools. Our commitment to you is threefold:
          </p>
          <ul className="list-disc list-inside mt-4 text-lg space-y-2">
            <li>
              <strong>Objectivity:</strong> Our AI is designed to be impartial,
              providing data-driven insights without any conflict of interest.
            </li>
            <li>
              <strong>Intelligibility:</strong> We translate complex analytics
              into simple, human-friendly language.
            </li>
            <li>
              <strong>Accessibility:</strong> We're committed to making our
              platform affordable and easy to use for investors of all levels.
            </li>
          </ul>
        </section>

        <section className="mt-16">
          <div className="bg-card border rounded-lg p-4 md:p-6">
            <HoldingsTable holdings={holdings.slice(0, 3)} />
          </div>
        </section>

        <section className="mt-16 text-center">
          <p className="text-lg leading-relaxed">
            And that's how SIM works its magic. We're launching our private
            beta soon, so if you're ready to take the guesswork out of investing,
            sign up for our waitlist below.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
}
