import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { APP_ROUTES } from "@/constants/AppConstants";
import { Menu, X, Activity } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";

export function Navbar() {
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navItems = [
        { name: "About", path: APP_ROUTES.ABOUT },
        { name: "Projects", path: APP_ROUTES.PROJECTS },
        { name: "Experience", path: "/experience" }, // Added for completeness based on sections
        { name: "Contact", path: APP_ROUTES.CONTACT },
    ];

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
            <div className="container flex h-16 items-center justify-between px-4 md:px-6">
                <Link to={APP_ROUTES.HOME} className="flex items-center gap-2 font-bold text-xl tracking-tighter text-foreground hover:text-primary transition-colors">
                    <Activity className="h-6 w-6 text-primary" />
                    <span>Dr.Code</span>
                </Link>
                <nav className="hidden md:flex gap-6 items-center">
                    {navItems.map((item) => (
                        <Link
                            key={item.path}
                            to={item.path}
                            className={cn(
                                "text-sm font-medium transition-colors hover:text-primary",
                                location.pathname === item.path ? "text-primary" : "text-muted-foreground"
                            )}
                        >
                            {item.name}
                        </Link>
                    ))}
                    <Button variant="default" size="sm" asChild>
                        <Link to={APP_ROUTES.CONTACT}>Hire Me</Link>
                    </Button>
                </nav>
                <div className="flex items-center gap-3">
                    <ThemeToggle />
                    <button className="md:hidden text-foreground p-2" onClick={toggleMenu} aria-label="Toggle menu">
                        {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden absolute top-16 left-0 w-full border-b border-border bg-background p-4 flex flex-col gap-4 animate-in slide-in-from-top-2 shadow-xl z-50">
                    {navItems.map((item) => (
                        <Link
                            key={item.path}
                            to={item.path}
                            onClick={() => setIsMenuOpen(false)}
                            className={cn(
                                "text-base font-medium transition-colors hover:text-primary block py-2",
                                location.pathname === item.path ? "text-primary" : "text-muted-foreground"
                            )}
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
            )}
        </header>
    );
}
