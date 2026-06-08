import { Heart, Github, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Hemalatha Vavilapalli</h3>
            <p className="text-gray-400 text-sm">
              AI/ML Intern @ NIT Warangal | Frontend Developer | Passionate about Machine Learning and Computer Vision.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#about"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Connect</h3>
            <div className="flex gap-4">
              <a
                href="https://github.com/Hemalatha208"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors duration-200"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/hemalatha-vavilapalli-a209542bb"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:vavilapallihemalatha2@gmail.com"
                className="p-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors duration-200"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400 text-sm flex items-center justify-center gap-2 flex-wrap">
  © {currentYear} Hemalatha Vavilapalli • Built with
  <Heart size={16} className="text-red-500" />
  using React & TypeScript
</p>
        </div>
      </div>
    </footer>
  );
}
