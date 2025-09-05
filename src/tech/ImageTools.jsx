import { useState } from 'react';
import { Helmet } from 'react-helmet';

// Unique: Gradient background, camera icon, modern card, vibrant accent
const ImageTools = () => {
  const [file, setFile] = useState(null);
  return (
    <section className="container mx-auto px-4 py-12 w-full max-w-6xl font-sans">
      <Helmet>
        <title>Image Tools | Smart Tool Box</title>
        <meta name="description" content="Free Image Tools: Resize, compress, and convert images online. Fast, private, and modern image editing tools for everyone." />
        <meta name="keywords" content="Image Tools, Image Resize, Image Compress, Image Convert, Tech Tools, Smart Tool Box, Image Editing" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Image Tools | Smart Tool Box" />
        <meta property="og:description" content="Free Image Tools: Resize, compress, and convert images online. Fast, private, and modern image editing tools for everyone." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourdomain.com/tech/image" />
        <meta property="og:image" content="https://yourdomain.com/logo512.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Image Tools | Smart Tool Box" />
        <meta name="twitter:description" content="Free Image Tools: Resize, compress, and convert images online. Fast, private, and modern image editing tools for everyone." />
        <meta name="twitter:image" content="https://yourdomain.com/logo512.png" />
        <link rel="canonical" href="https://yourdomain.com/tech/image" />
      </Helmet>
      <div className="bg-gradient-to-br from-yellow-100 via-white to-blue-100 rounded-3xl shadow-2xl p-8 border border-yellow-200">
        <div className="flex items-center gap-3 mb-4 justify-center">
          <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-200 text-blue-900 text-3xl shadow-lg">📷</span>
          <h1 className="text-3xl md:text-4xl font-extrabold text-yellow-700 drop-shadow tracking-wide">Image Tools</h1>
        </div>
        <h2 className="text-lg text-blue-600 mb-6 text-center font-semibold">Resize and compress images</h2>
        <input type="file" accept="image/*" onChange={e => setFile(e.target.files[0])} className="mb-4 block mx-auto file:bg-yellow-400 file:text-white file:rounded file:px-4 file:py-2 file:font-bold file:shadow hover:file:bg-yellow-500 transition" />
        <div className="bg-yellow-50 rounded-xl p-4 text-center text-lg text-blue-700 font-semibold shadow-inner border border-yellow-200">
          {file ? `Selected image: ${file.name}` : 'Upload an image to get started.'}
        </div>
      </div>
    </section>
  );
};
export default ImageTools;
