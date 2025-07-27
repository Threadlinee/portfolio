import { cn } from "@/lib/utils";

interface ProgressRingProps {
	percentage: number;
	size?: number;
	strokeWidth?: number;
	className?: string;
	children?: React.ReactNode;
}

export function ProgressRing({
	percentage,
	size = 120,
	strokeWidth = 8,
	className,
	children,
}: ProgressRingProps) {
	const radius = (size - strokeWidth) / 2;
	const circumference = radius * 2 * Math.PI;
	const offset =
		circumference - (Math.min(percentage, 100) / 100) * circumference;

	return (
		<div
			className={cn("relative", className)}
			style={{ width: size, height: size }}
		>
			<svg width={size} height={size} className="transform -rotate-90">
				{/* Background circle */}
				<circle
					cx={size / 2}
					cy={size / 2}
					r={radius}
					stroke="hsl(var(--progress-bg))"
					strokeWidth={strokeWidth}
					fill="transparent"
				/>
				{/* Progress circle */}
				<circle
					cx={size / 2}
					cy={size / 2}
					r={radius}
					stroke="hsl(var(--primary))"
					strokeWidth={strokeWidth}
					fill="transparent"
					strokeDasharray={circumference}
					strokeDashoffset={offset}
					strokeLinecap="round"
					className="transition-all duration-500 ease-out"
					style={{
						filter: "drop-shadow(0 0 6px hsl(var(--primary) / 0.4))",
					}}
				/>
			</svg>
			{children && (
				<div className="absolute inset-0 flex items-center justify-center">
					{children}
				</div>
			)}
		</div>
	);
}
