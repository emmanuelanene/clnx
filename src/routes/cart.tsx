import { createFileRoute, Link } from "@tanstack/react-router";
import { Minus, Plus, X } from "lucide-react";
import { useState } from "react";
import { removeFromCart, setQty, useCartItems } from "@/lib/cart";
import { formatNaira, SHOP, whatsappLink } from "@/lib/products";

export const Route = createFileRoute("/cart")({
  head: () => ({
    meta: [
      { title: "Cart — CLNX" },
      {
        name: "description",
        content:
          "Review your CLNX order. Bank-transfer checkout — orders are confirmed once payment is received.",
      },
      { property: "og:title", content: "Your cart — CLNX" },
      { property: "og:description", content: "Handmade leather shoes from Lagos." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: CartPage,
});

type Zone = "lagos" | "outside";
const fees: Record<Zone, number> = { lagos: 3000, outside: 7000 };

function CartPage() {
  const items = useCartItems();
  const [zone, setZone] = useState<Zone>("lagos");

  const subtotal = items.reduce((n, i) => n + i.product.price * i.qty, 0);
  const total = subtotal + (items.length ? fees[zone] : 0);

  if (items.length === 0) {
    return (
      <div className="mx-auto max-w-3xl px-5 py-24 text-center md:px-10">
        <h1 className="text-4xl md:text-5xl">Cart</h1>
        <p className="mt-8 font-display text-2xl">Your cart is empty</p>
        <p className="mt-3 text-sm text-muted-foreground">Discover the latest pieces from our workshop.</p>
        <div className="mt-8">
          <Link to="/shop" className="btn-ink">
            Continue shopping
          </Link>
        </div>
      </div>
    );
  }

  const orderMessage = [
    "Hi CLNX, I'd like to place this order:",
    ...items.map((i) => `• ${i.qty} × ${i.product.name} — ${formatNaira(i.product.price * i.qty)}`),
    `Delivery (${zone === "lagos" ? "within Lagos" : "outside Lagos"}): ${formatNaira(fees[zone])}`,
    `Total: ${formatNaira(total)}`,
  ].join("\n");

  return (
    <div className="mx-auto max-w-7xl px-5 py-14 md:px-10 md:py-20">
      <h1 className="text-4xl md:text-6xl">Cart</h1>

      <div className="mt-12 grid gap-14 lg:grid-cols-[1.6fr_1fr]">
        <div className="border-t border-border">
          {items.map(({ product, qty }) => (
            <div key={product.slug} className="flex gap-5 border-b border-border py-6">
              <Link to="/product/$slug" params={{ slug: product.slug }} className="shrink-0">
                <img src={product.image} alt={product.name} className="size-28 object-cover" />
              </Link>
              <div className="flex-1">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <Link to="/product/$slug" params={{ slug: product.slug }} className="text-base">
                      {product.name}
                    </Link>
                    <p className="eyebrow mt-1">{product.label}</p>
                  </div>
                  <button onClick={() => removeFromCart(product.slug)} aria-label="Remove">
                    <X className="size-4 text-muted-foreground hover:text-foreground" />
                  </button>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center border border-border">
                    <button onClick={() => setQty(product.slug, qty - 1)} className="px-3 py-2" aria-label="Decrease">
                      <Minus className="size-3" />
                    </button>
                    <span className="w-8 text-center text-sm">{qty}</span>
                    <button onClick={() => setQty(product.slug, qty + 1)} className="px-3 py-2" aria-label="Increase">
                      <Plus className="size-3" />
                    </button>
                  </div>
                  <p className="text-sm">{formatNaira(product.price * qty)}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <aside className="h-fit bg-secondary/70 p-7">
          <h2 className="text-2xl">Order summary</h2>

          <div className="mt-6">
            <p className="eyebrow">Delivery</p>
            <div className="mt-3 space-y-2">
              {(["lagos", "outside"] as Zone[]).map((z) => (
                <label key={z} className="flex cursor-pointer items-center justify-between text-sm">
                  <span className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="zone"
                      checked={zone === z}
                      onChange={() => setZone(z)}
                      className="accent-primary"
                    />
                    {z === "lagos" ? "Within Lagos" : "Outside Lagos"}
                  </span>
                  <span className="text-muted-foreground">{formatNaira(fees[z])}</span>
                </label>
              ))}
            </div>
          </div>

          <dl className="mt-7 space-y-2 border-t border-border pt-5 text-sm">
            <div className="flex justify-between">
              <dt className="text-muted-foreground">Subtotal</dt>
              <dd>{formatNaira(subtotal)}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-muted-foreground">Delivery</dt>
              <dd>{formatNaira(fees[zone])}</dd>
            </div>
            <div className="flex justify-between border-t border-border pt-3 font-display text-xl">
              <dt>Total</dt>
              <dd>{formatNaira(total)}</dd>
            </div>
          </dl>

          <a
            href={whatsappLink(orderMessage)}
            target="_blank"
            rel="noreferrer"
            className="btn-ink mt-7 w-full"
          >
            Checkout on WhatsApp
          </a>
          <a href={`mailto:${SHOP.email}?subject=Order enquiry`} className="btn-outline-ink mt-3 w-full">
            Email the atelier
          </a>

          <p className="mt-6 text-xs leading-relaxed text-muted-foreground">
            Payment is by bank transfer. Bank details are shared on confirmation — your order is only
            confirmed once payment is received. No refunds after payment.
          </p>
        </aside>
      </div>
    </div>
  );
}
