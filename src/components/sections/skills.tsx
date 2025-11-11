import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { skillsData } from '@/lib/data';

const SkillsSection = () => {
  return (
    <section id="skills" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Skills & Expertise</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              A breakdown of my technical and soft skills.
            </p>
          </div>
        </div>
        <div className="grid gap-8 mt-12 md:grid-cols-2">
          {skillsData.map(({ category, icon: Icon, skills }) => (
            <Card key={category}>
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                   <Icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="font-headline">{category}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <Badge key={skill} variant="default">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
