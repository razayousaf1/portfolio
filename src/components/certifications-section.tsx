"use client";
import { useState, useEffect } from "react";
import { Award, ExternalLink, X, ChevronLeft, ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface Certificate {
  title: string;
  issuer: string;
  date: string;
  image: string;
  credential: string;
  description: string;
  link: string;
}

const certificates: Certificate[] = [
  {
    title: "Google AI Essentials Specialisation",
    issuer: "Google",
    date: "2025",
    image: "/certificates/aigooglecert.jpg",
    credential: "#CERT101",
    description: "Specialisation by Google covering AI fundamentals, machine learning basics, and real-world applications.",
    link: "https://coursera.org/share/d29e71709d564db087bc730dcfcc06e2"
  },
  {
    title: "Google AI Essentials V1 Badge",
    issuer: "Credly",
    date: "2025",
    image: "/certificates/aicertcoursera.jpg",
    credential: "#CERT102",
    description: "Badge of the Google AI Essentials course on Coursera from Credly.",
    link: "https://www.credly.com/badges/72b00c7b-53e8-4297-b552-cbf734c3c05d/linked_in_profile"
  },
  {
    title: "Introduction to AI",
    issuer: "deeplearning.ai",
    date: "2025",
    image: "/certificates/deeplearningcert.jpg",
    credential: "#CERT103",
    description: "A beginner-friendly course on artificial intelligence, exploring neural networks, AI concepts, and introductory projects.",
    link: "https://coursera.org/share/5d378a282ff9c86b3e2344140f71e63b"
  }
];

export default function CertificationsSection() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex !== null) {
        if (e.key === "ArrowLeft") {
          setSelectedIndex((selectedIndex - 1 + certificates.length) % certificates.length);
        } else if (e.key === "ArrowRight") {
          setSelectedIndex((selectedIndex + 1) % certificates.length);
        } else if (e.key === "Escape") {
          setSelectedIndex(null);
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex]);

  const handlePrev = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + certificates.length) % certificates.length);
    }
  };

  const handleNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % certificates.length);
    }
  };

  return (
    <section id="certifications" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-secondary mb-4">Certifications</h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Professional certifications and achievements in technology and programming
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 cursor-pointer"
              onClick={() => setSelectedIndex(index)}
            >
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <Award className="text-primary h-6 w-6 mt-1" />
                  <Badge variant="secondary" className="text-xs px-2 py-1">
                    {cert.date}
                  </Badge>
                </div>
                <h3 className="text-xl font-semibold text-secondary mb-2">{cert.title}</h3>
                <p className="text-primary font-medium mb-2">{cert.issuer}</p>
                <p className="text-muted text-sm mb-4 line-clamp-3">{cert.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted">{cert.credential}</span>
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-blue-700 p-0 inline-flex items-center text-sm font-medium"
                    onClick={(e) => e.stopPropagation()} // prevent modal open
                  >
                    View Certificate
                    <ExternalLink className="ml-1 h-3 w-3" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Carousel */}
        {selectedIndex !== null && (
          <div
            className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedIndex(null)}
          >
            <div
              className="bg-white rounded-xl max-w-3xl w-full overflow-hidden relative transform transition-transform duration-300 scale-95 hover:scale-100"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
                onClick={() => setSelectedIndex(null)}
              >
                <X className="h-6 w-6" />
              </button>

              <img
                src={certificates[selectedIndex].image}
                alt={certificates[selectedIndex].title}
                className="w-full h-auto object-contain max-h-[70vh]"
              />

              <button
                onClick={handlePrev}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow hover:bg-gray-100"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow hover:bg-gray-100"
              >
                <ChevronRight className="h-6 w-6" />
              </button>

              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold text-secondary mb-2">{certificates[selectedIndex].title}</h3>
                <p className="text-primary mb-2">{certificates[selectedIndex].issuer}</p>
                <p className="text-muted text-sm mb-4">{certificates[selectedIndex].description}</p>
                <a
                  href={certificates[selectedIndex].link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-primary hover:text-blue-700 font-medium mt-2"
                >
                  View Certificate on Site
                  <ExternalLink className="ml-1 h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
