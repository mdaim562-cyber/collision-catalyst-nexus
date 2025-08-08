import { Seo } from "@/components/Seo";
import { FreebieForm } from "@/components/forms/FreebieForm";

const Freebies = () => {
  return (
    <>
      <Seo title="Claim Free Visibility Boost - Collision Catalyst" description="We’ll improve your local visibility so premium jobs find you. No catch." />
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-3xl md:text-4xl font-bold text-center">Claim Your Free Visibility Boost</h1>
        <p className="mt-3 text-center text-muted-foreground">We only work with one shop per zip code - claim yours before your competitor does.</p>
        <div className="mt-10 max-w-4xl mx-auto">
          <FreebieForm />
        </div>
      </main>
    </>
  );
};

export default Freebies;
