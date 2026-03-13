# Morevent Travel

A modern, responsive travel website built with React, TypeScript, and Vite. Features an interactive destination showcase with smooth animations and auto-sliding carousel.

## 🚀 Features

- **Interactive Hero Section**: Auto-sliding background images with smooth transitions
- **Destination Cards**: Clickable cards with hover effects and smooth scrolling
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Modern UI**: Glassmorphism effects and smooth animations
- **TypeScript**: Full type safety throughout the application
- **React Router**: Ready for multi-page navigation

## 🛠️ Tech Stack

- **Frontend**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **Icons**: Lucide React (ready for future use)

## 📦 Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

## 🚀 Development

Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:3000`

## 🏗️ Build

Build for production:
```bash
npm run build
```

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Navigation.tsx   # Navigation bar
│   ├── Hero.tsx         # Main hero section
│   ├── DestinationCard.tsx # Destination card component
│   └── Footer.tsx       # Footer component
├── types/               # TypeScript type definitions
│   └── index.ts
├── utils/               # Utility functions and constants
│   └── constants.ts
├── assets/              # Static assets
├── App.tsx              # Main App component
├── main.tsx             # Application entry point
└── index.css            # Global styles
```

## 🎨 Design Features

- **Auto-sliding Carousel**: Automatically cycles through destinations every 5 seconds
- **Smooth Transitions**: Fade effects between background images
- **Interactive Cards**: Click to change destination, scroll to navigate
- **Responsive Layout**: Adapts to different screen sizes
- **Modern Aesthetics**: Clean design with glassmorphism effects

## 🔧 Customization

### Adding New Destinations

Edit `src/utils/constants.ts` to add new destinations:

```typescript
export const destinations: Destination[] = [
  {
    id: 0,
    title: "Your Destination",
    description: "Description here",
    image: "image-url-here",
    index: 0
  },
  // ... more destinations
];
```

### Styling

The project uses Tailwind CSS with custom configuration in `tailwind.config.js`. You can:
- Modify colors in the theme section
- Add new utility classes
- Customize responsive breakpoints

## 📝 License

© 2025 Morevent Travel. All rights reserved.