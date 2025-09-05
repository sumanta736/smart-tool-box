import { useState } from 'react';
import { Helmet } from 'react-helmet';

// Unique: Card with calculator icon, blue/gray palette, stepper style, result highlight
const TaxCalculator = () => {
  const [income, setIncome] = useState(500000);
  const [deductions, setDeductions] = useState(150000);
  const [tax, setTax] = useState(null);

  // Simple tax calculation (example, not real slabs)
  const calculateTax = () => {
    const taxable = Math.max(0, income - deductions);
    let t = 0;
    if (taxable <= 250000) t = 0;
    else if (taxable <= 500000) t = (taxable - 250000) * 0.05;
    else if (taxable <= 1000000) t = 12500 + (taxable - 500000) * 0.2;
    else t = 112500 + (taxable - 1000000) * 0.3;
    setTax(t);
  };

  return (
    <section className="container mx-auto px-4 py-12 w-full max-w-6xl font-sans">
      <Helmet>
        <title>Tax Calculator | Smart Tool Box</title>
        <meta name="description" content="Free Tax Calculator: Estimate your tax liability instantly." />
      </Helmet>
      <div className="bg-gradient-to-br from-blue-50 via-white to-gray-100 rounded-3xl shadow-2xl p-8 border border-blue-100">
        <div className="flex items-center gap-3 mb-4 justify-center">
          <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-200 text-blue-900 text-3xl shadow-lg">🧮</span>
          <h1 className="text-3xl md:text-4xl font-extrabold text-blue-800 drop-shadow tracking-wide">Tax Calculator</h1>
        </div>
        <h2 className="text-lg text-blue-600 mb-6 text-center font-semibold">Quickly estimate your tax liability</h2>
        <form className="flex flex-col gap-4 mb-6">
          <label className="font-semibold text-blue-700">Annual Income
            <input type="number" className="mt-1 border rounded px-3 py-2 w-full focus:ring-2 focus:ring-blue-400 text-xl font-bold text-blue-800 bg-blue-50" placeholder="e.g. 500000" min="0" value={income} onChange={e => setIncome(Number(e.target.value))} />
          </label>
          <label className="font-semibold text-blue-700">Deductions
            <input type="number" className="mt-1 border rounded px-3 py-2 w-full focus:ring-2 focus:ring-blue-400 text-xl font-bold text-blue-800 bg-blue-50" placeholder="e.g. 150000" min="0" value={deductions} onChange={e => setDeductions(Number(e.target.value))} />
          </label>
          <button type="button" className="mt-2 bg-blue-600 text-white px-5 py-2 rounded-full font-bold shadow hover:bg-blue-700 transition" onClick={calculateTax}>Calculate Tax</button>
        </form>
        {tax !== null && (
          <div className="bg-blue-100 rounded-xl p-6 text-center text-2xl text-blue-800 font-extrabold shadow-inner border-2 border-blue-300 animate-pulse">
            Your estimated tax: ₹{tax.toLocaleString(undefined, {maximumFractionDigits:2})}
          </div>
        )}
        <div className="mt-8 bg-blue-50 rounded-xl p-6 border border-blue-200">
          <h2 className="text-xl font-bold mb-2 text-blue-700">How does this Tax Calculator work?</h2>
          <p className="mb-2 text-gray-700">Enter your annual income and deductions. Click Calculate to see your estimated tax based on simple slabs. (For demo only, not for official use.)</p>
        </div>
      </div>
    </section>
  );
};

export default TaxCalculator;
