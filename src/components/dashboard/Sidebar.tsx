import type { ReactElement } from "react";
import { NavLink } from "react-router-dom";
import {
  Home,
  Wheat,
  Warehouse,
  Store,
  DollarSign,
  Truck,
  BarChart3,
  MessageSquare,
  User,
  LogOut,
  type LucideIcon,
} from "lucide-react";

import logo from "../../assets/Logo-white.svg";

interface MenuItem {
  name: string;
  icon: LucideIcon;
  path: string;
}

const menuItems: MenuItem[] = [
  { name: "Home", icon: Home, path: "/dashboard" },
  { name: "Harvests", icon: Wheat, path: "/harvests" },
  { name: "Storage", icon: Warehouse, path: "/storage" },
  { name: "Market", icon: Store, path: "/market" },
  { name: "Sales", icon: DollarSign, path: "/sales" },
  { name: "Logistics", icon: Truck, path: "/logistics" },
  { name: "Analytics", icon: BarChart3, path: "/analytics" },
  { name: "Messages", icon: MessageSquare, path: "/messages" },
  { name: "Account", icon: User, path: "/account" },
];

export default function Sidebar(): ReactElement {
  return (
    <aside className="hidden lg:sticky lg:top-0 lg:flex w-24 h-screen bg-green-800 text-white flex-col justify-between py-6">
      {/* Logo */}
      <div>
        <div className="flex flex-col items-center mb-10">
          <img src={logo} alt="HarvestSafe" className="w-10 h-10" />
          <span className="text-[11px] mt-2 font-semibold">
            HarvestSafe
          </span>
        </div>

        {/* Navigation */}
        <nav className="space-y-3 px-2">
          {menuItems.map(({ name, icon: Icon, path }) => (
            <NavLink
              key={name}
              to={path}
              className={({ isActive }) =>
                `flex flex-col items-center gap-2 rounded-xl py-3 transition-all ${
                  isActive
                    ? "bg-white text-green-800"
                    : "hover:bg-green-700 text-white"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <Icon
                    size={18}
                    className={`transition-colors ${isActive ? "text-green-800" : "text-white"}`}
                  />
                  <span className={`text-[11px] ${isActive ? "text-green-800" : "text-white"}`}>
                    {name}
                  </span>
                </>
              )}
            </NavLink>
          ))}
        </nav>
      </div>

      {/* Logout */}
      <div className="px-2">
        <button className="flex flex-col items-center gap-2 w-full rounded-xl py-3 hover:bg-green-700 transition">
          <LogOut size={18} />
          <span className="text-[11px]">Logout</span>
        </button>
      </div>
    </aside>
  );
}