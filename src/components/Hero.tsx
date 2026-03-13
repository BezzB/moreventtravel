import { useState, useEffect, useRef } from 'react';
import { HeroProps } from '../types';
import DestinationCard from './DestinationCard';

const Hero: React.FC<HeroProps> = ({ destinations }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const autoSlideRef = useRef<NodeJS.Timeout | null>(null);
  const cardContainerRef = useRef<HTMLDivElement>(null);

  const currentDestination = destinations[activeIndex];

  const showDestination = (index: number) => {
    if (index === activeIndex || isTransitioning) return;
    
    setIsTransitioning(true);
    setActiveIndex(index);
    
    // Reset transition state after animation
    setTimeout(() => {
      setIsTransitioning(false);
    }, 1000);
  };

  const nextSlide = () => {
    const nextIndex = (activeIndex + 1) % destinations.length;
    showDestination(nextIndex);
  };

  const resetAutoSlide = () => {
    if (autoSlideRef.current) {
      clearInterval(autoSlideRef.current);
    }
    autoSlideRef.current = setInterval(nextSlide, 5000);
  };

  const handleCardClick = (index: number) => {
    showDestination(index);
    resetAutoSlide();
  };

  useEffect(() => {
    resetAutoSlide();
    return () => {
      if (autoSlideRef.current) {
        clearInterval(autoSlideRef.current);
      }
    };
  }, [activeIndex]);

  return (
    <section className="h-screen w-full flex relative overflow-hidden">
      {/* Background Images */}
      <div
        className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
          isTransitioning ? 'opacity-0' : 'opacity-100'
        }`}
        style={{ backgroundImage: `url('${currentDestination.image}')` }}
      />
      <div
        className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
          isTransitioning ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ backgroundImage: `url('${destinations[(activeIndex + 1) % destinations.length].image}')` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-overlay" />

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col justify-center w-full px-[5%] h-full">
        {/* Main Content */}
        <div className="flex-1 flex items-center">
          <div className="max-w-[500px]">
            <h2 className="text-5xl mb-4 font-bold">{currentDestination.title}</h2>
            <p className="text-lg mb-5">{currentDestination.description}</p>
            <button className="px-5 py-2.5 bg-primary border-none rounded-lg font-semibold cursor-pointer text-black hover:bg-primary/90 transition-colors">
              Explore
            </button>
          </div>
        </div>

        {/* Destination Cards - Bottom Right */}
        <div className="absolute bottom-8 right-[5%] flex gap-4 max-w-[800px] overflow-x-auto scrollbar-none">
          {destinations.map((destination, index) => (
            <div
              key={destination.id}
              className={`
                transform transition-all duration-300 ease-out
                ${index === activeIndex ? 'scale-105' : 'scale-100'}
              `}
            >
              <DestinationCard
                destination={destination}
                isActive={index === activeIndex}
                onClick={() => handleCardClick(index)}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
