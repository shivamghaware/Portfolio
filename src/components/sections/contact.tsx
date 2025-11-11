'use client';

import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from "@/hooks/use-toast";
import { contactData } from '@/lib/data';
import { Mail } from 'lucide-react';
import React from 'react';

const ContactSection = () => {
  const { toast } = useToast();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // This is a dummy submission handler.
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    (event.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32  bg-secondary/20">
      <div className="container grid items-center justify-center gap-8 px-4 md:px-6">
        <div className="space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight font-headline">Get In Touch</h2>
          <p className="max-w-[600px] mx-auto text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            I'm currently looking for new opportunities. Feel free to send me a message.
          </p>
        </div>
        <div className="grid w-full max-w-4xl gap-8 mx-auto md:grid-cols-2">
            <Card>
                <CardHeader>
                    <CardTitle className="font-headline">Contact Information</CardTitle>
                    <CardDescription>You can reach me through these channels.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="flex items-center gap-4">
                        <Mail className="w-6 h-6 text-primary" />
                        <a href={`mailto:${contactData.email}`} className="text-foreground hover:text-primary transition-colors">
                            {contactData.email}
                        </a>
                    </div>
                    {contactData.socials.map(social => (
                        <div key={social.name} className="flex items-center gap-4">
                            <social.icon className="w-6 h-6 text-primary" />
                            <a href={social.url} target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors">
                                {social.name}
                            </a>
                        </div>
                    ))}
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle className="font-headline">Send a Message</CardTitle>
                    <CardDescription>Or fill out this form to get in touch directly.</CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <Input type="text" placeholder="Your Name" required name="name" />
                        <Input type="email" placeholder="Your Email" required name="email" />
                        <Textarea placeholder="Your Message" required rows={5} name="message" />
                        <Button type="submit" className="w-full bg-accent text-accent-foreground hover:bg-accent/90">Send Message</Button>
                    </form>
                </CardContent>
            </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
