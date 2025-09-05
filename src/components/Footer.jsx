// Footer component for site footer
const Footer = () => (
  <footer className="bg-gradient-to-r from-blue-50 to-blue-100 text-center py-6 mt-12 border-t shadow-inner">
    <div className="container mx-auto flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-8 text-base font-medium">
      <a href="/about" className="hover:underline text-blue-700">About</a>
      <a href="/privacy" className="hover:underline text-blue-700">Privacy Policy</a>
      <a href="/terms" className="hover:underline text-blue-700">Terms</a>
      <a href="/contact" className="hover:underline text-blue-700">Contact</a>
    </div>
    <div className="flex justify-center gap-4 mt-3">
      <a href="https://github.com/sumanta736/smart-tool-box" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-600 text-xl"><i className="fab fa-github"></i>GitHub</a>
      {/* Add more social icons if needed */}
    </div>
    <div className="text-xs text-gray-400 mt-2">&copy; {new Date().getFullYear()} Smart Tool Box. All rights reserved.</div>
  </footer>
);

export default Footer;
