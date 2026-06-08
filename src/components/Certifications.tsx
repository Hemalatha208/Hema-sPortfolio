import { Award } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export function Certifications() {
  const { elementRef, isVisible } = useIntersectionObserver({ threshold: 0.1 });
const certifications = [
  {
    name: 'Cisco Python Essentials',
    issuer: 'Cisco Networking Academy',
    link: 'https://drive.google.com/drive/folders/1tn30WNamPnJw2a1KuLzjVqV75wkp-rai?usp=sharing',
  },
  {
    name: 'Cisco Data Science',
    issuer: 'Cisco Networking Academy',
    link: 'https://drive.google.com/file/d/1Myy6-dBTd-AK79EJn3-NWxW3KSJcDrA1/view?usp=sharing',
  },
  {
    name: 'Cisco Cybersecurity Essentials',
    issuer: 'Cisco Networking Academy',
    link: 'https://drive.google.com/file/d/1hZrVBjTWDWid_GVSB_8WHeAVfF0hNT3w/view?usp=sharing',
  },
  {
    name: 'NPTEL - Blockchain and Its Applications',
    issuer: 'NPTEL',
    link: 'https://drive.google.com/file/d/1Cfg1Q7kex3U9w-mECXg7VZVUQSs5Yuhy/view?usp=sharing',
  },
  {
    name: 'GeeksforGeeks Full Stack Development',
    issuer: 'GeeksforGeeks',
    link: 'https://drive.google.com/file/d/1bSPduasjrkXpMpl9JUxf15MYdY0Dt79e/view?usp=sharing',
  },
  {
    name: 'EduSkills AI/ML Virtual Internship',
    issuer: 'EduSkills',
    link: 'https://drive.google.com/file/d/1FAl2KN0EzAFC4e45FYkBSpp-YQEngHUC/view?usp=sharing',
  },
  {
    name: 'EduSkills IoT Cloud Engineering Virtual Internship',
    issuer: 'EduSkills',
    link: 'https://drive.google.com/file/d/1LQmNgQMkoCp6gbeztO1sYBqR20JrblTz/view?usp=sharing',
  },
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
  {cert.name}
</h3>

<p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
  {cert.issuer}
</p>

<a
  href={cert.link}
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
>
  View Certificate
</a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}