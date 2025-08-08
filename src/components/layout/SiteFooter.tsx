import { Facebook, Instagram, Phone, Mail } from "lucide-react";

export const SiteFooter = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t">
      <div className="container mx-auto px-4 py-10 grid gap-8 md:grid-cols-4 items-start">
        <div className="space-y-3">
          <img
            src="/lovable-uploads/6011a394-32be-43f4-a53c-7f41776849fe.png"
            alt="Collision Catalyst logo black and gold"
            className="h-8 w-auto"
            loading="lazy"
          />
          <p className="text-sm text-muted-foreground max-w-sm">Trusted by auto body shops who like their calendars full and their hands dirty. We only work with one shop per zip code.</p>
        </div>
        <nav aria-label="Footer navigation" className="grid gap-2 text-sm">
          <a href="/process" className="text-foreground/80 hover:text-primary transition-colors">Our Process</a>
          <a href="/case-studies" className="text-foreground/80 hover:text-primary transition-colors">Case Studies</a>
          <a href="/about" className="text-foreground/80 hover:text-primary transition-colors">About</a>
          <a href="/contact" className="text-foreground/80 hover:text-primary transition-colors">Get in Touch</a>
        </nav>
        <div className="text-sm">
          <p className="font-semibold">Contact</p>
          <p className="mt-2 flex items-center gap-2"><Mail className="h-4 w-4" /><a href="mailto:daim@collisioncatalyst.com" className="text-foreground/80 hover:text-primary transition-colors">daim@collisioncatalyst.com</a></p>
          <p className="mt-1 flex items-center gap-2"><Phone className="h-4 w-4" /><a href="tel:+19173100122" className="text-foreground/80 hover:text-primary transition-colors">+1 (917) 310-0122</a></p>
          <div className="mt-4 flex items-center gap-3">
            <a href="https://www.facebook.com/collisioncatalyst" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="p-2 rounded-full border hover:shadow-[var(--shadow-glow)] hover-scale transition">
              <Facebook className="h-4 w-4" />
            </a>
            <a href="https://instagram.com/collisioncatalyst" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="p-2 rounded-full border hover:shadow-[var(--shadow-glow)] hover-scale transition">
              <Instagram className="h-4 w-4" />
            </a>
          </div>
          <p className="mt-4 text-muted-foreground">© {year} Collision Catalyst. All rights reserved.</p>
        </div>
        <aside className="text-sm">
          <p className="font-semibold">Offices</p>
          <p className="mt-2 text-muted-foreground">Remote Office - Brooklyn, New York, United States</p>
          <p className="mt-1 text-muted-foreground">Physical Office - Gujranwala, Pakistan</p>
        </aside>
      </div>
    </footer>
  );
};
