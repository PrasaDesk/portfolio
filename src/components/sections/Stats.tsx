import { Card, CardContent } from "@/components/ui/card";
import { Users, Activity, Shield, Rocket } from "lucide-react";
import statsData from "@/data/stats.json";

const iconMap = {
    users: Users,
    activity: Activity,
    shield: Shield,
    rocket: Rocket,
};

export function Stats() {
    return (
        <section className="py-16 relative overflow-hidden">
            {/* Gradient background */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-accent/10" />

            <div className="container px-4 md:px-6 mx-auto relative">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto">
                    {statsData.achievements.map((achievement, index) => {
                        const Icon = iconMap[achievement.icon as keyof typeof iconMap];

                        return (
                            <Card
                                key={achievement.id}
                                className="group relative overflow-hidden border-white/10 hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/20 animate-fade-in-up"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <CardContent className="p-6 text-center relative">
                                    {/* Icon */}
                                    <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 mb-4 group-hover:scale-110 transition-transform">
                                        <Icon className="h-6 w-6 text-primary" />
                                    </div>

                                    {/* Value */}
                                    <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent mb-2 animate-count">
                                        {achievement.value}
                                    </div>

                                    {/* Title */}
                                    <h3 className="font-semibold text-sm md:text-base mb-1 group-hover:text-primary transition-colors">
                                        {achievement.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-xs text-muted-foreground leading-relaxed">
                                        {achievement.description}
                                    </p>

                                    {/* Animated background glow */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                                </CardContent>
                            </Card>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
