import { Destination } from '../types';

export const destinations: Destination[] = [
  {
    id: 0,
    title: "Maasai Mara",
    description: "Wildlife adventure in Kenya's plains.",
    image: "/src/assets/Destination/maasaimara.jpg",
    index: 0
  },
  {
    id: 1,
    title: "Diani Beach",
    description: "Tropical paradise on the coast.",
    image: "https://images.unsplash.com/photo-1493558103817-58b2924bce98?auto=format&fit=crop&w=1600&q=80",
    index: 1
  },
  {
    id: 2,
    title: "Mount Kenya",
    description: "Climb Africa's second-highest peak.",
    image: "/src/assets/Destination/mountkenya.jpg",
    index: 2
  },
  {
    id: 3,
    title: "Lake Nakuru",
    description: "Home of flamingos and serenity.",
    image: "/src/assets/Destination/lakenakuru.jpg",
    index: 3
  }
];

export const navigationItems = ['Home', 'Destinations', 'About', 'Contact'];
