import experienceData from "@/data/experience.json";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SECTIONS } from "@/constants/ContentConstants";

export function Experience() {
    return (
        <section className="py-16 bg-secondary/5">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="flex flex-col items-center text-center gap-2 mb-12">
                    <Badge variant="outline" className="w-fit">{SECTIONS.EXPERIENCE.TITLE}</Badge>
                    <h2 className="text-3xl font-bold tracking-tight">{SECTIONS.EXPERIENCE.SUBTITLE}</h2>
                </div>

                <div className="space-y-8 max-w-4xl mx-auto relative before:absolute before:inset-0 before:ml-5 before:md:ml-[50%] before:-translate-x-px before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-primary/20 before:to-transparent">
                    {experienceData.map((item, index) => (
                        <div key={item.id} className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group ${index % 2 === 0 ? '' : ''}`}>

                            {/* Timeline Dot */}
                            <div className="absolute left-0 md:left-1/2 w-10 h-10 -ml-5 md:-ml-5 rounded-full border-4 border-background bg-primary/20 group-hover:bg-primary transition-colors flex items-center justify-center shrink-0 z-10">
                                <div className="w-3 h-3 bg-primary rounded-full group-hover:scale-125 transition-transform" />
                            </div>

                            {/* Content Card */}
                            <div className="w-[calc(100%-3rem)] md:w-[calc(50%-3rem)] ml-12 md:ml-0 p-1"> {/* p-1 for hover border effect setup if wanted */}
                                <Card className="glass-card hover:border-primary/50 transition-colors">
                                    <CardHeader>
                                        <div className="flex justify-between items-start mb-2">
                                            <CardTitle className="text-lg">{item.role}</CardTitle>
                                            <Badge variant="secondary" className="text-xs shrink-0">{item.period}</Badge>
                                        </div>
                                        <CardDescription className="font-medium text-primary">{item.company}</CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-sm text-muted-foreground leading-relaxed">
                                            {item.description}
                                        </p>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
