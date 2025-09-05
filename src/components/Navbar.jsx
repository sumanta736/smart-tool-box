import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { FaBars } from 'react-icons/fa';

// Modern, colorful, glassy Navbar with logo, accent, and animated mobile menu
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isActive = (path) => location.pathname === path || (path !== '/' && location.pathname.startsWith(path));
  return (
    <nav className="bg-gradient-to-r from-blue-700 via-blue-500 to-teal-400 shadow-lg sticky top-0 z-50 backdrop-blur-md bg-opacity-80 border-b-2 border-teal-200">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 text-2xl font-extrabold text-white tracking-wide drop-shadow">
          <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-white bg-opacity-20 text-teal-400 text-2xl shadow-lg">🧰</span>
          <span className="font-display">Smart Tool Box</span>
        </Link>
        <div className="space-x-2 hidden md:flex">
          <Link to="/" className={`px-3 py-1 rounded-lg font-semibold transition ${isActive('/') ? 'bg-white bg-opacity-30 text-yellow-200 shadow' : 'text-white hover:bg-white hover:bg-opacity-20 hover:text-yellow-200'}`}>Home</Link>
          <Link to="/finance" className={`px-3 py-1 rounded-lg font-semibold transition ${isActive('/finance') ? 'bg-white bg-opacity-30 text-yellow-200 shadow' : 'text-white hover:bg-white hover:bg-opacity-20 hover:text-yellow-200'}`}>Finance Tools</Link>
          <Link to="/tech" className={`px-3 py-1 rounded-lg font-semibold transition ${isActive('/tech') ? 'bg-white bg-opacity-30 text-yellow-200 shadow' : 'text-white hover:bg-white hover:bg-opacity-20 hover:text-yellow-200'}`}>Tech Tools</Link>
          <Link to="/about" className={`px-3 py-1 rounded-lg font-semibold transition ${isActive('/about') ? 'bg-white bg-opacity-30 text-yellow-200 shadow' : 'text-white hover:bg-white hover:bg-opacity-20 hover:text-yellow-200'}`}>About</Link>
          <Link to="/contact" className={`px-3 py-1 rounded-lg font-semibold transition ${isActive('/contact') ? 'bg-white bg-opacity-30 text-yellow-200 shadow' : 'text-white hover:bg-white hover:bg-opacity-20 hover:text-yellow-200'}`}>Contact</Link>
        </div>
        <button className="md:hidden text-white text-3xl p-2 rounded-lg hover:bg-white hover:bg-opacity-20 transition" onClick={() => setMenuOpen(!menuOpen)} aria-label="Open menu">
          <FaBars />
        </button>
      </div>
      {menuOpen && (
        <div className="md:hidden bg-gradient-to-b from-blue-600 via-blue-500 to-teal-400 px-4 pb-4 flex flex-col gap-2 animate-fade-in-down rounded-b-2xl shadow-lg border-t border-teal-200">
          <Link to="/" className={`py-2 px-2 rounded-lg font-semibold transition ${isActive('/') ? 'bg-white bg-opacity-30 text-yellow-200 shadow' : 'text-white hover:bg-white hover:bg-opacity-20 hover:text-yellow-200'}`} onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/finance" className={`py-2 px-2 rounded-lg font-semibold transition ${isActive('/finance') ? 'bg-white bg-opacity-30 text-yellow-200 shadow' : 'text-white hover:bg-white hover:bg-opacity-20 hover:text-yellow-200'}`} onClick={() => setMenuOpen(false)}>Finance Tools</Link>
          <Link to="/tech" className={`py-2 px-2 rounded-lg font-semibold transition ${isActive('/tech') ? 'bg-white bg-opacity-30 text-yellow-200 shadow' : 'text-white hover:bg-white hover:bg-opacity-20 hover:text-yellow-200'}`} onClick={() => setMenuOpen(false)}>Tech Tools</Link>
          <Link to="/about" className={`py-2 px-2 rounded-lg font-semibold transition ${isActive('/about') ? 'bg-white bg-opacity-30 text-yellow-200 shadow' : 'text-white hover:bg-white hover:bg-opacity-20 hover:text-yellow-200'}`} onClick={() => setMenuOpen(false)}>About</Link>
          <Link to="/contact" className={`py-2 px-2 rounded-lg font-semibold transition ${isActive('/contact') ? 'bg-white bg-opacity-30 text-yellow-200 shadow' : 'text-white hover:bg-white hover:bg-opacity-20 hover:text-yellow-200'}`} onClick={() => setMenuOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
