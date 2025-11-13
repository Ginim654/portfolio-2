import { achievementsData } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Achievements = () => {
  return (
    <section id="achievements" className="py-24 sm:py-32">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center font-headline text-3xl font-bold tracking-tight sm:text-4xl text-glow">
          Hackathons & Achievements
        </h2>
        <div className="relative mt-12">
          <div className="absolute left-1/2 top-0 -ml-px h-full w-0.5 bg-primary/20" aria-hidden="true"></div>
          {achievementsData.map((item, index) => (
            <div key={index} className="relative mb-12">
              <div className="flex items-center justify-center">
                <div className="z-10 flex h-8 w-8 items-center justify-center rounded-full bg-primary ring-4 ring-background">
                  <item.icon className="h-5 w-5 text-primary-foreground" />
                </div>
              </div>
              <div className={`mt-4 flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                <div className={`w-full px-4 md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <Card className="card-glow glassmorphic">
                    <CardHeader>
                      <CardTitle className="font-headline text-lg">{item.title}</CardTitle>
                      <p className="text-sm text-muted-foreground">{item.date}</p>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
