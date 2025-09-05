import { useState } from 'react';
import { Helmet } from 'react-helmet';

// Unique: Gradient background, PDF icon, modern card, vibrant accent
const PdfTools = () => {
  const [file, setFile] = useState(null);
  return (
    <section className="container mx-auto px-4 py-12 w-full max-w-6xl font-sans">
      <Helmet>
        <title>PDF Tools | Smart Tool Box</title>
        <meta name="description" content="Free PDF Tools: Merge, split, compress, and convert PDF files online. Fast, private, and modern PDF toolkit for all your needs." />
        <meta name="keywords" content="PDF Tools, PDF Merge, PDF Split, PDF Compress, PDF Convert, Tech Tools, Smart Tool Box, PDF Toolkit" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="PDF Tools | Smart Tool Box" />
        <meta property="og:description" content="Free PDF Tools: Merge, split, compress, and convert PDF files online. Fast, private, and modern PDF toolkit for all your needs." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourdomain.com/tech/pdf" />
        <meta property="og:image" content="https://yourdomain.com/logo512.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="PDF Tools | Smart Tool Box" />
        <meta name="twitter:description" content="Free PDF Tools: Merge, split, compress, and convert PDF files online. Fast, private, and modern PDF toolkit for all your needs." />
        <meta name="twitter:image" content="https://yourdomain.com/logo512.png" />
        <link rel="canonical" href="https://yourdomain.com/tech/pdf" />
      </Helmet>
      <div className="bg-gradient-to-br from-red-100 via-white to-blue-100 rounded-3xl shadow-2xl p-8 border border-red-200">
        <div className="flex items-center gap-3 mb-4 justify-center">
          <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-red-300 text-red-900 text-3xl shadow-lg">📄</span>
          <h1 className="text-3xl md:text-4xl font-extrabold text-red-700 drop-shadow tracking-wide">PDF Tools</h1>
        </div>
        <h2 className="text-lg text-blue-600 mb-6 text-center font-semibold">Merge, split, compress PDFs</h2>
        <input type="file" accept="application/pdf" onChange={e => setFile(e.target.files[0])} className="mb-4 block mx-auto file:bg-red-400 file:text-white file:rounded file:px-4 file:py-2 file:font-bold file:shadow hover:file:bg-red-500 transition" />
        <div className="bg-red-50 rounded-xl p-4 text-center text-lg text-blue-700 font-semibold shadow-inner border border-red-200">
          {file ? `Selected file: ${file.name}` : 'Upload a PDF to get started.'}
        </div>
      </div>
    </section>
  );
};
export default PdfTools;
