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
    <section className="bg-blue-50 py-12 text-center">
      <h1 className="text-3xl md:text-5xl font-bold mb-4">Free Online Tools</h1>
      <h2 className="text-lg md:text-2xl text-blue-700 mb-2">Finance & Tech Utilities in One Place</h2>
      <p className="max-w-xl mx-auto text-gray-600">Smart Tool Box offers calculators, converters, and utilities for your daily needs. 100% free, fast, and privacy-friendly.</p>
    </section>
    <section className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-semibold mb-4">Finance Tools</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-10">
        {financeTools.map(tool => <ToolCard key={tool.title} {...tool} />)}
      </div>
      <h2 className="text-2xl font-semibold mb-4">Tech & Utility Tools</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {techTools.map(tool => <ToolCard key={tool.title} {...tool} />)}
      </div>
    </section>
  </>
);

export default Home;
