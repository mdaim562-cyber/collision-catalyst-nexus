import { Seo } from "@/components/Seo";
import { BookingForm } from "@/components/forms/BookingForm";
import { Phone, Mail, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <>
      <Seo title="Get in Touch - Collision Catalyst" description="Reach out, ask questions, and check availability. We're here to help." />
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-3xl md:text-4xl font-bold text-center">Get in Touch</h1>
        <p className="mt-3 text-center text-muted-foreground">We respond quickly. Prefer phone? Call us at +1 (917) 310-0122.</p>

        <div className="mt-10 grid gap-10 lg:grid-cols-2">
          <section id="form" className="rounded-lg border p-6 animate-fade-in shadow-[var(--shadow-glow)]">
            <h2 className="text-xl font-semibold">Send us a message</h2>
            <p className="mt-1 text-muted-foreground text-sm">Tell us about your shop and how we can help.</p>
            <div className="mt-6">
              <BookingForm />
            </div>
            <div className="mt-6 space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" /><a href="tel:+19173100122" className="text-foreground/80 hover:text-primary transition-colors">+1 (917) 310-0122</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" /><a href="mailto:daim@collisioncatalyst.com" className="text-foreground/80 hover:text-primary transition-colors">daim@collisioncatalyst.com</a>
              </div>
            </div>
          </section>

          <section id="maps" className="grid gap-6 content-start">
            <article className="rounded-lg border overflow-hidden shadow-[var(--shadow-glow)] animate-fade-in">
              <div className="p-4 flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                <h3 className="font-semibold">Remote Office - Brooklyn, New York, United States</h3>
              </div>
              <iframe
                title="Map - Brooklyn, New York, United States"
                src="https://www.google.com/maps?q=Brooklyn,%20New%20York,%20United%20States&output=embed"
                loading="lazy"
                className="w-full h-64"
              />
            </article>
            <article className="rounded-lg border overflow-hidden shadow-[var(--shadow-glow)] animate-fade-in">
              <div className="p-4 flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                <h3 className="font-semibold">Physical Office - Gujranwala, Pakistan</h3>
              </div>
              <iframe
                title="Map - Gujranwala, Pakistan"
                src="https://www.google.com/maps?q=Gujranwala,%20Pakistan&output=embed"
                loading="lazy"
                className="w-full h-64"
              />
            </article>
          </section>
        </div>
      </main>
    </>
  );
};

export default Contact;
