import { NavLink } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/Logo.svg";

interface NavItem {
	to: string;
	label: string;
}

const links: NavItem[] = [
	{ to: "/how-it-works", label: "How It Works" },
	{ to: "/for-farmers", label: "For Farmers" },
	{ to: "/for-buyers", label: "For Buyers" },
	{ to: "/about", label: "About Us" },
];

export default function Header() {
	const [open, setOpen] = useState(false);

	return (
		<header className="bg-white border-b border-border-light sticky top-0 z-40">
			<div className="max-w-342 mx-auto px-6 flex items-center justify-between h-20">
				<NavLink
					to="/"
					className="flex items-center gap-2"
					onClick={() => setOpen(false)}>
					<img
						src={logo}
						alt="HarvestSafe"
						className="h-12 w-auto object-contain"
					/>
					<span className="font-heading font-bold text-lg text-text-primary">
						Harvest<span className="text-brand-primary">Safe</span>
					</span>
				</NavLink>

				<nav className="hidden lg:flex items-center gap-8">
					{links.map((l) => (
						<NavLink
							key={l.to}
							to={l.to}
							className={({ isActive }) =>
								`font-body text-sm pb-1 border-b-2 transition-colors ${
									isActive
										? "text-brand-primary border-brand-primary font-semibold"
										: "text-text-secondary border-transparent hover:text-brand-primary"
								}`
							}>
							{l.label}
						</NavLink>
					))}
				</nav>

				<div className="flex items-center gap-3">
					<NavLink
						to="/signin"
						className="hidden sm:flex h-10 px-6 items-center justify-center rounded-lg border border-brand-primary text-brand-primary font-body font-semibold text-sm hover:bg-primary-100 transition-colors">
						Sign In
					</NavLink>

					<NavLink
						to="/signup"
						className="hidden sm:flex h-10 px-6 items-center justify-center rounded-lg bg-brand-primary text-white font-body font-semibold text-sm hover:bg-secondary-300 transition-colors">
						Get Started
					</NavLink>

					<button
						className="lg:hidden flex flex-col gap-1.5 p-2"
						aria-label="Toggle menu"
						onClick={() => setOpen((o) => !o)}>
						<span className="w-6 h-0.5 bg-text-primary" />
						<span className="w-6 h-0.5 bg-text-primary" />
						<span className="w-6 h-0.5 bg-text-primary" />
					</button>
				</div>
			</div>

			{open && (
				<div className="lg:hidden flex flex-col gap-4 px-6 py-6 border-t border-border-light">
					{links.map((l) => (
						<NavLink
							key={l.to}
							to={l.to}
							onClick={() => setOpen(false)}
							className={({ isActive }) =>
								`font-body text-sm ${
									isActive
										? "text-brand-primary font-semibold"
										: "text-text-secondary"
								}`
							}>
							{l.label}
						</NavLink>
					))}
					<NavLink
						to="/signin"
						onClick={() => setOpen(false)}
						className="h-10 flex items-center justify-center rounded-lg border border-brand-primary text-brand-primary font-body font-semibold text-sm">
						Sign In
					</NavLink>
					<NavLink
						to="/signup"
						onClick={() => setOpen(false)}
						className="h-10 flex items-center justify-center rounded-lg bg-brand-primary text-white font-body font-semibold text-sm">
						Get Started
					</NavLink>
				</div>
			)}
		</header>
	);
}
