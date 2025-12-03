import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { aboutData } from '@/lib/data';

const AboutSection = () => {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <Card className="flex flex-col justify-center space-y-4 text-center lg:items-start lg:text-left lg:order-last transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/20">
            <CardHeader>
              <CardTitle className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none font-headline text-primary">
                {aboutData.name}
              </CardTitle>
              <CardDescription className="text-lg md:text-xl text-muted-foreground">
                {aboutData.title}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="max-w-[700px] text-foreground/80 md:text-lg">
                {aboutData.bio}
              </p>
            </CardContent>
          </Card>
          <div className="flex items-center justify-center">
            {aboutData.avatar && (
              <Card className="rounded-full overflow-hidden w-48 h-48 md:w-80 md:h-80 shadow-2xl shadow-primary/20 transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/20">
                <CardContent className="p-0">
                  <Image
                    src={aboutData.avatar.imageUrl}
                    alt={aboutData.avatar.description}
                    width={400}
                    height={400}
                    className="object-cover aspect-square"
                    data-ai-hint={aboutData.avatar.imageHint}
                    priority
                  />
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
