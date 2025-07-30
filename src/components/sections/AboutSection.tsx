import { CyberCard } from "../../components/CyberCard.tsx";
import { Button } from "../../components/sections/ui/button.tsx";
import { Badge } from "../../components/sections/ui/badge.tsx";
import {
	User,
	Shield,
	Code,
	Award,
	BookOpen,
	Terminal,
	Globe,
	Download,
	ExternalLink,
} from "lucide-react";

export function AboutSection() {
	const skills = [
		{
			category: "Programming Languages",
			items: [
				"C#",
				"Python",
				"JavaScript",
				"PowerShell",
				"Shell",
				"Rust",
				"HTML",
				"CSS",
				"Tailwind CSS",
				"Next.js",
				"React.js",
				"TypeScript",
				"C++",
			],
		},
		{
			category: "Frameworks & Libraries",
			items: ["Flask", "WPF", "Tkinter", "OpenCV", "Scapy"],
		},
		{
			category: "Security Tools",
			items: [
				"Metasploit",
				"Burp Suite",
				"Nmap",
				"Wireshark",
				"Hashcat",
				"OWASP ZAP",
			],
		},
		{
			category: "Platforms & OS",
			items: ["Windows", "Linux", "Kali", "Parrot OS", "VMware"],
		},
		{
			category: "Databases",
			items: ["SQLite", "MySQL", "PostgreSQL", "Redis"],
		},
		{
			category: "Cloud & DevOps",
			items: ["AWS", "Docker", "Git", "CI/CD", "Terraform"],
		},
	];

	const certifications = [
		{
			name: "Certified Ethical Hacker (CEH)",
			issuer: "EC-Council",
			year: "2023",
		},
		{
			name: "Offensive Security Certified Professional (OSCP)",
			issuer: "Offensive Security",
			year: "2023",
		},
		{ name: "GIAC Penetration Tester (GPEN)", issuer: "SANS", year: "2022" },
		{
			name: "Certified Red Team Professional (CRTP)",
			issuer: "Pentester Academy",
			year: "2022",
		},
	];

	const timeline = [
		{
			year: "2024",
			title: "Senior Cybersecurity Specialist",
			description:
				"Leading red team operations and developing advanced penetration testing frameworks",
			highlight: true,
		},
		{
			year: "2023",
			title: "Security Researcher",
			description:
				"Published research on novel steganography techniques and network exploitation methods",
		},
		{
			year: "2022",
			title: "Penetration Tester",
			description:
				"Conducted 100+ authorized penetration tests across various industries",
		},
		{
			year: "2021",
			title: "Security Analyst",
			description:
				"Began career in cybersecurity with focus on vulnerability assessment and incident response",
		},
	];

	return (
		<section className="py-20 px-6">
			<div className="container mx-auto max-w-7xl">
				{/* Section Header */}
				<div className="text-center mb-16">
					<h2 className="text-4xl md:text-5xl font-cyber font-bold mb-4">
						<span className="text-glow text-cyber-green">About Sno</span>
					</h2>
					<p className="text-xl text-muted-foreground max-w-3xl mx-auto font-code">
						Cybersecurity specialist with a passion for ethical hacking,
						security research, and building tools that make the digital world
						safer.
					</p>
				</div>

				<div className="grid lg:grid-cols-3 gap-8">
					{/* Left Column - Personal Info & Bio */}
					<div className="lg:col-span-2 space-y-8">
						{/* Bio */}
						<CyberCard>
							<div className="flex items-start space-x-4">
								<User className="h-8 w-8 text-cyber-green mt-1" />
								<div className="flex-1">
									<h3 className="text-2xl font-cyber font-bold text-cyber-green mb-4">
										Dion Abazi (Sno)
									</h3>
									<div className="space-y-4 text-muted-foreground">
										<p>
											I'm a cybersecurity specialist and ethical hacker
											operating under the alias "Sno," with over 3 years of
											experience in red team operations and security research.
											My expertise lies in developing advanced penetration
											testing utilities and conducting authorized security
											assessments.
										</p>
										<p>
											I specialize in network exploitation, credential dumping,
											Wi-Fi security assessment, and real-time threat detection.
											My work focuses on building tools that help organizations
											identify and remediate security vulnerabilities before
											malicious actors can exploit them.
										</p>
										<p>
											When I'm not developing security tools, I contribute to
											the cybersecurity community through research, writeups,
											and educational content. I believe in responsible
											disclosure and the importance of ethical hacking
											practices.
										</p>
									</div>
								</div>
							</div>
						</CyberCard>

						{/* Career Timeline */}
						<CyberCard>
							<div className="flex items-start space-x-4">
								<Award className="h-8 w-8 text-cyber-green mt-1" />
								<div className="flex-1">
									<h3 className="text-xl font-cyber font-bold text-cyber-green mb-6">
										Career Journey
									</h3>
									<div className="space-y-6">
										{timeline.map((item, index) => (
											<div
												key={item.year}
												className={`
                          flex space-x-4 pb-6 
                          ${index !== timeline.length - 1 ? "border-b border-border" : ""}
                        `}
											>
												<div className="flex-shrink-0">
													<div
														className={`
                            w-12 h-12 rounded-full flex items-center justify-center font-code font-bold text-sm
                            ${
															item.highlight
																? "bg-cyber-green/20 text-cyber-green border-2 border-cyber-green"
																: "bg-muted text-muted-foreground border border-border"
														}
                          `}
													>
														{item.year}
													</div>
												</div>
												<div className="flex-1">
													<h4 className="font-cyber font-bold text-foreground mb-1">
														{item.title}
													</h4>
													<p className="text-sm text-muted-foreground">
														{item.description}
													</p>
												</div>
											</div>
										))}
									</div>
								</div>
							</div>
						</CyberCard>

						{/* Skills & Technologies */}
						<CyberCard>
							<div className="flex items-start space-x-4">
								<Code className="h-8 w-8 text-cyber-green mt-1" />
								<div className="flex-1">
									<h3 className="text-xl font-cyber font-bold text-cyber-green mb-6">
										Technical Skills
									</h3>
									<div className="grid md:grid-cols-2 gap-6">
										{skills.map((skillGroup) => (
											<div key={skillGroup.category}>
												<h4 className="font-semibold text-foreground mb-3 text-sm">
													{skillGroup.category}
												</h4>
												<div className="flex flex-wrap gap-2">
													{skillGroup.items.map((skill) => (
														<Badge
															key={skill}
															variant="outline"
															className="border-cyber-green/30 text-cyber-green hover:bg-cyber-green/10 transition-colors"
														>
															{skill}
														</Badge>
													))}
												</div>
											</div>
										))}
									</div>
								</div>
							</div>
						</CyberCard>
					</div>

					{/* Right Column - Certifications & Links */}
					<div className="space-y-8">
						{/* Certifications */}
						<CyberCard>
							<div className="text-center">
								<Shield className="h-8 w-8 text-cyber-green mx-auto mb-4" />
								<h3 className="text-xl font-cyber font-bold text-cyber-green mb-6">
									Certifications
								</h3>
								<div className="space-y-4">
									{certifications.map((cert) => (
										<div
											key={cert.name}
											className="text-left border-b border-border pb-4 last:border-b-0"
										>
											<h4 className="font-semibold text-foreground text-sm">
												{cert.name}
											</h4>
											<p className="text-xs text-muted-foreground">
												{cert.issuer} • {cert.year}
											</p>
										</div>
									))}
								</div>
							</div>
						</CyberCard>

						{/* Quick Stats */}
						<CyberCard>
							<div className="text-center">
								<Terminal className="h-8 w-8 text-cyber-green mx-auto mb-4" />
								<h3 className="text-xl font-cyber font-bold text-cyber-green mb-6">
									Quick Stats
								</h3>
								<div className="space-y-4">
									<div className="flex justify-between items-center">
										<span className="text-sm text-muted-foreground">
											Security Tools Built
										</span>
										<span className="font-code font-bold text-cyber-green">
											25+
										</span>
									</div>
									<div className="flex justify-between items-center">
										<span className="text-sm text-muted-foreground">
											Penetration Tests
										</span>
										<span className="font-code font-bold text-cyber-green">
											100+
										</span>
									</div>
									<div className="flex justify-between items-center">
										<span className="text-sm text-muted-foreground">
											Vulnerabilities Found
										</span>
										<span className="font-code font-bold text-cyber-green">
											500+
										</span>
									</div>
									<div className="flex justify-between items-center">
										<span className="text-sm text-muted-foreground">
											Research Papers
										</span>
										<span className="font-code font-bold text-cyber-green">
											8
										</span>
									</div>
								</div>
							</div>
						</CyberCard>

						{/* Links & Actions */}
						<CyberCard>
							<div className="text-center">
								<Globe className="h-8 w-8 text-cyber-green mx-auto mb-4" />
								<h3 className="text-xl font-cyber font-bold text-cyber-green mb-6">
									Connect & Learn
								</h3>
								<div className="space-y-3">
									<Button size="sm" className="w-full bg-gradient-cyber">
										<ExternalLink className="h-4 w-4 mr-2" />
										View Full CV
									</Button>
									<Button
										size="sm"
										variant="outline"
										className="w-full border-cyber-green/50 text-cyber-green hover:bg-cyber-green/10"
									>
										<Download className="h-4 w-4 mr-2" />
										Download Resume
									</Button>
									<Button
										size="sm"
										variant="outline"
										className="w-full border-cyber-blue/50 text-cyber-blue hover:bg-cyber-blue/10"
									>
										<BookOpen className="h-4 w-4 mr-2" />
										Research Papers
									</Button>
								</div>
							</div>
						</CyberCard>
					</div>
				</div>
			</div>
		</section>
	);
}
