import { useState } from 'react';
import { Helmet } from 'react-helmet';

// Unique: Minimalist, blue/gray palette, currency icons, side-by-side layout
const CurrencyConverter = () => {
  const [amount, setAmount] = useState(100);
  const [rate, setRate] = useState(83.2);
  const converted = amount && rate ? (Number(amount) * Number(rate)).toFixed(2) : '';

  return (
    <section className="container mx-auto px-4 py-12 w-full max-w-6xl font-sans">
      <Helmet>
        <title>Currency Converter | Smart Tool Box</title>
        <meta name="description" content="Free Currency Converter: Convert currencies instantly." />
      </Helmet>
      <div className="bg-gradient-to-br from-blue-50 via-white to-gray-100 rounded-3xl shadow-2xl p-8 border border-blue-200">
        <h1 className="text-4xl font-extrabold text-blue-800 mb-2 text-center drop-shadow tracking-wider flex items-center justify-center gap-2">
          <span role="img" aria-label="currency">💱</span> Currency Converter
        </h1>
        <h2 className="text-lg text-blue-600 mb-8 text-center font-semibold">Convert between currencies with ease</h2>
        <div className="flex flex-col md:flex-row gap-8 items-center justify-center mb-8">
          <div className="flex-1 flex flex-col gap-4">
            <label className="block font-semibold text-blue-700">Amount
              <input type="number" className="mt-1 border rounded px-3 py-2 w-full text-xl font-bold text-blue-800 bg-blue-50" value={amount} onChange={e => setAmount(e.target.value)} min="1" max="100000" step="1" />
            </label>
            <label className="block font-semibold text-blue-700">Conversion Rate
              <input type="number" className="mt-1 border rounded px-3 py-2 w-full text-xl font-bold text-blue-800 bg-blue-50" value={rate} onChange={e => setRate(e.target.value)} min="0.1" max="200" step="0.01" />
            </label>
          </div>
          <div className="flex-1 flex flex-col items-center justify-center">
            <div className="bg-gradient-to-b from-blue-400 to-blue-600 rounded-2xl p-8 text-center text-white shadow-xl w-60 flex flex-col items-center gap-2">
              <span className="text-5xl">💸</span>
              <div className="text-lg font-semibold mb-1">Converted Amount</div>
              <div className="text-2xl md:text-3xl font-extrabold">₹{converted ? Number(converted).toLocaleString(undefined, {maximumFractionDigits:2}) : '0.00'}</div>
              <div className="text-xs text-blue-100 mt-2">@ Rate: {rate}</div>
            </div>
          </div>
        </div>
        <div className="mt-8 bg-blue-50 rounded-xl p-6 border border-blue-200">
          <h2 className="text-xl font-bold mb-2 text-blue-700">How does this Currency Converter work?</h2>
          <p className="mb-2 text-gray-700">Enter the amount and conversion rate. The converted value updates instantly. All calculations are done in your browser.</p>
          <h3 className="font-semibold mt-4 mb-1 text-blue-700">Example</h3>
          <p className="text-gray-600">For ₹100 at a rate of 83.2, converted amount = ₹8,320.00</p>
        </div>
        <section className="mt-8" itemScope itemType="https://schema.org/FAQPage">
          <h2 className="text-lg font-bold mb-2 text-blue-700">Frequently Asked Questions</h2>
          <div itemProp="mainEntity" itemScope itemType="https://schema.org/Question">
            <h3 className="font-semibold" itemProp="name">What is a Currency Converter?</h3>
            <div itemProp="acceptedAnswer" itemScope itemType="https://schema.org/Answer">
              <p itemProp="text">A Currency Converter helps you convert one currency to another using a specified rate.</p>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default CurrencyConverter;
