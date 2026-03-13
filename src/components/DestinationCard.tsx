import { DestinationCardProps } from '../types';

const DestinationCard: React.FC<DestinationCardProps> = ({ 
  destination, 
  isActive, 
  onClick 
}) => {
  return (
    <div
      className={`
        w-[180px] h-[100px] rounded-xl relative flex-shrink-0 cursor-pointer
        border-2 border-transparent transition-all duration-300
        ${isActive ? 'border-primary shadow-lg shadow-primary/20' : 'hover:border-primary/50'}
      `}
      style={{
        backgroundImage: `url('${destination.image}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
      onClick={onClick}
    >
      <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-black/70 to-transparent" />
      <div className="absolute bottom-2 left-2 right-2">
        <div className="bg-black/60 px-2 py-1 rounded-md text-xs font-medium">
          {destination.title}
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;
