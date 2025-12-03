import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { aboutData } from '@/lib/data';

const AboutSection = () => {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col items-center justify-center space-y-4 text-center lg:items-start lg:text-left lg:order-last">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none font-headline text-primary">
                {aboutData.name}
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground">
                {aboutData.title}
              </p>
            </div>
            <p className="max-w-[700px] text-foreground/80 md:text-xl">
              {aboutData.bio}
            </p>
          </div>
          <div className="flex items-center justify-center">
            {aboutData.avatar && (
              <Card className="rounded-full overflow-hidden border-2 border-primary w-64 h-64 md:w-80 md:h-80 shadow-2xl shadow-primary/20">
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
