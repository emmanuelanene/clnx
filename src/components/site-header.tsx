import { Link } from "@tanstack/react-router";
import { Menu, ShoppingBag, X } from "lucide-react";
import { useState } from "react";
import { useCartCount } from "@/lib/cart";

const nav = [
  { to: "/", label: "Home" },
  { to: "/shop", label: "Shop" },
  { to: "/about", label: "About" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const count = useCartCount();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-10">
        <Link to="/" className="leading-none">
          <img src="/images/clnx.png" alt="CLNX logo" className="col-span-2 w-22 object-cover" />
        </Link>

        <nav className="hidden items-center gap-9 md:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              className="text-[0.7rem] tracking-[0.2em] uppercase text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link to="/cart" className="relative p-2" aria-label="Cart">
            <ShoppingBag className="size-5" strokeWidth={1.25} />
            {count > 0 && (
              <span className="absolute -top-0.5 -right-0.5 flex size-4 items-center justify-center rounded-full bg-primary text-[0.6rem] text-primary-foreground">
                {count}
              </span>
            )
            }
          </Link>
          <button className="p-2 md:hidden" onClick={() => setOpen((v) => !v)} aria-label="Menu">
            {open ? (
              <X className="size-5" strokeWidth={1.25} />
            ) : (
              <Menu className="size-5" strokeWidth={1.25} />
            )}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-border bg-background px-5 pb-5 md:hidden">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className="block py-3 text-[0.72rem] tracking-[0.2em] uppercase text-muted-foreground"
              activeProps={{ className: "text-foreground" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
