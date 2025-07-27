import { Button } from "../sections/ui/button.tsx";
import { GlitchText } from "../GlitchText.tsx";
import { TypingEffect } from "../TypingEffects.tsx";
import { CyberCard } from "../CyberCard.tsx";
import { Terminal, Shield, Code2, Zap } from "lucide-react";
import { useState } from "react";

interface HeroSectionProps {
	onSectionChange: (section: string) => void;
}

export function HeroSection({ onSectionChange }: HeroSectionProps) {
	const [typingComplete, setTypingComplete] = useState(false);

	const stats = [
		{ icon: Terminal, label: "Hacking Tools", value: "60+" },
		{ icon: Shield, label: "Security Research", value: "2+ Years" },
		{ icon: Code2, label: "Languages", value: "C# | Python" },
		{ icon: Zap, label: "Penetration Tests", value: "50+" },
	];

	return (
		<section className="min-h-screen flex items-center justify-center relative px-6 py-20">
			<div className="container mx-auto max-w-6xl text-center">
				{/* Main Hero Content */}
				<div className="mb-12">
					<div className="mb-6">
						<h1 className="text-6xl md:text-8xl font-cyber font-black mb-4">
							<GlitchText
								text="SNO"
								className="text-cyber-green text-glow"
								glitchOnHover
							/>
						</h1>
						<div className="h-12 flex items-center justify-center">
							<TypingEffect
								text="Cybersecurity Analyst & Ethical Hacker"
								speed={60}
								className="text-xl md:text-2xl text-muted-foreground"
								onComplete={() => setTypingComplete(true)}
							/>
						</div>
					</div>

					<div className="space-y-4 mb-8 max-w-3xl mx-auto">
						<p className="text-lg text-foreground font-code">
							// Dion Abazi - Advanced Red Team Operations
						</p>
						<p className="text-muted-foreground">
							I build advanced penetration testing utilities, network
							exploitation tools, and security research applications.
							Specializing in credential dumping, Wi-Fi mapping, real-time
							threat detection, and ethical hacking frameworks.
						</p>
					</div>

					{typingComplete && (
						<div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up">
							<Button
								size="lg"
								onClick={() => onSectionChange("tools")}
								className="bg-gradient-cyber hover:shadow-cyber transition-all duration-300 font-code"
							>
								<Shield className="h-5 w-5 mr-2" />
								Explore Arsenal
							</Button>
							<Button
								variant="outline"
								size="lg"
								onClick={() => onSectionChange("about")}
								className="border-cyber-green/50 text-cyber-green hover:bg-cyber-green/10 font-code"
							>
								<Terminal className="h-5 w-5 mr-2" />
								About Me
							</Button>
						</div>
					)}
				</div>

				{/* Stats Grid */}
				{typingComplete && (
					<div
						className="grid grid-cols-2 md:grid-cols-4 gap-4 animate-fade-in-up"
						style={{ animationDelay: "0.5s" }}
					>
						{stats.map((stat, index) => {
							const Icon = stat.icon;
							return (
								<CyberCard
									key={stat.label}
									className="text-center"
									animated={false}
								>
									<Icon className="h-8 w-8 text-cyber-green mx-auto mb-2 animate-cyber-pulse" />
									<div className="text-2xl font-cyber font-bold text-cyber-green mb-1">
										{stat.value}
									</div>
									<div className="text-sm text-muted-foreground font-code">
										{stat.label}
									</div>
								</CyberCard>
							);
						})}
					</div>
				)}

				{/* Scroll Indicator */}
				<div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
					<div className="w-6 h-10 border-2 border-cyber-green/50 rounded-full flex justify-center">
						<div className="w-1 h-3 bg-cyber-green rounded-full mt-2 animate-cyber-pulse"></div>
					</div>
				</div>
			</div>
		</section>
	);
}
