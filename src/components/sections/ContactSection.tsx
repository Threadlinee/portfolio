import { useState } from "react";
import { CyberCard } from "../../components/CyberCard.tsx";
import { Button } from "../../components/sections/ui/button.tsx";
import { Input } from "../../components/sections/ui/input.tsx";
import { Textarea } from "../../components/sections/ui/textarea.tsx";
import { Label } from "../../components/sections/ui/label.tsx";
import {
	AlertDialog,
	AlertDialogContent,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogAction,
} from "../../components/sections/ui/alert-dialog.tsx";
import {
	Mail,
	MessageSquare,
	Send,
	Github,
	Shield,
	Terminal,
} from "lucide-react";

export function ContactSection() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		subject: "",
		message: "",
	});
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [isSuccessOpen, setIsSuccessOpen] = useState(false);

	const handleInputChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setIsSubmitting(true);

		try {
			const formElement = e.currentTarget;
			const data = new FormData(formElement);
			// Ensure settings are present in case someone deletes hidden inputs
			if (!data.has("_subject")) {
				data.append("_subject", "New message from portfolio contact form");
			}
			if (!data.has("_template")) {
				data.append("_template", "table");
			}
			if (!data.has("_captcha")) {
				data.append("_captcha", "false");
			}

			const response = await fetch(
				"https://formsubmit.co/ajax/dionabazi5@gmail.com",
				{
					method: "POST",
					headers: {
						Accept: "application/json",
					},
					body: data,
				},
			);

			if (!response.ok) {
				throw new Error("Failed to send message");
			}

			setFormData({ name: "", email: "", subject: "", message: "" });
			setIsSuccessOpen(true);
		} catch (error) {
			console.error(error);
			// Optionally: surface an error state/UI here
		} finally {
			setIsSubmitting(false);
		}
	};

	const socialLinks = [
		{
			name: "GitHub",
			icon: Github,
			url: "https://github.com/Threadlinee",
			description: "Open source security tools and research",
		},
	];

	const contactMethods = [
		{
			icon: Mail,
			title: "Email",
			detail: "dionabazi5@gmail.com",
			description: "Best for detailed discussions and collaboration",
		},
		{
			icon: MessageSquare,
			title: "Secure Message",
			detail: "PGP Key Available",
			description: "For sensitive security discussions",
		},
	];

	return (
		<section className="py-20 px-6">
			<div className="container mx-auto max-w-7xl">
				{/* Section Header */}
				<div className="text-center mb-16">
					<h2 className="text-4xl md:text-5xl font-cyber font-bold mb-4">
						<span className="text-glow text-cyber-green">Get In Touch</span>
					</h2>
					<p className="text-xl text-muted-foreground max-w-3xl mx-auto font-code">
						Ready to collaborate on security research, penetration testing, or
						discuss cybersecurity challenges? Let's connect.
					</p>
				</div>

				<div className="grid lg:grid-cols-3 gap-8">
					{/* Contact Form */}
					<div className="lg:col-span-2">
						<CyberCard>
							<div className="flex items-start space-x-4 mb-6">
								<Terminal className="h-8 w-8 text-cyber-green mt-1" />
								<div>
									<h3 className="text-2xl font-cyber font-bold text-cyber-green mb-2">
										Send Message
									</h3>
									<p className="text-muted-foreground">
										Drop me a message and I'll get back to you as soon as
										possible.
									</p>
								</div>
							</div>

							<form onSubmit={handleSubmit} className="space-y-6">
								{/* FormSubmit settings */}
								<input
									type="hidden"
									name="_subject"
									value="New message from portfolio contact form"
								/>
								<input type="hidden" name="_template" value="table" />
								<input type="hidden" name="_captcha" value="false" />
								{/* Honeypot field for bots */}
								<input type="text" name="_honey" style={{ display: "none" }} />
								<div className="grid md:grid-cols-2 gap-4">
									<div className="space-y-2">
										<Label
											htmlFor="name"
											className="text-cyber-green font-code"
										>
											Name *
										</Label>
										<Input
											id="name"
											name="name"
											value={formData.name}
											onChange={handleInputChange}
											placeholder="Your Name"
											required
											className="bg-muted/30 border-cyber-green/30 focus:border-cyber-green font-code"
										/>
									</div>
									<div className="space-y-2">
										<Label
											htmlFor="email"
											className="text-cyber-green font-code"
										>
											Email *
										</Label>
										<Input
											id="email"
											name="email"
											type="email"
											value={formData.email}
											onChange={handleInputChange}
											placeholder="your.email@domain.com"
											required
											className="bg-muted/30 border-cyber-green/30 focus:border-cyber-green font-code"
										/>
									</div>
								</div>

								<div className="space-y-2">
									<Label
										htmlFor="subject"
										className="text-cyber-green font-code"
									>
										Subject *
									</Label>
									<Input
										id="subject"
										name="subject"
										value={formData.subject}
										onChange={handleInputChange}
										placeholder="What's this about?"
										required
										className="bg-muted/30 border-cyber-green/30 focus:border-cyber-green font-code"
									/>
								</div>

								<div className="space-y-2">
									<Label
										htmlFor="message"
										className="text-cyber-green font-code"
									>
										Message *
									</Label>
									<Textarea
										id="message"
										name="message"
										value={formData.message}
										onChange={handleInputChange}
										placeholder="Tell me about your project, security challenge, or collaboration idea..."
										rows={6}
										required
										className="bg-muted/30 border-cyber-green/30 focus:border-cyber-green font-code resize-none"
									/>
								</div>

								<Button
									type="submit"
									size="lg"
									disabled={isSubmitting}
									className="w-full bg-gradient-cyber"
								>
									{isSubmitting ? (
										<div className="flex items-center space-x-2">
											<div className="animate-spin rounded-full h-4 w-4 border-2 border-background border-t-transparent"></div>
											<span>Sending...</span>
										</div>
									) : (
										<>
											<Send className="h-4 w-4 mr-2" />
											Send Message
										</>
									)}
								</Button>
							</form>
						</CyberCard>
					</div>

					{/* Contact Info & Social */}
					<div className="space-y-8">
						{/* Contact Methods */}
						<CyberCard>
							<div className="text-center">
								<Mail className="h-8 w-8 text-cyber-green mx-auto mb-4" />
								<h3 className="text-xl font-cyber font-bold text-cyber-green mb-6">
									Contact Methods
								</h3>
								<div className="space-y-4">
									{contactMethods.map((method) => {
										const Icon = method.icon;
										return (
											<div
												key={method.title}
												className="text-left border-b border-border pb-4 last:border-b-0"
											>
												<div className="flex items-center space-x-3 mb-2">
													<Icon className="h-5 w-5 text-cyber-green" />
													<h4 className="font-semibold text-foreground">
														{method.title}
													</h4>
												</div>
												<p className="text-sm font-code text-cyber-green mb-1">
													{method.detail}
												</p>
												<p className="text-xs text-muted-foreground">
													{method.description}
												</p>
											</div>
										);
									})}
								</div>
							</div>
						</CyberCard>

						{/* Social Links */}
						<CyberCard>
							<div className="text-center">
								<Shield className="h-8 w-8 text-cyber-green mx-auto mb-4" />
								<h3 className="text-xl font-cyber font-bold text-cyber-green mb-6">
									Social Networks
								</h3>
								<div className="space-y-3">
									{socialLinks.map((social) => {
										const Icon = social.icon;
										return (
											<Button
												key={social.name}
												variant="outline"
												size="sm"
												className="w-full justify-start border-cyber-green/30 text-cyber-green hover:bg-cyber-green/10"
												onClick={() => window.open(social.url, "_blank")}
											>
												<Icon className="h-4 w-4 mr-3" />
												<div className="text-left">
													<div className="font-semibold">{social.name}</div>
													<div className="text-xs text-muted-foreground">
														{social.description}
													</div>
												</div>
											</Button>
										);
									})}
								</div>
							</div>
						</CyberCard>

						{/* Availability */}
						<CyberCard>
							<div className="text-center">
								<div className="flex items-center justify-center space-x-2 mb-4">
									<div className="w-3 h-3 bg-cyber-green rounded-full animate-cyber-pulse"></div>
									<span className="text-cyber-green font-code font-semibold">
										Available for Hire
									</span>
								</div>
								<p className="text-sm text-muted-foreground mb-4">
									Currently accepting new penetration testing projects and
									security consulting opportunities.
								</p>
								<div className="text-xs text-muted-foreground space-y-1">
									<p>Response time: &lt; 24 hours</p>
									<p>Timezone: UTC+1 (Central Europe)</p>
								</div>
							</div>
						</CyberCard>
					</div>
				</div>
			</div>
			{/* Success Modal */}
			<ContactSuccessModal
				open={isSuccessOpen}
				onOpenChange={setIsSuccessOpen}
			/>
		</section>
	);
}

// Success modal
export function ContactSuccessModal({
	open,
	onOpenChange,
}: {
	open: boolean;
	onOpenChange: (open: boolean) => void;
}) {
	return (
		<AlertDialog open={open} onOpenChange={onOpenChange}>
			<AlertDialogContent>
				<AlertDialogHeader>
					<AlertDialogTitle className="text-cyber-green">
						Email sent successfully
					</AlertDialogTitle>
					<AlertDialogDescription>
						We will get back to you within 24 hours.
					</AlertDialogDescription>
				</AlertDialogHeader>
				<AlertDialogFooter>
					<AlertDialogAction onClick={() => onOpenChange(false)}>
						Close
					</AlertDialogAction>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	);
}
