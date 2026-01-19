import profileData from "@/data/profile.json";
import { SECTIONS } from "@/constants/ContentConstants";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Activity, Code, HeartHandshake } from "lucide-react";

export function About() {
    return (
        <section className="py-16">
            <div className="container px-4 md:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Text Content */}
                    <div className="space-y-6">
                        <div className="flex flex-col gap-2">
                            <Badge variant="outline" className="w-fit">{SECTIONS.ABOUT.TITLE}</Badge>
                            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                                {SECTIONS.ABOUT.SUBTITLE}
                            </h2>
                        </div>

                        <p className="text-muted-foreground text-lg leading-relaxed">
                            {profileData.bio}
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                            <Card className="bg-secondary/10 border-none shadow-none">
                                <CardContent className="p-4 flex flex-col items-center text-center gap-2">
                                    <Activity className="h-8 w-8 text-primary" />
                                    <span className="font-semibold">Healthcare Focus</span>
                                </CardContent>
                            </Card>
                            <Card className="bg-secondary/10 border-none shadow-none">
                                <CardContent className="p-4 flex flex-col items-center text-center gap-2">
                                    <Code className="h-8 w-8 text-primary" />
                                    <span className="font-semibold">Fullstack Lead</span>
                                </CardContent>
                            </Card>
                            <Card className="bg-secondary/10 border-none shadow-none">
                                <CardContent className="p-4 flex flex-col items-center text-center gap-2">
                                    <HeartHandshake className="h-8 w-8 text-primary" />
                                    <span className="font-semibold">User Centric</span>
                                </CardContent>
                            </Card>
                        </div>
                    </div>

                    {/* Visual/Image Side */}
                    <div className="relative">
                        <div className="aspect-square md:aspect-[4/5] rounded-2xl overflow-hidden bg-muted relative z-10">
                            {/* Placeholder for profile image - using a generic dev/tech image or gradient */}
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/40 flex items-center justify-center">
                                <span className="text-9xl opacity-10">
                                    {"< />"}
                                </span>
                            </div>

                            {/* If real image existed: <img src={profileData.image} ... /> */}

                            {/* Overlay Content */}
                            <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-background/90 to-transparent">
                                <h3 className="text-2xl font-bold text-foreground">{profileData.name}</h3>
                                <p className="text-primary font-medium">{profileData.role}</p>
                                <p className="text-muted-foreground text-sm">{profileData.location}</p>
                            </div>
                        </div>

                        {/* Decor elements */}
                        <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-xl -z-0" />
                        <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-secondary/40 rounded-full blur-xl -z-0" />
                    </div>
                </div>
            </div>
        </section>
    );
}
