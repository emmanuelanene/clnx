import { useSyncExternalStore } from "react";
import { products, type Product } from "./products";

export type CartLine = { slug: string; qty: number };

const KEY = "zobabeads-cart";
let lines: CartLine[] = [];
let hydrated = false;
const listeners = new Set<() => void>();
const EMPTY: CartLine[] = [];

function emit() {
  listeners.forEach((l) => l());
}

function persist() {
  try {
    localStorage.setItem(KEY, JSON.stringify(lines));
  } catch {
    /* ignore */
  }
}

function hydrate() {
  if (hydrated || typeof window === "undefined") return;
  hydrated = true;
  try {
    const raw = localStorage.getItem(KEY);
    if (raw) {
      const parsed = JSON.parse(raw) as CartLine[];
      if (Array.isArray(parsed)) {
        lines = parsed.filter((l) => l && typeof l.slug === "string" && l.qty > 0);
      }
    }
  } catch {
    /* ignore */
  }
  emit();
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  hydrate();
  return () => listeners.delete(listener);
}

export function addToCart(slug: string, qty = 1) {
  const existing = lines.find((l) => l.slug === slug);
  if (existing) lines = lines.map((l) => (l.slug === slug ? { ...l, qty: l.qty + qty } : l));
  else lines = [...lines, { slug, qty }];
  persist();
  emit();
}

export function setQty(slug: string, qty: number) {
  lines = qty <= 0 ? lines.filter((l) => l.slug !== slug) : lines.map((l) => (l.slug === slug ? { ...l, qty } : l));
  persist();
  emit();
}

export function removeFromCart(slug: string) {
  setQty(slug, 0);
}

export function clearCart() {
  lines = [];
  persist();
  emit();
}

export function useCart() {
  return useSyncExternalStore(
    subscribe,
    () => lines,
    () => EMPTY,
  );
}

export type CartItem = { product: Product; qty: number };

export function useCartItems(): CartItem[] {
  const current = useCart();
  return current
    .map((l) => {
      const product = products.find((p) => p.slug === l.slug);
      return product ? { product, qty: l.qty } : null;
    })
    .filter((x): x is CartItem => x !== null);
}

export function useCartCount() {
  const current = useCart();
  return current.reduce((n, l) => n + l.qty, 0);
}
