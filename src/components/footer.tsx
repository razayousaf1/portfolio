export default function Footer() {
  return (
    <footer className="bg-secondary text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4" data-testid="text-footer-name">
            Syed Yousaf Raza
          </h3>
          <p className="text-slate-300 mb-6" data-testid="text-footer-tagline">
            Computer Science Student | AI Developer | Problem Solver
          </p>

          {/* Removed the social icons */}
          {/* <div className="flex justify-center space-x-6 mb-8">
            <a href="#" className="text-slate-300 hover:text-white transition-colors duration-200" data-testid="link-footer-github">
              <Github className="h-6 w-6" />
            </a>
            <a href="#" className="text-slate-300 hover:text-white transition-colors duration-200" data-testid="link-footer-linkedin">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="#" className="text-slate-300 hover:text-white transition-colors duration-200" data-testid="link-footer-email">
              <Mail className="h-6 w-6" />
            </a>
          </div> */}

          <div className="border-t border-slate-600 pt-8">
            <p className="text-slate-400" data-testid="text-footer-copyright">
              © 2024 Syed Yousaf Raza. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
