import { useState } from 'react';
import { Helmet } from 'react-helmet';

// Unique: Colorful gradient, fun icon, modern card, vibrant button colors
const CaseConverter = () => {
  const [text, setText] = useState('');
  return (
    <section className="container mx-auto px-4 py-12 w-full max-w-6xl font-sans">
      <Helmet>
        <title>Case Converter | Smart Tool Box</title>
        <meta name="description" content="Free Case Converter: Convert text to uppercase, lowercase, title case, and more. Fast, private, and modern case conversion tool for everyone." />
        <meta name="keywords" content="Case Converter, Uppercase, Lowercase, Title Case, Text Tools, Tech Tools, Smart Tool Box" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Case Converter | Smart Tool Box" />
        <meta property="og:description" content="Free Case Converter: Convert text to uppercase, lowercase, title case, and more. Fast, private, and modern case conversion tool for everyone." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourdomain.com/tech/caseconverter" />
        <meta property="og:image" content="https://yourdomain.com/logo512.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Case Converter | Smart Tool Box" />
        <meta name="twitter:description" content="Free Case Converter: Convert text to uppercase, lowercase, title case, and more. Fast, private, and modern case conversion tool for everyone." />
        <meta name="twitter:image" content="https://yourdomain.com/logo512.png" />
        <link rel="canonical" href="https://yourdomain.com/tech/caseconverter" />
      </Helmet>
      <div className="bg-gradient-to-br from-pink-100 via-white to-blue-100 rounded-3xl shadow-2xl p-8 border border-pink-200">
        <div className="flex items-center gap-3 mb-4 justify-center">
          <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-200 text-blue-900 text-3xl shadow-lg">🔤</span>
          <h1 className="text-3xl md:text-4xl font-extrabold text-pink-700 drop-shadow tracking-wide">Case Converter</h1>
        </div>
        <h2 className="text-lg text-blue-600 mb-6 text-center font-semibold">Convert text case easily</h2>
        <textarea className="border-2 border-pink-300 rounded px-3 py-2 w-full min-h-[100px] mb-4 text-lg font-mono bg-blue-50 focus:ring-2 focus:ring-pink-400" value={text} onChange={e => setText(e.target.value)} placeholder="Type or paste your text here..." />
        <div className="flex flex-wrap gap-2 mb-4 justify-center">
          <button className="bg-gradient-to-r from-pink-500 to-blue-500 text-white px-4 py-2 rounded font-bold shadow hover:scale-105 transition" onClick={() => setText(text.toUpperCase())}>UPPERCASE</button>
          <button className="bg-gradient-to-r from-blue-500 to-pink-500 text-white px-4 py-2 rounded font-bold shadow hover:scale-105 transition" onClick={() => setText(text.toLowerCase())}>lowercase</button>
          <button className="bg-gradient-to-r from-green-400 to-blue-400 text-white px-4 py-2 rounded font-bold shadow hover:scale-105 transition" onClick={() => setText(text.replace(/\b\w/g, c => c.toUpperCase()))}>Title Case</button>
        </div>
        <div className="bg-pink-50 rounded-xl p-4 text-center text-lg text-blue-700 font-semibold shadow-inner border border-pink-200">
          {text}
        </div>
      </div>
    </section>
  );
};
export default CaseConverter;
