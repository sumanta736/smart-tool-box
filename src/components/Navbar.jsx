import { Link } from 'react-router-dom';

// Navbar component for navigation
const Navbar = () => (
  <nav className="bg-white shadow sticky top-0 z-50">
    <div className="container mx-auto px-4 py-3 flex justify-between items-center">
      <Link to="/" className="text-xl font-bold text-blue-600">Smart Tool Box</Link>
      <div className="space-x-4 hidden md:flex">
        <Link to="/finance/emi" className="hover:text-blue-500">Finance Tools</Link>
        <Link to="/tech/word-counter" className="hover:text-blue-500">Tech Tools</Link>
        <Link to="/about" className="hover:text-blue-500">About</Link>
        <Link to="/contact" className="hover:text-blue-500">Contact</Link>
      </div>
      {/* Mobile menu button (optional for later) */}
    </div>
  </nav>
);

export default Navbar;
