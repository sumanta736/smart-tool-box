import { useState } from 'react';

// QR Code Generator page
const QrGenerator = () => {
  const [text, setText] = useState('');
  return (
    <section className="container mx-auto px-4 py-12 max-w-xl font-sans">
      <div className="bg-white rounded-3xl shadow-2xl p-8 border border-blue-100">
        <h1 className="text-3xl md:text-4xl font-extrabold text-blue-800 mb-4 text-center drop-shadow">QR Generator</h1>
        <h2 className="text-lg text-blue-600 mb-6 text-center font-semibold">Generate QR codes</h2>
        <input className="border rounded px-3 py-2 w-full mb-4" value={text} onChange={e => setText(e.target.value)} placeholder="Enter text or URL..." />
        <div className="bg-blue-50 rounded-xl p-4 text-center text-lg text-blue-700 font-semibold shadow-inner">
          {text ? <img src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(text)}`} alt="QR Code" className="mx-auto" /> : 'Enter text to generate QR code.'}
        </div>
      </div>
    </section>
  );
};
export default QrGenerator;
