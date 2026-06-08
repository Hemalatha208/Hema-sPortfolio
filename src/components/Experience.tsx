import { Briefcase } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export function Experience() {
  const { elementRef, isVisible } = useIntersectionObserver({ threshold: 0.1 });

  const experiences = [
    {
      title: 'AI/ML Intern',
      organization: 'NIT Warangal',
      duration: '2025 - Present',
      description:
        'Working on Computer Vision and Machine Learning applications, including Pedestrian Detection Systems using modern AI techniques. Gaining hands-on experience in model development, data processing,and real-world AI solutions.',
    },
    {
      title: 'AI/ML Virtual Internship',
      organization: 'EduSkills',
      duration: 'Virtual Internship',
      description:
        'Gained practical exposure to Machine Learning concepts, model building, data preprocessing, and AI applications through hands-on learning.',
    },
    {
      title: 'IoT Cloud Engineering Virtual Internship',
      organization: 'EduSkills',
      duration: 'Virtual Internship',
      description:
        'Learned cloud computing fundamentals, IoT integration, cloud services, and deployment concepts through industry-oriented projects.',
    },
  ];

  return (
    <section
      id="experience"
      ref={elementRef}
      className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300"
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
            Experience
          </h2>

          <div className="w-20 h-1 bg-blue-600 mx-auto mb-12"></div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-600 rounded-lg">
                    <Briefcase className="text-white" size={24} />
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {exp.title}
                    </h3>

                    <p className="text-blue-600 dark:text-blue-400 font-medium">
                      {exp.organization}
                    </p>

                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                      {exp.duration}
                    </p>

                    <p className="text-gray-600 dark:text-gray-300">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}