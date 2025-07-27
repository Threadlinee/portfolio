import { CyberCard } from "../CyberCard.tsx";
import { Button } from "../sections/ui/button.tsx";
import { Badge } from "../sections/ui/badge.tsx";
import {
	Shield,
	Wifi,
	Camera,
	Lock,
	Terminal,
	Eye,
	Zap,
	Globe,
	ExternalLink,
	Github,
} from "lucide-react";

export function ToolsSection() {
	const tools = [
		{
			name: "InSecCam",
			description:
				"Advanced CCTV scanner and vulnerability assessment tool for IP camera security testing",
			category: "Network Security",
			technologies: ["Python", "OpenCV", "Tkinter"],
			icon: Camera,
			status: "Active",
			features: [
				"IP Range Scanning",
				"Vulnerability Detection",
				"Real-time Monitoring",
			],
			riskLevel: "High",
		},
		{
			name: "Wi-Fi Wardrive Tool",
			description:
				"Comprehensive wireless network mapping and security assessment utility",
			category: "Wireless Security",
			technologies: ["Python", "Scapy", "NetworkManager"],
			icon: Wifi,
			status: "Active",
			features: ["Network Discovery", "Signal Mapping", "Security Analysis"],
			riskLevel: "Medium",
		},
		{
			name: "Credential Dumper",
			description:
				"Memory-based credential extraction tool for authorized penetration testing",
			category: "Red Team",
			technologies: ["C#", ".NET", "WinAPI"],
			icon: Lock,
			status: "Active",
			features: ["Memory Extraction", "Hash Dumping", "Credential Analysis"],
			riskLevel: "Critical",
		},
		{
			name: "ASCII Cam",
			description:
				"ASCII art webcam logger with steganographic capabilities for security research",
			category: "Research",
			technologies: ["Python", "OpenCV", "PIL"],
			icon: Eye,
			status: "Experimental",
			features: ["ASCII Conversion", "Steganography", "Covert Channels"],
			riskLevel: "Medium",
		},
		{
			name: "Network Bruteforcer",
			description:
				"Multi-protocol brute force testing framework for network service assessment",
			category: "Penetration Testing",
			technologies: ["Python", "Threading", "Sockets"],
			icon: Zap,
			status: "Active",
			features: [
				"Multi-Protocol Support",
				"Distributed Testing",
				"Custom Wordlists",
			],
			riskLevel: "High",
		},
		{
			name: "Info Grabber",
			description:
				"System information gathering tool for reconnaissance and enumeration",
			category: "Reconnaissance",
			technologies: ["C#", "WMI", "Registry"],
			icon: Terminal,
			status: "Active",
			features: ["System Enumeration", "Network Discovery", "Stealth Mode"],
			riskLevel: "Low",
		},
		{
			name: "Fake Login Portal",
			description:
				"Social engineering testing platform for phishing awareness training",
			category: "Social Engineering",
			technologies: ["Flask", "HTML/CSS", "JavaScript"],
			icon: Globe,
			status: "Educational",
			features: [
				"Template Generation",
				"Analytics Dashboard",
				"Awareness Training",
			],
			riskLevel: "Medium",
		},
		{
			name: "Malware Simulator",
			description:
				"Educational malware behavior simulator for training and research purposes",
			category: "Education",
			technologies: ["Python", "PyQt", "Sandbox"],
			icon: Shield,
			status: "Educational",
			features: ["Behavior Simulation", "Safe Environment", "Learning Modules"],
			riskLevel: "Safe",
		},
	];

	const getRiskColor = (level: string) => {
		switch (level) {
			case "Critical":
				return "bg-cyber-red/20 text-cyber-red border-cyber-red/50";
			case "High":
				return "bg-yellow-500/20 text-yellow-400 border-yellow-500/50";
			case "Medium":
				return "bg-cyber-blue/20 text-cyber-blue border-cyber-blue/50";
			case "Low":
				return "bg-cyber-green/20 text-cyber-green border-cyber-green/50";
			case "Safe":
				return "bg-purple-500/20 text-purple-400 border-purple-500/50";
			default:
				return "bg-muted text-muted-foreground";
		}
	};

	const getStatusColor = (status: string) => {
		switch (status) {
			case "Active":
				return "bg-cyber-green/20 text-cyber-green";
			case "Experimental":
				return "bg-cyber-blue/20 text-cyber-blue";
			case "Educational":
				return "bg-purple-500/20 text-purple-400";
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
						<span className="text-glow text-cyber-green">Red Team Arsenal</span>
					</h2>
					<p className="text-xl text-muted-foreground max-w-3xl mx-auto font-code">
						Advanced penetration testing utilities and security research tools
						built for ethical hacking and cybersecurity education.
					</p>
					<div className="mt-6 text-sm text-cyber-red font-code">
						⚠️ FOR AUTHORIZED TESTING AND EDUCATIONAL PURPOSES ONLY
					</div>
				</div>

				{/* Tools Grid */}
				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
					{tools.map((tool, index) => {
						const Icon = tool.icon;
						return (
							<CyberCard
								key={tool.name}
								className="h-full hover:shadow-strong"
								animated={true}
							>
								<div className="flex flex-col h-full">
									{/* Header */}
									<div className="flex items-start justify-between mb-4">
										<div className="flex items-center space-x-3">
											<Icon className="h-8 w-8 text-cyber-green animate-cyber-pulse" />
											<div>
												<h3 className="text-lg font-cyber font-bold text-foreground">
													{tool.name}
												</h3>
												<p className="text-sm text-muted-foreground">
													{tool.category}
												</p>
											</div>
										</div>
										<div className="flex flex-col space-y-2">
											<Badge
												variant="outline"
												className={getRiskColor(tool.riskLevel)}
											>
												{tool.riskLevel}
											</Badge>
											<Badge
												variant="outline"
												className={getStatusColor(tool.status)}
											>
												{tool.status}
											</Badge>
										</div>
									</div>

									{/* Description */}
									<p className="text-sm text-muted-foreground mb-4 flex-grow">
										{tool.description}
									</p>

									{/* Features */}
									<div className="mb-4">
										<h4 className="text-sm font-semibold text-cyber-green mb-2">
											Features:
										</h4>
										<ul className="text-xs text-muted-foreground space-y-1">
											{tool.features.map((feature, idx) => (
												<li key={idx} className="flex items-center">
													<span className="text-cyber-green mr-2">▸</span>
													{feature}
												</li>
											))}
										</ul>
									</div>

									{/* Technologies */}
									<div className="mb-4">
										<div className="flex flex-wrap gap-1">
											{tool.technologies.map((tech) => (
												<Badge
													key={tech}
													variant="secondary"
													className="text-xs bg-muted/50 text-muted-foreground"
												>
													{tech}
												</Badge>
											))}
										</div>
									</div>

									{/* Actions */}
									<div className="flex space-x-2 mt-auto">
										<Button
											asChild
											size="sm"
											variant="outline"
											className="flex-1 border-cyber-green/50 text-cyber-green hover:bg-cyber-green/10"
										>
											<a
												href="https://github.com/Threadlinee"
												target="_blank"
												rel="noopener noreferrer"
											>
												<Github className="h-4 w-4 mr-2" />
												Code
											</a>
										</Button>

										<Button size="sm" className="flex-1 bg-gradient-cyber">
											<ExternalLink className="h-4 w-4 mr-2" />
											Demo
										</Button>
									</div>
								</div>
							</CyberCard>
						);
					})}
				</div>

				{/* Disclaimer */}
				<div className="mt-12 text-center">
					<CyberCard className="max-w-4xl mx-auto">
						<div className="text-center">
							<Shield className="h-12 w-12 text-cyber-red mx-auto mb-4" />
							<h3 className="text-xl font-cyber font-bold text-cyber-red mb-2">
								Ethical Use Disclaimer
							</h3>
							<p className="text-sm text-muted-foreground font-code">
								All tools are developed for authorized penetration testing,
								security research, and educational purposes only. Use
								responsibly and only on systems you own or have explicit
								permission to test. Unauthorized use is illegal and unethical.
							</p>
						</div>
					</CyberCard>
				</div>
			</div>
		</section>
	);
}
