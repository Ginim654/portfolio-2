import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { aboutData } from "@/lib/data";
import { GraduationCap, MapPin, Star, Trophy, Users, Briefcase, Lightbulb } from "lucide-react";

const badgeIcons = {
  "Hackathon Winner": <Trophy className="mr-1 h-3 w-3" />,
  "Active Coding Club Member": <Users className="mr-1 h-3 w-3" />,
  "Internship Completed": <Briefcase className="mr-1 h-3 w-3" />,
  "Mentor for Junior Projects": <Lightbulb className="mr-1 h-3 w-3" />,
};

const About = () => {
  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center font-headline text-3xl font-bold tracking-tight sm:text-4xl text-glow">
          About Me
        </h2>
        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-3">
          <Card className="glassmorphic lg:col-span-2">
            <CardHeader>
              <CardTitle className="font-headline text-2xl">{aboutData.name}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 text-muted-foreground">
              <p className="text-lg leading-relaxed">
                {aboutData.description}
              </p>
              <div className="flex flex-wrap gap-4">
                {aboutData.badges.map((badge, index) => (
                  <Badge key={index} variant="secondary" className="border-primary/20 bg-primary/10 text-primary transition-all hover:bg-primary/20">
                    {badgeIcons[badge as keyof typeof badgeIcons]}
                    {badge}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
          
          <div className="space-y-8">
            <Card className="glassmorphic">
              <CardContent className="p-6">
                <ul className="space-y-4 text-sm">
                  <li className="flex items-center">
                    <MapPin className="mr-3 h-5 w-5 text-primary" />
                    <span>{aboutData.location}</span>
                  </li>
                  <li className="flex items-center">
                    <GraduationCap className="mr-3 h-5 w-5 text-primary" />
                    <span>{aboutData.education}</span>
                  </li>
                   <li className="flex items-center">
                    <Star className="mr-3 h-5 w-5 text-primary" />
                    <span>CGPA: {aboutData.cgpa}</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
