import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.svg";
import Button from "./Button";

const NAV_LINKS = [
	{ label: "How It Works", path: "/how-it-works" },
	{ label: "For Farmers", path: "/for-farmers" },
	{ label: "For Buyers", path: "/for-buyers" },
	{ label: "About Us", path: "/about" },
];

export default function Navbar() {
	const location = useLocation();

	return (
		<nav className="flex items-center justify-between px-8 py-5 bg-bg-primary border-b border-border-light">
			<Link to="/" className="flex items-center gap-2">
				<img src={logo} className="w-8" alt="HavestSafe" />
				<span className="font-heading font-bold text-lg text-text-primary">
					Havest<span className="text-brand-primary">Safe</span>
				</span>
			</Link>

			<div className="flex items-center gap-8">
				{NAV_LINKS.map((link) => {
					const isActive = location.pathname === link.path;
					return (
						<Link
							key={link.path}
							to={link.path}
							className={`font-body text-[16px] pb-1 border-b-2 transition-colors ${
								isActive
									? "text-brand-primary border-brand-primary font-semibold"
									: "text-text-secondary border-transparent hover:text-brand-primary"
							}`}>
							{link.label}
						</Link>
					);
				})}
			</div>

			<div className="flex items-center gap-3">
				<Button variant="outline" size="medium">
					Sign In
				</Button>
				<Button variant="primary" size="medium">
					Get Started
				</Button>
			</div>
		</nav>
	);
}
