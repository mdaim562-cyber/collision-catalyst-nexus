import { Seo } from "@/components/Seo";
import { BookingForm } from "@/components/forms/BookingForm";
import { FreebieForm } from "@/components/forms/FreebieForm";

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
              <BookingForm />
            </div>
          </section>

          <section id="freebies" className="rounded-lg border p-6">
            <h2 className="text-xl font-semibold">Claim Free GMB Optimization</h2>
            <p className="mt-1 text-muted-foreground text-sm">We’ll optimize your local presence. No strings attached.</p>
            <div className="mt-6">
              <FreebieForm />
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default Contact;
