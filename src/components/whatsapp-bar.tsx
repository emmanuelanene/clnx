import { SHOP, whatsappLink } from "@/lib/products";

export function WhatsAppBar() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noreferrer"
      className="block bg-primary px-5 py-3 text-center text-[0.68rem] tracking-[0.18em] uppercase text-primary-foreground transition-colors hover:bg-chocolate-soft"
    >
      Chat on WhatsApp ({SHOP.phone})
    </a>
  );
}
