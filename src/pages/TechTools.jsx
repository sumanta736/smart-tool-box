import { Link } from 'react-router-dom';

const TechTools = () => (
  <div className="container mx-auto px-4 py-8 font-sans">
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
    </div>
  </div>
);

export default TechTools;
