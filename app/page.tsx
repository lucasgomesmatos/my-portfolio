import { AboutSection } from "@/components/global/about-section";
import { ContactSection } from "@/components/global/contact-section";
import { ExperienceSection } from "@/components/global/experience-section";
import { HeroSection } from "@/components/global/hero-section";
import { Navbar } from "@/components/global/navbar";
import { SmoothScroll } from "@/components/global/smooth-scroll";

export default function Home() {
  return (
    <>
      <SmoothScroll />
      <section className="h-screen flex flex-col scroll-section">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <HeroSection />
        </div>
      </section>
      <section className="h-screen flex items-center justify-center scroll-section">
        <AboutSection />
      </section>

      <section className="h-screen flex items-center justify-center scroll-section">
        <ExperienceSection />
      </section>

      <section className="h-screen flex items-center justify-center scroll-section">
        <ContactSection />
      </section>
    </>
  );
}
