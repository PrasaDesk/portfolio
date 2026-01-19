import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Quote } from "lucide-react";
import testimonialsData from "@/data/testimonials.json";

export function Testimonials() {
    return (
        <section className="py-20 bg-gradient-to-b from-background to-secondary/10 relative overflow-hidden">
            {/* Decorative background */}
            <div className="absolute inset-0 bg-grid-white/[0.02] pointer-events-none" />

            <div className="container px-4 md:px-6 mx-auto relative">
                <div className="flex flex-col items-center text-center gap-2 mb-16">
                    <Badge variant="outline" className="w-fit animate-fade-in">
                        Testimonials
                    </Badge>
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent animate-fade-in-up">
                        What Clients Say
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl animate-fade-in-up animation-delay-100">
                        Trusted by healthcare leaders and engineering teams worldwide
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
                    {testimonialsData.map((testimonial, index) => (
                        <Card
                            key={testimonial.id}
                            className="group glass-card hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-2 border-white/10 animate-fade-in-up"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            <CardContent className="p-6 relative">
                                {/* Quote icon */}
                                <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                    <Quote className="h-16 w-16 text-primary" />
                                </div>

                                {/* Rating */}
                                <div className="flex gap-1 mb-4">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star
                                            key={i}
                                            className="h-4 w-4 fill-primary text-primary animate-scale-in"
                                            style={{ animationDelay: `${(index * 100) + (i * 50)}ms` }}
                                        />
                                    ))}
                                </div>

                                {/* Content */}
                                <p className="text-foreground/90 mb-6 leading-relaxed relative z-10">
                                    "{testimonial.content}"
                                </p>

                                {/* Author */}
                                <div className="flex items-center gap-4 border-t border-white/5 pt-4">
                                    <div className="h-12 w-12 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                                        <span className="text-lg font-bold text-primary">
                                            {testimonial.name.split(' ').map(n => n[0]).join('')}
                                        </span>
                                    </div>
                                    <div>
                                        <p className="font-semibold text-foreground">{testimonial.name}</p>
                                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                                        <p className="text-xs text-muted-foreground/70">{testimonial.company}</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
