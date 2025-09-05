import ToolCard from '../components/ToolCard';
import { Helmet } from 'react-helmet';
import { FaTools, FaCalculator, FaLock, FaRocket, FaSmile } from 'react-icons/fa';

const financeTools = [
  { title: 'EMI Calculator', description: 'Calculate your loan EMI easily.', link: '/finance/emi' },
  { title: 'SIP Calculator', description: 'Plan your SIP investments.', link: '/finance/sip' },
  { title: 'FD Calculator', description: 'Estimate your Fixed Deposit returns.', link: '/finance/fd' },
  { title: 'Tax Calculator', description: 'Quick tax calculation.', link: '/finance/tax' },
  { title: 'Currency Converter', description: 'Convert currencies live.', link: '/finance/currency' },
  { title: 'Retirement Calculator', description: 'Plan your retirement corpus.', link: '/finance/retirement' },
  { title: 'Crypto Profit Calculator', description: 'Calculate crypto profits.', link: '/finance/crypto-profit' },
  { title: 'Loan Affordability Calculator', description: 'Find out how much loan you can afford.', link: '/finance/loan-affordability' },
  { title: 'Goal Planner', description: 'Plan and track your financial goals.', link: '/finance/goal-planner' },
];
const techTools = [
  { title: 'PDF Tools', description: 'Merge, split, compress PDFs.', link: '/tech/pdf' },
  { title: 'Image Tools', description: 'Resize and compress images.', link: '/tech/image' },
  { title: 'Word Counter', description: 'Count words and characters.', link: '/tech/word-counter' },
  { title: 'Case Converter', description: 'Convert text case easily.', link: '/tech/case-converter' },
  { title: 'QR Code Generator', description: 'Generate QR codes.', link: '/tech/qr-generator' },
  { title: 'Regex Tester', description: 'Test regular expressions.', link: '/tech/regex-tester' },
  { title: 'JSON Formatter', description: 'Pretty print JSON.', link: '/tech/json-formatter' },
  { title: 'Password Generator', description: 'Generate strong passwords.', link: '/tech/password-generator' },
  { title: 'Unit Converter', description: 'Convert between units (length, weight, etc).', link: '/tech/unit-converter' },
];

const Home = () => (
  <>
    <Helmet>
      <title>Smart Tool Box - Free Online Tools</title>
      <meta name="description" content="Smart Tool Box: Free online finance and tech tools. EMI, SIP, PDF, QR, JSON, and more!" />
    </Helmet>
    {/* Hero Section with animated icons and background shapes */}
    <section className="relative bg-gradient-to-br from-blue-100 via-white to-blue-50 py-16 text-center border-b border-blue-200 overflow-hidden">
      {/* Decorative shapes */}
      <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-200 rounded-full opacity-20 animate-pulse" />
      <div className="absolute -bottom-16 right-0 w-64 h-64 bg-teal-200 rounded-full opacity-10 animate-pulse" />
      <div className="relative z-10">
        <span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white bg-opacity-80 text-blue-400 text-5xl shadow-lg mb-4 animate-bounce"><FaTools /></span>
        <h1 className="text-5xl md:text-7xl font-extrabold font-display tracking-widest mb-4 text-blue-700 drop-shadow-lg leading-tight">Smart Tool Box</h1>
        <h2 className="text-2xl md:text-3xl font-semibold font-display tracking-wide text-teal-600 mb-4 drop-shadow-sm">All-in-One Finance & Tech Utilities</h2>
        <p className="max-w-xl mx-auto text-gray-700 text-lg md:text-xl font-medium font-sans leading-relaxed mb-6 drop-shadow-sm">Free calculators, converters, and productivity tools for your daily needs. <span className="text-blue-500 font-semibold">No sign-up</span>, <span className="text-teal-500 font-semibold">no ads</span>, <span className="text-pink-500 font-semibold">no tracking</span>—just fast, privacy-friendly tools.</p>
        <a href="/about" className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-blue-500 to-teal-400 text-white font-bold shadow-lg hover:scale-105 transition mb-2 font-sans">Learn More</a>
        <div className="flex justify-center gap-4 mt-6">
          <span className="inline-flex items-center gap-2 text-blue-500 font-semibold"><FaCalculator /> Calculators</span>
          <span className="inline-flex items-center gap-2 text-teal-500 font-semibold"><FaLock /> Privacy-first</span>
          <span className="inline-flex items-center gap-2 text-pink-500 font-semibold"><FaRocket /> Fast & Free</span>
          <span className="inline-flex items-center gap-2 text-yellow-500 font-semibold"><FaSmile /> Easy to Use</span>
        </div>
      </div>
    </section>
    {/* Feature grid */}
    <section className="container mx-auto px-4 py-10 max-w-6xl">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
        <div className="bg-white rounded-2xl shadow p-6 flex flex-col items-center">
          <FaCalculator className="text-3xl text-blue-400 mb-2" />
          <div className="font-bold text-blue-700 mb-1">Finance Tools</div>
          <div className="text-gray-600 text-sm text-center">EMI, SIP, FD, Tax, Retirement, Currency, Crypto & more</div>
        </div>
        <div className="bg-white rounded-2xl shadow p-6 flex flex-col items-center">
          <FaTools className="text-3xl text-teal-400 mb-2" />
          <div className="font-bold text-teal-700 mb-1">Tech Utilities</div>
          <div className="text-gray-600 text-sm text-center">PDF, Image, QR, Regex, JSON, Password, Word Counter</div>
        </div>
        <div className="bg-white rounded-2xl shadow p-6 flex flex-col items-center">
          <FaLock className="text-3xl text-pink-400 mb-2" />
          <div className="font-bold text-pink-700 mb-1">Private & Secure</div>
          <div className="text-gray-600 text-sm text-center">No data collection, no ads, no tracking, ever</div>
        </div>
        <div className="bg-white rounded-2xl shadow p-6 flex flex-col items-center">
          <FaRocket className="text-3xl text-yellow-400 mb-2" />
          <div className="font-bold text-yellow-700 mb-1">Lightning Fast</div>
          <div className="text-gray-600 text-sm text-center">Instant results, beautiful UI, works on any device</div>
        </div>
      </div>
      {/* Finance Tools Section */}
      <h2 className="text-3xl font-bold mb-6 text-blue-800 flex items-center gap-2"><span className="inline-block w-2 h-6 bg-blue-400 rounded-full mr-2"></span>Finance Tools</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-14">
        {financeTools.map(tool => <ToolCard key={tool.title} {...tool} />)}
      </div>
      {/* Tech Tools Section */}
      <h2 className="text-3xl font-bold mb-6 text-teal-800 flex items-center gap-2"><span className="inline-block w-2 h-6 bg-teal-400 rounded-full mr-2"></span>Tech & Utility Tools</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {techTools.map(tool => <ToolCard key={tool.title} {...tool} />)}
      </div>
    </section>
  </>
);

export default Home;
