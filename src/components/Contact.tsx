import { useState } from 'react';
import { Github, Linkedin, Mail, Send } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import type { ContactFormData } from '../types';

export function Contact() {
  const { elementRef, isVisible } = useIntersectionObserver({ threshold: 0.1 });
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    await new Promise((resolve) => setTimeout(resolve, 1000));

    console.log('Form submitted:', formData);
    setSubmitStatus('success');
    setIsSubmitting(false);

    setFormData({ name: '', email: '', message: '' });

    setTimeout(() => setSubmitStatus('idle'), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section
      id="contact"
      ref={elementRef}
      className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300"
    >
      <div className="max-w-4xl mx-auto px-6">
        <div
          className={`transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white mb-4">
            Get In Touch
          </h2>

          <div className="w-20 h-1 bg-blue-600 mx-auto mb-4"></div>

          <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
  I'm actively seeking opportunities in Frontend Development, AI/ML, and Software Development. Feel free to connect with me for collaborations, internships, or exciting projects.
</p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Let's Connect
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                 As a Computer Science student and AI/ML Intern at NIT Warangal, I am passionate about building innovative solutions using Frontend Development, Machine Learning, and Computer Vision. Let's connect and create something impactful together.
                </p>
              </div>

              <div className="space-y-4">
                <a
                  href="mailto:vavilapallihemalatha2@gmail.com"
                  className="flex items-center gap-4 p-4 bg-white dark:bg-gray-900 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 group"
                >
                  <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg group-hover:scale-110 transition-transform duration-200">
                    <Mail className="text-blue-600 dark:text-blue-400" size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
                    <p className="text-gray-900 dark:text-white font-medium">
                    vavilapallihemalatha2@gmail.com
                    </p>
                  </div>
                </a>

                <a
                  href="https://github.com/Hemalatha208"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-white dark:bg-gray-900 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 group"
                >
                  <div className="p-3 bg-gray-100 dark:bg-gray-800 rounded-lg group-hover:scale-110 transition-transform duration-200">
                    <Github className="text-gray-900 dark:text-white" size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">GitHub</p>
                    <p className="text-gray-900 dark:text-white font-medium">Hemalatha208</p>
                  </div>
                </a>

                <a
                  href="https://www.linkedin.com/in/hemalatha-vavilapalli-a209542bb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-white dark:bg-gray-900 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 group"
                >
                  <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg group-hover:scale-110 transition-transform duration-200">
                    <Linkedin className="text-blue-600 dark:text-blue-400" size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">LinkedIn</p>
                    <p className="text-gray-900 dark:text-white font-medium">Hemalatha Vavilapalli</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
