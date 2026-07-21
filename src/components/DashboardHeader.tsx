import { Search, Settings, Bell } from "lucide-react";
import avatar from "../assets/avatar.png";

interface DashboardHeaderProps {
	breadcrumbs: string[];
}

export default function DashboardHeader({ breadcrumbs }: DashboardHeaderProps) {
	return (
		<header className="flex items-center justify-between px-8 py-5 bg-bg-primary border-b border-border-light">
			<div className="flex items-center gap-2 font-heading font-bold text-lg">
				{breadcrumbs.map((crumb, i) => (
					<span key={i} className="flex items-center gap-2">
						{i > 0 && <span className="text-text-muted">›</span>}
						<span
							className={
								i === breadcrumbs.length - 1
									? "text-text-primary"
									: "text-primary-400"
							}>
							{crumb}
						</span>
					</span>
				))}
			</div>

			<div className="flex items-center gap-4">
				<div className="relative">
					<Search
						className="absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary"
						size={18}
					/>
					<input
						placeholder="Search for produce..."
						className="pl-10 pr-4 py-2 w-64 border border-border-default rounded-lg text-sm font-body focus:outline-none focus:ring-2 focus:ring-brand-primary"
					/>
				</div>

				<button className="w-9 h-9 rounded-full border border-border-default flex items-center justify-center">
					<Settings size={18} className="text-text-secondary" />
				</button>

				<button className="relative w-9 h-9 rounded-full border border-border-default flex items-center justify-center">
					<Bell size={18} className="text-text-secondary" />
					<span className="absolute top-1 right-1.5 w-2 h-2 bg-danger rounded-full" />
				</button>

				<div className="relative">
					<img
						src={avatar}
						className="w-9 h-9 rounded-full object-cover"
						alt="User"
					/>
					<span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-secondary-300 border-2 border-white rounded-full" />
				</div>
			</div>
		</header>
	);
}
