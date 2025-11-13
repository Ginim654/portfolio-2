"use client";

import { Button } from "@/components/ui/button";
import { socialLinks } from "@/lib/data";

const Contact = () => {
  
  return (
    <section id="contact" className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute inset-0 -z-10 animate-[spin_20s_linear_infinite] bg-[radial-gradient(ellipse_at_center,hsl(var(--primary)/0.1)_0%,transparent_60%)]"></div>
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center text-center">
            <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
              Contact Me
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Feel free to reach out. I'm always open to discussing new projects, creative ideas, or opportunities to be part of an amazing team.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              {socialLinks.map(social => (
                 <Button key={social.name} asChild variant="outline" className="border-primary/50 text-primary transition-all duration-300 ease-in-out hover:scale-105 hover:bg-primary/10">
                    <a
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <social.icon className="h-5 w-5" />
                        <span>{social.name}</span>
                    </a>
                 </Button>
              ))}
            </div>
          </div>
      </div>
    </section>
  );
};

export default Contact;
