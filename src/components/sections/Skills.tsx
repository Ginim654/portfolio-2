import { skillsData } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Icons } from "@/components/icons";

const SkillCard = ({ skill }: { skill: (typeof skillsData)[number]["skills"][number] }) => {
  const IconComponent = skill.icon as React.ElementType;
  const CustomIcon = Icons[skill.name as keyof typeof Icons];
  
  return (
    <div className="group rounded-lg p-4 transition-all duration-300 hover:bg-primary/5">
      <div className="flex items-center gap-4">
        {CustomIcon ? (
          <CustomIcon className="h-8 w-8 text-primary" />
        ) : (
          <IconComponent className="h-8 w-8 text-primary" />
        )}
        <div className="w-full">
          <div className="flex justify-between">
            <p className="font-semibold">{skill.name}</p>
            <p className="text-sm text-muted-foreground">{skill.level}%</p>
          </div>
          <Progress value={skill.level} className="mt-1 h-2" />
        </div>
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="bg-background py-24 sm:py-32">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center font-headline text-3xl font-bold tracking-tight sm:text-4xl text-glow">
          Technical Skills
        </h2>
        <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-2">
          {skillsData.map((category) => (
            <Card key={category.title} className="card-glow glassmorphic">
              <CardHeader>
                <CardTitle className="font-headline text-2xl">{category.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.skills.map((skill) => (
                  <SkillCard key={skill.name} skill={skill} />
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
