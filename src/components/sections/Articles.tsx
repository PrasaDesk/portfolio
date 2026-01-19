import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BookOpen, Calendar, Clock, ArrowRight } from "lucide-react";
import articlesData from "@/data/articles.json";

export function Articles() {
    const featuredArticles = articlesData.filter(article => article.featured);
    const recentArticles = articlesData.filter(article => !article.featured).slice(0, 3);

    return (
        <section className="py-20 bg-secondary/5 relative overflow-hidden">
            {/* Animated dots background */}
            <div className="absolute inset-0 opacity-30">
                <div className="absolute top-20 left-20 h-2 w-2 bg-primary rounded-full animate-pulse" />
                <div className="absolute top-40 right-40 h-2 w-2 bg-primary rounded-full animate-pulse animation-delay-300" />
                <div className="absolute bottom-20 left-1/3 h-2 w-2 bg-primary rounded-full animate-pulse animation-delay-600" />
            </div>

            <div className="container px-4 md:px-6 mx-auto relative">
                <div className="flex flex-col items-center text-center gap-2 mb-16">
                    <Badge variant="outline" className="w-fit animate-fade-in">
                        <BookOpen className="h-3 w-3 mr-1" />
                        Blog & Articles
                    </Badge>
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight animate-fade-in-up">
                        Latest Insights
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl animate-fade-in-up animation-delay-100">
                        Sharing knowledge about healthcare technology and software engineering
                    </p>
                </div>

                {/* Featured Articles */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 max-w-6xl mx-auto">
                    {featuredArticles.map((article, index) => (
                        <Card
                            key={article.id}
                            className="group relative overflow-hidden hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 hover:-translate-y-2 border-white/10 animate-fade-in-up"
                            style={{ animationDelay: `${index * 150}ms` }}
                        >
                            {/* Image placeholder with gradient */}
                            <div className="h-48 bg-gradient-to-br from-primary/20 via-primary/10 to-transparent relative overflow-hidden">
                                <div className="absolute inset-0 bg-grid-white/[0.05]" />
                                <div className="absolute top-4 right-4">
                                    <Badge className="bg-primary/90 backdrop-blur-sm">Featured</Badge>
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
                            </div>

                            <CardHeader>
                                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-2">
                                    <span className="flex items-center gap-1">
                                        <Calendar className="h-3 w-3" />
                                        {new Date(article.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <Clock className="h-3 w-3" />
                                        {article.readTime}
                                    </span>
                                </div>
                                <CardTitle className="text-xl group-hover:text-primary transition-colors line-clamp-2">
                                    {article.title}
                                </CardTitle>
                            </CardHeader>

                            <CardContent>
                                <p className="text-muted-foreground mb-4 line-clamp-2">
                                    {article.excerpt}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-4">
                                    {article.tags.slice(0, 3).map((tag, i) => (
                                        <Badge
                                            key={i}
                                            variant="secondary"
                                            className="text-xs hover:bg-primary/10 transition-colors"
                                        >
                                            {tag}
                                        </Badge>
                                    ))}
                                </div>

                                <Button
                                    variant="ghost"
                                    className="group/btn p-0 h-auto hover:bg-transparent"
                                >
                                    <span className="text-primary">Read More</span>
                                    <ArrowRight className="h-4 w-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                                </Button>
                            </CardContent>

                            {/* Hover gradient effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                        </Card>
                    ))}
                </div>

                {/* Recent Articles - Compact */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
                    {recentArticles.map((article, index) => (
                        <Card
                            key={article.id}
                            className="group hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1 border-white/10 animate-fade-in-up"
                            style={{ animationDelay: `${(featuredArticles.length * 150) + (index * 100)}ms` }}
                        >
                            <CardHeader className="pb-3">
                                <Badge variant="outline" className="w-fit text-xs mb-2">
                                    {article.category}
                                </Badge>
                                <CardTitle className="text-base group-hover:text-primary transition-colors line-clamp-2">
                                    {article.title}
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                                    <span>{new Date(article.date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}</span>
                                    <span>•</span>
                                    <span>{article.readTime}</span>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* View All Button */}
                <div className="flex justify-center mt-12 animate-fade-in-up animation-delay-600">
                    <Button size="lg" className="group">
                        View All Articles
                        <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                </div>
            </div>
        </section>
    );
}
