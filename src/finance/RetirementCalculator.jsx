import { useState } from 'react';

// Retirement Calculator page
const RetirementCalculator = () => {
  const [monthly, setMonthly] = useState('');
  const [rate, setRate] = useState('');
  const [years, setYears] = useState('');
  const n = Number(years) * 12;
  const r = Number(rate) / 12 / 100;
  const corpus = monthly && rate && years ? (Number(monthly) * ((Math.pow(1 + r, n) - 1) / r) * (1 + r)).toFixed(2) : '';

  return (
    <section className="container mx-auto px-4 py-12 max-w-xl font-sans">
      <div className="bg-white rounded-3xl shadow-2xl p-8 border border-blue-100">
        <h1 className="text-3xl md:text-4xl font-extrabold text-blue-800 mb-4 text-center drop-shadow">Retirement Calculator</h1>
        <h2 className="text-lg text-blue-600 mb-6 text-center font-semibold">Plan your retirement corpus</h2>
        <form className="flex flex-col gap-4 mb-6">
          <label className="font-semibold text-blue-700">Monthly Investment
            <input type="number" className="mt-1 border rounded px-3 py-2 w-full" value={monthly} onChange={e => setMonthly(e.target.value)} placeholder="e.g. 10000" min="0" />
          </label>
          <label className="font-semibold text-blue-700">Expected Annual Return (%)
            <input type="number" className="mt-1 border rounded px-3 py-2 w-full" value={rate} onChange={e => setRate(e.target.value)} placeholder="e.g. 10" min="0" step="0.01" />
          </label>
          <label className="font-semibold text-blue-700">Investment Tenure (years)
            <input type="number" className="mt-1 border rounded px-3 py-2 w-full" value={years} onChange={e => setYears(e.target.value)} placeholder="e.g. 25" min="1" />
          </label>
        </form>
        <div className="bg-blue-50 rounded-xl p-4 text-center text-lg text-blue-700 font-semibold shadow-inner">
          {corpus ? `Retirement Corpus: ₹${corpus}` : 'Enter values to calculate corpus.'}
        </div>
      </div>
    </section>
  );
};

export default RetirementCalculator;
