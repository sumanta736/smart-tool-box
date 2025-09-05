// Footer component for site footer
const Footer = () => (
  <footer className="relative bg-gradient-to-r from-purple-700 via-pink-500 to-orange-400 text-white py-5 mt-10 shadow-inner border-t-4 border-pink-300">
    {/* Subtle pattern overlay */}
    <div className="absolute inset-0 pointer-events-none opacity-10" style={{backgroundImage: 'repeating-linear-gradient(135deg,rgba(255,255,255,0.08) 0 2px,transparent 2px 20px)'}}></div>
    <div className="relative container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6 max-w-6xl">
      <div className="flex items-center gap-2 text-lg font-bold">
        <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-white text-pink-400 text-2xl shadow-lg border-2 border-pink-200">🧰</span>
        <span>Smart Tool Box</span>
      </div>
      <div className="flex flex-wrap gap-4 text-sm md:text-base">
        <a href="/about" className="hover:underline underline-offset-4 transition">About</a>
        <a href="/contact" className="hover:underline underline-offset-4 transition">Contact</a>
        <a href="/privacy" className="hover:underline underline-offset-4 transition">Privacy</a>
        <a href="/terms" className="hover:underline underline-offset-4 transition">Terms</a>
      </div>
      <div className="text-xs text-orange-100 text-center md:text-right">
        <span>© {new Date().getFullYear()} Smart Tool Box. All rights reserved.</span>
        <br />
        <span>Made with <span className="text-pink-200">♥</span> in India</span>
      </div>
    </div>
  </footer>
);

export default Footer;
