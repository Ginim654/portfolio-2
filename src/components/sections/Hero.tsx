"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { heroData } from "@/lib/data";

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prevIndex) => (prevIndex + 1) % heroData.roles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative flex h-[calc(100vh-4rem)] min-h-[600px] items-center justify-center overflow-hidden">
      <div className="absolute inset-0 -z-20 bg-background" />
      <div className="absolute inset-0 -z-10">
        <div className="gradient-blob absolute -left-1/4 -top-1/4 h-1/2 w-1/2 rounded-full bg-primary/20 blur-3xl" />
        <div className="gradient-blob absolute -bottom-1/4 -right-1/4 h-1/2 w-1/2 rounded-full bg-secondary/20 blur-3xl animation-delay-[-5s]" />
      </div>

      <div className="container mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <h1 className="font-headline text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl">
          <span className="block">Hi, I&apos;m {heroData.name}</span>
        </h1>
        <div className="mt-6">
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground sm:text-xl md:text-2xl">
            <span className="inline-block h-8 align-middle md:h-9">
              <span key={roleIndex} className="animated-ticker">
                {heroData.roles[roleIndex]}
              </span>
            </span>
          </p>
        </div>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button size="lg" asChild className="group transition-transform duration-300 ease-in-out hover:scale-105">
            <a href="/resume" target="_blank" rel="noopener noreferrer">
              View Resume
            </a>
          </Button>
          <Button size="lg" variant="outline" asChild className="border-primary/50 text-primary transition-all duration-300 ease-in-out hover:scale-105 hover:bg-primary/10">
            <Link href="#projects">
              View Projects
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
