import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const TechTools = () => (
  <div className="container mx-auto px-4 py-8 font-sans">
    <Helmet>
      <title>Tech Tools | Smart Tool Box</title>
      <meta name="description" content="Free, modern tech tools: Password Generator, QR Generator, PDF Tools, Regex Tester, Word Counter, JSON Formatter, and more. No login required." />
      <meta name="keywords" content="Tech Tools, Password Generator, QR Generator, PDF Tools, Regex Tester, Word Counter, JSON Formatter, Smart Tool Box, Developer Tools, Online Tools" />
      <meta name="robots" content="index, follow" />
      <meta property="og:title" content="Tech Tools | Smart Tool Box" />
      <meta property="og:description" content="Free, modern tech tools: Password Generator, QR Generator, PDF Tools, Regex Tester, Word Counter, JSON Formatter, and more." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://yourdomain.com/tech" />
      <meta property="og:image" content="https://yourdomain.com/logo512.png" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Tech Tools | Smart Tool Box" />
      <meta name="twitter:description" content="Free, modern tech tools: Password Generator, QR Generator, PDF Tools, Regex Tester, Word Counter, JSON Formatter, and more." />
      <meta name="twitter:image" content="https://yourdomain.com/logo512.png" />
      <link rel="canonical" href="https://yourdomain.com/tech" />
    </Helmet>
    <h1 className="text-4xl md:text-5xl font-extrabold mb-8 text-blue-800 tracking-tight leading-tight drop-shadow">Tech Tools</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Link to="/tech/word-counter" className="block p-6 bg-white rounded-2xl shadow-lg hover:bg-blue-100 transition-all duration-200 font-bold text-xl text-blue-800 tracking-wide font-display">Word Counter</Link>
      <Link to="/tech/case-converter" className="block p-6 bg-white rounded-2xl shadow-lg hover:bg-blue-100 transition-all duration-200 font-bold text-xl text-blue-800 tracking-wide font-display">Case Converter</Link>
      <Link to="/tech/json-formatter" className="block p-6 bg-white rounded-2xl shadow-lg hover:bg-blue-100 transition-all duration-200 font-bold text-xl text-blue-800 tracking-wide font-display">JSON Formatter</Link>
      <Link to="/tech/password-generator" className="block p-6 bg-white rounded-2xl shadow-lg hover:bg-blue-100 transition-all duration-200 font-bold text-xl text-blue-800 tracking-wide font-display">Password Generator</Link>
      <Link to="/tech/pdf" className="block p-6 bg-white rounded-2xl shadow-lg hover:bg-blue-100 transition-all duration-200 font-bold text-xl text-blue-800 tracking-wide font-display">PDF Tools</Link>
      <Link to="/tech/qr-generator" className="block p-6 bg-white rounded-2xl shadow-lg hover:bg-blue-100 transition-all duration-200 font-bold text-xl text-blue-800 tracking-wide font-display">QR Generator</Link>
      <Link to="/tech/regex-tester" className="block p-6 bg-white rounded-2xl shadow-lg hover:bg-blue-100 transition-all duration-200 font-bold text-xl text-blue-800 tracking-wide font-display">Regex Tester</Link>
      <Link to="/tech/image" className="block p-6 bg-white rounded-2xl shadow-lg hover:bg-blue-100 transition-all duration-200 font-bold text-xl text-blue-800 tracking-wide font-display">Image Tools</Link>
      <Link to="/tech/unit-converter" className="block p-6 bg-white rounded-2xl shadow-lg hover:bg-blue-100 transition-all duration-200 font-bold text-xl text-blue-800 tracking-wide font-display">Unit Converter</Link>
    </div>
  </div>
);

export default TechTools;
