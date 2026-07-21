import { type ReactNode, type ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: ReactNode;
	icon?: ReactNode;
	iconPosition?: "left" | "right";
	size?: "large" | "medium";
	variant?: "primary" | "outline";
}

export default function Button({
	children,
	icon,
	iconPosition = "left",
	size = "large",
	variant = "primary",
	className = "",
	...props
}: ButtonProps) {
	const sizeClasses =
		size === "large" ? "h-10 px-8 min-w-[90px]" : "h-9 px-4 min-w-[82px]";

	const variantClasses =
		variant === "primary"
			? "bg-brand-primary text-text-inverse hover:bg-secondary-300 active:bg-brand-primary-dark disabled:bg-primary-200"
			: "bg-transparent text-brand-primary border border-brand-primary hover:bg-primary-100";

	return (
		<button
			className={`
        ${sizeClasses} ${variantClasses}
        flex items-center justify-center gap-1 rounded-lg
        font-body font-semibold text-[16px]
        transition-colors disabled:cursor-not-allowed
        ${className}
      `}
			{...props}>
			{icon && iconPosition === "left" && icon}
			{children}
			{icon && iconPosition === "right" && icon}
		</button>
	);
}
