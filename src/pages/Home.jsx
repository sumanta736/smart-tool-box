import ToolCard from '../components/ToolCard';
import { Helmet } from 'react-helmet';

const financeTools = [
  { title: 'EMI Calculator', description: 'Calculate your loan EMI easily.', link: '/finance/emi' },
  { title: 'SIP Calculator', description: 'Plan your SIP investments.', link: '/finance/sip' },
  { title: 'FD Calculator', description: 'Estimate your Fixed Deposit returns.', link: '/finance/fd' },
  { title: 'Tax Calculator', description: 'Quick tax calculation.', link: '/finance/tax' },
  { title: 'Currency Converter', description: 'Convert currencies live.', link: '/finance/currency' },
  { title: 'Retirement Calculator', description: 'Plan your retirement corpus.', link: '/finance/retirement' },
  { title: 'Crypto Profit Calculator', description: 'Calculate crypto profits.', link: '/finance/crypto-profit' },
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
];

const Home = () => (
  <>
    <Helmet>
      <title>Smart Tool Box - Free Online Tools</title>
      <meta name="description" content="Smart Tool Box: Free online finance and tech tools. EMI, SIP, PDF, QR, JSON, and more!" />
    </Helmet>
    <section className="bg-gradient-to-br from-blue-100 via-white to-blue-50 py-12 text-center border-b border-blue-200">
      <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-blue-700 drop-shadow">Free Online Tools</h1>
      <h2 className="text-xl md:text-2xl text-blue-600 mb-3 font-semibold">Finance & Tech Utilities in One Place</h2>
      <p className="max-w-xl mx-auto text-gray-600 text-lg">Smart Tool Box offers calculators, converters, and utilities for your daily needs. 100% free, fast, and privacy-friendly.</p>
    </section>
    <section className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-6 text-blue-800 flex items-center gap-2"><span className="inline-block w-2 h-6 bg-blue-400 rounded-full mr-2"></span>Finance Tools</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-14">
        {financeTools.map(tool => <ToolCard key={tool.title} {...tool} />)}
      </div>
      <h2 className="text-3xl font-bold mb-6 text-blue-800 flex items-center gap-2"><span className="inline-block w-2 h-6 bg-blue-400 rounded-full mr-2"></span>Tech & Utility Tools</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {techTools.map(tool => <ToolCard key={tool.title} {...tool} />)}
      </div>
    </section>
  </>
);

export default Home;
