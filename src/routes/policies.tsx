import { createFileRoute } from "@tanstack/react-router";
import { SHOP } from "@/lib/products";

export const Route = createFileRoute("/policies")({
  head: () => ({
    meta: [
      { title: "Policies — CLNX" },
      {
        name: "description",
        content:
          "Pre-order lead times, delivery fees within and outside Lagos, bank-transfer payment and refund policy for CLNX orders.",
      },
      { property: "og:title", content: "Policies — CLNX" },
      { property: "og:description", content: "Pre-orders, delivery, payment and refunds." },
    ],
  }),
  component: PoliciesPage,
});

function PoliciesPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-14 md:px-10 md:py-20">
      <p className="eyebrow">Shop with confidence</p>
      <h1 className="mt-3 text-4xl md:text-6xl">Policies</h1>

      <div className="mt-14 space-y-12 text-sm leading-relaxed text-muted-foreground">
        <section>
          <h2 className="text-2xl text-foreground">Pre-orders</h2>
          <p className="mt-3">
            Pieces marked <span className="text-foreground">Pre-order</span> are handmade to order.
            Delivery timeline is <span className="text-foreground">14-21 working days</span> from the
            payment is confirmed.
          </p>
        </section>

        <section>
          <h2 className="text-2xl text-foreground">Delivery fees</h2>
          <p className="mt-3">Delivery is calculated at checkout and added to your total before payment:</p>
          <ul className="mt-3 space-y-1">
            <li>· <span className="text-foreground">₦3,000</span> within Lagos</li>
            <li>
              · <span className="text-foreground">₦7,000</span> outside Lagos
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl text-foreground">Payment</h2>
          <p className="mt-3">
            Orders are paid for by bank transfer. Bank details are shown on the final checkout step.
            Your order is <span className="text-foreground">only confirmed once payment is received</span>.
            Please send proof of payment to{" "}
            <a href={`mailto:${SHOP.email}`} className="text-foreground underline">
              {SHOP.email}
            </a>{" "}
            or WhatsApp {SHOP.phone}.
          </p>
        </section>

        <section>
          <h2 className="text-2xl text-foreground">Refunds</h2>
          <p className="mt-3">
            We do <span className="text-foreground">not</span> issue refunds after payment. Because every
            piece is handmade, please{" "}
            <span className="text-foreground">confirm all product details</span> (colour, size, finish,
            lead time) before completing payment.
          </p>
        </section>

        <section>
          <h2 className="text-2xl text-foreground">Order confirmation</h2>
          <p className="mt-3">
            Once you complete checkout, an order confirmation is sent to your email address with your
            order reference and bank details. Keep this for your records.
          </p>
        </section>
      </div>
    </div>
  );
}
