import { useState } from 'react';
import { Helmet } from 'react-helmet';

// Unique: Gradient background, QR icon, modern card, vibrant accent
const QrGenerator = () => {
  const [text, setText] = useState('');
  return (
    <section className="container mx-auto px-4 py-12 w-full max-w-6xl font-sans">
      <Helmet>
        <title>QR Generator | Smart Tool Box</title>
        <meta name="description" content="Free QR Generator: Create QR codes for URLs, text, and more. Fast, private, and modern QR code generator for all uses." />
        <meta name="keywords" content="QR Generator, QR Code, QR Code Generator, Tech Tools, Smart Tool Box, Create QR" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="QR Generator | Smart Tool Box" />
        <meta property="og:description" content="Free QR Generator: Create QR codes for URLs, text, and more. Fast, private, and modern QR code generator for all uses." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourdomain.com/tech/qr" />
        <meta property="og:image" content="https://yourdomain.com/logo512.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="QR Generator | Smart Tool Box" />
        <meta name="twitter:description" content="Free QR Generator: Create QR codes for URLs, text, and more. Fast, private, and modern QR code generator for all uses." />
        <meta name="twitter:image" content="https://yourdomain.com/logo512.png" />
        <link rel="canonical" href="https://yourdomain.com/tech/qr" />
      </Helmet>
      <div className="bg-gradient-to-br from-cyan-100 via-white to-blue-100 rounded-3xl shadow-2xl p-8 border border-cyan-200">
        <div className="flex items-center gap-3 mb-4 justify-center">
          <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-cyan-300 text-cyan-900 text-3xl shadow-lg">🔳</span>
          <h1 className="text-3xl md:text-4xl font-extrabold text-cyan-700 drop-shadow tracking-wide">QR Generator</h1>
        </div>
        <h2 className="text-lg text-blue-600 mb-6 text-center font-semibold">Generate QR codes</h2>
        <input className="border-2 border-cyan-300 rounded px-3 py-2 w-full mb-4 text-lg bg-blue-50 focus:ring-2 focus:ring-cyan-400" value={text} onChange={e => setText(e.target.value)} placeholder="Enter text or URL..." />
        <div className="bg-cyan-50 rounded-xl p-4 text-center text-lg text-blue-700 font-semibold shadow-inner border border-cyan-200">
          {text ? <img src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(text)}`} alt="QR Code" className="mx-auto" /> : 'Enter text to generate QR code.'}
        </div>
      </div>
    </section>
  );
};
export default QrGenerator;
