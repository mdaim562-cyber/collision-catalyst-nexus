import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export const StickyCta = () => {
  return (
    <div className="fixed bottom-5 right-5 z-50">
      <Button variant="hero" size="lg" className="shadow-[var(--shadow-glow-strong)]">
        <Link to="/contact#freebies" aria-label="Claim Free GMB Optimization">
          Claim Free GMB Optimization
        </Link>
      </Button>
    </div>
  );
};
