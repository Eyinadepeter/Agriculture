import type { ReactElement } from "react";
import MarketCard from "./MarketCard";

import tomatoes from "../../assets/tomatoes.jpg";
import harvestImage from "../../assets/harvest.jpg";
import farmingImage from "../../assets/farming.jpg";
import warehouseImage from "../../assets/warehouse.jpg";

interface Market {
  id: number;
  image: string;
  produce: string;
  buyer: string;
  location: string;
  quantity: string;
  price: string;
}

const markets: Market[] = [
  {
    id: 1,
    image: tomatoes,
    produce: "Fresh Tomatoes",
    buyer: "FreshMart Ltd",
    location: "Lagos",
    quantity: "500 kg",
    price: "₦750/kg",
  },
  {
    id: 2,
    image: harvestImage,
    produce: "Bell Peppers",
    buyer: "Green Foods",
    location: "Abuja",
    quantity: "320 kg",
    price: "₦680/kg",
  },
  {
    id: 3,
    image: farmingImage,
    produce: "Red Onions",
    buyer: "MarketHub",
    location: "Kaduna",
    quantity: "700 kg",
    price: "₦540/kg",
  },
  {
    id: 4,
    image: warehouseImage,
    produce: "Fresh Carrots",
    buyer: "FarmLink",
    location: "Jos",
    quantity: "250 kg",
    price: "₦610/kg",
  },
];

export default function MarketGrid(): ReactElement {
  return (
    <section className="mt-8">
      <div className="mb-5 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-semibold text-gray-800">
            Available Market
          </h2>

          <p className="text-sm text-gray-500">
            Browse verified buyers looking for fresh produce.
          </p>
        </div>

        <button className="rounded-xl border px-4 py-2 text-sm font-medium hover:bg-gray-50">
          View All
        </button>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-2">
        {markets.map((market) => (
          <MarketCard key={market.id} market={market} />
        ))}
      </div>
    </section>
  );
}