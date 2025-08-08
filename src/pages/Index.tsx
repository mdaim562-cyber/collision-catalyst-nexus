import { Seo } from "@/components/Seo";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Index = () => {
  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.currentTarget;
    const rect = target.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    target.style.setProperty("--x", `${x}%`);
    target.style.setProperty("--y", `${y}%`);
  };

  return (
    <>
      <Seo
        title="Collision Catalyst — Growth Partner for Auto Body Shops"
        description="We fill your bays with high‑value jobs. Trusted by 14+ shops across the US. We only work with 1 shop per zip code. Contact +1 (917) 310-0122 or daim@collisioncatalyst.com." 
      />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'Collision Catalyst',
          url: typeof window !== 'undefined' ? window.location.origin : 'https://collisioncatalyst.com',
          logo: '/lovable-uploads/6f2c0140-6f49-401f-867e-79571513aeed.png',
          sameAs: [],
          description: 'Exclusive growth partner for auto body shops. We fill your bays with high‑value jobs.'
        })}</script>
      </Helmet>
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div onMouseMove={onMouseMove} className="spotlight">
            <div className="container mx-auto px-4 py-24 md:py-32 text-center">
              <h1 className="font-extrabold text-4xl md:text-6xl leading-tight tracking-tight">
                We Fill Your Bays With High‑Value Jobs — Without You Wasting Time, Money, or Energy on Fluff.
              </h1>
              <p className="mt-5 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                Trusted by 14+ Auto Body Shops across the US — without them hiring marketing agencies, spending $10,000+ on ads, or waiting weeks for leads.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
                <Button asChild variant="hero" size="xl">
                  <Link to="/book-call">Check Availability Now</Link>
                </Button>
                <Button asChild variant="goldOutline" size="xl">
                  <Link to="/claim-freebies">Claim Free Visibility Boost</Link>
                </Button>
              </div>
              <div className="mt-8 text-sm text-muted-foreground">
                <span className="font-semibold">Guarantee:</span> We’ll help you add $50,000+ in new revenue within 90 days — or you don’t pay until you see it working.
              </div>
              <div className="mt-6 text-xs uppercase tracking-wide text-muted-foreground">Trusted by 14+ Auto Body Shops across the US</div>
            </div>
          </div>
        </section>

        {/* Pain Points */}
        <section className="border-t">
          <div className="container mx-auto px-4 py-16 grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold">If this sounds familiar...</h2>
              <ul className="mt-6 space-y-3 text-muted-foreground">
                <li>• Low jobs per month and too many tire‑kickers</li>
                <li>• Competitors outranking you and stealing the best work</li>
                <li>• Payroll stress from inconsistent work and delayed payments</li>
                <li>• Vendors who overpromise, underdeliver, and burn your time</li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold">Here’s how we change it</h2>
              <p className="mt-4 text-muted-foreground">
                We partner with one shop per zip code and install a simple growth system that brings in premium jobs consistently. No jargon. No guesswork. Just measurable results and transparent communication.
              </p>
              <ul className="mt-4 space-y-2 text-sm">
                <li>• Consistent pipeline of high‑value repair jobs</li>
                <li>• Clear reporting and weekly check‑ins</li>
                <li>• Fair, performance‑aligned partnership</li>
              </ul>
              <div className="mt-6">
                <Button asChild variant="hero" size="lg">
                  <Link to="/process">See Our Process</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Case Study Highlights */}
        <section className="border-t">
          <div className="container mx-auto px-4 py-16">
            <h2 className="text-2xl md:text-3xl font-bold text-center">Highlights</h2>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {[1,2,3].map((i) => (
                <div key={i} className="rounded-lg border p-6 hover:shadow-[var(--shadow-glow)] transition-shadow">
                  <img src="/placeholder.svg" alt={`Case study ${i} result`} className="w-full h-40 object-cover rounded" loading="lazy" />
                  <div className="mt-4 text-sm text-muted-foreground">Collision shop · Midwest</div>
                  <div className="mt-1 font-semibold">+$18,400 in 30 days · 27 high‑value jobs</div>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Button asChild variant="goldOutline">
                <Link to="/case-studies">View All Case Studies</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Freebie Offer */}
        <section id="freebie-offer" className="border-t">
          <div className="container mx-auto px-4 py-16">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold">Free Local Visibility Boost</h2>
              <p className="mt-3 text-muted-foreground">We’ll optimize your local presence so premium jobs find you. No catch. We do this first to earn your trust.</p>
              <div className="mt-6">
                <Button asChild variant="goldOutline" size="lg">
                  <Link to="/claim-freebies">Claim Your Free Visibility Boost</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="border-t">
          <div className="container mx-auto px-4 py-16 text-center">
            <h2 className="text-2xl md:text-3xl font-bold">We only work with 1 shop per zip code</h2>
            <p className="mt-3 text-muted-foreground">Check availability in your area now.</p>
            <div className="mt-6 flex items-center justify-center gap-3">
              <Button asChild variant="hero" size="lg">
                <Link to="/book-call">Book a Call</Link>
              </Button>
              <Button asChild variant="goldOutline" size="lg">
                <Link to="/claim-freebies">Claim Your Free Visibility Boost</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Index;
