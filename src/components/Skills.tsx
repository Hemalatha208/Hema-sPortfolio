import { Code, Palette, Blocks, Zap } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export function Skills() {
  const { elementRef, isVisible } = useIntersectionObserver({ threshold: 0.1 });

  const skills = [
    {
      name: 'HTML',
      icon: Code,
      description: 'Semantic markup and accessibility-focused structure',
      level: 'Advanced',
      color: 'from-orange-400 to-red-500',
    },
    {
      name: 'CSS',
      icon: Palette,
      description: 'Modern layouts with Flexbox, Grid, and animations',
      level: 'Advanced',
      color: 'from-blue-400 to-cyan-500',
    },
    {
      name: 'JavaScript',
      icon: Zap,
      description: 'ES6+, async/await, DOM manipulation, and APIs',
      level: 'Intermediate',
      color: 'from-yellow-400 to-orange-500',
    },
    {
      name: 'React',
      icon: Blocks,
      description: 'Hooks, component design, state management, and routing',
      level: 'Intermediate',
      color: 'from-cyan-400 to-blue-500',
    },
  ];

  return (
    <section
      id="skills"
      ref={elementRef}
      className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div
          className={`transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white mb-4">
            Skills
          </h2>

          <div className="w-20 h-1 bg-blue-600 mx-auto mb-4"></div>

          <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
            Technologies and tools I'm proficient in and continuously improving
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <div
                  key={skill.name}
                  className={`group bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-2xl p-6 transform hover:-translate-y-2 transition-all duration-300 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${index * 100 + 300}ms` }}
                >
                  <div
                    className={`w-16 h-16 rounded-lg bg-gradient-to-br ${skill.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className="text-white" size={32} />
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {skill.name}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                    {skill.description}
                  </p>

                  <div className="flex items-center gap-2">
                    <div className="flex-1 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                        style={{
                          width: skill.level === 'Advanced' ? '90%' : '70%',
                        }}
                      ></div>
                    </div>
                    <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                      {skill.level}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
