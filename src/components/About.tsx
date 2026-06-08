import { Code2, Sparkles, Target } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export function About() {
  const { elementRef, isVisible } = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section
      id="about"
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
            About Me
          </h2>

          <div className="w-20 h-1 bg-blue-600 mx-auto mb-12"></div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                I am a fourth-year Computer Science Engineering student specializing in IoT, Cybersecurity, and Blockchain Technology at MVGR College of Engineering. Currently, I am pursuing an AI/ML Internship at NIT Warangal, where I am gaining hands-on experience in Machine Learning, Deep Learning, and Computer Vision technologies.
              </p>

              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
               I am passionate about Frontend Development and Artificial Intelligence, with experience in Python, Java, C++, JavaScript, Data Structures, DBMS, and modern web technologies. During my internship, I developed a Real-Time Pedestrian Detection System using YOLOv5, YOLOv8, YOLOv10-Lite, and OpenCV on the Penn-Fudan Pedestrian Dataset. I enjoy building intelligent solutions, creating responsive web applications, and continuously learning new technologies to solve real-world problems.
              </p>

              <div className="flex flex-wrap gap-3 pt-4">
                <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium">
                  HTML
                </span>
                <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium">
                  CSS
                </span>
                <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium">
                  JavaScript
                </span>
                <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium">
                  React
                </span>
                <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium">
                  Node js
                </span>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-700 p-6 rounded-xl shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-600 rounded-lg">
                    <Code2 className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      Clean Code
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Writing readable, maintainable code following best practices
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-700 p-6 rounded-xl shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-600 rounded-lg">
                    <Sparkles className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      Creative Design
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Building beautiful, responsive interfaces with attention to detail
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-700 p-6 rounded-xl shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-600 rounded-lg">
                    <Target className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      Always Learning
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Constantly exploring new technologies and improving my skills
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
