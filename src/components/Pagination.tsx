import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginationProps {
	totalItems: number;
	itemsPerPage?: number;
	currentPage: number;
	onPageChange: (page: number) => void;
}

export default function Pagination({
	totalItems,
	itemsPerPage = 10,
	currentPage,
	onPageChange,
}: PaginationProps) {
	const totalPages = Math.ceil(totalItems / itemsPerPage);
	const start = (currentPage - 1) * itemsPerPage + 1;
	const end = Math.min(currentPage * itemsPerPage, totalItems);
	const [goTo, setGoTo] = useState("");

	const visiblePages = [1, 2, 3, 4, 5].filter((p) => p <= totalPages);

	return (
		<div className="flex items-center justify-between px-2 py-4 font-body text-sm text-text-secondary">
			<div className="flex items-center gap-4">
				<span>
					{start}-{end} of {totalItems} items
				</span>
				<span>{itemsPerPage}/page</span>
			</div>

			<div className="flex items-center gap-3">
				<button
					onClick={() => onPageChange(Math.max(1, currentPage - 1))}
					disabled={currentPage === 1}
					className="disabled:opacity-30">
					<ChevronLeft size={18} />
				</button>

				{visiblePages.map((page) => (
					<button
						key={page}
						onClick={() => onPageChange(page)}
						className={`w-7 h-7 rounded ${
							page === currentPage
								? "bg-primary-100 text-brand-primary font-semibold"
								: ""
						}`}>
						{page}
					</button>
				))}

				{totalPages > 6 && <span>...</span>}
				{totalPages > 5 && (
					<button
						onClick={() => onPageChange(totalPages)}
						className={`w-7 h-7 rounded ${
							currentPage === totalPages
								? "bg-primary-100 text-brand-primary font-semibold"
								: ""
						}`}>
						{totalPages}
					</button>
				)}

				<button
					onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
					disabled={currentPage === totalPages}
					className="disabled:opacity-30">
					<ChevronRight size={18} />
				</button>

				<span>Go to</span>
				<input
					value={goTo}
					onChange={(e) => setGoTo(e.target.value)}
					onKeyDown={(e) => {
						if (e.key === "Enter" && goTo) {
							const page = Math.min(Math.max(1, Number(goTo)), totalPages);
							onPageChange(page);
							setGoTo("");
						}
					}}
					className="w-12 h-8 border border-border-default rounded text-center"
				/>
			</div>
		</div>
	);
}
