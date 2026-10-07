/* eslint-disable prettier/prettier */
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { ProductCard } from "@/components/product-card";
import { products, SHOP, whatsappLink } from "@/lib/products";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CLNX - Handmade Leather Shoes" },
      {
        name: "description",
        content:
          "Sharp corporate oxfords, refined half-shoes, and effortless slides, handcrafted one pair at a time in Lagos.",
      },
      { property: "og:title", content: "CLNX" },
      {
        property: "og:description",
        content: "Handmade shoes from Lagos. Structured, modern, bold.",
      },
    ],
  }),
  component: Index,
});

const testimonials = [
  { quote: "The finish on these loafers is unreal. Showed up to my presentation at work with absolute confidence.", who: "Chidi · Lagos" },
  { quote: "“The leather on the half-shoes is supple and premium. Money well spent!", who: "Tunde · Ikoyi" },
  { quote: "Perfect fit right out of the box and beautifully packaged. CLNX is the real deal.", who: "Aminu · Abuja" },
];

function Index() {
  const featured = products.slice(0, 4);
  const bags = products.filter((p) => p.category === "fullshoes").slice(0, 6);

  return (
    <>
      {/* Hero */}
      <section className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-14 md:grid-cols-2 md:gap-16 md:px-10 md:py-24">
        <div>
          <p className="eyebrow">HANDCRAFTED FOOTWEAR</p>
          <h1 className="mt-6 text-5xl leading-[1.05] md:text-7xl">
            Leather,
            <br />
            <em className="not-italic text-chocolate-soft">crafted by hand.</em>
          </h1>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground md:text-base">
            Sharp corporate oxfords, refined half-shoes, and effortless slides, handcrafted one pair at a time in Lagos.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link to="/shop" className="btn-ink">
              Shop the collection <ArrowRight className="size-3.5" />
            </Link>
            <Link to="/about" className="btn-outline-ink">
              Our story
            </Link>
          </div>

          <dl className="mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-border pt-8">
            {[
              ["Made in", "Lagos"],
              ["Lead time", "14-21 days"],
              ["Craft", "Hand-Lasted"],
            ].map(([k, v]) => (
              <div key={k}>
                <dt className="eyebrow">{k}</dt>
                <dd className="mt-2 font-display text-lg">{v}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <img
            src="/images/urban-royale-embellished-loafers-1.jpg"
            alt="Urban Royale Embellished Loafers"
            className="col-span-2 aspect-square w-full object-cover"
          />
          <img
            src="/images/black-suede-hybrid-accent-mules.jpg"
            alt="Black Suede"
            className="aspect-square w-full object-cover"
          />
          <img
            src="/images/black-woven-texture-cross-slides-1.jpg"
            alt="Cross Slides"
            className="aspect-square w-full object-cover"
          />
        </div>
      </section>

      {/* Category tiles */}
      <section className="mx-auto max-w-7xl px-5 md:px-10">
        <div className="grid gap-3 md:grid-cols-3">
          {[
            { to: "bags" as const, img: "/images/clnx-cognac-leather-sneakers-show.jpg", kicker: "Structured · Geometric", title: "Full Shoes" },
            { to: "necklaces" as const, img: "/images/black-croc-horsebit-mules-1.jpg", kicker: "Sculpted · Bold", title: "Half Shoes" },
          ].map((c) => (
            <Link
              key={c.to}
              to="/shop/$category"
              params={{ category: c.to }}
              className="group relative overflow-hidden"
            >
              <img
                src={c.img}
                alt={c.title}
                className="aspect-4/5 w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 bg-background/85 p-5">
                <p className="eyebrow">{c.kicker}</p>
                <h3 className="mt-1 text-2xl">{c.title}</h3>
              </div>
            </Link>
          ))}
          <div className="relative overflow-hidden bg-secondary">
            <img
              src="/images/process.jpg"
              alt="Our Collection"
              className="aspect-4/5 w-full object-cover opacity-90"
            />
            <div className="absolute inset-x-0 bottom-0 bg-background/85 p-5">
              <p className="eyebrow">Our Collection</p>
              <Link to="/shop" className="mt-1 inline-flex items-center gap-2 text-2xl">
                See everything <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured */}
      <section className="mx-auto max-w-7xl px-5 py-20 md:px-10">
        <div className="flex items-end justify-between border-b border-border pb-5">
          <div>
            <p className="eyebrow">Featured</p>
            <h2 className="mt-2 text-3xl md:text-4xl">New & noted</h2>
          </div>
          <Link to="/shop" className="text-[0.7rem] tracking-[0.2em] uppercase hover:text-chocolate-soft">
            View all
          </Link>
        </div>
        <div className="mt-8 grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-4 md:gap-x-6">
          {featured.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </section>

      {/* Craft */}
      <section className="bg-secondary/70">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-20 md:grid-cols-2 md:px-10">
          <div className="grid grid-cols-2 gap-3">
            <img
              src="/images/black-suede-hybrid-accent-mules.jpg"
              alt=""
              className="aspect-3/4 w-full object-cover"
            />
            <img
              src="/images/black-geometric-ribbon-cross-slides-1.jpg"
              alt=""
              className="mt-20 aspect-3/4 w-full object-cover"
            />
          </div>
          <div>
            <p className="eyebrow">The Craft</p>
            <h2 className="mt-3 text-3xl leading-tight md:text-5xl">
              Every hide, selected for character. Every pair, built to last.
            </h2>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground md:text-base">
              CLNX is a Lagos footwear workshop shaping premium full-grain leather into sharp, modern silhouettes. From structured corporate shoes to casual slides, no shortcuts are taken; because true craftsmanship is felt in every step.
            </p>
            <Link to="/about" className="btn-outline-ink mt-8">
              Read our story
            </Link>
          </div>
        </div>
      </section>

      {/* Bags */}
      <section className="mx-auto max-w-7xl px-5 py-20 md:px-10">
        <div className="flex items-end justify-between border-b border-border pb-5">
          <div>
            <p className="eyebrow">COLLECTIONS</p>
            <h2 className="mt-2 text-3xl md:text-4xl">The signature piece</h2>
          </div>
          <Link
            to="/shop/$category"
            params={{ category: "bags" }}
            className="text-[0.7rem] tracking-[0.2em] uppercase hover:text-chocolate-soft"
          >
            All bags
          </Link>
        </div>
        <div className="mt-8 grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 md:gap-x-6">
          {bags.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="border-y border-border bg-accent/40">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-10">
          <h2 className="text-center text-3xl md:text-4xl">Words from our clients</h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {testimonials.map((t) => (
              <blockquote key={t.who} className="border-t border-border pt-6">
                <p className="font-display text-xl leading-relaxed">“{t.quote}”</p>
                <footer className="eyebrow mt-4">{t.who}</footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="mx-auto max-w-7xl px-5 py-20 md:px-10">
        <div className="grid gap-8 md:grid-cols-2 md:items-end">
          <div>
            <p className="eyebrow">Visit · Order · Enquire</p>
            <h2 className="mt-3 text-3xl md:text-5xl">From our workshop to you.</h2>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">
              Quick orders by WhatsApp. Bespoke fitting inquiries by email. Direct bank-transfer checkout. Orders and crafting begin once payment is confirmed.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 md:justify-end">
            <a href={`mailto:${SHOP.email}`} className="btn-outline-ink">
              {SHOP.email}
            </a>
            <a href={whatsappLink()} target="_blank" rel="noreferrer" className="btn-ink">
              {SHOP.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
