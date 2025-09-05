import { useState } from 'react';

// Unique: Colorful gradient, fun icon, modern card, vibrant button colors
const CaseConverter = () => {
  const [text, setText] = useState('');
  return (
    <section className="container mx-auto px-4 py-12 w-full max-w-6xl font-sans">
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
