import { useState } from 'react';
import { Helmet } from 'react-helmet';

// Advanced: Regime selection, slab breakdown, cess, surcharge, detailed result
const slabsOld = [
  { upTo: 250000, rate: 0 },
  { upTo: 500000, rate: 0.05 },
  { upTo: 1000000, rate: 0.2 },
  { upTo: Infinity, rate: 0.3 },
];
const slabsNew = [
  { upTo: 300000, rate: 0 },
  { upTo: 600000, rate: 0.05 },
  { upTo: 900000, rate: 0.1 },
  { upTo: 1200000, rate: 0.15 },
  { upTo: 1500000, rate: 0.2 },
  { upTo: Infinity, rate: 0.3 },
];

function calculateTaxDetail(taxable, regime) {
  const slabs = regime === 'old' ? slabsOld : slabsNew;
  let remaining = taxable;
  let prev = 0;
  let total = 0;
  const breakdown = [];
  for (const slab of slabs) {
    const slabAmount = Math.min(remaining, slab.upTo - prev);
    if (slabAmount > 0) {
      const slabTax = slabAmount * slab.rate;
      breakdown.push({
        range: `${prev + 1} - ${slab.upTo === Infinity ? '∞' : slab.upTo}`,
        rate: slab.rate * 100,
        amount: slabAmount,
        tax: slabTax,
      });
      total += slabTax;
      remaining -= slabAmount;
      prev = slab.upTo;
    }
    if (remaining <= 0) break;
  }
  return { total, breakdown };
}

