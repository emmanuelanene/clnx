import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — CLNX" },
      {
        name: "description",
        content:
          "CLNX is founded on a simple idea: that a leather shoe, constructed carefully by hand, commands respect and anchors your entire wardrobe just as much as a perfectly tailored suit..",
      },
      { property: "og:title", content: "CLNX" },
      {
        property: "og:description",
        content: "A Lagos workshop crafting modern classics.",
      },
    ],
  }),
  component: AboutPage,
});

const pillars = [
  ["01", "Material first", "Premium leather only. No shortcuts on durability, finish, or grain."],
  [
    "02",
    "Made by hand",
    "Every pair is lasted and stitched by our artisans in Lagos. No mass production.",
  ],
  [
    "03",
    "Timeless profiles",
    "Structured, refined, and quietly bold. Built for the modern professional who knows the value of a good shoe.",
  ],
];

function AboutPage() {
  return (
    <div className="mx-auto max-w-7xl px-5 py-14 md:px-10 md:py-20">
      <p className="eyebrow">THE WORKSHOP</p>
      <h1 className="mt-4 max-w-2xl text-4xl leading-[1.08] md:text-6xl">
        A Lagos workshop
        <br />
        <em className="not-italic text-chocolate-soft">crafting modern classics.</em>
      </h1>
      <p className="mt-7 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
        CLNX is founded on a simple idea: that a leather shoe, constructed carefully by hand,
        commands respect and anchors your entire wardrobe just as much as a perfectly tailored suit.
      </p>

      <div className="mt-16 grid gap-10 md:grid-cols-2 md:gap-16">
        <div className="grid grid-cols-2 gap-3">
          <img
            src="/images/cognac-black-suede-cross-slides.jpg"
            alt=""
            className="aspect-3/4 w-full object-cover"
          />
          <img
            src="/images/clnx-black-fringe-kiltie-mules.jpg"
            alt=""
            className="mt-10 aspect-3/4 w-full object-cover"
          />
        </div>
        <div>
          <p className="eyebrow">The craft</p>
          <h2 className="mt-3 text-3xl leading-tight md:text-4xl">
            Stitched precisely. Built to endure.
          </h2>
          <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
            Every bag, choker and bracelet leaving the atelier is hand-strung with medium-to-large
            Every corporate oxford, half-shoe, and slide leaving our workshop is crafted from
            premium, carefully selected leathers—featuring clean lines and structured silhouettes.
            We don't do mass-market fast fashion. We make bold, enduring footwear.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Because everything is made by hand, lead times for pre-order pieces are typically 14-21
            working days. We believe true craftsmanship cannot be rushed; the wait is part of the
            experience.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            We're based in <span className="text-foreground">Lagos</span>, shipping nationwide.
          </p>
          <Link to="/shop" className="btn-ink mt-8">
            Shop the collection
          </Link>
        </div>
      </div>

      <div className="mt-20 grid gap-8 border-t border-border pt-12 md:grid-cols-3">
        {pillars.map(([n, title, body]) => (
          <div key={n}>
            <p className="font-display text-3xl text-nude">{n}</p>
            <h3 className="mt-3 text-xl">{title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
