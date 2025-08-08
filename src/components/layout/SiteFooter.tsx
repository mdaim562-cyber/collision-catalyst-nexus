export const SiteFooter = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t">
      <div className="container mx-auto px-4 py-10 grid gap-6 md:grid-cols-2 items-center">
        <p className="text-sm text-muted-foreground">
          © {year} Collision Catalyst. All rights reserved. We only work with one shop per zip code.
        </p>
        <p className="text-sm md:text-right text-muted-foreground">
          Built for high‑value, results‑driven auto body shops.
        </p>
      </div>
    </footer>
  );
};
