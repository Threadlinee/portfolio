import { useState, useEffect } from "react";
import { MatrixBackground } from "@/components/MatrixBackground";
import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/sections/HeroSection";
import { ToolsSection } from "@/components/sections/ToolsSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ContactSection } from "@/components/sections/ContactSection";

const Index = () => {
	const [activeSection, setActiveSection] = useState("home");
	const [isScrolling, setIsScrolling] = useState(false);

	// Handle smooth scrolling to sections
	const handleSectionChange = (sectionId: string) => {
		setActiveSection(sectionId);
		setIsScrolling(true);

		const element = document.getElementById(sectionId);
		if (element) {
			element.scrollIntoView({
				behavior: "smooth",
				block: "start",
			});
		}

		// Reset scrolling state after animation
		setTimeout(() => setIsScrolling(false), 1000);
	};

	// Update active section based on scroll position
	useEffect(() => {
		const handleScroll = () => {
			if (isScrolling) return;

			const sections = ["home", "tools", "projects", "about", "contact"];
			const scrollPosition = window.scrollY + window.innerHeight / 3;

			for (const section of sections) {
				const element = document.getElementById(section);
				if (element) {
					const offsetTop = element.offsetTop;
					const offsetBottom = offsetTop + element.offsetHeight;

					if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
						setActiveSection(section);
						break;
					}
				}
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, [isScrolling]);

	return (
		<div className="min-h-screen bg-background text-foreground relative">
			{/* Matrix Background Effect */}
			<MatrixBackground />

			{/* Navigation */}
			<Navigation
				activeSection={activeSection}
				onSectionChange={handleSectionChange}
			/>

			{/* Main Content */}
			<main className="relative z-10">
				{/* Hero Section */}
				<section id="home" className="matrix-bg">
					<HeroSection onSectionChange={handleSectionChange} />
				</section>

				{/* Tools Section */}
				<section id="tools" className="bg-background">
					<ToolsSection />
				</section>

				{/* Projects Section */}
				<section
					id="projects"
					className="bg-gradient-to-b from-background to-muted/20"
				>
					<ProjectsSection />
				</section>

				{/* About Section */}
				<section id="about" className="bg-background">
					<AboutSection />
				</section>

				{/* Contact Section */}
				<section
					id="contact"
					className="bg-gradient-to-b from-background to-muted/20"
				>
					<ContactSection />
				</section>
			</main>

			{/* Footer */}
			<footer className="relative z-10 bg-card border-t border-cyber-green/30 py-8">
				<div className="container mx-auto px-6 text-center">
					<div className="flex flex-col md:flex-row items-center justify-between">
						<div className="mb-4 md:mb-0">
							<p className="text-sm text-muted-foreground font-code">
								© 2026 Dion Abazi. Built for ethical hacking and security
								research.
							</p>
						</div>
					</div>
				</div>
			</footer>
		</div>
	);
};

export default Index;
