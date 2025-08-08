export const SiteFooter = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t">
      <div className="container mx-auto px-4 py-10 grid gap-8 md:grid-cols-3 items-start">
        <div>
          <p className="text-sm font-semibold">Collision Catalyst</p>
          <p className="mt-2 text-sm text-muted-foreground max-w-sm">Trusted by auto body shops who like their calendars full and their hands dirty. We only work with one shop per zip code.</p>
        </div>
        <nav aria-label="Footer navigation" className="grid gap-2 text-sm">
          <a href="/process" className="text-foreground/80 hover:text-primary transition-colors">Our Process</a>
          <a href="/case-studies" className="text-foreground/80 hover:text-primary transition-colors">Case Studies</a>
          <a href="/about" className="text-foreground/80 hover:text-primary transition-colors">About</a>
          <a href="/contact" className="text-foreground/80 hover:text-primary transition-colors">Get in Touch</a>
        </nav>
        <div className="text-sm md:text-right">
          <p className="font-semibold">Contact</p>
          <p className="mt-2"><a href="mailto:daim@collisioncatalyst.com" className="text-foreground/80 hover:text-primary transition-colors">daim@collisioncatalyst.com</a></p>
          <p className="mt-1"><a href="tel:+19173100122" className="text-foreground/80 hover:text-primary transition-colors">+1 (917) 310-0122</a></p>
          <p className="mt-4 text-muted-foreground">© {year} Collision Catalyst. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
