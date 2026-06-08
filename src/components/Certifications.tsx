import { Award } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export function Certifications() {
  const { elementRef, isVisible } = useIntersectionObserver({ threshold: 0.1 });

  const certifications = [
    'Cisco Python Essentials',
    'Cisco Data Science',
    'Cisco Cybersecurity Essentials',
    'GeeksforGeeks Full Stack Development',
    'EduSkills AI/ML Virtual Internship',
    'EduSkills Cloud Technologies Virtual Internship',
  ];

  return (
    <section
      id="certifications"
      ref={elementRef}
      className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div
          className={`transition-all duration-1000 ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white mb-4">
            Certifications
          </h2>

          <div className="w-20 h-1 bg-blue-600 mx-auto mb-12"></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
              >
                <Award
                  className="text-blue-600 dark:text-blue-400 mb-4"
                  size={32}
                />

                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {cert}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}