import { Link, NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";

const nav = [
  { title: "Home", to: "/" },
  { title: "Our Process", to: "/process" },
  { title: "Case Studies", to: "/case-studies" },
  { title: "About", to: "/about" },
  { title: "Get in Touch", to: "/contact" },
];

export const SiteHeader = () => {
  return (
    <header className="sticky top-0 z-40 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <div className="container mx-auto grid grid-cols-3 h-16 items-center px-4">
        <Link to="/" className="flex items-center gap-2 justify-self-start">
          <img
            src="/lovable-uploads/6f2c0140-6f49-401f-867e-79571513aeed.png"
            alt="Collision Catalyst logo black and gold"
            className="h-8 w-auto"
            loading="eager"
          />
        </Link>

        <nav className="hidden md:flex items-center gap-6 justify-self-center">
          {nav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) =>
                `text-sm transition-colors hover:text-primary ${isActive ? "text-primary" : "text-foreground/80"}`
              }
            >
              {item.title}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2 justify-self-end">
          <Button asChild variant="hero" size="lg" className="shadow-[var(--shadow-glow)]">
            <Link to="/claim-freebies" aria-label="Check availability in your zip code">
              Check Availability
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
};
