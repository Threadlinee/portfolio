import { CyberCard } from "../../components/CyberCard.tsx";
import { Button } from "../../components/sections/ui/button.tsx";
import { Badge } from "../../components/sections/ui/badge.tsx";
import {
	Code2,
	Star,
	GitBranch,
	Calendar,
	ExternalLink,
	Github,
	Play,
} from "lucide-react";

export function ProjectsSection() {
	const featuredProjects = [
		{
			name: "PenTest Framework",
			description:
				"Comprehensive penetration testing framework with modular architecture for automated security assessments and vulnerability discovery.",
			longDescription:
				"A full-featured penetration testing framework built in Python with a modular plugin system. Includes automated reconnaissance, vulnerability scanning, exploitation modules, and detailed reporting capabilities.",
			technologies: ["Python", "Flask", "SQLite", "Scapy", "Nmap"],
			category: "Framework",
			status: "Active Development",
			stars: 156,
			forks: 34,
			lastUpdate: "2024-01-15",
			features: [
				"Automated Reconnaissance",
				"Vulnerability Assessment",
				"Exploitation Modules",
				"Custom Payload Generation",
				"Detailed Reporting",
				"Plugin System",
			],
			highlights: [
				"🔥 Used in 50+ authorized penetration tests",
				"⚡ Automated discovery of 200+ vulnerability types",
				"📊 Comprehensive HTML/PDF reporting",
				"🔧 Extensible plugin architecture",
			],
		},
		{
			name: "Steganography Toolkit",
			description:
				"Advanced steganography research platform for hiding data in various media formats with cryptographic protection.",
			longDescription:
				"Research-focused steganography toolkit that explores covert communication channels in images, audio, and video files with military-grade encryption.",
			technologies: ["Python", "OpenCV", "NumPy", "Cryptography", "PIL"],
			category: "Research",
			status: "Research Phase",
			stars: 89,
			forks: 23,
			lastUpdate: "2024-01-10",
			features: [
				"Multi-format Support",
				"Encryption Integration",
				"LSB Techniques",
				"Frequency Domain Hiding",
				"Detection Resistance",
				"Batch Processing",
			],
			highlights: [
				"🔬 Novel LSB optimization algorithm",
				"🛡️ AES-256 encryption integration",
				"📸 Support for 10+ image formats",
				"🎵 Audio steganography capabilities",
			],
		},
		{
			name: "Network Topology Mapper",
			description:
				"Real-time network discovery and visualization tool for understanding network architecture during security assessments.",
			longDescription:
				"Intelligent network mapping tool that discovers and visualizes network topology, identifies critical infrastructure, and maps attack paths for red team operations.",
			technologies: ["C#", "WPF", "Nmap", "Graphviz", "SQLite"],
			category: "Reconnaissance",
			status: "Beta",
			stars: 234,
			forks: 67,
			lastUpdate: "2024-01-20",
			features: [
				"Real-time Discovery",
				"Interactive Visualization",
				"Service Enumeration",
				"Attack Path Analysis",
				"Export Capabilities",
				"Stealth Scanning",
			],
			highlights: [
				"🗺️ 3D network visualization",
				"🎯 Attack path calculation",
				"⚡ Sub-second host discovery",
				"💾 Export to multiple formats",
			],
		},
	];

	const getStatusColor = (status: string) => {
		switch (status.toLowerCase()) {
			case "active development":
				return "bg-cyber-green/20 text-cyber-green";
			case "research phase":
				return "bg-cyber-blue/20 text-cyber-blue";
			case "beta":
				return "bg-yellow-500/20 text-yellow-400";
			default:
				return "bg-muted text-muted-foreground";
		}
	};

	return (
		<section className="py-20 px-6">
			<div className="container mx-auto max-w-7xl">
				{/* Section Header */}
				<div className="text-center mb-16">
					<h2 className="text-4xl md:text-5xl font-cyber font-bold mb-4">
						<span className="text-glow text-cyber-green">
							Featured Projects
						</span>
					</h2>
					<p className="text-xl text-muted-foreground max-w-3xl mx-auto font-code">
						Advanced security research projects and frameworks pushing the
						boundaries of cybersecurity innovation.
					</p>
				</div>

				{/* Projects Grid */}
				<div className="space-y-8">
					{featuredProjects.map((project, index) => (
						<CyberCard
							key={project.name}
							className="overflow-hidden"
							animated={true}
						>
							<div className="grid lg:grid-cols-3 gap-8">
								{/* Left Column - Main Info */}
								<div className="lg:col-span-2 space-y-6">
									{/* Header */}
									<div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
										<div className="flex-1">
											<div className="flex items-center space-x-3 mb-2">
												<Code2 className="h-6 w-6 text-cyber-green" />
												<h3 className="text-2xl font-cyber font-bold text-foreground">
													{project.name}
												</h3>
											</div>
											<p className="text-muted-foreground mb-3">
												{project.description}
											</p>
											<div className="flex items-center space-x-4 text-sm text-muted-foreground">
												<div className="flex items-center space-x-1">
													<Star className="h-4 w-4" />
													<span>{project.stars}</span>
												</div>
												<div className="flex items-center space-x-1">
													<GitBranch className="h-4 w-4" />
													<span>{project.forks}</span>
												</div>
												<div className="flex items-center space-x-1">
													<Calendar className="h-4 w-4" />
													<span>{project.lastUpdate}</span>
												</div>
											</div>
										</div>

										<div className="flex flex-col space-y-2">
											<Badge
												variant="outline"
												className={getStatusColor(project.status)}
											>
												{project.status}
											</Badge>
											<Badge variant="secondary" className="bg-muted/50">
												{project.category}
											</Badge>
										</div>
									</div>

									{/* Detailed Description */}
									<div>
										<p className="text-sm text-muted-foreground leading-relaxed">
											{project.longDescription}
										</p>
									</div>

									{/* Key Features */}
									<div>
										<h4 className="text-sm font-semibold text-cyber-green mb-3">
											Key Features:
										</h4>
										<div className="grid grid-cols-2 gap-2">
											{project.features.map((feature, idx) => (
												<div
													key={idx}
													className="flex items-center text-sm text-muted-foreground"
												>
													<span className="text-cyber-green mr-2">▸</span>
													{feature}
												</div>
											))}
										</div>
									</div>

									{/* Technologies */}
									<div>
										<h4 className="text-sm font-semibold text-cyber-green mb-3">
											Tech Stack:
										</h4>
										<div className="flex flex-wrap gap-2">
											{project.technologies.map((tech) => (
												<Badge
													key={tech}
													variant="outline"
													className="border-cyber-green/30 text-cyber-green"
												>
													{tech}
												</Badge>
											))}
										</div>
									</div>

									{/* Actions */}
									<div className="flex flex-wrap gap-3 pt-4">
										<Button size="sm" className="bg-gradient-cyber">
											<Github className="h-4 w-4 mr-2" />
											View Code
										</Button>
										<Button
											size="sm"
											variant="outline"
											className="border-cyber-green/50 text-cyber-green hover:bg-cyber-green/10"
										>
											<Play className="h-4 w-4 mr-2" />
											Live Demo
										</Button>
										<Button
											size="sm"
											variant="outline"
											className="border-cyber-blue/50 text-cyber-blue hover:bg-cyber-blue/10"
										>
											<ExternalLink className="h-4 w-4 mr-2" />
											Documentation
										</Button>
									</div>
								</div>

								{/* Right Column - Highlights */}
								<div className="lg:col-span-1">
									<div className="bg-muted/30 rounded-lg p-6 border border-cyber-green/20">
										<h4 className="text-lg font-cyber font-bold text-cyber-green mb-4">
											Project Highlights
										</h4>
										<div className="space-y-3">
											{project.highlights.map((highlight, idx) => (
												<div key={idx} className="flex items-start space-x-2">
													<div className="text-sm text-muted-foreground leading-relaxed">
														{highlight}
													</div>
												</div>
											))}
										</div>
									</div>
								</div>
							</div>
						</CyberCard>
					))}
				</div>

				{/* CTA Section */}
				<div className="text-center mt-12">
					<CyberCard className="max-w-2xl mx-auto">
						<div className="text-center">
							<h3 className="text-2xl font-cyber font-bold text-cyber-green mb-4">
								More Projects on GitHub
							</h3>
							<p className="text-muted-foreground mb-6">
								Explore my complete portfolio of security tools and research
								projects on GitHub.
							</p>
							<a
								href="https://github.com/Threadlinee"
								target="_blank"
								rel="noopener noreferrer"
							>
								<Button size="lg" className="bg-gradient-cyber">
									<Github className="h-5 w-5 mr-2" />
									View All Repositories
								</Button>
							</a>
						</div>
					</CyberCard>
				</div>
			</div>
		</section>
	);
}