const TaxCalculator = () => {
  const [income, setIncome] = useState(500000);
  const [deductions, setDeductions] = useState(150000);
  const [regime, setRegime] = useState('old');
  const [taxDetail, setTaxDetail] = useState(null);
  const [showBreakdown, setShowBreakdown] = useState(false);

  const calculateTax = () => {
    const slabs = regime === 'old' ? slabsOld : slabsNew;
    // Under new regime, most deductions are not allowed
    const allowedDeductions = regime === 'old' ? deductions : 0;
    const taxable = Math.max(0, income - allowedDeductions);
    const { total, breakdown } = calculateTaxDetail(taxable, regime);
    // Surcharge
    let surcharge = 0;
    if (taxable > 5000000 && taxable <= 10000000) surcharge = total * 0.1;
    else if (taxable > 10000000 && taxable <= 20000000) surcharge = total * 0.15;
    else if (taxable > 20000000 && taxable <= 50000000) surcharge = total * 0.25;
    else if (taxable > 50000000) surcharge = total * 0.37;
    // Cess
    const cess = 0.04 * (total + surcharge);
    setTaxDetail({
      total,
      breakdown,
      surcharge,
      cess,
      final: total + surcharge + cess,
      taxable,
    });
    setShowBreakdown(true);
  };

  return (
    <section className="container mx-auto px-4 py-12 w-full max-w-6xl font-sans">
      <Helmet>
        <title>Tax Calculator | Smart Tool Box</title>
        <meta name="description" content="Free Tax Calculator: Estimate your Indian income tax liability instantly. Supports old/new regime, slab breakdown, surcharge, and cess." />
        <meta name="keywords" content="Tax Calculator, Income Tax, Indian Tax, Tax Slabs, Tax Regime, Surcharge, Cess, Finance Tools, Smart Tool Box" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Tax Calculator | Smart Tool Box" />
        <meta property="og:description" content="Free Tax Calculator: Estimate your Indian income tax liability instantly. Supports old/new regime, slab breakdown, surcharge, and cess." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourdomain.com/finance/tax" />
        <meta property="og:image" content="https://yourdomain.com/logo512.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Tax Calculator | Smart Tool Box" />
        <meta name="twitter:description" content="Free Tax Calculator: Estimate your Indian income tax liability instantly. Supports old/new regime, slab breakdown, surcharge, and cess." />
        <meta name="twitter:image" content="https://yourdomain.com/logo512.png" />
        <link rel="canonical" href="https://yourdomain.com/finance/tax" />
      </Helmet>
      <div className="bg-gradient-to-br from-blue-50 via-white to-gray-100 rounded-3xl shadow-2xl p-8 border border-blue-100">
        <div className="flex items-center gap-3 mb-4 justify-center">
          <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-200 text-blue-900 text-3xl shadow-lg">🧮</span>
          <h1 className="text-3xl md:text-4xl font-extrabold text-blue-800 drop-shadow tracking-wide">Tax Calculator</h1>
        </div>
        <h2 className="text-lg text-blue-600 mb-6 text-center font-semibold">Advanced Indian Income Tax Calculator</h2>
        <form className="flex flex-col gap-4 mb-6">
          <label className="font-semibold text-blue-700">Annual Income
            <input type="number" className="mt-1 border rounded px-3 py-2 w-full focus:ring-2 focus:ring-blue-400 text-xl font-bold text-blue-800 bg-blue-50" placeholder="e.g. 500000" min="0" value={income} onChange={e => setIncome(Number(e.target.value))} />
          </label>
          <label className="font-semibold text-blue-700">Deductions (80C, 80D, etc.)
            <input type="number" className="mt-1 border rounded px-3 py-2 w-full focus:ring-2 focus:ring-blue-400 text-xl font-bold text-blue-800 bg-blue-50" placeholder="e.g. 150000" min="0" value={deductions} onChange={e => setDeductions(Number(e.target.value))} disabled={regime === 'new'} />
          </label>
          <div className="flex gap-4 items-center">
            <label className="font-semibold text-blue-700 flex items-center gap-2">
              <input type="radio" name="regime" value="old" checked={regime === 'old'} onChange={() => setRegime('old')} className="accent-blue-600" />
              Old Regime
            </label>
            <label className="font-semibold text-blue-700 flex items-center gap-2">
              <input type="radio" name="regime" value="new" checked={regime === 'new'} onChange={() => setRegime('new')} className="accent-blue-600" />
              New Regime
            </label>
          </div>
          <button type="button" className="mt-2 bg-blue-600 text-white px-5 py-2 rounded-full font-bold shadow hover:bg-blue-700 transition" onClick={calculateTax}>Calculate Tax</button>
        </form>
        {taxDetail && (
          <div className="bg-blue-100 rounded-xl p-6 text-center text-2xl text-blue-800 font-extrabold shadow-inner border-2 border-blue-300 animate-pulse mb-4">
            Your estimated tax: ₹{taxDetail.final.toLocaleString(undefined, {maximumFractionDigits:2})}
            <div className="text-base font-normal mt-2">(Tax: ₹{taxDetail.total.toLocaleString(undefined, {maximumFractionDigits:2})} + Surcharge: ₹{taxDetail.surcharge.toLocaleString(undefined, {maximumFractionDigits:2})} + Cess: ₹{taxDetail.cess.toLocaleString(undefined, {maximumFractionDigits:2})})</div>
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-full shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 transition-transform transform hover:scale-105" onClick={() => setShowBreakdown(v => !v)}>{showBreakdown ? 'Hide' : 'Show'} Slab Breakdown</button>
          </div>
        )}
        {taxDetail && showBreakdown && (
          <div className="mb-6">
            <h3 className="text-lg font-bold mb-2 text-blue-700">Slab-wise Tax Breakdown</h3>
            <table className="w-full text-left border border-blue-200 rounded-xl overflow-hidden mb-4">
              <thead className="bg-blue-200 text-blue-900">
                <tr>
                  <th className="py-2 px-3">Slab Range (₹)</th>
                  <th className="py-2 px-3">Rate (%)</th>
                  <th className="py-2 px-3">Amount (₹)</th>
                  <th className="py-2 px-3">Tax (₹)</th>
                </tr>
              </thead>
              <tbody>
                {taxDetail.breakdown.map((row, i) => (
                  <tr key={i} className="even:bg-blue-50">
                    <td className="py-2 px-3">{row.range}</td>
                    <td className="py-2 px-3">{row.rate}</td>
                    <td className="py-2 px-3">{row.amount.toLocaleString()}</td>
                    <td className="py-2 px-3">{row.tax.toLocaleString(undefined, {maximumFractionDigits:2})}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="text-sm text-gray-600">* Surcharge and cess are applied after slab tax.</div>
          </div>
        )}
        <div className="mt-8 bg-blue-50 rounded-xl p-6 border border-blue-200">
          <h2 className="text-xl font-bold mb-2 text-blue-700">How does this Tax Calculator work?</h2>
          <p className="mb-2 text-gray-700">Enter your annual income and deductions. Choose the regime. The calculator uses the latest Indian tax slabs, applies surcharge and cess, and shows a detailed breakdown. (For demo only, not for official use.)</p>
        </div>
      </div>
    </section>
  );
};
export default TaxCalculator;
