import { Seo } from "@/components/Seo";
import { Button } from "@/components/ui/button";

const CaseStudies = () => {
  const items = Array.from({ length: 4 }).map((_, i) => ({ id: i + 1 }));
  return (
    <>
      <Seo title="Case Studies - Collision Catalyst" description="Real results from partner shops across the US." />
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-3xl md:text-4xl font-bold text-center">Case Studies</h1>
        <p className="mt-3 text-center text-muted-foreground max-w-2xl mx-auto">
          A snapshot of outcomes created with our partners. Specific tactics are intentionally hidden - the numbers speak for themselves.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {items.map((it) => (
            <article key={it.id} className="rounded-lg border overflow-hidden">
              <img src="/placeholder.svg" alt={`Client result ${it.id}`} className="w-full h-56 object-cover" loading="lazy" />
              <div className="p-6">
                <div className="text-sm text-muted-foreground">Auto Body Shop · US</div>
                <h2 className="mt-1 font-semibold">+$50,000 in 60 days · 41 premium jobs</h2>
                <ul className="mt-3 text-sm text-muted-foreground list-disc pl-4 space-y-1">
                  <li>Avg. ticket value up 28%</li>
                  <li>Inbound calls stabilized at 4–7 per day</li>
                  <li>Owner back to focusing on operations</li>
                </ul>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button variant="hero" size="lg">Check Availability in Your Zip</Button>
        </div>
      </main>
    </>
  );
};

export default CaseStudies;
