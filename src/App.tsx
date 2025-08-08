import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { StickyCta } from "@/components/StickyCta";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Process from "./pages/Process";
import CaseStudies from "./pages/CaseStudies";
import About from "./pages/About";
import Contact from "./pages/Contact";
import BookCall from "./pages/BookCall";
import Freebies from "./pages/Freebies";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <SiteHeader />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/process" element={<Process />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/book-call" element={<BookCall />} />
            <Route path="/claim-freebies" element={<Freebies />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          <SiteFooter />
          <StickyCta />
        </BrowserRouter>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
