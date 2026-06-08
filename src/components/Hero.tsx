import { ArrowDown } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export function Hero() {
  const { elementRef, isVisible } = useIntersectionObserver({ threshold: 0.1 });

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      ref={elementRef}
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300"
    >
      <div
        className={`max-w-4xl mx-auto px-6 text-center transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-4">
          Hi, I'm <span className="text-blue-600 dark:text-blue-400">Hemalatha Vavilapalli</span>
        </h1>

        <h2 className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300 mb-6">
        AI/ML Intern @ NIT Warangal | Frontend Developer | Computer Vision Enthusiast
  </h2>

        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
  Fourth-year Computer Science Engineering student specializing in IoT, Cybersecurity & Blockchain Technology at MVGR College of Engineering. Currently pursuing an AI/ML Internship at NIT Warangal and building innovative solutions in Frontend Development, Machine Learning, and Computer Vision.
</p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
  href="https://drive.google.com/file/d/1QEjjNg9qxJ77SMOs7Yc5qhDfOsOT0_Nk/view?usp=sharing"
  target="_blank"
  rel="noopener noreferrer"
  className="px-8 py-3 bg-blue-600 hover:bg-green-700 text-white font-medium rounded-lg shadow-lg"
>
  View Resume
</a>
          <button
            onClick={() => scrollToSection('projects')}
            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
          >
            Explore My Projects
          </button>

          <button
            onClick={() => scrollToSection('contact')}
            className="px-8 py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-medium rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 border-2 border-gray-200 dark:border-gray-700"
          >
            Let's Connect
          </button>
        </div>

        <div className="mt-16 animate-bounce">
          <ArrowDown className="mx-auto text-gray-400 dark:text-gray-600" size={32} />
        </div>
      </div>
    </section>
  );
}
