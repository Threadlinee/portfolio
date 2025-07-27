import { useEffect, useState } from "react";

export function MatrixBackground() {
	const [matrixChars, setMatrixChars] = useState<string[]>([]);

	useEffect(() => {
		// Create matrix characters
		const chars =
			"0123456789ABCDEFアイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン".split(
				"",
			);
		const drops: number[] = [];

		const columns = Math.floor(window.innerWidth / 20);

		for (let i = 0; i < columns; i++) {
			drops[i] = Math.floor((Math.random() * window.innerHeight) / 20);
		}

		const matrixEffect = () => {
			const newChars: string[] = [];

			for (let i = 0; i < columns; i++) {
				const char = chars[Math.floor(Math.random() * chars.length)];
				const x = i * 20;
				const y = drops[i] * 20;

				newChars.push(`${char}-${x}-${y}-${i}`);

				if (y > window.innerHeight && Math.random() > 0.975) {
					drops[i] = 0;
				}
				drops[i]++;
			}

			setMatrixChars(newChars);
		};

		const interval = setInterval(matrixEffect, 100);
		return () => clearInterval(interval);
	}, []);

	return (
		<div className="fixed inset-0 pointer-events-none overflow-hidden opacity-20 z-0">
			{matrixChars.slice(0, 50).map((char, index) => {
				const [character, x, y] = char.split("-");
				return (
					<div
						key={char}
						className="absolute text-cyber-green font-code text-sm animate-matrix-rain"
						style={{
							left: `${x}px`,
							top: `${y}px`,
							animationDelay: `${index * 50}ms`,
							animationDuration: `${2 + Math.random() * 2}s`,
						}}
					>
						{character}
					</div>
				);
			})}
		</div>
	);
}
