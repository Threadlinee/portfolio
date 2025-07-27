import { useState } from "react";
import { Button } from "../components/sections/ui/button.tsx";
import { GlitchText } from "../components/GlitchText.tsx";
import { Menu, X, Terminal, Shield, Code, User, Mail } from "lucide-react";

interface NavigationProps {
	activeSection: string;
	onSectionChange: (section: string) => void;
}

export function Navigation({
	activeSection,
	onSectionChange,
}: NavigationProps) {
	const [isOpen, setIsOpen] = useState(false);

	const navItems = [
		{ id: "home", label: "Home", icon: Terminal },
		{ id: "tools", label: "Tools", icon: Shield },
		{ id: "projects", label: "Projects", icon: Code },
		{ id: "about", label: "About", icon: User },
		{ id: "contact", label: "Contact", icon: Mail },
	];

	return (
		<>
			{/* Desktop Navigation */}
			<nav className="hidden md:flex fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-cyber-green/30">
				<div className="container mx-auto px-6 py-4">
					<div className="flex items-center justify-between">
						<div className="flex items-center space-x-2">
							<Terminal className="h-8 w-8 text-cyber-green animate-cyber-pulse" />
							<GlitchText
								text="SNO"
								className="text-2xl font-cyber font-bold text-cyber-green"
								glitchOnHover
							/>
						</div>

						<div className="flex items-center space-x-1">
							{navItems.map((item) => {
								const Icon = item.icon;
								return (
									<Button
										key={item.id}
										variant={activeSection === item.id ? "default" : "ghost"}
										size="sm"
										onClick={() => onSectionChange(item.id)}
										className={`
                      font-code transition-all duration-300
                      ${
												activeSection === item.id
													? "bg-cyber-green/20 text-cyber-green border border-cyber-green/50 shadow-cyber"
													: "text-muted-foreground hover:text-cyber-green hover:bg-cyber-green/10"
											}
                    `}
									>
										<Icon className="h-4 w-4 mr-2" />
										{item.label}
									</Button>
								);
							})}
						</div>
					</div>
				</div>
			</nav>

			{/* Mobile Navigation */}
			<nav className="md:hidden fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-cyber-green/30">
				<div className="px-4 py-3">
					<div className="flex items-center justify-between">
						<div className="flex items-center space-x-2">
							<Terminal className="h-6 w-6 text-cyber-green animate-cyber-pulse" />
							<GlitchText
								text="SNO"
								className="text-xl font-cyber font-bold text-cyber-green"
							/>
						</div>

						<Button
							variant="ghost"
							size="sm"
							onClick={() => setIsOpen(!isOpen)}
							className="text-cyber-green hover:bg-cyber-green/10"
						>
							{isOpen ? (
								<X className="h-5 w-5" />
							) : (
								<Menu className="h-5 w-5" />
							)}
						</Button>
					</div>
				</div>

				{/* Mobile Menu */}
				{isOpen && (
					<div className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md border-b border-cyber-green/30">
						<div className="px-4 py-2 space-y-1">
							{navItems.map((item) => {
								const Icon = item.icon;
								return (
									<Button
										key={item.id}
										variant="ghost"
										size="sm"
										onClick={() => {
											onSectionChange(item.id);
											setIsOpen(false);
										}}
										className={`
                      w-full justify-start font-code transition-all duration-300
                      ${
												activeSection === item.id
													? "bg-cyber-green/20 text-cyber-green border-l-2 border-cyber-green"
													: "text-muted-foreground hover:text-cyber-green hover:bg-cyber-green/10"
											}
                    `}
									>
										<Icon className="h-4 w-4 mr-2" />
										{item.label}
									</Button>
								);
							})}
						</div>
					</div>
				)}
			</nav>
		</>
	);
}
