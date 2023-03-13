import BlackHoodie from "../../images/merch/BlackHoodie.jpeg";
import BlackBeanie from "../../images/merch/BlackBeanie.jpeg";
import ToteBag from "../../images/merch/ToteBag.jpeg";
import BlackShortSleeve from "../../images/merch/BlackShortSleeve.jpeg";
import MousePad1 from "../../images/merch/MousePad1.jpeg";

export type MerchComponents = {
  id: number;
  item: string;
  price: string;
  image: string;
  description: string;
};

export const merchList: MerchComponents[] = [
  {
    id: 0,
    item: "Hoodie",
    price: "$49.99",
    image: BlackHoodie,
    description: "Available in White and Black",
  },
  {
    id: 1,
    item: "Short Sleeve T-Shirt",
    price: "$25.99",
    image: BlackShortSleeve,
    description: "Available in White and Black",
  },
  {
    id: 2,
    item: "Gaming Mouse Pad (36in x 18in)",
    price: "$35.99",
    image: MousePad1,
    description: "Varying Designs",
  },
  {
    id: 3,
    item: "Eco Tote Bag",
    price: "$39.99",
    image: ToteBag,
    description: "",
  },
  {
    id: 4,
    item: "Beanie",
    price: "$29.99",
    image: BlackBeanie,
    description: "Available in White and Black",
  },
];
