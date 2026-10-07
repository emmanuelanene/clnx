import { createFileRoute } from "@tanstack/react-router";
import { Instagram, Mail, MapPin, Phone } from "lucide-react";
import { SHOP, whatsappLink } from "@/lib/products";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — CLNX" },
      {
        name: "description",
        content:
          "Talk to CLNX in Lagos, Nigeria. WhatsApp for quick orders, email for custom, wedding or wholesale enquiries.",
      },
      { property: "og:title", content: "Contact — CLNX" },
      {
        property: "og:description",
        content: "Orders by WhatsApp, enquiries by email. Lagos, Nigeria.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="mx-auto max-w-7xl px-5 py-14 md:px-10 md:py-20">
      <p className="eyebrow">In touch</p>
      <h1 className="mt-3 text-4xl md:text-6xl">Speak with our craftsmen.</h1>
      <p className="mt-5 max-w-lg text-sm leading-relaxed text-muted-foreground">
        Whether you are commissioning a bespoke pair of corporate oxfords, inquiring about our casual slides, or checking on an existing order, our team is ready to assist. For quick sizing questions or immediate orders, WhatsApp is the fastest channel. For wholesale or custom design consultations, please send us an email.
      </p>

      <div className="mt-14 grid gap-12 md:grid-cols-2 md:gap-20">
        <ul className="space-y-6 text-sm">
          <li className="flex items-center gap-4">
            <MapPin className="size-4 text-chocolate-soft" strokeWidth={1.5} />
            {SHOP.location}
          </li>
          <li className="flex items-center gap-4">
            <Mail className="size-4 text-chocolate-soft" strokeWidth={1.5} />
            <a href={`mailto:${SHOP.email}`} className="hover:text-chocolate-soft">
              {SHOP.email}
            </a>
          </li>
          <li className="flex items-center gap-4">
            <Phone className="size-4 text-chocolate-soft" strokeWidth={1.5} />
            <a href={`tel:${SHOP.phone.replace(/\s/g, "")}`} className="hover:text-chocolate-soft">
              {SHOP.phone}
            </a>
          </li>
          <li className="flex items-center gap-4">
            <Instagram className="size-4 text-chocolate-soft" strokeWidth={1.5} />
            <a
              href={SHOP.instagram}
              target="_blank"
              rel="noreferrer"
              className="hover:text-chocolate-soft"
            >
              {SHOP.instagramHandle}
            </a>
          </li>
          <li className="flex flex-wrap gap-3 pt-4">
            <a href={whatsappLink()} target="_blank" rel="noreferrer" className="btn-ink">
              Chat on WhatsApp
            </a>
            <a href={`mailto:${SHOP.email}`} className="btn-outline-ink">
              Visit by appointment
            </a>
          </li>
        </ul>

        <div className="bg-secondary/70 p-8">
          <h2 className="text-2xl">Studio hours</h2>
          <dl className="mt-6 space-y-3 text-sm">
            {[
              ["Mon — Fri", "8:00 — 18:00"],
              ["Saturday", "10:00 — 17:00"],
              ["Sunday", "By appointment"],
            ].map(([d, h]) => (
              <div key={d} className="flex justify-between border-b border-border pb-3">
                <dt className="text-muted-foreground">{d}</dt>
                <dd>{h}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-7 text-xs leading-relaxed text-muted-foreground">
            We respond to all messages within one business day. Orders are confirmed once payment is
            received.
          </p>
        </div>
      </div>
    </div>
  );
}
