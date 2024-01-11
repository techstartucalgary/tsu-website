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
    item: "Original Basic Crewneck",
    price: "$29.95 CAD",
    image: BlackHoodie,
    description: "placeholder descripton",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black"],
  },
  {
    id: 1,
    item: "Crewneck with Sleeve Print",
    price: "$49.99 CAD",
    image: BlackShortSleeve,
    description: "placeholder descripton",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black"],
  },
];
