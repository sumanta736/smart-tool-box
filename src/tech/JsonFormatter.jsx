import { useState } from 'react';

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
    <section className="container mx-auto px-4 py-12 max-w-xl font-sans">
      <div className="bg-white rounded-3xl shadow-2xl p-8 border border-blue-100">
        <h1 className="text-3xl md:text-4xl font-extrabold text-blue-800 mb-4 text-center drop-shadow">JSON Formatter</h1>
        <h2 className="text-lg text-blue-600 mb-6 text-center font-semibold">Pretty print JSON</h2>
        <textarea className="border rounded px-3 py-2 w-full min-h-[100px] mb-4" value={input} onChange={e => setInput(e.target.value)} placeholder="Paste your JSON here..." />
        <button className="bg-blue-600 text-white px-4 py-2 rounded font-bold mb-4" onClick={formatJson}>Format</button>
        <pre className="bg-blue-50 rounded-xl p-4 text-left text-blue-700 font-mono shadow-inner whitespace-pre-wrap">{output}</pre>
      </div>
    </section>
  );
};
export default JsonFormatter;
