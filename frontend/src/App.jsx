import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Leaf, Stethoscope, MapPin } from 'lucide-react';
import Home from './pages/Home';
import SymptomChecker from './pages/SymptomChecker';
import MapCenters from './pages/MapCenters';

const NavLink = ({ to, children, icon: Icon }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  return (
    <Link 
      to={to} 
      className={`flex items-center gap-2 px-5 py-2 rounded-full font-semibold transition-all duration-300 ${
        isActive 
          ? 'bg-emerald-600 text-white shadow-md transform scale-105' 
          : 'text-emerald-900 hover:bg-emerald-100 hover:text-emerald-700'
      }`}
    >
      {Icon && <Icon size={18} />}
      {children}
    </Link>
  );
};

function Navigation() {
  return (
    <nav className="sticky top-4 z-50 mx-4 md:mx-12 mt-4">
      <div className="glass rounded-full px-6 py-3 flex justify-between items-center max-w-6xl mx-auto">
        <Link to="/" className="text-2xl font-extrabold text-emerald-800 flex items-center gap-2 tracking-tight group">
          <div className="bg-gradient-to-r from-emerald-500 to-teal-400 p-2 rounded-full text-white group-hover:rotate-12 transition-transform duration-300">
            <Leaf size={24} />
          </div>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-700 to-teal-600">
            Panchakarma
          </span>
        </Link>
        <div className="hidden md:flex space-x-2">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/symptoms" icon={Stethoscope}>Symptom Checker</NavLink>
          <NavLink to="/centers" icon={MapPin}>Centers</NavLink>
        </div>
      </div>
    </nav>
  );
}

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navigation />
        
        <main className="flex-grow container mx-auto px-4 py-8 max-w-6xl animate-fade-in relative z-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/symptoms" element={<SymptomChecker />} />
            <Route path="/centers" element={<MapCenters />} />
          </Routes>
        </main>
        
        <footer className="mt-auto py-8 text-center text-emerald-700/80 font-medium z-10">
          <p>&copy; 2026 Panchakarma Wellness. Harmonize Your Elements.</p>
        </footer>
        
        {/* Abstract Background Orbs */}
        <div className="fixed top-20 left-10 w-96 h-96 bg-emerald-200/40 rounded-full blur-3xl -z-10 mix-blend-multiply animate-pulse"></div>
        <div className="fixed bottom-20 right-10 w-[30rem] h-[30rem] bg-teal-200/30 rounded-full blur-3xl -z-10 mix-blend-multiply"></div>
      </div>
    </Router>
  );
}

export default App;
