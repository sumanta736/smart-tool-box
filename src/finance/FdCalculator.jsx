import { useState } from 'react';

// FD Calculator page
const FdCalculator = () => {
  const [principal, setPrincipal] = useState('');
  const [rate, setRate] = useState('');
  const [years, setYears] = useState('');
  const maturity = principal && rate && years ? (Number(principal) * Math.pow(1 + Number(rate)/100, Number(years))).toFixed(2) : '';

  return (
    <section className="container mx-auto px-4 py-12 max-w-xl font-sans">
      <div className="bg-white rounded-3xl shadow-2xl p-8 border border-blue-100">
        <h1 className="text-3xl md:text-4xl font-extrabold text-blue-800 mb-4 text-center drop-shadow">FD Calculator</h1>
        <h2 className="text-lg text-blue-600 mb-6 text-center font-semibold">Estimate your Fixed Deposit returns</h2>
        <form className="flex flex-col gap-4 mb-6">
          <label className="font-semibold text-blue-700">Principal Amount
            <input type="number" className="mt-1 border rounded px-3 py-2 w-full" value={principal} onChange={e => setPrincipal(e.target.value)} placeholder="e.g. 100000" min="0" />
          </label>
          <label className="font-semibold text-blue-700">Interest Rate (%)
            <input type="number" className="mt-1 border rounded px-3 py-2 w-full" value={rate} onChange={e => setRate(e.target.value)} placeholder="e.g. 6.5" min="0" step="0.01" />
          </label>
          <label className="font-semibold text-blue-700">Tenure (years)
            <input type="number" className="mt-1 border rounded px-3 py-2 w-full" value={years} onChange={e => setYears(e.target.value)} placeholder="e.g. 5" min="1" />
          </label>
        </form>
        <div className="bg-blue-50 rounded-xl p-4 text-center text-lg text-blue-700 font-semibold shadow-inner">
          {maturity ? `Maturity Amount: ₹${maturity}` : 'Enter values to calculate maturity.'}
        </div>
      </div>
    </section>
  );
};

export default FdCalculator;
