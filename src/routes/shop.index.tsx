import { createFileRoute, Link } from "@tanstack/react-router";
import { ProductCard } from "@/components/product-card";
import { categoryLabels, products } from "@/lib/products";

export const Route = createFileRoute("/shop/")({
  head: () => ({
    meta: [
      { title: "Shop — CLNX" },
      {
        name: "description",
        content:
          "Shop handmade beaded bags, necklaces and bracelets from CLNX in Ikeja, Lagos. Pre-order pieces ship in 7–14 working days.",
      },
      { property: "og:title", content: "Shop all — CLNX" },
      {
        property: "og:description",
        content: "Every piece is made by hand in our Lagos atelier.",
      },
    ],
  }),
  component: ShopAll,
});

function ShopAll() {
  return (
    <div className="mx-auto max-w-7xl px-5 py-14 md:px-10 md:py-20">
      <p className="eyebrow">Collection</p>
      <h1 className="mt-3 text-4xl md:text-6xl">Shop all</h1>
      <p className="mt-5 max-w-lg text-sm leading-relaxed text-muted-foreground">
        Every pair is meticulously handcrafted from premium leathers in our Lagos workshop.
        Pre-order commissions are tailor-made to order, requiring 14–21 working days to craft and
        ship. Our Ready-to-Wear selection ships immediately.
      </p>

      <div className="mt-10 flex flex-wrap gap-2 border-b border-border pb-5">
        <span className="btn-ink">{categoryLabels.all}</span>
        {(["fullshoes", "halfshoes", "slides", "others"] as const).map((c) => (
          <Link key={c} to="/shop/$category" params={{ category: c }} className="btn-outline-ink">
            {categoryLabels[c]}
          </Link>
        ))}
      </div>

      <div className="mt-10 grid grid-cols-2 gap-x-4 gap-y-12 md:grid-cols-4 md:gap-x-6">
        {products.map((p) => (
          <ProductCard key={p.slug} product={p} />
        ))}
      </div>
    </div>
  );
}
