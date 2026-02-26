import { ExternalLink, Github } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import type { Project } from '../types';

export function Projects() {
  const { elementRef, isVisible } = useIntersectionObserver({ threshold: 0.1 });

  const projects: Project[] = [
    {
      id: 1,
      title: 'E-Commerce Dashboard',
      description:
        'A modern admin dashboard for managing products, orders, and customers with real-time analytics and charts.',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
      techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Chart.js'],
      githubLink: 'https://github.com/yourusername/project1',
      liveLink: 'https://yourproject1.com',
    },
    {
      id: 2,
      title: 'Weather App',
      description:
        'Beautiful weather application with 5-day forecast, geolocation support, and detailed weather information.',
      image: 'https://images.pexels.com/photos/209831/pexels-photo-209831.jpeg?auto=compress&cs=tinysrgb&w=800',
      techStack: ['React', 'OpenWeather API', 'CSS Modules'],
      githubLink: 'https://github.com/yourusername/project2',
      liveLink: 'https://yourproject2.com',
    },
    {
      id: 3,
      title: 'Task Management App',
      description:
        'Intuitive task manager with drag-and-drop functionality, categories, priorities, and local storage.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      techStack: ['React', 'Context API', 'Tailwind CSS', 'React DnD'],
      githubLink: 'https://github.com/yourusername/project3',
      liveLink: 'https://yourproject3.com',
    },
    {
      id: 4,
      title: 'Portfolio Website',
      description:
        'Responsive personal portfolio showcasing projects, skills, and experience with smooth animations.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      githubLink: 'https://github.com/yourusername/project4',
      liveLink: 'https://yourproject4.com',
    },
  ];

  return (
    <section
      id="projects"
      ref={elementRef}
      className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div
          className={`transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white mb-4">
            Projects
          </h2>

          <div className="w-20 h-1 bg-blue-600 mx-auto mb-4"></div>

          <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and learning journey
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`group bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100 + 300}ms` }}
              >
                <div className="relative overflow-hidden h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors duration-200"
                    >
                      <Github size={18} />
                      <span className="text-sm font-medium">Code</span>
                    </a>

                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
                    >
                      <ExternalLink size={18} />
                      <span className="text-sm font-medium">Live Demo</span>
                    </a>
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
