import { Github, Linkedin, Mail } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export function Contact() {
  const { elementRef, isVisible } = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section
      id="contact"
      ref={elementRef}
      className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300"
    >
      <div className="max-w-5xl mx-auto px-6 text-center">
        <div
          className={`transition-all duration-1000 delay-200 ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Let's Connect
          </h2>

          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>

          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-12">
            I'm <span className="font-semibold">Hemalatha Vavilapalli</span>, a
            Computer Science Engineering student specializing in IoT,
            Cybersecurity & Blockchain Technology at MVGR College of Engineering.
            Currently pursuing an AI/ML Internship at NIT Warangal and passionate
            about Frontend Development, Artificial Intelligence, Machine Learning,
            and Computer Vision.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Email Card */}
            <a
              href="mailto:vavilapallihemalatha2@gmail.com"
              className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              <Mail
                className="mx-auto text-blue-600 dark:text-blue-400 mb-4"
                size={36}
              />

              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                Email
              </h3>

              <p className="text-gray-600 dark:text-gray-400 text-sm break-all">
                vavilapallihemalatha2@gmail.com
              </p>
            </a>

            {/* GitHub Card */}
            <a
              href="https://github.com/Hemalatha208"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              <Github
                className="mx-auto text-gray-900 dark:text-white mb-4"
                size={36}
              />

              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                GitHub
              </h3>

              <p className="text-gray-600 dark:text-gray-400 text-sm">
                github.com/Hemalatha208
              </p>
            </a>

            {/* LinkedIn Card */}
            <a
              href="https://www.linkedin.com/in/hemalatha-vavilapalli-a209542bb"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              <Linkedin
                className="mx-auto text-blue-600 dark:text-blue-400 mb-4"
                size={36}
              />

              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                LinkedIn
              </h3>

              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Hemalatha Vavilapalli
              </p>
            </a>
          </div>

          <div className="mt-12">
            <p className="text-lg font-medium text-gray-700 dark:text-gray-300">
              Open to Frontend Development, AI/ML, Software Development
              Internships, Research Opportunities, and Collaborative Projects.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}