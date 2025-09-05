import { useState } from 'react';
import { Helmet } from 'react-helmet';

// Unique: Gradient background, curly braces icon, modern card, vibrant accent
const JsonFormatter = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const formatJson = () => {
    try {
      setOutput(JSON.stringify(JSON.parse(input), null, 2));
    } catch {
      setOutput('Invalid JSON');
    }
  };
  return (
    <section className="container mx-auto px-4 py-12 w-full max-w-6xl font-sans">
      <Helmet>
        <title>JSON Formatter | Smart Tool Box</title>
        <meta name="description" content="Free JSON Formatter: Format, beautify, and validate JSON instantly. Fast, private, and modern JSON formatting tool for developers." />
        <meta name="keywords" content="JSON Formatter, JSON Beautifier, JSON Validator, Tech Tools, Smart Tool Box, JSON Tools" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="JSON Formatter | Smart Tool Box" />
        <meta property="og:description" content="Free JSON Formatter: Format, beautify, and validate JSON instantly. Fast, private, and modern JSON formatting tool for developers." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourdomain.com/tech/jsonformatter" />
        <meta property="og:image" content="https://yourdomain.com/logo512.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="JSON Formatter | Smart Tool Box" />
        <meta name="twitter:description" content="Free JSON Formatter: Format, beautify, and validate JSON instantly. Fast, private, and modern JSON formatting tool for developers." />
        <meta name="twitter:image" content="https://yourdomain.com/logo512.png" />
        <link rel="canonical" href="https://yourdomain.com/tech/jsonformatter" />
      </Helmet>
      <div className="bg-gradient-to-br from-green-100 via-white to-blue-100 rounded-3xl shadow-2xl p-8 border border-green-200">
        <div className="flex items-center gap-3 mb-4 justify-center">
          <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-300 text-green-900 text-3xl shadow-lg">{`{}`}</span>
          <h1 className="text-3xl md:text-4xl font-extrabold text-green-700 drop-shadow tracking-wide">JSON Formatter</h1>
        </div>
        <h2 className="text-lg text-blue-600 mb-6 text-center font-semibold">Pretty print JSON</h2>
        <textarea className="border-2 border-green-300 rounded px-3 py-2 w-full min-h-[100px] mb-4 text-lg font-mono bg-blue-50 focus:ring-2 focus:ring-green-400" value={input} onChange={e => setInput(e.target.value)} placeholder="Paste your JSON here..." />
        <button className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-4 py-2 rounded font-bold mb-4 shadow hover:scale-105 transition" onClick={formatJson}>Format</button>
        <pre className="bg-green-50 rounded-xl p-4 text-left text-blue-700 font-mono shadow-inner whitespace-pre-wrap border border-green-200">{output}</pre>
      </div>
    </section>
  );
};
export default JsonFormatter;
