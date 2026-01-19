import skillsData from "@/data/skills.json";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SECTIONS } from "@/constants/ContentConstants";

export function Skills() {
    return (
        <section className="py-16 bg-secondary/5">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="flex flex-col items-center text-center gap-2 mb-12">
                    <Badge variant="outline" className="w-fit">{SECTIONS.SKILLS.TITLE}</Badge>
                    <h2 className="text-3xl font-bold tracking-tight">{SECTIONS.SKILLS.SUBTITLE}</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                    {skillsData.map((skillGroup, index) => (
                        <Card key={index} className="glass-card border-none bg-gradient-to-br from-card to-secondary/20">
                            <CardHeader>
                                <CardTitle className="text-center text-primary">{skillGroup.category}</CardTitle>
                            </CardHeader>
                            <CardContent className="flex flex-wrap justify-center gap-2">
                                {skillGroup.items.map((skill) => (
                                    <Badge key={skill} variant="secondary" className="px-3 py-1 text-sm bg-background/50 hover:bg-primary/20 transition-colors">
                                        {skill}
                                    </Badge>
                                ))}
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
