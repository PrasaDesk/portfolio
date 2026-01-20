import { useTheme } from '@/contexts/ThemeContext';
import { Moon, Sun } from 'lucide-react';

export function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className="relative group p-2 rounded-lg bg-secondary/50 hover:bg-secondary transition-all duration-300 border border-white/10 hover:border-primary/30 overflow-hidden"
            aria-label="Toggle theme"
        >
            {/* Animated background gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Icon container with rotation animation */}
            <div className="relative w-5 h-5">
                {/* Sun icon */}
                <Sun
                    className={`absolute inset-0 w-5 h-5 text-yellow-400 transition-all duration-500 ${theme === 'light'
                            ? 'rotate-0 opacity-100 scale-100'
                            : 'rotate-90 opacity-0 scale-50'
                        }`}
                />

                {/* Moon icon */}
                <Moon
                    className={`absolute inset-0 w-5 h-5 text-blue-300 transition-all duration-500 ${theme === 'dark'
                            ? 'rotate-0 opacity-100 scale-100'
                            : '-rotate-90 opacity-0 scale-50'
                        }`}
                />
            </div>

            {/* Glow effect on hover */}
            <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl bg-primary/20" />
        </button>
    );
}
