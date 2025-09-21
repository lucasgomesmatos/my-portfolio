import { AboutSection } from "@/components/global/about-section";
import { ExperienceSection } from "@/components/global/experience-section";
import { HeroSection } from "@/components/global/hero-section";
import { Navbar } from "@/components/global/navbar";

export default function Home() {
  return (
    <>
      <section className="h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <HeroSection />
        </div>
      </section>
      <section className="h-screen flex items-center justify-center">
        <AboutSection />
      </section>

      <section className="h-screen flex items-center justify-center">
        <ExperienceSection />
      </section>
    </>
  );
}
