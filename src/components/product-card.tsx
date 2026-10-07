import { Link } from "@tanstack/react-router";
import { formatNaira, type Product } from "@/lib/products";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link to="/product/$slug" params={{ slug: product.slug }} className="group block">
      <div className="relative overflow-hidden bg-muted">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="aspect-4/5 w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
        />
        {product.preorder && (
          <span className="absolute top-3 left-3 bg-background/90 px-2.5 py-1 text-[0.6rem] tracking-[0.18em] uppercase text-foreground">
            Pre-order
          </span>
        )}
      </div>
      <div className="mt-4">
        <h3 className="text-base leading-snug">{product.name}</h3>
        <p className="eyebrow mt-1">{product.label}</p>
        <p className="mt-2 text-sm text-muted-foreground">{formatNaira(product.price)}</p>
      </div>
    </Link>
  );
}
