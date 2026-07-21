import { ArrowRight, Heart, MapPin, Package } from "lucide-react";
import type { ReactElement } from "react";

interface Market {
  id: number;
  image: string;
  produce: string;
  buyer: string;
  location: string;
  quantity: string;
  price: string;
}

interface MarketCardProps {
  market: Market;
}

export default function MarketCard({ market }: MarketCardProps): ReactElement {
  return (
    <div className="overflow-hidden rounded-3xl bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      {/* Image */}
      <div className="relative">
        <img
          src={market.image}
          alt={market.produce}
          className="h-52 w-full object-cover"
        />

        <button
          type="button"
          className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow"
        >
          <Heart size={18} />
        </button>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-lg font-semibold">
              {market.produce}
            </h3>

            <p className="mt-1 text-sm text-gray-500">
              Buyer: {market.buyer}
            </p>
          </div>

          <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
            {market.price}
          </span>
        </div>

        <div className="mt-5 flex justify-between text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <Package size={16} />
            <span>{market.quantity}</span>
          </div>

          <div className="flex items-center gap-2">
            <MapPin size={16} />
            <span>{market.location}</span>
          </div>
        </div>

        <button
          type="button"
          className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-green-700 py-3 font-medium text-white transition hover:bg-green-800"
        >
          View Details
          <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
}