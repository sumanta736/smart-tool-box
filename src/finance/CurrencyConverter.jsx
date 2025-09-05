import { useState } from 'react';

// Currency Converter page
const CurrencyConverter = () => {
  const [amount, setAmount] = useState('');
  const [rate, setRate] = useState('');
  const converted = amount && rate ? (Number(amount) * Number(rate)).toFixed(2) : '';

  return (
    <section className="container mx-auto px-4 py-12 max-w-xl font-sans">
      <div className="bg-white rounded-3xl shadow-2xl p-8 border border-blue-100">
        <h1 className="text-3xl md:text-4xl font-extrabold text-blue-800 mb-4 text-center drop-shadow">Currency Converter</h1>
        <h2 className="text-lg text-blue-600 mb-6 text-center font-semibold">Convert currencies live</h2>
        <form className="flex flex-col gap-4 mb-6">
          <label className="font-semibold text-blue-700">Amount
            <input type="number" className="mt-1 border rounded px-3 py-2 w-full" value={amount} onChange={e => setAmount(e.target.value)} placeholder="e.g. 100" min="0" />
          </label>
          <label className="font-semibold text-blue-700">Conversion Rate
            <input type="number" className="mt-1 border rounded px-3 py-2 w-full" value={rate} onChange={e => setRate(e.target.value)} placeholder="e.g. 83.2" min="0" step="0.01" />
          </label>
        </form>
        <div className="bg-blue-50 rounded-xl p-4 text-center text-lg text-blue-700 font-semibold shadow-inner">
          {converted ? `Converted Amount: ₹${converted}` : 'Enter values to convert.'}
        </div>
      </div>
    </section>
  );
};

export default CurrencyConverter;
