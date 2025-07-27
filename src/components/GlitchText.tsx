import { cn } from "../lib/utils.ts";
import { useState, useEffect } from "react";

interface GlitchTextProps {
	text: string;
	className?: string;
	glitchOnHover?: boolean;
}

export function GlitchText({
	text,
	className,
	glitchOnHover = false,
}: GlitchTextProps) {
	const [isGlitching, setIsGlitching] = useState(false);
	const [displayText, setDisplayText] = useState(text);

	useEffect(() => {
		if (isGlitching) {
			const chars = "!@#$%^&*()_+-=[]{}|;:,.<>?";
			let glitchCount = 0;
			const maxGlitches = 5;

			const interval = setInterval(() => {
				if (glitchCount < maxGlitches) {
					const glitchedText = text
						.split("")
						.map((char) =>
							Math.random() < 0.3
								? chars[Math.floor(Math.random() * chars.length)]
								: char,
						)
						.join("");
					setDisplayText(glitchedText);
					glitchCount++;
				} else {
					setDisplayText(text);
					setIsGlitching(false);
					clearInterval(interval);
				}
			}, 100);

			return () => clearInterval(interval);
		}
	}, [isGlitching, text]);

	const triggerGlitch = () => {
		if (glitchOnHover) {
			setIsGlitching(true);
		}
	};

	return (
		<span
			className={cn(
				"font-cyber text-glow transition-all duration-300",
				isGlitching && "animate-glitch",
				className,
			)}
			onMouseEnter={triggerGlitch}
		>
			{displayText}
		</span>
	);
}
