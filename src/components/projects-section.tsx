"use client";
import { useState, useEffect } from "react";
import { ArrowRight, Github, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  link: string;
}

const projects: Project[] = [
  {
    title: "Real-Time Emotion Detection",
    description:
      "Developed a real-time facial emotion recognition system using OpenCV for face detection and a pretrained Keras model for classification. Integrated live webcam feed for instant predictions.",
    technologies: ["Python", "OpenCV", "TensorFlow/Keras", "NumPy"],
    image:
      "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    link: "https://github.com/razayousaf1/emotion-detection.git",
  },
  {
    title: "QR Code & Barcode Scanner",
    description:
      "Built a Python-based scanner using Pyzbar to detect QR codes and barcodes through the camera and open embedded links automatically.",
    technologies: ["Python", "Pyzbar", "OpenCV"],
    image:
      "https://images.unsplash.com/photo-1504639725590-34d0984388bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    link: "https://github.com/razayousaf1/qr-scanner.git",
  },
  {
    title: "Shahsawaar Website",
    description:
      "Created a personal branding website using front-end technologies to showcase projects and portfolio.",
    technologies: ["HTML", "CSS", "JavaScript"],
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    link: "https://github.com/yourusername/shahsawaar-website",
  },
];

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (selectedProject) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, [selectedProject]);

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-secondary mb-4">
            Projects & Work
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Real projects demonstrating my programming skills in AI, computer vision, and web development
          </p>
        </div>

        {/* Project Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-slate-50 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-secondary mb-3">
                  {project.title}
                </h3>
                <p className="text-muted mb-4 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex items-center gap-3">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-primary hover:text-blue-700 transition-colors duration-200 p-0"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Github className="h-4 w-4 mr-2" /> View Project{" "}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                  {/* Show "Currently in Progress" only for Shahsawaar Website */}
                  {project.title === "Shahsawaar Website" && (
                    <Badge
                      variant="secondary"
                      className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-xs font-medium"
                    >
                      Currently in Progress
                    </Badge>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <div
          className={`fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4 transition-opacity duration-300 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setSelectedProject(null)}
        >
          <div
            className={`bg-white rounded-xl max-w-3xl w-full overflow-hidden relative transform transition-transform duration-300 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
              onClick={() => setSelectedProject(null)}
            >
              <X className="h-6 w-6" />
            </button>
            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold text-secondary mb-4">
                {selectedProject.title}
              </h3>
              <p className="text-muted mb-4">{selectedProject.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {selectedProject.technologies.map((tech) => (
                  <Badge
                    key={tech}
                    variant="secondary"
                    className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
              <a
                href={selectedProject.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-primary text-white rounded hover:bg-blue-700 transition-colors"
              >
                <Github className="h-4 w-4 mr-2" /> View on GitHub
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
