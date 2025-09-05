import { useState } from 'react';
import { Helmet } from 'react-helmet';

// Unique: Gradient background, regex icon, modern card, vibrant accent
const RegexTester = () => {
  const [pattern, setPattern] = useState('');
  const [text, setText] = useState('');
  let result = '';
  try {
    result = pattern ? (text.match(new RegExp(pattern, 'g')) || []).join(', ') : '';
  } catch {
    result = 'Invalid regex pattern.';
  }
  return (
    <section className="container mx-auto px-4 py-12 w-full max-w-6xl font-sans">
      <Helmet>
        <title>Regex Tester | Smart Tool Box</title>
        <meta name="description" content="Free Regex Tester: Test and debug regular expressions online. Fast, private, and modern regex testing tool for developers." />
        <meta name="keywords" content="Regex Tester, Regular Expressions, Regex Debug, Tech Tools, Smart Tool Box, Regex Tool" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Regex Tester | Smart Tool Box" />
        <meta property="og:description" content="Free Regex Tester: Test and debug regular expressions online. Fast, private, and modern regex testing tool for developers." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourdomain.com/tech/regex" />
        <meta property="og:image" content="https://yourdomain.com/logo512.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Regex Tester | Smart Tool Box" />
        <meta name="twitter:description" content="Free Regex Tester: Test and debug regular expressions online. Fast, private, and modern regex testing tool for developers." />
        <meta name="twitter:image" content="https://yourdomain.com/logo512.png" />
        <link rel="canonical" href="https://yourdomain.com/tech/regex" />
      </Helmet>
      <div className="bg-gradient-to-br from-indigo-100 via-white to-blue-100 rounded-3xl shadow-2xl p-8 border border-indigo-200">
        <div className="flex items-center gap-3 mb-4 justify-center">
          <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-indigo-300 text-indigo-900 text-3xl shadow-lg">.*</span>
          <h1 className="text-3xl md:text-4xl font-extrabold text-indigo-700 drop-shadow tracking-wide">Regex Tester</h1>
        </div>
        <h2 className="text-lg text-blue-600 mb-6 text-center font-semibold">Test regular expressions</h2>
        <input className="border-2 border-indigo-300 rounded px-3 py-2 w-full mb-4 text-lg bg-blue-50 focus:ring-2 focus:ring-indigo-400" value={pattern} onChange={e => setPattern(e.target.value)} placeholder="Enter regex pattern..." />
        <textarea className="border-2 border-indigo-300 rounded px-3 py-2 w-full min-h-[100px] mb-4 text-lg bg-blue-50 focus:ring-2 focus:ring-indigo-400" value={text} onChange={e => setText(e.target.value)} placeholder="Enter text to test..." />
        <div className="bg-indigo-50 rounded-xl p-4 text-center text-lg text-blue-700 font-semibold shadow-inner border border-indigo-200">
          {pattern && text ? result || 'No matches found.' : 'Enter pattern and text to test.'}
        </div>
      </div>
    </section>
  );
};

export default RegexTester;
