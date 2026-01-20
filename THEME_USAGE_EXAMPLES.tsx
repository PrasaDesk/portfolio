// Quick Reference: Using the Theme System in Your Components

import { useTheme } from '@/contexts/ThemeContext';

// Example 1: Display current theme
function ThemeDisplay() {
    const { theme } = useTheme();

    return (
        <div>
            Current theme: {theme}
            {theme === 'dark' ? '🌙' : '☀️'}
        </div>
    );
}

// Example 2: Custom theme toggle button
function CustomThemeButton() {
    const { toggleTheme } = useTheme();

    return (
        <button onClick={toggleTheme}>
            Switch Theme
        </button>
    );
}

// Example 3: Set specific theme
function ThemeSelector() {
    const { setTheme } = useTheme();

    return (
        <div>
            <button onClick={() => setTheme('light')}>Light</button>
            <button onClick={() => setTheme('dark')}>Dark</button>
        </div>
    );
}

// Example 4: Conditional rendering based on theme
function ThemedComponent() {
    const { theme } = useTheme();

    return (
        <div className={theme === 'dark' ? 'dark-specific-class' : 'light-specific-class'}>
            {theme === 'dark' ? (
                <DarkModeContent />
            ) : (
                <LightModeContent />
            )}
        </div>
    );
}

// Example 5: Using theme in useEffect
function ThemeAwareComponent() {
    const { theme } = useTheme();

    useEffect(() => {
        console.log('Theme changed to:', theme);
        // Perform theme-specific actions
    }, [theme]);

    return <div>Theme-aware component</div>;
}

// CSS Classes automatically available:
// - Use Tailwind's color variables (they change automatically)
// - bg-background, text-foreground, bg-primary, etc.
// - .glass-card (automatically adapts to theme)
// - .bg-grid-white/[0.02] (automatically adapts to theme)

// Example 6: Using theme-aware Tailwind classes
function StyledComponent() {
    return (
        <div className="bg-background text-foreground">
            <div className="glass-card p-6">
                <h2 className="text-primary">This adapts to theme automatically!</h2>
                <p className="text-muted-foreground">Secondary text</p>
            </div>
        </div>
    );
}

// No need to manually handle theme classes - Tailwind CSS variables do it automatically!
