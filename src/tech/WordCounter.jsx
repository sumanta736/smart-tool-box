import { useState } from 'react';
import { Helmet } from 'react-helmet';

const countWords = text => text.trim() ? text.trim().split(/\s+/).length : 0;
const countChars = text => text.length;

// Unique: Gradient background, word icon, modern card, vibrant accent
const WordCounter = () => {
  const [text, setText] = useState('');
  const words = countWords(text);
  const chars = countChars(text);

  return (
    <section className="container mx-auto px-4 py-12 w-full max-w-6xl font-sans">
      <div className="bg-gradient-to-br from-orange-100 via-white to-blue-100 rounded-3xl shadow-2xl p-8 border border-orange-200">
        <Helmet>
          <title>Word Counter | Smart Tool Box</title>
          <meta name="description" content="Free Word Counter: Count words, characters, and paragraphs instantly. Fast, private, and modern word counting tool for writers and students." />
          <meta name="keywords" content="Word Counter, Word Count, Character Count, Paragraph Count, Tech Tools, Smart Tool Box, Writing Tools" />
          <meta name="robots" content="index, follow" />
          <meta property="og:title" content="Word Counter | Smart Tool Box" />
          <meta property="og:description" content="Free Word Counter: Count words, characters, and paragraphs instantly. Fast, private, and modern word counting tool for writers and students." />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://yourdomain.com/tech/wordcounter" />
          <meta property="og:image" content="https://yourdomain.com/logo512.png" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Word Counter | Smart Tool Box" />
          <meta name="twitter:description" content="Free Word Counter: Count words, characters, and paragraphs instantly. Fast, private, and modern word counting tool for writers and students." />
          <meta name="twitter:image" content="https://yourdomain.com/logo512.png" />
          <link rel="canonical" href="https://yourdomain.com/tech/wordcounter" />
        </Helmet>
        <div className="flex items-center gap-3 mb-4 justify-center">
          <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-orange-300 text-orange-900 text-3xl shadow-lg">🔠</span>
          <h1 className="text-3xl md:text-4xl font-extrabold text-orange-700 drop-shadow tracking-wide">Word Counter</h1>
        </div>
        <h2 className="text-lg text-blue-600 mb-6 text-center font-semibold">Count words and characters in your text</h2>
        <textarea
          className="border-2 border-orange-300 rounded px-3 py-2 w-full min-h-[120px] text-lg bg-blue-50 focus:ring-2 focus:ring-orange-400"
          value={text}
          onChange={e => setText(e.target.value)}
          placeholder="Type or paste your text here..."
        />
        <div className="mt-4 flex gap-6 text-lg justify-center">
          <div className="bg-orange-200 rounded-xl px-6 py-2 text-orange-900 font-bold shadow">Words: <span className="font-extrabold">{words}</span></div>
          <div className="bg-blue-200 rounded-xl px-6 py-2 text-blue-900 font-bold shadow">Characters: <span className="font-extrabold">{chars}</span></div>
        </div>
        <article className="mt-8">
          <h2 className="text-xl font-semibold mb-2 text-orange-700">How to use the Word Counter?</h2>
          <p className="mb-2 text-gray-700">Paste or type your text above. The tool will instantly count the number of words and characters.</p>
          <h3 className="font-semibold mt-4 mb-1 text-orange-700">Example</h3>
          <p className="text-gray-600">"Hello world!" has 2 words and 12 characters.</p>
        </article>
        <section className="mt-8" itemScope itemType="https://schema.org/FAQPage">
          <h2 className="text-lg font-bold mb-2 text-orange-700">Frequently Asked Questions</h2>
          <div itemProp="mainEntity" itemScope itemType="https://schema.org/Question">
            <h3 className="font-semibold" itemProp="name">Is this word counter free?</h3>
            <div itemProp="acceptedAnswer" itemScope itemType="https://schema.org/Answer">
              <p itemProp="text">Yes, this tool is 100% free and works instantly in your browser.</p>
            </div>
          </div>
          <div itemProp="mainEntity" itemScope itemType="https://schema.org/Question">
            <h3 className="font-semibold" itemProp="name">Does it work on mobile?</h3>
            <div itemProp="acceptedAnswer" itemScope itemType="https://schema.org/Answer">
              <p itemProp="text">Yes, Smart Tool Box is fully responsive and works on all devices.</p>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};
export default WordCounter;
