import { Seo } from "@/components/Seo";
import { CheckCircle } from "lucide-react";

const steps = [
  {
    title: "Discovery & Alignment",
    text: "We learn your numbers, goals, and local landscape. No jargon, just clarity.",
  },
  {
    title: "Positioning & Offer",
    text: "We craft a compelling angle so premium jobs choose you over competitors.",
  },
  {
    title: "Visibility Engine",
    text: "We turn on a focused system that drives consistent, high‑value demand.",
  },
  {
    title: "Pipeline & Follow‑Up",
    text: "Simple, accountable communication that respects your team’s time.",
  },
  {
    title: "Iterate & Scale",
    text: "Weekly reporting. Measurable improvements. Scale what works, cut fluff.",
  },
];

const Process = () => {
  return (
    <>
      <Seo title="Our Process — Collision Catalyst" description="How we deliver consistent, high‑value jobs without the fluff." />
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-3xl md:text-4xl font-bold text-center">Our Process</h1>
        <p className="mt-3 text-center text-muted-foreground max-w-2xl mx-auto">
          Step‑by‑step breakdown of how we get results — without revealing the secret sauce.
        </p>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((s, idx) => (
            <article key={idx} className="rounded-lg border p-6">
              <div className="flex items-center gap-2 text-primary">
                <CheckCircle className="h-5 w-5" />
                <span className="font-semibold">Step {idx + 1}</span>
              </div>
              <h2 className="mt-3 font-semibold text-lg">{s.title}</h2>
              <p className="mt-2 text-muted-foreground">{s.text}</p>
            </article>
          ))}
        </div>
      </main>
    </>
  );
};

export default Process;
