import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { SECTIONS } from "@/constants/ContentConstants";
import { Mail, MessageSquare } from "lucide-react";

export function Contact() {
    return (
        <section className="py-16">
            <div className="container px-4 md:px-6 max-w-4xl">
                <Card className="glass-card">
                    <CardHeader className="text-center">
                        <CardTitle className="text-3xl">{SECTIONS.CONTACT.TITLE}</CardTitle>
                        <CardDescription className="text-lg mt-2">{SECTIONS.CONTACT.SUBTITLE}</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form className="space-y-4 mt-4" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium">Name</label>
                                    <Input id="name" placeholder="John Doe" />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium">Email</label>
                                    <Input id="email" type="email" placeholder="john@example.com" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium">Message</label>
                                <Textarea id="message" placeholder="Tell me about your project..." />
                            </div>
                            <Button className="w-full md:w-auto gap-2">
                                <MessageSquare className="h-4 w-4" /> Send Message
                            </Button>
                        </form>

                        <div className="mt-8 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-center gap-8 items-center text-muted-foreground">
                            <div className="flex items-center gap-2">
                                <Mail className="h-5 w-5 text-primary" />
                                <a href="mailto:contact@example.com" className="hover:text-primary transition-colors">contact@example.com</a>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </section>
    );
}
