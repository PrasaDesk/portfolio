import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import { SOCIAL_LINKS } from "@/constants/AppConstants";

export function Footer() {
    return (
        <footer className="w-full py-6 md:py-10 bg-secondary/30 border-t border-white/5">
            <div className="container px-4 md:px-6 flex flex-col items-center gap-4 text-center">
                <div className="flex gap-6">
                    <a href={SOCIAL_LINKS.GITHUB} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                        <Github className="h-5 w-5" />
                        <span className="sr-only">GitHub</span>
                    </a>
                    <a href={SOCIAL_LINKS.LINKEDIN} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                        <Linkedin className="h-5 w-5" />
                        <span className="sr-only">LinkedIn</span>
                    </a>
                    <a href={SOCIAL_LINKS.TWITTER} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                        <Twitter className="h-5 w-5" />
                        <span className="sr-only">Twitter</span>
                    </a>
                    <a href={SOCIAL_LINKS.EMAIL} className="text-muted-foreground hover:text-primary transition-colors">
                        <Mail className="h-5 w-5" />
                        <span className="sr-only">Email</span>
                    </a>
                </div>
                <p className="text-sm text-muted-foreground">
                    © {new Date().getFullYear()} Prasad Yeole. All rights reserved. Built with React, Tailwind & HealthTech focus.
                </p>
            </div>
        </footer>
    );
}
