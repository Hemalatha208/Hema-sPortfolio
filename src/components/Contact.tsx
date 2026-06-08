import { useState } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import type { ContactFormData } from '../types';

export function Contact() {
  const { elementRef, isVisible } = useIntersectionObserver({ threshold: 0.1 });
 <section
  id="contact"
  ref={elementRef}
  className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300"
>
  <div className="max-w-4xl mx-auto px-6 text-center">
    <div
      className={`transition-all duration-1000 delay-200 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
        Let's Connect
      </h2>

```
  <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>

  <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12">
    Third-year Computer Science Engineering student specializing in IoT,
    Cybersecurity & Blockchain Technology at MVGR College of Engineering.
    Currently pursuing an AI/ML Internship at NIT Warangal and passionate
    about Frontend Development, Artificial Intelligence, Machine Learning,
    and Computer Vision.
  </p>

  <div className="grid md:grid-cols-3 gap-6">
    <a
      href="mailto:vavilapallihemalatha2@gmail.com"
      className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
    >
      <Mail className="mx-auto text-blue-600 mb-4" size={32} />
      <h3 className="font-bold text-lg text-gray-900 dark:text-white">
        Email
      </h3>
      <p className="text-gray-600 dark:text-gray-400 text-sm mt-2">
        vavilapallihemalatha2@gmail.com
      </p>
    </a>

    <a
      href="https://github.com/Hemalatha208"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
    >
      <Github className="mx-auto text-gray-900 dark:text-white mb-4" size={32} />
      <h3 className="font-bold text-lg text-gray-900 dark:text-white">
        GitHub
      </h3>
      <p className="text-gray-600 dark:text-gray-400 text-sm mt-2">
        github.com/Hemalatha208
      </p>
    </a>

    <a
      href="https://www.linkedin.com/in/hemalatha-vavilapalli-a209542bb"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
    >
      <Linkedin className="mx-auto text-blue-600 mb-4" size={32} />
      <h3 className="font-bold text-lg text-gray-900 dark:text-white">
        LinkedIn
      </h3>
      <p className="text-gray-600 dark:text-gray-400 text-sm mt-2">
        Hemalatha Vavilapalli
      </p>
    </a>
  </div>

  <div className="mt-12">
    <p className="text-gray-600 dark:text-gray-400">
      Open to Frontend Development, AI/ML, Software Development internships and opportunities.
    </p>
  </div>
</div>
```

  </div>
</section>

}
