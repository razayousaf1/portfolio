import { Bot, Code, Database } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-secondary mb-4">
            About Me
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            A Computer Science student at the University of Lahore. Alongside my
            academics, I specialize in Python automation, video editing, and
            front-end development. I also run my own men’s accessory brand,{" "}
            <a
              href="https://www.instagram.com/shahsawaarofficial?igsh=MWVnMzJybWh4ZTF4aQ%3D%3D&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-black bg-yellow-200 px-1 rounded hover:bg-yellow-300 transition-colors duration-300"
            >
              Shahsawaar
            </a>
            , where I combine creativity with entrepreneurial spirit. Passionate
            about technology and innovation, I aim to grow as an AI/ML engineer
            and eventually build my own startup that creates impactful and
            user-friendly solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
              alt="Computer science student studying algorithms and coding"
              className="rounded-xl shadow-lg w-full h-auto"
              data-testid="img-about-student"
            />
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-secondary mb-6">
              Education & Background
            </h3>
            <div className="space-y-6">
              <div className="border-l-4 border-primary pl-6">
                <h4
                  className="text-lg font-semibold text-secondary mb-2"
                  data-testid="text-degree"
                >
                  B.Sc. Computer Science
                </h4>
                <p
                  className="text-muted mb-1"
                  data-testid="text-university"
                >
                  University of Lahore
                </p>
                <p
                  className="text-sm text-muted"
                  data-testid="text-year"
                >
                  2022 - 2026 | Current Student
                </p>
              </div>
              <div className="bg-slate-50 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-secondary mb-3">
                  What I Do
                </h4>
                <ul className="space-y-2 text-muted">
                  <li className="flex items-start">
                    <Bot className="text-primary mt-1 mr-3 h-5 w-5" />
                    <span>
                      Real-time emotion detection, Computer vision projects and
                      Python automation
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Code className="text-primary mt-1 mr-3 h-5 w-5" />
                    <span>
                      Web development with HTML, CSS, JavaScript and Python
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Database className="text-primary mt-1 mr-3 h-5 w-5" />
                    <span>Database management with MySQL</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
