export interface Product {
  id: number;
  name: string;
  price: string;
  priceNumber: number;
  tag: string;
  img: string;
  category: "footwear" | "apparel" | "accessories" | "training";
}

export const gear: Product[] = [
  {
    id: 1,
    name: "Aero React Pro Shoes",
    price: "$210",
    priceNumber: 210,
    tag: "NEW RELEASE",
    img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80",
    category: "footwear",
  },
  {
    id: 2,
    name: "Velocity Compression Tights",
    price: "$85",
    priceNumber: 85,
    tag: "BEST SELLER",
    img: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=800&q=80",
    category: "apparel",
  },
  {
    id: 3,
    name: "Surge Tech Jacket",
    price: "$145",
    priceNumber: 145,
    tag: "WEATHERPROOF",
    img: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=800&q=80",
    category: "apparel",
  },
  {
    id: 4,
    name: "Ignite Training Gloves",
    price: "$45",
    priceNumber: 45,
    tag: "ESSENTIAL",
    img: "https://images.unsplash.com/photo-1583454155184-870a1f63aebc?auto=format&fit=crop&w=800&q=80",
    category: "accessories",
  },
  {
    id: 5,
    name: "Quantum Running Shorts",
    price: "$60",
    priceNumber: 60,
    tag: "NEW",
    img: "https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&w=800&q=80",
    category: "apparel",
  },
  {
    id: 6,
    name: "Apex Training Mat",
    price: "$75",
    priceNumber: 75,
    tag: "ACCESSORY",
    img: "https://images.unsplash.com/photo-1592432678016-e910b452f9a2?auto=format&fit=crop&w=800&q=80",
    category: "accessories",
  },
  {
    id: 7,
    name: "Hyperion Lifting Belt",
    price: "$90",
    priceNumber: 90,
    tag: "TRAINING",
    img: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=800&q=80",
    category: "training",
  },
  {
    id: 8,
    name: "Strider Edge Sneakers",
    price: "$180",
    priceNumber: 180,
    tag: "POPULAR",
    img: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=800&q=80",
    category: "footwear",
  },
  {
    id: 9,
    name: "Vortex Hydration Bottle",
    price: "$35",
    priceNumber: 35,
    tag: "GEAR",
    img: "https://images.unsplash.com/photo-1523362628745-0c100150b504?auto=format&fit=crop&w=800&q=80",
    category: "accessories",
  },
  {
    id: 10,
    name: "Titan Weight Vest",
    price: "$120",
    priceNumber: 120,
    tag: "PRO",
    img: "https://images.unsplash.com/photo-1620188467120-5042ed1eb5da?auto=format&fit=crop&w=800&q=80",
    category: "training",
  },
  {
    id: 11,
    name: "Swift-Dry Tee",
    price: "$55",
    priceNumber: 55,
    tag: "CORE",
    img: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&w=800&q=80",
    category: "apparel",
  },
  {
    id: 12,
    name: "Pinnacle Trail Runners",
    price: "$165",
    priceNumber: 165,
    tag: "OUTDOOR",
    img: "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?auto=format&fit=crop&w=800&q=80",
    category: "footwear",
  },
];
