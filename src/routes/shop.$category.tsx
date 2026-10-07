import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ProductCard } from "@/components/product-card";
import { categoryLabels, products, type Category } from "@/lib/products";

const valid: Category[] = ["fullshoes", "halfshoes", "slides", "others"];

export const Route = createFileRoute("/shop/$category")({
  loader: ({ params }) => {
    if (!valid.includes(params.category as Category)) throw notFound();
    return { category: params.category as Category };
  },
  head: ({ params }) => {
    const label = categoryLabels[(params.category as Category) ?? "all"] ?? "Shop";
    const title = `${label} — CLNX`;
    const description = `Handmade ${label.toLowerCase()} from CLNX, Ikeja, Lagos. Hand-strung, structured and quietly bold.`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
      ],
    };
  },
  component: ShopCategory,
});

function ShopCategory() {
  const { category } = Route.useLoaderData();
  const items = products.filter((p) => p.category === category);

  return (
    <div className="mx-auto max-w-7xl px-5 py-14 md:px-10 md:py-20">
      <p className="eyebrow">Collection</p>
      <h1 className="mt-3 text-4xl md:text-6xl">{categoryLabels[category]}</h1>
      <p className="mt-5 max-w-lg text-sm leading-relaxed text-muted-foreground">
        Every piece is made by hand. Items marked Pre-order ship in 7–14 working days.
      </p>

      <div className="mt-10 flex flex-wrap gap-2 border-b border-border pb-5">
        <Link to="/shop" className="btn-outline-ink">
          All
        </Link>
        {(["fullshoes", "halfshoes", "slides", "others"] as const).map((c) =>
          c === category ? (
            <span key={c} className="btn-ink">
              {categoryLabels[c]}
            </span>
          ) : (
            <Link key={c} to="/shop/$category" params={{ category: c }} className="btn-outline-ink">
              {categoryLabels[c]}
            </Link>
          ),
        )}
      </div>

      {items.length === 0 ? (
        <p className="mt-16 text-sm text-muted-foreground">
          New pieces in this category are in the making. Enquire on WhatsApp for what's available
          now.
        </p>
      ) : (
        <div className="mt-10 grid grid-cols-2 gap-x-4 gap-y-12 md:grid-cols-4 md:gap-x-6">
          {items.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      )}
    </div>
  );
}
