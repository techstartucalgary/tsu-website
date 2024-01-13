import BasicCrewneck from "../../images/merch/BasicCrewneck.jpg";
import BasicCrewneckWithSleevePrint from "../../images/merch/BasicCrewneckWithSleevePrint.jpg";

export type MerchProperties = {
  id: number;
  item: string;
  price: string;
  image: string;
  description: string;
  sizes: string[];
  colors: string[];
};

export const merchList: MerchProperties[] = [
  {
    id: 0,
    item: "Original Basic Crewneck",
    price: "$29.95 CAD",
    image: BasicCrewneck,
    description: "placeholder descripton",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black"],
  },
  {
    id: 1,
    item: "Crewneck with Sleeve Print",
    price: "$49.99 CAD",
    image: BasicCrewneckWithSleevePrint,
    description: "placeholder descripton",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black"],
  },
];
