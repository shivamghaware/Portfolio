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
  const [submitting, setSubmitting] = React.useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitting(true);

    const formData = new FormData(event.currentTarget);
    try {
        const response = await fetch('https://formspree.io/f/xblnyezp', {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        });

        if (response.ok) {
            (event.target as HTMLFormElement).reset();
            toast({
                title: "Message sent!",
                description: "Thank you for reaching out. I will get back to you as soon as possible."
            });
        } else {
            const data = await response.json();
            if (data.errors) {
                 const errorMessage = data.errors.map((error: any) => error.message).join(', ');
                 toast({
                    title: "Oops! Something went wrong.",
                    description: errorMessage,
                    variant: "destructive",
                });
            } else {
                toast({
                    title: "Oops! Something went wrong.",
                    description: "There was a problem submitting your form. Please try again.",
                    variant: "destructive",
                });
            }
        }
    } catch(e) {
         toast({
            title: "Oops! Something went wrong.",
            description: "There was a problem submitting your form. Please try again.",
            variant: "destructive",
        });
    } finally {
        setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32  bg-secondary/20">
      <div className="container grid items-center justify-center gap-8 px-4 md:px-6">
        <div className="space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight font-headline">Get In Touch</h2>
          <p className="max-w-[600px] mx-auto text-muted-foreground text-base sm:text-lg md:text-xl">
            I'm currently looking for new opportunities. Feel free to send me a message.
          </p>
        </div>
        <div className="grid w-full max-w-4xl gap-8 mx-auto grid-cols-1 md:grid-cols-2">
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
                    <form
                      action="https://formspree.io/f/xblnyezp"
                      method="POST"
                      onSubmit={handleSubmit}
                      className="space-y-4"
                    >
                        <Input type="text" placeholder="Your Name" required name="name" disabled={submitting} />
                        <Input type="email" placeholder="Your Email" required name="email" disabled={submitting} />
                        <Textarea placeholder="Your Message" required rows={5} name="message" disabled={submitting} />
                        <Button type="submit" className="w-full bg-accent text-accent-foreground hover:bg-accent/90" disabled={submitting}>
                            {submitting ? 'Sending...' : 'Send Message'}
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
