# Sowmipriya Rajendiran - Portfolio Website

A vibrant, modern, and professional portfolio website showcasing experience as a Data Scientist and Machine Learning Engineer specializing in LLM, NLP, and applied AI.

## Features

- **Responsive Design**: Fully responsive layout optimized for desktop, tablet, and mobile devices
- **Modern UI**: Beautiful gradient designs with vibrant colors, icons, and smooth animations
- **Profile Photo**: Hero section with photo placeholder (add your photo to `/public/profile-photo.jpg`)
- **Visual Elements**: Gradient backgrounds, animated blobs, icons, and color-coded sections
- **Accessible**: Semantic HTML and proper color contrast for accessibility
- **Performance**: Built with Vite for fast development and optimized production builds
- **Open-Source Chatbot**: "Ask about me" chatbot (no API, client-side) so visitors can ask questions about experience, skills, projects, education, and contact

## Tech Stack

- **React 18**: Modern React with functional components
- **Tailwind CSS**: Utility-first CSS framework for styling
- **Vite**: Fast build tool and development server

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Building for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist` directory.

To preview the production build:

```bash
npm run preview
```

## Project Structure

```
portfolio/
├── src/
│   ├── components/
│   │   ├── About.jsx
│   │   ├── Chatbot.jsx
│   │   ├── Contact.jsx
│   │   ├── Education.jsx
│   │   ├── Experience.jsx
│   │   ├── Hero.jsx
│   │   ├── Navigation.jsx
│   │   ├── Projects.jsx
│   │   ├── Publications.jsx
│   │   └── Skills.jsx
│   ├── data/
│   │   └── chatbotKnowledge.js
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## Adding Your Profile Photo

1. Place your photo in the `public` folder as `profile-photo.jpg`
2. Recommended: Square format, 512x512 pixels or larger
3. Supported formats: JPG, PNG, WebP
4. If no photo is provided, a beautiful gradient placeholder with your initials will be displayed

## Customization

All content is easily editable in the component files:

- **Hero**: `src/components/Hero.jsx` - Name, title, value proposition, and profile photo
- **About**: `src/components/About.jsx` - Personal summary with icon cards
- **Experience**: `src/components/Experience.jsx` - Work experience timeline with icons
- **Education**: `src/components/Education.jsx` - Educational background
- **Skills**: `src/components/Skills.jsx` - Technical skills grouped by category with icons
- **Projects**: `src/components/Projects.jsx` - Selected work projects with gradient cards
- **Publications**: `src/components/Publications.jsx` - Research publications
- **Contact**: `src/components/Contact.jsx` - Contact information with icon cards
- **Chatbot**: `src/components/Chatbot.jsx` - Floating "Ask about me" chat widget; answers are defined in `src/data/chatbotKnowledge.js` (keyword-based, no external API)

### Color Scheme

The portfolio uses a vibrant color palette with gradients:
- **Purple/Indigo**: Primary brand colors
- **Teal/Cyan**: Secondary accents
- **Various gradients**: Each section has unique color schemes for visual interest

You can customize colors in `tailwind.config.js` and individual component files.

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will automatically detect Vite and configure the build settings
4. Deploy!

### Netlify

1. Push your code to GitHub
2. Import your repository on [Netlify](https://netlify.com)
3. Set build command: `npm run build`
4. Set publish directory: `dist`
5. Deploy!

### Other Platforms

The `dist` folder contains static files that can be deployed to any static hosting service:
- GitHub Pages
- AWS S3 + CloudFront
- Google Cloud Storage
- Azure Static Web Apps

## License

This project is private and personal.

