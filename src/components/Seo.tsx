import { Helmet } from "react-helmet-async";

interface SeoProps {
  title: string;
  description?: string;
  image?: string;
  canonical?: string;
}

export const Seo = ({ title, description = "Exclusive growth partner for auto body shops. We fill your bays with high‑value jobs.", image = "https://lovable.dev/opengraph-image-p98pqg.png", canonical }: SeoProps) => {
  const href = typeof window !== "undefined" ? (canonical ?? window.location.href) : canonical;
  return (
    <Helmet>
      <title>{title}</title>
      {description && <meta name="description" content={description} />}
      {href && <link rel="canonical" href={href} />}

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      {description && <meta property="og:description" content={description} />}
      {image && <meta property="og:image" content={image} />} 

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      {description && <meta name="twitter:description" content={description} />}
      {image && <meta name="twitter:image" content={image} />} 
    </Helmet>
  );
};
