import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface TypingEffectProps {
	text: string;
	speed?: number;
	className?: string;
	onComplete?: () => void;
}

export function TypingEffect({
	text,
	speed = 50,
	className,
	onComplete,
}: TypingEffectProps) {
	const [displayText, setDisplayText] = useState("");
	const [currentIndex, setCurrentIndex] = useState(0);

	useEffect(() => {
		if (currentIndex < text.length) {
			const timeout = setTimeout(() => {
				setDisplayText((prev) => prev + text[currentIndex]);
				setCurrentIndex((prev) => prev + 1);
			}, speed);

			return () => clearTimeout(timeout);
		} else if (onComplete) {
			onComplete();
		}
	}, [currentIndex, text, speed, onComplete]);

	return (
		<span className={cn("font-code", className)}>
			{displayText}
			<span className="animate-cyber-pulse text-cyber-green">|</span>
		</span>
	);
}
