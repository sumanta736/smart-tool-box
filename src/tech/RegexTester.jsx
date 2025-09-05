import { useState } from 'react';

// Regex Tester page
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
    <section className="container mx-auto px-4 py-12 max-w-xl font-sans">
      <div className="bg-white rounded-3xl shadow-2xl p-8 border border-blue-100">
        <h1 className="text-3xl md:text-4xl font-extrabold text-blue-800 mb-4 text-center drop-shadow">Regex Tester</h1>
        <h2 className="text-lg text-blue-600 mb-6 text-center font-semibold">Test regular expressions</h2>
        <input className="border rounded px-3 py-2 w-full mb-4" value={pattern} onChange={e => setPattern(e.target.value)} placeholder="Enter regex pattern..." />
        <textarea className="border rounded px-3 py-2 w-full min-h-[100px] mb-4" value={text} onChange={e => setText(e.target.value)} placeholder="Enter text to test..." />
        <div className="bg-blue-50 rounded-xl p-4 text-center text-lg text-blue-700 font-semibold shadow-inner">
          {pattern && text ? result || 'No matches found.' : 'Enter pattern and text to test.'}
        </div>
      </div>
    </section>
  );
};

export default RegexTester;
