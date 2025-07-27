// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./src/**/*.{js,jsx,ts,tsx}",
//     "./public/index.html"
//   ],
//   theme: {
//     extend: {
//       colors: {
//         background: '#000', // example color for bg-background
//         foreground: '#fff', // add your desired color here for text-foreground
//         border: 'currentColor',
//       },
//       borderColor: {
//         border: 'currentColor'
//       },
//     },
//   },
//   plugins: [],
// }
/** @type {import('tailwindcss').Config} */

module.exports = {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: "2rem",
			screens: {
				"2xl": "1400px",
			},
		},
		extend: {
			colors: {
				border: "hsl(var(--border))",
				input: "hsl(var(--input))",
				ring: "hsl(var(--ring))",
				background: "hsl(var(--background))",
				foreground: "hsl(var(--foreground))",
				primary: {
					DEFAULT: "hsl(var(--primary))",
					foreground: "hsl(var(--primary-foreground))",
					glow: "hsl(var(--primary-glow))",
				},
				secondary: {
					DEFAULT: "hsl(var(--secondary))",
					foreground: "hsl(var(--secondary-foreground))",
				},
				destructive: {
					DEFAULT: "hsl(var(--destructive))",
					foreground: "hsl(var(--destructive-foreground))",
				},
				success: {
					DEFAULT: "hsl(var(--success))",
					foreground: "hsl(var(--success-foreground))",
				},
				warning: {
					DEFAULT: "hsl(var(--warning))",
					foreground: "hsl(var(--warning-foreground))",
				},
				muted: {
					DEFAULT: "hsl(var(--muted))",
					foreground: "hsl(var(--muted-foreground))",
				},
				accent: {
					DEFAULT: "hsl(var(--accent))",
					foreground: "hsl(var(--accent-foreground))",
				},
				popover: {
					DEFAULT: "hsl(var(--popover))",
					foreground: "hsl(var(--popover-foreground))",
				},
				card: {
					DEFAULT: "hsl(var(--card))",
					foreground: "hsl(var(--card-foreground))",
				},
				cyber: {
					green: "hsl(var(--cyber-green))",
					red: "hsl(var(--cyber-red))",
					blue: "hsl(var(--cyber-blue))",
					purple: "hsl(var(--cyber-purple))",
				},
				sidebar: {
					DEFAULT: "hsl(var(--sidebar-background))",
					foreground: "hsl(var(--sidebar-foreground))",
					primary: "hsl(var(--sidebar-primary))",
					"primary-foreground": "hsl(var(--sidebar-primary-foreground))",
					accent: "hsl(var(--sidebar-accent))",
					"accent-foreground": "hsl(var(--sidebar-accent-foreground))",
					border: "hsl(var(--sidebar-border))",
					ring: "hsl(var(--sidebar-ring))",
				},
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},
			fontFamily: {
				cyber: ["Orbitron", "monospace"],
				code: ["Fira Code", "monospace"],
				mono: ["Fira Code", "monospace"],
			},
			fontFamily: {
				cyber: ["Orbitron", "monospace"],
				code: ["Fira Code", "monospace"],
				mono: ["Fira Code", "monospace"],
			},
			backgroundImage: {
				"gradient-cyber": "var(--gradient-cyber)",
				"gradient-matrix": "var(--gradient-matrix)",
				"gradient-card": "var(--gradient-card)",
				"gradient-glow": "var(--gradient-glow)",
			},
			boxShadow: {
				cyber: "var(--shadow-cyber)",
				strong: "var(--shadow-strong)",
				matrix: "var(--shadow-matrix)",
			},
			textShadow: {
				glow: "var(--text-glow)",
				cyber: "var(--text-shadow)",
			},
			keyframes: {
				"accordion-down": {
					from: { height: "0" },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: "0" },
				},
				"matrix-rain": {
					"0%": { transform: "translateY(-100vh)", opacity: "0" },
					"10%": { opacity: "1" },
					"90%": { opacity: "1" },
					"100%": { transform: "translateY(100vh)", opacity: "0" },
				},
				"cyber-pulse": {
					"0%, 100%": {
						opacity: "1",
						boxShadow: "0 0 5px hsl(var(--cyber-green) / 0.5)",
					},
					"50%": {
						opacity: "0.8",
						boxShadow: "0 0 20px hsl(var(--cyber-green) / 0.8)",
					},
				},
				glitch: {
					"0%": { transform: "translate(0)" },
					"20%": { transform: "translate(-2px, 2px)" },
					"40%": { transform: "translate(-2px, -2px)" },
					"60%": { transform: "translate(2px, 2px)" },
					"80%": { transform: "translate(2px, -2px)" },
					"100%": { transform: "translate(0)" },
				},
				"scan-line": {
					"0%": { transform: "translateX(-100%)" },
					"100%": { transform: "translateX(100vw)" },
				},
				"fade-in-up": {
					"0%": { opacity: "0", transform: "translateY(20px)" },
					"100%": { opacity: "1", transform: "translateY(0)" },
				},
				"slide-in-right": {
					"0%": { opacity: "0", transform: "translateX(20px)" },
					"100%": { opacity: "1", transform: "translateX(0)" },
				},
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
				"matrix-rain": "matrix-rain 3s linear infinite",
				"cyber-pulse": "cyber-pulse 2s ease-in-out infinite",
				glitch: "glitch 0.3s ease-in-out infinite",
				"scan-line": "scan-line 2s linear infinite",
				"fade-in-up": "fade-in-up 0.6s ease-out",
				"slide-in-right": "slide-in-right 0.6s ease-out",
			},
		},
	},
	plugins: [require("tailwindcss-animate")],
};
