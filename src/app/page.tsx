import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import AboutSection from '@/components/sections/about';
import ProjectsSection from '@/components/sections/projects';
import SkillsSection from '@/components/sections/skills';
import ContactSection from '@/components/sections/contact';

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh">
      <Header />
      <main className="flex-1">
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
