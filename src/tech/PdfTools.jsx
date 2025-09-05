import { useState } from 'react';

// PDF Tools page
const PdfTools = () => {
  const [file, setFile] = useState(null);
  return (
    <section className="container mx-auto px-4 py-12 max-w-xl font-sans">
      <div className="bg-white rounded-3xl shadow-2xl p-8 border border-blue-100">
        <h1 className="text-3xl md:text-4xl font-extrabold text-blue-800 mb-4 text-center drop-shadow">PDF Tools</h1>
        <h2 className="text-lg text-blue-600 mb-6 text-center font-semibold">Merge, split, compress PDFs</h2>
        <input type="file" accept="application/pdf" onChange={e => setFile(e.target.files[0])} className="mb-4" />
        <div className="bg-blue-50 rounded-xl p-4 text-center text-lg text-blue-700 font-semibold shadow-inner">
          {file ? `Selected file: ${file.name}` : 'Upload a PDF to get started.'}
        </div>
      </div>
    </section>
  );
};
export default PdfTools;
