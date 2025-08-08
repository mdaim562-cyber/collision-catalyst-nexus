import { Seo } from "@/components/Seo";
import { BookingForm } from "@/components/forms/BookingForm";

const BookCall = () => {
  return (
    <>
      <Seo title="Book a Call — Collision Catalyst" description="Check availability in your zip code and book a quick intro call." />
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-3xl md:text-4xl font-bold text-center">Book a Call</h1>
        <p className="mt-3 text-center text-muted-foreground">Quick intro to see if we’re a fit. We only work with 1 shop per zip code.</p>
        <div className="mt-10 max-w-3xl mx-auto">
          <BookingForm />
        </div>
      </main>
    </>
  );
};

export default BookCall;
