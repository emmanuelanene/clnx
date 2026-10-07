import { createFileRoute } from "@tanstack/react-router";
import { products, SHOP } from "@/lib/products";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — CLNX" },
      {
        name: "description",
        content: "A small archive of recent hand-made shoes from the CLNX brand in Lagos, Nigeria.",
      },
      { property: "og:title", content: "Gallery — CLNX" },
      { property: "og:description", content: "Recent pieces from the workshop." },
    ],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  return (
    <div className="mx-auto max-w-7xl px-5 py-14 md:px-10 md:py-20">
      <p className="eyebrow">{SHOP.instagramHandle}</p>
      <h1 className="mt-3 text-4xl md:text-6xl">Gallery</h1>
      <p className="mt-5 max-w-lg text-sm leading-relaxed text-muted-foreground">
        A small archive of recent pieces from the workshop.
      </p>
      <a href={SHOP.instagram} target="_blank" rel="noreferrer" className="btn-outline-ink mt-8">
        Follow on Instagram
      </a>

      <div className="mt-12 columns-2 gap-3 md:columns-3 lg:columns-4">
        {products.map((p) => (
          <img
            key={p.slug}
            src={p.image}
            alt={p.name}
            loading="lazy"
            className="mb-3 w-full object-cover"
          />
        ))}
      </div>
    </div>
  );
}
