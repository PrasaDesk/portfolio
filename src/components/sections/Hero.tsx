import { Button } from "@/components/ui/button";
import { SECTIONS } from "@/constants/ContentConstants";
import { APP_ROUTES } from "@/constants/AppConstants";
import { Link } from "react-router-dom";
import { ArrowRight, Download, Activity, Sparkles } from "lucide-react";

export function Hero() {
    return (
        <section className="relative pt-20 pb-16 md:pt-32 md:pb-24 overflow-hidden">
            {/* Animated Background Decor */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-primary/10 rounded-full blur-[120px] -z-10 pointer-events-none animate-pulse" />
            <div className="absolute top-20 right-20 w-72 h-72 bg-accent/10 rounded-full blur-[80px] -z-10 pointer-events-none animate-pulse animation-delay-300" />

            {/* Floating particles */}
            <div className="absolute inset-0 overflow-hidden -z-10">
                <div className="absolute top-1/4 left-1/4 h-2 w-2 bg-primary/30 rounded-full animate-pulse" />
                <div className="absolute top-1/3 right-1/3 h-2 w-2 bg-primary/30 rounded-full animate-pulse animation-delay-200" />
                <div className="absolute bottom-1/4 left-1/2 h-2 w-2 bg-primary/30 rounded-full animate-pulse animation-delay-400" />
            </div>

            <div className="container px-4 md:px-6 mx-auto flex flex-col items-center text-center gap-6">
                {/* Badge with animation */}
                <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary backdrop-blur-md hover:bg-primary/20 transition-all animate-fade-in-down group cursor-default">
                    <Activity className="mr-2 h-4 w-4 group-hover:animate-pulse" />
                    HIPAA Compliant & Secure Code
                    <Sparkles className="ml-2 h-3 w-3 opacity-70" />
                </div>

                {/* Main heading with gradient animation */}
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-balance max-w-4xl animate-fade-in-up">
                    {SECTIONS.HERO.GREETING}{" "}
                    <span className="bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent animate-gradient">
                        {SECTIONS.HERO.ROLE}
                    </span>
                </h1>

                {/* Tagline with delay */}
                <p className="text-muted-foreground text-lg md:text-xl max-w-[700px] text-balance animate-fade-in-up animation-delay-200">
                    {SECTIONS.HERO.TAGLINE}
                </p>

                {/* CTA Buttons with hover effects */}
                <div className="flex flex-col sm:flex-row gap-4 mt-4 animate-fade-in-up animation-delay-300">
                    <Button
                        size="lg"
                        asChild
                        className="gap-2 group hover:shadow-lg hover:shadow-primary/50 transition-all"
                    >
                        <Link to={APP_ROUTES.PROJECTS}>
                            View My Work
                            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </Button>
                    <Button
                        variant="outline"
                        size="lg"
                        className="gap-2 group hover:bg-primary/10 hover:border-primary/50 transition-all"
                    >
                        <Download className="h-4 w-4 group-hover:animate-bounce" />
                        Download Resume
                    </Button>
                </div>

                {/* Tech Stack with enhanced hover */}
                <div className="mt-12 pt-8 border-t border-white/5 w-full max-w-3xl flex justify-center gap-8 md:gap-16 animate-fade-in-up animation-delay-500">
                    {["React", "Python", "Node.js", "AWS", "FHIR"].map((tech, index) => (
                        <span
                            key={tech}
                            className="text-lg font-semibold text-muted-foreground hover:text-primary hover:scale-110 transition-all cursor-default animate-fade-in"
                            style={{ animationDelay: `${600 + index * 100}ms` }}
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
}
