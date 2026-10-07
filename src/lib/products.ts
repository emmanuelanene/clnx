export type Category = "fullshoes" | "halfshoes" | "slides" | "others";

export type Product = {
  slug: string;
  name: string;
  label: string;
  category: Category;
  price: number;
  image: string;
  preorder?: boolean;
  description: string;
  materials: string;
};

const img = (f: string) => `/images/${f}`;

export const products: Product[] = [

  {
    slug: "espresso-woven-double-monk-loafers",
    name: "Espresso Woven Double Monk Loafers",
    label: "Woven Loafer",
    category: "fullshoes",
    price: 85000,
    image: img("espresso-woven-double-monk-loafers.jpg"),
    description:
      "Handcrafted double monk-strap loafers featuring an intricate woven basket-weave leather upper in rich espresso brown, accented with dual polished brass buckle closures.",
    materials: "Hand-woven genuine calfskin leather upper, leather lining, brass buckles, stitched leather sole.",
  },
  {
    slug: "black-floral-tapestry-penny-loafers",
    name: "Black Floral Tapestry Penny Loafers",
    label: "Tapestry Loafer",
    category: "fullshoes",
    price: 80000,
    image: img("black-floral-tapestry-penny-loafers.jpg"),
    description:
      "Elegant full-grain black leather penny loafers distinguished by an ornate floral-embroidered fabric vamp and classic serrated strap detailing.",
    materials: "Premium black box-calf leather, embroidered Jacquard textile vamp, leather lining, stacked leather heel.",
  },
  {
    slug: "black-white-lug-sole-spectator-loafers",
    name: "Black & White Lug-Sole Spectator Loafers",
    label: "Two-Tone Loafer",
    category: "fullshoes",
    price: 80000,
    image: img("black-white-lug-sole-spectator-loafers.jpg"),
    description:
      "Bold two-tone penny loafers combining smooth black leather and pristine white leather vamps, set on a heavy-duty lug commando sole for a modern edge.",
    materials: "Dual-tone genuine calfskin leather upper, leather interior, durable commando rubber lug sole.",
  },
  {
    slug: "deep-chestnut-heritage-horsebit-loafers",
    name: "Deep Chestnut Heritage Horsebit Loafers",
    label: "Horsebit Loafer",
    category: "fullshoes",
    price: 85000,
    image: img("deep-chestnut-heritage-horsebit-loafers.jpg"),
    description:
      "Timeless apron-toe loafers crafted from hand-burnished deep chestnut leather, highlighted by classic antique brass horsebit hardware across the vamp.",
    materials: "Full-grain burnished calfskin leather, antique brass hardware, full leather lining, leather sole.",
  },
  {
    slug: "black-tropical-canvas-penny-loafers",
    name: "Black & Tropical Canvas Penny Loafers",
    label: "Artisanal Loafer",
    category: "fullshoes",
    price: 80000,
    image: img("black-tropical-canvas-penny-loafers.jpg"),
    description:
      "Statement penny loafers featuring smooth black leather construction contrasted with a colorful tropical botanical canvas front panel and white welt stitching.",
    materials: "Smooth black leather trim, printed botanical cotton-canvas vamp, leather lining, contrast-stitched rubber outsole.",
  },
  {
    slug: "dark-chocolate-suede-chunky-horsebit-loafers",
    name: "Dark Chocolate Suede Chunky Horsebit Loafers",
    label: "Suede Loafer",
    category: "fullshoes",
    price: 80000,
    image: img("dark-chocolate-suede-chunky-horsebit-loafers.jpg"),
    description:
      "Rich dark chocolate brown suede loafers featuring gold-tone horsebit hardware set on a thick ribbed platform outsole for refined casual styling.",
    materials: "Premium suede leather upper, gold-plated hardware, cushioned leather footbed, heavy-duty ribbed rubber sole.",
  },


  {
    slug: "black-embellished-tabi-penny-loafers",
    name: "Black Embellished Tabi Penny Loafers",
    label: "Tabi Loafer",
    category: "fullshoes",
    price: 85000,
    image: img("black-embellished-tabi-penny-loafers.jpg"),
    description:
      "Avant-garde split-toe Tabi penny loafers in smooth black leather, detailed with an eclectic curation of vintage-inspired metallic insect charms, rhinestones, and polished gemstone studs atop a chunky platform sole.",
    materials: "Full-grain black calfskin leather, antique metallic hardware, synthetic gemstone embellishments, rubber platform sole.",
  },
  {
    slug: "black-white-croc-tassel-wingtip-loafers",
    name: "Black & White Croc Tassel Wingtip Loafers",
    label: "Tassel Loafer",
    category: "fullshoes",
    price: 85000,
    image: img("black-white-croc-tassel-wingtip-loafers.jpg"),
    description:
      "Striking two-tone spectator loafers combining high-gloss black patent wingtip overlays with a textured white crocodile-embossed leather apron, finished with double black leather tassels and brogue perforations.",
    materials: "Glossy black patent leather, white crocodile-embossed leather vamp, leather interior, stacked rubber sole.",
  },
  {
    slug: "classic-black-leather-penny-loafers",
    name: "Classic Black Leather Penny Loafers",
    label: "Penny Loafer",
    category: "fullshoes",
    price: 75000,
    image: img("classic-black-leather-penny-loafers.jpg"),
    description:
      "Timeless all-black penny loafers crafted from smooth, supple calfskin leather, featuring neat apron-toe stitching, a traditional cut-out keeper strap, and a streamlined silhouette for versatile formal wear.",
    materials: "Smooth full-grain black calfskin leather, soft leather lining, cushioned leather footbed, durable dress sole.",
  },


  {
    slug: "black-blue-criss-cross-slides",
    name: "Black & Blue Criss-Cross Slides",
    label: "Cross Slide",
    category: "slides",
    price: 45000,
    image: img("black-blue-criss-cross-slides.jpg"),
    description:
      "Modern criss-cross slides featuring a striking contrast of royal blue suede and smooth black leather straps, set on a comfortable black leather footbed.",
    materials: "Suede and smooth calfskin leather upper, leather footbed, durable rubber sole."
  },
  {
    slug: "brown-studded-textured-slides",
    name: "Brown Studded Textured Slides",
    label: "Studded Slide",
    category: "slides",
    price: 50000,
    image: img("brown-studded-textured-slides.jpg"),
    description:
      "Edgy slip-on slides crafted from brown textured crocodile-embossed leather, detailed with metallic spike studs across the vamp and finished with a chunky white ribbed platform sole.",
    materials: "Crocodile-embossed leather upper, metallic spike studs, molded footbed, thick EVA sole."
  },
  {
    slug: "brown-white-cutout-leather-slides",
    name: "Brown & White Cutout Leather Slides",
    label: "Cutout Slide",
    category: "slides",
    price: 45000,
    image: img("brown-white-cutout-leather-slides.jpg"),
    description:
      "Elegant two-tone slides featuring a geometric cutout strap design in smooth chestnut brown and contrasting white leather, offering a refined warm-weather aesthetic.",
    materials: "Smooth full-grain leather upper, soft leather lining, padded leather insole, rubber outsole."
  },
  {
    slug: "black-woven-strap-slides",
    name: "Black Woven Strap Slides",
    label: "Woven Slide",
    category: "slides",
    price: 40000,
    image: img("black-woven-strap-slides.jpg"),
    description:
      "Minimalist black slides designed with durable woven textile criss-cross straps, paired with a contoured black footbed for all-day comfort and casual versatility.",
    materials: "Heavy-duty woven nylon canvas straps, molded synthetic footbed, rubber sole."
  },
  {
    slug: "navy-suede-cutout-slides",
    name: "Navy Suede Cutout Slides",
    label: "Suede Cutout Slide",
    category: "slides",
    price: 45000,
    image: img("navy-suede-cutout-slides.jpg"),
    description:
      "Sophisticated slide sandals featuring a geometric cutout vamp in premium navy blue suede with contrast white stitching, resting securely on a sleek grey footbed.",
    materials: "Premium navy suede leather upper, contrast stitching, smooth leather footbed, rubber sole."
  },
  {
    slug: "brown-white-knotted-thong-sandals",
    name: "Brown & White Knotted Thong Sandals",
    label: "Thong Sandal",
    category: "slides",
    price: 40000,
    image: img("brown-white-knotted-thong-sandals.jpg"),
    description:
      "Stylish thong-style sandals featuring a unique knotted leather strap design combining rich brown and crisp white leather elements, perfect for relaxed summer styling.",
    materials: "Genuine two-tone leather straps, leather footbed with contrast topstitching, flat rubber sole."
  },
  {
    slug: "yellow-knotted-thong-sandals",
    name: "Yellow Knotted Thong Sandals",
    label: "Thong Sandal",
    category: "slides",
    price: 40000,
    image: img("yellow-knotted-thong-sandals.jpg"),
    description:
      "Vibrant mustard yellow thong sandals highlighted by a distinctive knotted leather strap, offering a bright, comfortable, and artisanal option for casual wear.",
    materials: "Smooth yellow calfskin leather upper, stitched leather footbed, flexible rubber sole."
  },

  {
    slug: "black-smooth-cupsole-penny-loafers",
    name: "Black Smooth Cupsole Penny Loafers",
    label: "Sneaker Loafer",
    category: "fullshoes",
    price: 80000,
    image: img("black-smooth-cupsole-penny-loafers.jpg"),
    description:
      "Modern hybrid penny loafers crafted from smooth black leather, set on a clean contrast white rubber cupsole for a refined balance of tailored structure and everyday comfort.",
    materials: "Smooth full-grain calfskin leather upper, soft leather interior, durable contrast rubber cupsole."
  },
  {
    slug: "black-pebbled-leather-sneaker-loafers",
    name: "Black Pebbled Leather Sneaker Loafers",
    label: "Pebbled Loafer",
    category: "fullshoes",
    price: 80000,
    image: img("black-pebbled-leather-sneaker-loafers.jpg"),
    description:
      "Textured penny loafers engineered with pebbled black leather, featuring a pop of amber-orange lining, heel pull tab, and a thick white platform rubber sole.",
    materials: "Pebbled full-grain leather upper, contrast leather lining, rear pull tab, thick rubber sole."
  },
  {
    slug: "cognac-leather-low-top-sneakers",
    name: "Cognac Leather Low-Top Sneakers",
    label: "Dress Sneaker",
    category: "fullshoes",
    price: 75000,
    image: img("cognac-leather-low-top-sneakers.jpg"),
    description:
      "Sleek minimalist dress sneakers in rich cognac brown leather, constructed with tonal laces, clean eyelets, and a contrast white low-profile rubber sole.",
    materials: "Smooth calfskin leather upper, tonal flat cotton laces, leather lining, flexible rubber sole."
  },


  {
    slug: "black-kiltie-fringe-brogue-mules",
    name: "Black Kiltie Fringe Brogue Mules",
    label: "Kiltie Mule",
    category: "halfshoes",
    price: 70000,
    image: img("black-kiltie-fringe-brogue-mules.jpg"),
    description:
      "Refined backless loafers crafted from sleek black leather, featuring classic brogue toe perforations, a traditional kiltie fringe apron, and an adjustable single buckle monk strap.",
    materials: "Full-grain calfskin leather, antique metallic buckle hardware, cushioned leather footbed, dress rubber sole."
  },
  {
    slug: "chestnut-kiltie-fringe-brogue-mules",
    name: "Chestnut Kiltie Fringe Brogue Mules",
    label: "Kiltie Mule",
    category: "halfshoes",
    price: 70000,
    image: img("chestnut-kiltie-fringe-brogue-mules.jpg"),
    description:
      "Sophisticated chestnut brown leather mules highlighted by decorative brogue perforations across the toe, an iconic kiltie fringe, and a burnished side-buckle closure.",
    materials: "Hand-finished cognac calfskin leather, metal buckle, soft leather lining, stacked rubber sole."
  },
  {
    slug: "black-suede-leather-strap-mules",
    name: "Black Suede & Leather Strap Mules",
    label: "Strap Mule",
    category: "halfshoes",
    price: 65000,
    image: img("black-suede-leather-strap-mules.jpg"),
    description:
      "Sleek backless dress shoes combining a rich black suede vamp with smooth leather side panels, finished with a subtle gold-tone side-buckle cross strap.",
    materials: "Premium black suede and smooth calfskin leather, gold-finished metal buckle, padded leather lining, flat dress sole."
  },
  {
    slug: "black-suede-cork-footbed-clogs",
    name: "Black Suede Cork-Footbed Clogs",
    label: "Cork Clog",
    category: "halfshoes",
    price: 60000,
    image: img("black-suede-cork-footbed-clogs.jpg"),
    description:
      "Casual backless clog mules rendered in ultra-soft black suede, featuring an adjustable metal buckle strap and an anatomically contoured cork footbed for maximum comfort.",
    materials: "Soft suede leather upper, metal pin buckle, anatomical cork footbed with suede lining, lightweight EVA outsole."
  }

];

export const categoryLabels: Record<Category | "all", string> = {
  all: "All",
  fullshoes: "Corporate & Dress Shoes",
  halfshoes: "Half-shoes & Loafers",
  slides: "Slides & Sandals",
  others: "Shoe Care & Accessories",
};

export function formatNaira(amount: number) {
  return `₦${amount.toLocaleString("en-NG")}`;
}

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}

export const SHOP = {
  name: "CLNX",
  email: "clnxonline@gmail.com",
  phone: "+2348101761889",
  whatsapp: "2348101761889",
  instagram: "https://www.instagram.com/clnx_the_brand",
  instagramHandle: "@clnx_the_brand",
  location: "Lagos · Nigeria",
};

export function whatsappLink(message = "Hi CLNX, I'd like to place an order.") {
  return `https://wa.me/${SHOP.whatsapp}?text=${encodeURIComponent(message)}`;
}
