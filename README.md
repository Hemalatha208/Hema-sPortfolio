# Student Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS.

## Features

- Fully responsive design (mobile-first approach)
- Dark mode toggle with localStorage persistence
- Smooth scrolling navigation
- Fade-in animations on scroll
- Clean, professional design
- Reusable component structure

## Project Structure

```
src/
├── components/          # All React components
│   ├── Navbar.tsx      # Navigation bar with dark mode toggle
│   ├── Hero.tsx        # Hero section with intro
│   ├── About.tsx       # About me section
│   ├── Skills.tsx      # Skills grid with cards
│   ├── Projects.tsx    # Projects showcase
│   ├── Contact.tsx     # Contact form and social links
│   └── Footer.tsx      # Footer with quick links
├── hooks/              # Custom React hooks
│   ├── useDarkMode.ts  # Dark mode functionality
│   └── useIntersectionObserver.ts  # Scroll animations
├── types/              # TypeScript type definitions
│   └── index.ts        # Interface definitions
├── App.tsx             # Main app component
├── main.tsx            # App entry point
└── index.css           # Global styles
```

## Customization Guide

### 1. Personal Information

Update the following placeholder text with your real information:

#### Hero Section (`src/components/Hero.tsx`)
- Change `"Your Name"` to your actual name (line 17)
- Update the introduction text (lines 23-25)

#### About Section (`src/components/About.tsx`)
- Update the bio paragraphs (lines 30-39)
- Modify the technology tags if needed (lines 41-55)

#### Contact Section (`src/components/Contact.tsx`)
- Replace `your.email@example.com` with your real email (line 76)
- Update GitHub link: `https://github.com/yourusername` (line 87)
- Update LinkedIn link: `https://linkedin.com/in/yourusername` (line 99)

#### Footer (`src/components/Footer.tsx`)
- Change `"Your Name"` to your actual name (line 11)
- Update all social links (lines 38-56)

### 2. Projects

Edit `src/components/Projects.tsx` to add your real projects:

```typescript
const projects: Project[] = [
  {
    id: 1,
    title: 'Your Project Name',
    description: 'Brief description of your project...',
    image: 'https://your-image-url.com/image.jpg',
    techStack: ['React', 'TypeScript', 'etc'],
    githubLink: 'https://github.com/yourusername/your-repo',
    liveLink: 'https://your-live-demo.com',
  },
  // Add more projects...
];
```

### 3. Skills

Modify `src/components/Skills.tsx` to update your skill level:

```typescript
{
  name: 'JavaScript',
  level: 'Advanced',  // or 'Intermediate' or 'Beginner'
  // ... other fields
}
```

### 4. Colors

To change the accent color from blue, update the Tailwind classes:
- Replace `blue-600` with your preferred color (e.g., `green-600`, `purple-600`)
- Update `dark:text-blue-400` accordingly

### 5. Page Title

Update `index.html` (line 7):
```html
<title>Your Name - Frontend Developer Student</title>
```

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Technologies Used

- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Vite** - Build tool
- **Lucide React** - Icons

## Key Learning Points

### Custom Hooks
- `useDarkMode`: Manages dark mode state with localStorage
- `useIntersectionObserver`: Triggers animations when elements enter viewport

### Responsive Design
- Mobile-first approach with breakpoints (md, lg)
- Flexbox and Grid layouts
- Responsive images and typography

### Animations
- Fade-in on scroll using Intersection Observer
- Hover effects and transitions
- Smooth scrolling between sections

### Best Practices
- Component-based architecture
- TypeScript for type safety
- Reusable components and hooks
- Clean, maintainable code structure

## Browser Support

Works on all modern browsers:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## License

Feel free to use this template for your own portfolio!

---

Made with ❤️ and React
