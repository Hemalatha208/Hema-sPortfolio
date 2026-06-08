import { GraduationCap } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export function Education() {
  const { elementRef, isVisible } = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section
      id="education"
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
            Education
          </h2>

          <div className="w-20 h-1 bg-blue-600 mx-auto mb-12"></div>

          <div className="max-w-3xl mx-auto">
            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-600 rounded-lg">
                  <GraduationCap className="text-white" size={24} />
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    B.Tech - Computer Science Engineering
                  </h3>

                  <p className="text-blue-600 dark:text-blue-400 font-medium mt-1">
                    MVGR College of Engineering
                  </p>

                  <p className="text-gray-500 dark:text-gray-400 mt-1">
                    IoT, Cybersecurity & Blockchain Technology
                  </p>

                  <p className="text-gray-500 dark:text-gray-400 mt-1">
                    2023 - 2027
                  </p>

                  <div className="mt-4 inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900 rounded-full">
                    <span className="font-semibold text-blue-700 dark:text-blue-300">
                      CGPA: 9.18
                    </span>
                  </div>

                  <p className="mt-4 text-gray-600 dark:text-gray-300">
                    Upcoming Final-Year student with strong academic performance,
                    specializing in Frontend Development, Artificial Intelligence,
                    Machine Learning, Cybersecurity, Blockchain Technology, and
                    Computer Vision.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}