import { Seo } from "@/components/Seo";

const About = () => {
  return (
    <>
      <Seo title="About - Collision Catalyst" description="Who we are, what we stand for, and why shops choose to partner with us." />
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-3xl md:text-4xl font-bold">About Collision Catalyst</h1>
        <div className="mt-6 grid gap-10 md:grid-cols-2">
          <div>
            <p className="text-muted-foreground">
              Collision Catalyst exists to help great auto body shops do more of their best work. We partner with owners who value clarity, speed, and accountability. No buzzwords. No bloated retainers. Just a focused system that drives premium jobs.
            </p>
            <p className="mt-4 text-muted-foreground">
              Our founder’s background blends operations, direct response, and local market strategy. That means we obsess over numbers and outcomes - not vanity metrics.
            </p>
          </div>
          <div>
            <div className="rounded-lg border p-6">
              <h2 className="font-semibold">Our Principles</h2>
              <ul className="mt-3 list-disc pl-5 text-muted-foreground space-y-1">
                <li>One shop per zip code - true exclusivity</li>
                <li>Transparent, weekly reporting</li>
                <li>Aligned incentives - you win, we win</li>
                <li>Relentless focus on high‑value jobs</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default About;
