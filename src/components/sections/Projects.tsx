import Image from "next/image";
import Link from "next/link";
import { projectsData } from "@/lib/data";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ArrowRight } from "lucide-react";

const Projects = () => {
  return (
    <section id="projects" className="bg-secondary/50 py-24 sm:py-32">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center font-headline text-3xl font-bold tracking-tight sm:text-4xl">
          My Projects
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-muted-foreground">
          A selection of projects that demonstrate my skills and passion for building things.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projectsData.map((project, index) => {
            const placeholder = PlaceHolderImages.find(p => p.id === project.imageId);
            const isLocal = placeholder?.imageUrl.startsWith('/');

            return (
              <Card key={index} className="glassmorphic flex flex-col overflow-hidden transition-all duration-300 hover:shadow-[0_0_15px_hsl(var(--primary)/0.1)]">
                <CardHeader>
                  <div className="relative h-48 w-full">
                    {isLocal ? (
                       <Image
                         src={placeholder?.imageUrl || "/quantaloop-logo.png"}
                         alt={project.title}
                         width={600}
                         height={400}
                         className="rounded-t-lg object-contain w-full h-full"
                         data-ai-hint={placeholder?.imageHint || 'technology abstract'}
                       />
                    ) : (
                      <Image
                        src={placeholder?.imageUrl || "https://picsum.photos/seed/1/600/400"}
                        alt={project.title}
                        fill
                        className="rounded-t-lg object-cover"
                        data-ai-hint={placeholder?.imageHint || 'technology abstract'}
                      />
                    )}
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardTitle className="font-headline text-xl">{project.title}</CardTitle>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <Badge key={i} variant="outline" className="border-primary/50 text-primary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <p className="mt-4 text-sm text-muted-foreground">
                    {project.description}
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="link" asChild className="p-0 text-primary">
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      View More <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
