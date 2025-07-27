import { Card, CardContent } from "../components/sections/ui/card.tsx";
import { cn } from "../lib/utils.ts";

interface DashboardCardProps {
	title: string;
	value: string | number;
	subtitle?: string;
	variant?: "default" | "consumed" | "burned" | "remaining";
	className?: string;
}

export function DashboardCard({
	title,
	value,
	subtitle,
	variant = "default",
	className,
}: DashboardCardProps) {
	const getVariantStyles = () => {
		switch (variant) {
			case "consumed":
				return "bg-warning/10 border-warning/20";
			case "burned":
				return "bg-success/10 border-success/20";
			case "remaining":
				return "bg-primary/10 border-primary/20";
			default:
				return "bg-gradient-card border-border";
		}
	};

	const getValueColor = () => {
		switch (variant) {
			case "consumed":
				return "text-warning";
			case "burned":
				return "text-success";
			case "remaining":
				return "text-primary";
			default:
				return "text-foreground";
		}
	};

	return (
		<Card
			className={cn(
				"shadow-soft hover:shadow-strong transition-all duration-300 animate-bounce-in",
				getVariantStyles(),
				className,
			)}
		>
			<CardContent className="p-6">
				<div className="text-center">
					<p className="text-sm font-medium text-muted-foreground mb-2">
						{title}
					</p>
					<p className={cn("text-3xl font-bold mb-1", getValueColor())}>
						{value}
					</p>
					{subtitle && (
						<p className="text-sm text-muted-foreground">{subtitle}</p>
					)}
				</div>
			</CardContent>
		</Card>
	);
}
