// Footer component for site footer
const Footer = () => (
  <footer className="bg-gray-100 text-center py-4 mt-8 border-t">
    <div className="container mx-auto flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-6 text-sm">
      <a href="/about" className="hover:underline">About</a>
      <a href="/privacy" className="hover:underline">Privacy Policy</a>
      <a href="/terms" className="hover:underline">Terms</a>
      <a href="/contact" className="hover:underline">Contact</a>
    </div>
    <div className="text-xs text-gray-400 mt-2">&copy; {new Date().getFullYear()} Smart Tool Box. All rights reserved.</div>
  </footer>
);

export default Footer;
