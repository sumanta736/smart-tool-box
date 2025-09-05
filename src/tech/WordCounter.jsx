import { useState } from 'react';
import { Helmet } from 'react-helmet';

const countWords = text => text.trim() ? text.trim().split(/\s+/).length : 0;
const countChars = text => text.length;

const WordCounter = () => {
  const [text, setText] = useState('');
  const words = countWords(text);
  const chars = countChars(text);

  return (
    <section className="container mx-auto px-4 py-10 max-w-xl">
      <Helmet>
        <title>Word Counter | Smart Tool Box</title>
        <meta name="description" content="Free online word and character counter. Count words and characters instantly as you type." />
      </Helmet>
      <h1 className="text-2xl font-bold mb-2">Word Counter</h1>
      <h2 className="text-lg text-gray-600 mb-4">Count words and characters in your text</h2>
      <textarea
        className="border rounded px-3 py-2 w-full min-h-[120px]"
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Type or paste your text here..."
      />
      <div className="mt-4 flex gap-6 text-lg">
        <div>Words: <span className="font-semibold">{words}</span></div>
        <div>Characters: <span className="font-semibold">{chars}</span></div>
      </div>
      <article className="mt-8">
        <h2 className="text-xl font-semibold mb-2">How to use the Word Counter?</h2>
        <p className="mb-2 text-gray-700">Paste or type your text above. The tool will instantly count the number of words and characters.</p>
        <h3 className="font-semibold mt-4 mb-1">Example</h3>
        <p className="text-gray-600">"Hello world!" has 2 words and 12 characters.</p>
      </article>
      <section className="mt-8" itemScope itemType="https://schema.org/FAQPage">
        <h2 className="text-lg font-bold mb-2">Frequently Asked Questions</h2>
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
    </section>
  );
};

export default WordCounter;
