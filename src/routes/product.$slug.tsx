import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import { toast } from "sonner";
import { ProductCard } from "@/components/product-card";
import { addToCart } from "@/lib/cart";
import { categoryLabels, formatNaira, getProduct, products, whatsappLink } from "@/lib/products";

export const Route = createFileRoute("/product/$slug")({
  loader: ({ params }) => {
    const product = getProduct(params.slug);
    if (!product) throw notFound();
    return { slug: product.slug };
  },
  head: ({ params }) => {
    const product = getProduct(params.slug);
    if (!product) {
      return {
        meta: [{ title: "Unavailable — CLNX" }, { name: "robots", content: "noindex" }],
      };
    }
    const title = `${product.name} — CLNX`;
    return {
      meta: [
        { title },
        { name: "description", content: product.description },
        { property: "og:title", content: title },
        { property: "og:description", content: product.description },
      ],
    };
  },
  component: ProductPage,
});

function Accordion({ title, children }: { title: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-border">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between py-4 text-[0.7rem] tracking-[0.2em] uppercase"
      >
        {title}
        {open ? <Minus className="size-3.5" /> : <Plus className="size-3.5" />}
      </button>
      {open && <div className="pb-5 text-sm leading-relaxed text-muted-foreground">{children}</div>}
    </div>
  );
}

function ProductPage() {
  const { slug } = Route.useLoaderData();
  const product = getProduct(slug)!;
  const [qty, setQty] = useState(1);

  const related = products.filter((p) => p.slug !== product.slug && p.category === product.category).slice(0, 4);

  return (
    <div className="mx-auto max-w-7xl px-5 py-10 md:px-10 md:py-16">
      <nav className="eyebrow flex gap-2">
        <Link to="/shop" className="hover:text-foreground">
          Shop
        </Link>
        <span>/</span>
        <Link to="/shop/$category" params={{ category: product.category }} className="hover:text-foreground">
          {product.category}
        </Link>
        <span>/</span>
        <span className="text-foreground">{product.name}</span>
      </nav>

      <div className="mt-8 grid gap-10 md:grid-cols-2 md:gap-16">
        <img src={product.image} alt={product.name} className="aspect-4/5 w-full object-cover" />

        <div>
          <p className="eyebrow">{product.label}</p>
          <h1 className="mt-3 text-4xl md:text-5xl">{product.name}</h1>
          <p className="mt-4 font-display text-2xl">{formatNaira(product.price)}</p>
          {product.preorder && (
            <p className="mt-3 inline-block bg-secondary px-2.5 py-1 text-[0.6rem] tracking-[0.18em] uppercase">
              Pre-order · 7–14 working days
            </p>
          )}
          <p className="mt-6 text-sm leading-relaxed text-muted-foreground">{product.description}</p>

          <div className="mt-9 flex flex-wrap items-stretch gap-3">
            <div className="flex items-center border border-border">
              <button onClick={() => setQty((q) => Math.max(1, q - 1))} className="px-4 py-3" aria-label="Decrease">
                <Minus className="size-3.5" />
              </button>
              <span className="w-10 text-center text-sm">{qty}</span>
              <button onClick={() => setQty((q) => q + 1)} className="px-4 py-3" aria-label="Increase">
                <Plus className="size-3.5" />
              </button>
            </div>
            <button
              className="btn-ink"
              onClick={() => {
                addToCart(product.slug, qty);
                toast.success(`${product.name} added to cart`);
              }}
            >
              Add to cart
            </button>
            <a
              href={whatsappLink(`Hi CLNX, I'd like to order the ${product.name} (${formatNaira(product.price)}).`)}
              target="_blank"
              rel="noreferrer"
              className="btn-outline-ink"
            >
              Order via WhatsApp
            </a>
          </div>

          <p className="mt-5 text-xs leading-relaxed text-muted-foreground">
            Please confirm all product details before purchasing. No refunds after payment.
          </p>

          <div className="mt-10">
            <Accordion title="Materials">{product.materials}</Accordion>
            <Accordion title="Care">
              Store in the dust bag provided. Keep away from perfume and water. Wipe beads gently with a
              dry, soft cloth.
            </Accordion>
            <Accordion title="Delivery">
              Delivery is ₦3,000 within Lagos and ₦7,000 outside Lagos, added at checkout. Pre-order
              pieces are made to order in 7–14 working days from confirmed payment.
            </Accordion>
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <section className="mt-24">
          <div className="flex items-end justify-between border-b border-border pb-5">
            <div>
              <p className="eyebrow">You may also love</p>
              <h2 className="mt-2 text-3xl">More from the atelier</h2>
            </div>
            <Link
              to="/shop/$category"
              params={{ category: product.category }}
              className="text-[0.7rem] tracking-[0.2em] uppercase hover:text-chocolate-soft"
            >
              All {categoryLabels[product.category].toLowerCase()}
            </Link>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-4 md:gap-x-6">
            {related.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
