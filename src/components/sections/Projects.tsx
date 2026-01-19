import projectsData from "@/data/projects.json";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SECTIONS } from "@/constants/ContentConstants";
import { ExternalLink, Github } from "lucide-react";

export function Projects() {
    return (
        <section className="py-16">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="flex flex-col items-center text-center gap-2 mb-12">
                    <Badge variant="outline" className="w-fit">{SECTIONS.PROJECTS.TITLE}</Badge>
                    <h2 className="text-3xl font-bold tracking-tight">{SECTIONS.PROJECTS.SUBTITLE}</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projectsData.map((project) => (
                        <Card key={project.id} className="flex flex-col overflow-hidden hover:shadow-lg hover:shadow-primary/5 transition-all group border-muted/40 bg-card/50">
                            <div className="relative aspect-video overflow-hidden bg-muted">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                                    loading="lazy"
                                />
                                <div className="absolute top-2 right-2">
                                    <Badge className="bg-background/80 text-foreground backdrop-blur-sm border-white/10 hover:bg-background/90">{project.domain}</Badge>
                                </div>
                            </div>
                            <CardHeader>
                                <CardTitle className="leading-tight">{project.title}</CardTitle>
                            </CardHeader>
                            <CardContent className="flex-1">
                                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {project.techStack.slice(0, 4).map((tech) => (
                                        <Badge key={tech} variant="secondary" className="text-xs font-normal">
                                            {tech}
                                        </Badge>
                                    ))}
                                    {project.techStack.length > 4 && (
                                        <Badge variant="secondary" className="text-xs font-normal">+{project.techStack.length - 4}</Badge>
                                    )}
                                </div>
                            </CardContent>
                            <CardFooter className="flex gap-2 pt-0">
                                <Button variant="outline" size="sm" className="w-full gap-2" asChild>
                                    <a href={project.repo} target="_blank" rel="noreferrer"><Github className="h-4 w-4" /> Code</a>
                                </Button>
                                <Button size="sm" className="w-full gap-2" asChild>
                                    <a href={project.link} target="_blank" rel="noreferrer"><ExternalLink className="h-4 w-4" /> Demo</a>
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
