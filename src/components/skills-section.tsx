"use client";
import { useEffect, useRef, useState } from "react";
import { Globe, TrendingUp, Code, Video } from "lucide-react";

interface Skill {
  name: string;
  level: number;
  icon: string;
  proficiency: string;
}

const skills: Skill[] = [
  { name: "C++", level: 85, icon: "fab fa-cuttlefish", proficiency: "Advanced" },
  { name: "Python", level: 70, icon: "fab fa-python", proficiency: "Intermediate" },
  { name: "JavaScript", level: 50, icon: "fab fa-js-square", proficiency: "Basic" },
  { name: "React", level: 50, icon: "fab fa-react", proficiency: "Basic" },
  { name: "Tailwind CSS", level: 70, icon: "fab fa-css3-alt", proficiency: "Intermediate" },
  { name: "HTML/CSS", level: 80, icon: "fab fa-html5", proficiency: "Advanced" },
  { name: "MySQL", level: 75, icon: "fas fa-database", proficiency: "Intermediate" },
];

export default function SkillsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-20 bg-slate-50" ref={sectionRef}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-secondary mb-4">Technical Skills</h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Programming languages and technologies I work with to bring ideas to life
          </p>
        </div>

        {/* Skills Progress Bars */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
              alt="Programming workspace with multiple monitors showing code"
              className="rounded-xl shadow-lg w-full h-auto"
              data-testid="img-skills-workspace"
            />
          </div>
          <div className="space-y-6">
            {skills.map((skill, index) => (
              <div key={skill.name} data-testid={`skill-${skill.name.toLowerCase().replace("/", "-")}`}>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-lg font-semibold text-secondary flex items-center">
                    <i className={`${skill.icon} text-primary mr-3`}></i>
                    {skill.name}
                  </span>
                  <span className="text-muted">{skill.proficiency}</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-3">
                  <div
                    className={`bg-primary h-3 rounded-full skill-bar ${
                      isVisible ? "" : "w-0"
                    }`}
                    style={{
                      width: isVisible ? `${skill.level}%` : "0%",
                      transitionDelay: `${index * 0.1}s`,
                    }}
                    data-testid={`progress-${skill.name.toLowerCase().replace("/", "-")}`}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Web Development */}
          <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200" data-testid="card-web-development">
            <div className="text-center">
              <Globe className="text-3xl mb-4 mx-auto h-12 w-12 text-blue-500 transform transition-transform duration-300 hover:scale-110" />
              <h4 className="font-semibold text-secondary mb-2">Web Development</h4>
              <p className="text-sm text-muted">Frontend technologies and responsive design</p>
            </div>
          </div>

          {/* Computer Vision */}
          <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200" data-testid="card-computer-vision">
            <div className="text-center">
              <TrendingUp className="text-3xl mb-4 mx-auto h-12 w-12 text-blue-500 transform transition-transform duration-300 hover:scale-110" />
              <h4 className="font-semibold text-secondary mb-2">Computer Vision</h4>
              <p className="text-sm text-muted">Image processing and OpenCV projects</p>
            </div>
          </div>

          {/* Python Automation */}
          <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200" data-testid="card-python-automation">
            <div className="text-center">
              <Code className="text-3xl mb-4 mx-auto h-12 w-12 text-blue-500 transform transition-transform duration-300 hover:scale-110" />
              <h4 className="font-semibold text-secondary mb-2">Python Automation</h4>
              <p className="text-sm text-muted">Scripting, task automation, and workflow optimization</p>
            </div>
          </div>

          {/* Video Editing */}
          <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200" data-testid="card-video-editing">
            <div className="text-center">
              <Video className="text-3xl mb-4 mx-auto h-12 w-12 text-blue-500 transform transition-transform duration-300 hover:scale-110" />
              <h4 className="font-semibold text-secondary mb-2">Video Editing</h4>
              <p className="text-sm text-muted">Creative editing, storytelling, and content production</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
