import { useState } from 'react';
import { Helmet } from 'react-helmet';

// Unique: Modern card, purple/blue palette, progress bar, info block
const RetirementCalculator = () => {
  const [monthly, setMonthly] = useState(10000);
  const [rate, setRate] = useState(10);
  const [years, setYears] = useState(25);
  const n = Number(years) * 12;
  const r = Number(rate) / 12 / 100;
  const corpus = monthly && rate && years ? (Number(monthly) * ((Math.pow(1 + r, n) - 1) / r) * (1 + r)).toFixed(2) : '';
  const invested = monthly * n;
  const gain = corpus - invested;
  const percentGoal = corpus && invested ? Math.round((corpus / (invested * 2)) * 100) : 0; // arbitrary goal: 2x invested

  return (
    <section className="container mx-auto px-4 py-12 w-full max-w-6xl font-sans">
      <Helmet>
        <title>Retirement Calculator | Smart Tool Box</title>
        <meta name="description" content="Free Retirement Calculator: Plan your retirement corpus and see maturity instantly. Modern, private, and easy-to-use retirement planning tool." />
        <meta name="keywords" content="Retirement Calculator, Retirement Planning, Retirement Corpus, Finance Tools, Smart Tool Box, Pension Calculator" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Retirement Calculator | Smart Tool Box" />
        <meta property="og:description" content="Free Retirement Calculator: Plan your retirement corpus and see maturity instantly. Modern, private, and easy-to-use retirement planning tool." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourdomain.com/finance/retirement" />
        <meta property="og:image" content="https://yourdomain.com/logo512.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Retirement Calculator | Smart Tool Box" />
        <meta name="twitter:description" content="Free Retirement Calculator: Plan your retirement corpus and see maturity instantly. Modern, private, and easy-to-use retirement planning tool." />
        <meta name="twitter:image" content="https://yourdomain.com/logo512.png" />
        <link rel="canonical" href="https://yourdomain.com/finance/retirement" />
      </Helmet>
      <div className="bg-gradient-to-br from-purple-100 via-white to-blue-50 rounded-3xl shadow-2xl p-8 border border-purple-200">
        <h1 className="text-4xl font-extrabold text-purple-800 mb-2 text-center drop-shadow tracking-wider">Retirement Goal Tracker</h1>
        <h2 className="text-lg text-purple-600 mb-8 text-center font-semibold">Track your retirement corpus with a progress bar</h2>
        <div className="flex flex-col md:flex-row gap-8 items-center justify-center mb-8">
          <div className="flex-1 flex flex-col gap-4">
            <label className="block font-semibold text-purple-700">Monthly Investment (₹)
              <input type="number" className="mt-1 border rounded px-3 py-2 w-full text-xl font-bold text-purple-800 bg-purple-50" value={monthly} onChange={e => setMonthly(e.target.value)} min="1000" max="100000" step="100" />
            </label>
            <label className="block font-semibold text-purple-700">Expected Return (%)
              <input type="number" className="mt-1 border rounded px-3 py-2 w-full text-xl font-bold text-purple-800 bg-purple-50" value={rate} onChange={e => setRate(e.target.value)} min="1" max="20" step="0.01" />
            </label>
            <label className="block font-semibold text-purple-700">Tenure (years)
              <input type="number" className="mt-1 border rounded px-3 py-2 w-full text-xl font-bold text-purple-800 bg-purple-50" value={years} onChange={e => setYears(e.target.value)} min="1" max="40" step="1" />
            </label>
          </div>
          <div className="flex-1 flex flex-col items-center">
            {/* Unique: Progress bar for corpus goal */}
            <div className="w-full max-w-xs mb-2">
              <div className="h-6 bg-purple-200 rounded-full overflow-hidden">
                <div className="h-6 bg-gradient-to-r from-purple-500 to-blue-500" style={{ width: `${percentGoal > 100 ? 100 : percentGoal}%` }}></div>
              </div>
              <div className="text-center text-purple-700 font-semibold mt-1">{percentGoal > 100 ? 100 : percentGoal}% of 2x invested goal</div>
            </div>
          </div>
        </div>
        {/* Unique: Modern card row */}
        <div className="flex flex-col md:flex-row gap-6 mb-8 items-center justify-center">
          <div className="bg-gradient-to-b from-purple-400 to-purple-600 rounded-2xl p-6 text-center text-white shadow-xl w-60">
            <div className="text-lg font-semibold mb-1">Retirement Corpus</div>
            <div className="text-2xl md:text-3xl font-extrabold">₹{corpus ? Number(corpus).toLocaleString(undefined, {maximumFractionDigits:2}) : '0.00'}</div>
          </div>
          <div className="bg-gradient-to-b from-pink-400 to-pink-600 rounded-2xl p-6 text-center text-white shadow-xl w-60">
            <div className="text-lg font-semibold mb-1">Total Gain</div>
            <div className="text-2xl md:text-3xl font-extrabold">₹{corpus ? Number(gain).toLocaleString(undefined, {maximumFractionDigits:2}) : '0.00'}</div>
          </div>
          <div className="bg-gradient-to-b from-blue-400 to-blue-600 rounded-2xl p-6 text-center text-white shadow-xl w-60">
            <div className="text-lg font-semibold mb-1">Invested Amount</div>
            <div className="text-2xl md:text-3xl font-extrabold">₹{invested ? Number(invested).toLocaleString(undefined, {maximumFractionDigits:2}) : '0.00'}</div>
          </div>
        </div>
        <div className="mt-8 bg-purple-50 rounded-xl p-6 border border-purple-200">
          <h2 className="text-xl font-bold mb-2 text-purple-700">How does this Retirement calculator work?</h2>
          <p className="mb-2 text-gray-700">Enter your monthly investment, expected return, and tenure. The progress bar shows your corpus as a percentage of a 2x invested goal. Results update instantly.</p>
          <h3 className="font-semibold mt-4 mb-1 text-purple-700">Example</h3>
          <p className="text-gray-600">For a ₹10,000 monthly investment at 10% for 25 years, corpus = ₹1,33,58,993.13</p>
        </div>
        <section className="mt-8" itemScope itemType="https://schema.org/FAQPage">
          <h2 className="text-lg font-bold mb-2 text-purple-700">Frequently Asked Questions</h2>
          <div itemProp="mainEntity" itemScope itemType="https://schema.org/Question">
            <h3 className="font-semibold" itemProp="name">What is a Retirement Calculator?</h3>
            <div itemProp="acceptedAnswer" itemScope itemType="https://schema.org/Answer">
              <p itemProp="text">A Retirement Calculator helps you estimate the amount you need to invest regularly to achieve your retirement goals.</p>
            </div>
          </div>
          <div itemProp="mainEntity" itemScope itemType="https://schema.org/Question">
            <h3 className="font-semibold" itemProp="name">How is retirement corpus calculated?</h3>
            <div itemProp="acceptedAnswer" itemScope itemType="https://schema.org/Answer">
              <p itemProp="text">Retirement corpus is calculated using the monthly investment, expected return, and tenure. The formula is: M = P × [(1 + r)^n - 1 / r] × (1 + r)</p>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default RetirementCalculator;
