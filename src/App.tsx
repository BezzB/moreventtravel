import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Footer from './components/Footer';
import { destinations, navigationItems } from './utils/constants';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black text-white">
        <Navigation items={navigationItems} />
        <Routes>
          <Route 
            path="/" 
            element={<Hero destinations={destinations} />} 
          />
          {/* Add more routes here as needed */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
