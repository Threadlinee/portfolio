import { Card, CardContent } from "../components/sections/ui/card.tsx";
import { cn } from "../lib/utils.ts";
import { ReactNode } from "react";

interface CyberCardProps {
	children: ReactNode;
	className?: string;
	glowEffect?: boolean;
	animated?: boolean;
	onClick?: () => void;
}

export function CyberCard({
	children,
	className,
	glowEffect = false,
	animated = true,
	onClick,
}: CyberCardProps) {
	return (
		<Card
			className={cn(
				"bg-gradient-card border-cyber-green/30 hover:border-cyber-green/60 transition-all duration-300",
				"hover:shadow-cyber transform hover:scale-[1.02]",
				glowEffect && "shadow-cyber",
				animated && "animate-fade-in-up",
				onClick && "cursor-pointer",
				className,
			)}
			onClick={onClick}
		>
			<CardContent className="p-6">{children}</CardContent>
		</Card>
	);
}
