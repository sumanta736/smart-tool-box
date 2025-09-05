import { useState } from 'react';
import { Helmet } from 'react-helmet';

// Redesigned: Modern card, indigo/lime palette, financial icon, compact form, engaging results
const FdCalculator = () => {
  const [principal, setPrincipal] = useState(100000);
  const [rate, setRate] = useState(6.5);
  const [years, setYears] = useState(5);
  const [freq, setFreq] = useState(4);
  const freqOptions = [
    { label: 'Yearly', value: 1 },
    { label: 'Half-Yearly', value: 2 },
    { label: 'Quarterly', value: 4 },
    { label: 'Monthly', value: 12 },
  ];
  const n = freq;
  const r = rate / 100;
  const maturity = principal && rate && years ? (principal * Math.pow(1 + r / n, n * years)).toFixed(2) : 0;
  const interest = maturity - principal;
  const percentGain = maturity && principal ? Math.round(((maturity - principal) / principal) * 100) : 0;

  return (
    <section className="container mx-auto px-4 py-12 w-full max-w-6xl font-sans">
      <Helmet>
        <title>FD Calculator | Smart Tool Box</title>
        <meta name="description" content="Free FD Calculator: Calculate your Fixed Deposit maturity and interest instantly. Modern, private, and easy-to-use FD calculator for all banks." />
        <meta name="keywords" content="FD Calculator, Fixed Deposit, FD Maturity, FD Interest, Finance Tools, Smart Tool Box, Bank FD Calculator" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="FD Calculator | Smart Tool Box" />
        <meta property="og:description" content="Free FD Calculator: Calculate your Fixed Deposit maturity and interest instantly. Modern, private, and easy-to-use FD calculator for all banks." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourdomain.com/finance/fd" />
        <meta property="og:image" content="https://yourdomain.com/logo512.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="FD Calculator | Smart Tool Box" />
        <meta name="twitter:description" content="Free FD Calculator: Calculate your Fixed Deposit maturity and interest instantly. Modern, private, and easy-to-use FD calculator for all banks." />
        <meta name="twitter:image" content="https://yourdomain.com/logo512.png" />
        <link rel="canonical" href="https://yourdomain.com/finance/fd" />
      </Helmet>
      <div className="bg-gradient-to-br from-indigo-50 via-white to-lime-100 rounded-3xl shadow-2xl p-8 border border-indigo-200">
        <div className="flex items-center gap-3 mb-6 justify-center">
          <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-lime-300 text-lime-900 text-4xl shadow-lg">🏦</span>
          <h1 className="text-4xl font-extrabold text-indigo-800 drop-shadow tracking-wide">FD Calculator</h1>
        </div>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 bg-white rounded-xl p-6 shadow border border-lime-200">
          <label className="block font-semibold text-indigo-700">Principal (₹)
            <input type="number" className="mt-1 border rounded px-3 py-2 w-full text-xl font-bold text-indigo-800 bg-indigo-50" value={principal} onChange={e => setPrincipal(e.target.value)} min="10000" max="10000000" step="1000" />
          </label>
          <label className="block font-semibold text-indigo-700">Interest Rate (%)
            <input type="number" className="mt-1 border rounded px-3 py-2 w-full text-xl font-bold text-indigo-800 bg-indigo-50" value={rate} onChange={e => setRate(e.target.value)} min="1" max="15" step="0.01" />
          </label>
          <label className="block font-semibold text-indigo-700">Tenure (years)
            <input type="number" className="mt-1 border rounded px-3 py-2 w-full text-xl font-bold text-indigo-800 bg-indigo-50" value={years} onChange={e => setYears(e.target.value)} min="1" max="20" step="1" />
          </label>
          <label className="block font-semibold text-indigo-700">Compounding
            <select className="mt-1 border rounded px-3 py-2 w-full text-lg font-semibold text-indigo-700 bg-indigo-50" value={freq} onChange={e => setFreq(Number(e.target.value))}>
              {freqOptions.map(opt => <option key={opt.value} value={opt.value}>{opt.label}</option>)}
            </select>
          </label>
        </form>
        <div className="flex flex-col md:flex-row gap-6 items-center justify-center mb-8">
          <div className="bg-gradient-to-b from-lime-400 to-indigo-500 rounded-2xl p-6 text-center text-white shadow-xl w-60">
            <div className="text-lg font-semibold mb-1">Maturity Amount</div>
            <div className="text-2xl md:text-3xl font-extrabold">₹{maturity ? Number(maturity).toLocaleString(undefined, {maximumFractionDigits:2}) : '0.00'}</div>
            <div className="mt-2 text-xs text-lime-100">{percentGain > 0 ? `+${percentGain}%` : `${percentGain}%`} gain</div>
          </div>
          <div className="bg-gradient-to-b from-indigo-400 to-lime-500 rounded-2xl p-6 text-center text-white shadow-xl w-60">
            <div className="text-lg font-semibold mb-1">Total Interest</div>
            <div className="text-2xl md:text-3xl font-extrabold">₹{maturity ? Number(interest).toLocaleString(undefined, {maximumFractionDigits:2}) : '0.00'}</div>
          </div>
          <div className="bg-gradient-to-b from-lime-400 to-indigo-400 rounded-2xl p-6 text-center text-white shadow-xl w-60">
            <div className="text-lg font-semibold mb-1">Principal</div>
            <div className="text-2xl md:text-3xl font-extrabold">₹{principal ? Number(principal).toLocaleString(undefined, {maximumFractionDigits:2}) : '0.00'}</div>
          </div>
        </div>
        <div className="mt-8 bg-indigo-50 rounded-xl p-6 border border-indigo-200">
          <h2 className="text-xl font-bold mb-2 text-indigo-700">How does this FD calculator work?</h2>
          <p className="mb-2 text-gray-700">Enter your principal, interest rate, tenure, and compounding frequency. Results update instantly. Maturity and interest are calculated using the compounding formula.</p>
          <h3 className="font-semibold mt-4 mb-1 text-indigo-700">Example</h3>
          <p className="text-gray-600">For a ₹1,00,000 FD at 6.5% for 5 years (quarterly), maturity = ₹1,38,915.89</p>
        </div>
        <section className="mt-8" itemScope itemType="https://schema.org/FAQPage">
          <h2 className="text-lg font-bold mb-2 text-indigo-700">Frequently Asked Questions</h2>
          <div itemProp="mainEntity" itemScope itemType="https://schema.org/Question">
            <h3 className="font-semibold" itemProp="name">What is a Fixed Deposit?</h3>
            <div itemProp="acceptedAnswer" itemScope itemType="https://schema.org/Answer">
              <p itemProp="text">A Fixed Deposit (FD) is a financial instrument where you deposit money for a fixed tenure at a fixed interest rate and receive the maturity amount at the end of the tenure.</p>
            </div>
          </div>
          <div itemProp="mainEntity" itemScope itemType="https://schema.org/Question">
            <h3 className="font-semibold" itemProp="name">How is FD interest calculated?</h3>
            <div itemProp="acceptedAnswer" itemScope itemType="https://schema.org/Answer">
              <p itemProp="text">FD interest is calculated using the principal, interest rate, tenure, and compounding frequency. The formula is: Maturity = P*(1+R/N)^(N*T)</p>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default FdCalculator;
