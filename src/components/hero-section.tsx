"use client";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import HeroAvatar from "@/components/HeroAvatar"; // 👈 import your cave-door avatar

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="home" className="pt-20 pb-16 bg-portfolio-gradient">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side: text */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-secondary mb-6">
              Hi, I'm <span className="text-primary">Syed Yousaf Raza</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted mb-8 leading-relaxed">
              Code. Create. Conquer. (and yes, I sell accessories too)
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                onClick={() => scrollToSection("projects")}
                className="inline-flex items-center justify-center px-8 py-3 bg-primary text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
                data-testid="button-view-projects"
              >
                View My Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                onClick={() => scrollToSection("contact")}
                className="inline-flex items-center justify-center px-8 py-3 border border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-colors duration-200 font-medium"
                data-testid="button-get-in-touch"
              >
                Get In Touch
              </Button>
            </div>
          </div>

          {/* Right side: avatar */}
          <div className="order-1 lg:order-2 flex justify-center">
            <HeroAvatar /> {/* 👈 your cave-door avatar */}
          </div>
        </div>
      </div>
    </section>
  );
}
