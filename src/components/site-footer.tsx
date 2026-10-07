import { Link } from "@tanstack/react-router";
import { SHOP, whatsappLink } from "@/lib/products";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border bg-secondary/60">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-3 md:px-10">
        <div>
          <img
            src="/images/clnx.png"
            alt="CLNX logo"
            className="col-span-2 w-40 object-cover"
          />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
            Handcrafted leather footwear designed for the modern professional. From structured
            corporate shoes to everyday half-shoes, crafted with precision in Lagos.
          </p>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noreferrer"
            className="btn-outline-ink mt-6"
          >
            Chat on WhatsApp
          </a>
        </div>

        <div>
          <p className="eyebrow">Explore</p>
          <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
            <li>
              <Link to="/shop" className="hover:text-foreground">
                Shop all
              </Link>
            </li>
            <li>
              <Link
                to="/shop/$category"
                params={{ category: "fullshoes" }}
                className="hover:text-foreground"
              >
                Corporate Collection
              </Link>
            </li>
            <li>
              <Link
                to="/shop/$category"
                params={{ category: "halfshoes" }}
                className="hover:text-foreground"
              >
                Half Shoes & Mules
              </Link>
            </li>
            <li>
              <Link
                to="/shop/$category"
                params={{ category: "slides" }}
                className="hover:text-foreground"
              >
                Slides & Sandals
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-foreground">
                About
              </Link>
            </li>
            <li>
              <Link to="/policies" className="hover:text-foreground">
                Policies
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="eyebrow">Visit · Contact</p>
          <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
            <li>{SHOP.location}</li>
            <li>
              <a href={`mailto:${SHOP.email}`} className="hover:text-foreground">
                {SHOP.email}
              </a>
            </li>
            <li>
              <a href={`tel:${SHOP.phone.replace(/\s/g, "")}`} className="hover:text-foreground">
                {SHOP.phone}
              </a>
            </li>
            <li>
              <a
                href={SHOP.instagram}
                target="_blank"
                rel="noreferrer"
                className="hover:text-foreground"
              >
                {SHOP.instagramHandle}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border px-5 py-6 md:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 text-[0.68rem] tracking-[0.16em] uppercase text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} CLNX. All rights reserved.</p>
          <p>Handmade in Lagos · No refunds after payment</p>
        </div>
      </div>
    </footer>
  );
}
