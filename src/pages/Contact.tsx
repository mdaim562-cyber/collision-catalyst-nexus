import { Seo } from "@/components/Seo";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <>
      <Seo title="Get in Touch — Collision Catalyst" description="Book a call or claim your free local visibility boost." />
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-3xl md:text-4xl font-bold text-center">Get in Touch</h1>
        <p className="mt-3 text-center text-muted-foreground">Choose the option that fits you best.</p>

        <div className="mt-10 grid gap-10 md:grid-cols-2">
          <section id="book" className="rounded-lg border p-6">
            <h2 className="text-xl font-semibold">Book a Call</h2>
            <p className="mt-1 text-muted-foreground text-sm">Quick intro to see if we’re a fit.</p>
            <div className="mt-6">
              <Button asChild variant="hero" size="lg">
                <Link to="/book-call" aria-label="Book a call">Book a Call</Link>
              </Button>
            </div>
          </section>

          <section id="freebies" className="rounded-lg border p-6">
            <h2 className="text-xl font-semibold">Claim Free Visibility Boost</h2>
            <p className="mt-1 text-muted-foreground text-sm">We’ll optimize your local presence. No strings attached.</p>
            <div className="mt-6">
              <Button asChild variant="goldOutline" size="lg">
                <Link to="/claim-freebies" aria-label="Claim your free visibility boost">Claim Now</Link>
              </Button>
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default Contact;
