import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FaBars } from 'react-icons/fa';

// Enhanced Navbar with mobile menu and accent
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="bg-gradient-to-r from-blue-600 to-blue-400 shadow sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-2xl font-extrabold text-white tracking-wide drop-shadow">Smart Tool Box</Link>
        <div className="space-x-4 hidden md:flex">
          <Link to="/" className="hover:text-yellow-200 text-white font-medium transition">Home</Link>
          <Link to="/finance" className="hover:text-yellow-200 text-white font-medium transition">Finance Tools</Link>
          <Link to="/tech" className="hover:text-yellow-200 text-white font-medium transition">Tech Tools</Link>
          <Link to="/about" className="hover:text-yellow-200 text-white font-medium transition">About</Link>
          <Link to="/contact" className="hover:text-yellow-200 text-white font-medium transition">Contact</Link>
        </div>
        <button className="md:hidden text-white text-2xl" onClick={() => setMenuOpen(!menuOpen)} aria-label="Open menu">
          <FaBars />
        </button>
      </div>
      {menuOpen && (
        <div className="md:hidden bg-blue-500 px-4 pb-4 flex flex-col gap-2 animate-fade-in-down">
          <Link to="/" className="text-white py-1" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/finance" className="text-white py-1" onClick={() => setMenuOpen(false)}>Finance Tools</Link>
          <Link to="/tech" className="text-white py-1" onClick={() => setMenuOpen(false)}>Tech Tools</Link>
          <Link to="/about" className="text-white py-1" onClick={() => setMenuOpen(false)}>About</Link>
          <Link to="/contact" className="text-white py-1" onClick={() => setMenuOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
