import { NavigationProps } from '../types';

const Navigation: React.FC<NavigationProps> = ({ items }) => {
  return (
    <nav className="fixed top-0 left-0 w-full flex justify-between items-center px-10 py-5 bg-black/30 backdrop-blur-lg z-10">
      <h1 className="text-xl font-bold">Morevent Travel</h1>
      <ul className="flex gap-6 list-none">
        {items.map((item, index) => (
          <li 
            key={index}
            className="cursor-pointer text-base transition-colors duration-300 hover:text-primary"
          >
            {item}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
