import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, ExternalLink, Calendar } from "lucide-react";
import certificationsData from "@/data/certifications.json";

export function Certifications() {
    return (
        <section className="py-20 relative overflow-hidden">
            {/* Animated gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 animate-gradient" />

            <div className="container px-4 md:px-6 mx-auto relative">
                <div className="flex flex-col items-center text-center gap-2 mb-16">
                    <Badge variant="outline" className="w-fit animate-fade-in">
                        <Award className="h-3 w-3 mr-1" />
                        Certifications
                    </Badge>
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight animate-fade-in-up">
                        Professional Credentials
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl animate-fade-in-up animation-delay-100">
                        Continuously learning and staying ahead of industry standards
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                    {certificationsData.map((cert, index) => (
                        <Card
                            key={cert.id}
                            className="group relative overflow-hidden hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 hover:-translate-y-2 border-white/10 animate-fade-in-up"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            {/* Gradient overlay on hover */}
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <CardHeader className="relative">
                                <div className="flex items-start justify-between mb-2">
                                    <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                                        <Award className="h-6 w-6 text-primary" />
                                    </div>
                                    <Badge variant="secondary" className="text-xs">
                                        <Calendar className="h-3 w-3 mr-1" />
                                        {cert.date}
                                    </Badge>
                                </div>
                                <CardTitle className="text-lg leading-tight group-hover:text-primary transition-colors">
                                    {cert.title}
                                </CardTitle>
                                <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                            </CardHeader>

                            <CardContent className="relative">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {cert.skills.map((skill, i) => (
                                        <Badge
                                            key={i}
                                            variant="outline"
                                            className="text-xs hover:bg-primary/10 transition-colors animate-scale-in"
                                            style={{ animationDelay: `${(index * 100) + (i * 50)}ms` }}
                                        >
                                            {skill}
                                        </Badge>
                                    ))}
                                </div>

                                <div className="flex items-center gap-2 text-xs text-muted-foreground group-hover:text-primary transition-colors">
                                    <span className="font-mono">{cert.credentialId}</span>
                                    <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </div>
                            </CardContent>

                            {/* Shine effect on hover */}
                            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/5 to-transparent" />
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
