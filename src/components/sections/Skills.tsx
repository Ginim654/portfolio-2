import { skillsData } from "@/lib/data";
import { Icons } from "@/components/icons";
import { Laptop } from "lucide-react";

const Skills = () => {
  return (
    <section id="skills" className="py-24 sm:py-32">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-4">
              <Laptop className="h-10 w-10 text-primary" />
              <h2 className="font-headline text-3xl font-bold sm:text-4xl text-glow">
                My Digital Toolbelt
              </h2>
            </div>
            <p className="mt-4 text-lg text-muted-foreground">
              I got the experience. Here is my toolbelt for success.
            </p>
          </div>
          <div className="lg:col-span-2">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
              {skillsData.map((skill) => {
                const CustomIcon = Icons[skill.name as keyof typeof Icons];
                const IconComponent = skill.icon as React.ElementType;
                return (
                  <div key={skill.name} className="group flex flex-col items-center justify-center gap-2 rounded-lg bg-card/50 p-4 transition-all duration-300 hover:bg-primary/10 card-glow">
                    {CustomIcon ? (
                      <CustomIcon className="h-12 w-12" />
                    ) : (
                      <IconComponent className="h-12 w-12" />
                    )}
                    <p className="text-sm font-medium text-center">{skill.name}</p>
                    {skill.level && <p className="text-xs text-muted-foreground">({skill.level})</p>}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
