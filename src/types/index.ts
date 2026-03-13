export interface Destination {
  id: number;
  title: string;
  description: string;
  image: string;
  index: number;
}

export interface HeroProps {
  destinations: Destination[];
}

export interface DestinationCardProps {
  destination: Destination;
  isActive: boolean;
  onClick: () => void;
}

export interface NavigationProps {
  items: string[];
}
