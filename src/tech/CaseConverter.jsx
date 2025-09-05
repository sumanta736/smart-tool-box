import { useState } from 'react';

// Case Converter page
const CaseConverter = () => {
  const [text, setText] = useState('');
  return (
    <section className="container mx-auto px-4 py-12 w-full max-w-4xl font-sans">
      <div className="bg-white rounded-3xl shadow-2xl p-8 border border-blue-100">
        <h1 className="text-3xl md:text-4xl font-extrabold text-blue-800 mb-4 text-center drop-shadow">Case Converter</h1>
        <h2 className="text-lg text-blue-600 mb-6 text-center font-semibold">Convert text case easily</h2>
        <textarea className="border rounded px-3 py-2 w-full min-h-[100px] mb-4" value={text} onChange={e => setText(e.target.value)} placeholder="Type or paste your text here..." />
        <div className="flex gap-2 mb-4">
          <button className="bg-blue-600 text-white px-4 py-2 rounded font-bold" onClick={() => setText(text.toUpperCase())}>UPPERCASE</button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded font-bold" onClick={() => setText(text.toLowerCase())}>lowercase</button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded font-bold" onClick={() => setText(text.replace(/\b\w/g, c => c.toUpperCase()))}>Title Case</button>
        </div>
        <div className="bg-blue-50 rounded-xl p-4 text-center text-lg text-blue-700 font-semibold shadow-inner">
          {text}
        </div>
      </div>
    </section>
  );
};
export default CaseConverter;
