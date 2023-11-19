import BlackHoodie from "../../images/merch/BlackHoodie.jpeg";
import BlackShortSleeve from "../../images/merch/BlackShortSleeve.jpeg";

export type MerchComponents = {
  id: number;
  item: string;
  price: string;
  image: string;
  description: string;
  sizes: string[];
  colors: string[];
};

export const merchList: MerchComponents[] = [
  {
    id: 0,
    item: "Crewneck",
    price: "$10.00 CAD",
    image: BlackHoodie,
    description: "placeholder descripton",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black"],
  },
  {
    id: 1,
    item: "T-Shirt",
    price: "$10.00 CAD",
    image: BlackShortSleeve,
    description: "placeholder descripton",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black"],
  },
];
