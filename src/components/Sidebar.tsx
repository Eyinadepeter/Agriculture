import { Link, useLocation } from "react-router-dom";
import {
	Home,
	Sprout,
	Warehouse,
	Users,
	ShoppingBag,
	Truck,
	PieChart,
	MessageSquare,
	User,
	LogOut,
} from "lucide-react";
import logo from "../assets/Logo.svg";

const NAV_ITEMS = [
	{ label: "Home", path: "/dashboard", icon: Home },
	{ label: "Harvests", path: "/harvests", icon: Sprout },
	{ label: "Storage", path: "/storage", icon: Warehouse },
	{ label: "Market", path: "/market", icon: Users },
	{ label: "Sales", path: "/sales", icon: ShoppingBag },
	{ label: "Logistics", path: "/logistics", icon: Truck },
	{ label: "Analytics", path: "/analytics", icon: PieChart },
	{ label: "Messages", path: "/messages", icon: MessageSquare },
	{ label: "Account", path: "/account", icon: User },
];

export default function Sidebar() {
	const location = useLocation();

	return (
		<aside className="w-40 min-h-screen bg-brand-primary flex flex-col items-center py-6">
			<Link to="/" className="flex flex-col items-center mb-8">
				<img src={logo} className="w-8" alt="HavestSafe" />
				<span className="font-heading font-bold text-white text-sm mt-1">
					HavestSafe
				</span>
			</Link>

			<nav className="flex-1 flex flex-col gap-2 w-full px-3">
				{NAV_ITEMS.map(({ label, path, icon: Icon }) => {
					const isActive = location.pathname === path;
					return (
						<Link
							key={path}
							to={path}
							className={`flex flex-col items-center justify-center gap-1 py-3 rounded-lg text-xs font-body transition-colors ${
								isActive
									? "bg-white text-brand-primary font-semibold"
									: "text-white hover:bg-primary-400"
							}`}>
							<Icon size={20} />
							{label}
						</Link>
					);
				})}
			</nav>

			<button className="flex flex-col items-center gap-1 text-white text-xs mt-6">
				<LogOut size={20} />
				Account
			</button>
		</aside>
	);
}
