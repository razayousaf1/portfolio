import { Briefcase, Calendar, MapPin } from "lucide-react";

interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
}

const experiences: Experience[] = [
  {
    title: "Intern – Artificial Intelligence",
    company: "Artificial Intelligence Community of Pakistan",
    location: "Remote",
    period: "Jan 2024 – Feb 2024",
    description: [
      "Completed 8-week online coding internship focused on AI and software projects",
      "Gained hands-on experience with machine learning algorithms and AI development"
    ]
  },
  {
    title: "Customer Service Representative",
    company: "Kelly Services Ltd",
    location: "Hybrid",
    period: "Jun 2023 – Nov 2023",
    description: [
      "Updated client records and processed documents using MS Office",
      "Managed purchase orders and customer data efficiently",
      "Maintained accurate records and provided excellent customer support"
    ]
  },
  {
    title: "Client Services & Support",
    company: "Webring",
    location: "Lahore",
    period: "Jan 2023 – May 2023",
    description: [
      "Assisted customers and promoted services while ensuring satisfaction",
      "Coordinated deliveries and maintained records in MS Excel/Word",
      "Developed strong communication and organizational skills"
    ]
  },
  {
    title: "Intern",
    company: "World Wide Fund",
    location: "Hybrid",
    period: "2023",
    description: [
      "Promoted eco-friendly programs and recycling campaigns",
      "Collaborated with students worldwide on sustainability projects",
      "Contributed to environmental awareness initiatives"
    ]
  }
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-secondary mb-4">Experience</h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Professional experience gained through internships and work opportunities
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-slate-50 rounded-xl p-6 hover:shadow-md transition-shadow duration-300"
              data-testid={`experience-${index}`}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div className="mb-2 md:mb-0">
                  <h3 className="text-xl font-semibold text-secondary mb-1" data-testid={`experience-title-${index}`}>
                    {exp.title}
                  </h3>
                  <p className="text-primary font-medium mb-2" data-testid={`experience-company-${index}`}>
                    {exp.company}
                  </p>
                </div>
                <div className="text-muted text-sm space-y-1">
                  <div className="flex items-center" data-testid={`experience-period-${index}`}>
                    <Calendar className="h-4 w-4 mr-2" />
                    {exp.period}
                  </div>
                  <div className="flex items-center" data-testid={`experience-location-${index}`}>
                    <MapPin className="h-4 w-4 mr-2" />
                    {exp.location}
                  </div>
                </div>
              </div>
              <ul className="space-y-2">
                {exp.description.map((desc, descIndex) => (
                  <li 
                    key={descIndex} 
                    className="text-muted flex items-start"
                    data-testid={`experience-desc-${index}-${descIndex}`}
                  >
                    <Briefcase className="h-4 w-4 mr-3 mt-1 text-primary flex-shrink-0" />
                    {desc}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}