import type { ReactElement } from "react";
import {
  Search,
  Settings,
  Bell,
  MapPin,
  Plus,
} from "lucide-react";

import avatar from "../../assets/manholding.png";

export default function Navbar(): ReactElement {
  return (
    <header className="space-y-5">
      {/* Top Row */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">
            Dashboard
          </h1>

          <div className="flex items-center gap-2 mt-2 text-gray-500 text-sm">
            <MapPin size={15} />
            <span>12, Opebi Ikeja, Lagos</span>
          </div>
        </div>

        <div className="flex items-center gap-5">
          {/* Search */}
          <div className="relative flex-1 max-w-md hidden sm:block">
  <Search
    size={18}
    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
  />

  <input
    type="text"
    placeholder="Search produce..."
    className="w-full rounded-xl border py-3 pl-11 pr-4 outline-none focus:ring-2 focus:ring-green-600"
  />
</div>

          {/* Settings */}
          <button className="w-10 h-10 rounded-full border flex items-center justify-center hover:bg-gray-100">
            <Settings size={18} />
          </button>

          {/* Notifications */}
          <button className="relative w-10 h-10 rounded-full border flex items-center justify-center hover:bg-gray-100">
            <Bell size={18} />

            <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-red-500"></span>
          </button>

          {/* Avatar */}
          <img
            src={avatar}
            alt="Profile"
            className="w-11 h-11 rounded-full object-cover"
          />
        </div>
      </div>

      {/* Bottom Row */}
      <div className="flex justify-end gap-8 text-sm">
        <button className="flex items-center gap-2 text-green-700 font-medium hover:text-green-800">
          <Plus size={16} />
          Add Harvest
        </button>

        <button className="text-green-700 font-medium hover:text-green-800">
          Explore Market
        </button>
      </div>
    </header>
  );
}