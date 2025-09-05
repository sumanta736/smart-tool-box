import { useState } from 'react';
import { Helmet } from 'react-helmet';

// Unique: Circular progress for maturity, vertical card stack, playful green/teal palette
const SipCalculator = () => {
  const [monthly, setMonthly] = useState(5000);
  const [rate, setRate] = useState(12);
  const [years, setYears] = useState(10);
  const n = Number(years) * 12;
  const r = Number(rate) / 12 / 100;
  const maturity = monthly && rate && years ? (Number(monthly) * ((Math.pow(1 + r, n) - 1) / r) * (1 + r)).toFixed(2) : '';
  const invested = monthly * n;
  const gain = maturity - invested;
  const percentGain = maturity && invested ? Math.round((gain / invested) * 100) : 0;

  return (
    <section className="container mx-auto px-4 py-12 w-full max-w-6xl font-sans">
      <Helmet>
        <title>SIP Calculator | Smart Tool Box</title>
        <meta name="description" content="Free SIP Calculator: Calculate SIP maturity, total gain, and invested amount. Plan your mutual fund investments with a modern, accessible SIP calculator. No login required." />
        <meta name="keywords" content="SIP Calculator, Mutual Fund SIP, SIP Maturity, SIP Gain, SIP Investment, SIP Planner, Smart Tool Box, Finance Tools, Investment Calculator, Mutual Fund Calculator" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="SIP Calculator | Smart Tool Box" />
        <meta property="og:description" content="Free SIP Calculator: Calculate SIP maturity, total gain, and invested amount. Plan your mutual fund investments with a modern, accessible SIP calculator." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourdomain.com/finance/sip" />
        <meta property="og:image" content="https://yourdomain.com/logo512.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="SIP Calculator | Smart Tool Box" />
        <meta name="twitter:description" content="Free SIP Calculator: Calculate SIP maturity, total gain, and invested amount. Plan your mutual fund investments with a modern, accessible SIP calculator." />
        <meta name="twitter:image" content="https://yourdomain.com/logo512.png" />
        <link rel="canonical" href="https://yourdomain.com/finance/sip" />
      </Helmet>
      <div className="bg-gradient-to-br from-teal-50 via-white to-green-100 rounded-3xl shadow-2xl p-8 border border-teal-200">
        <h1 className="text-4xl font-extrabold text-teal-800 mb-2 text-center drop-shadow tracking-wider">SIP Growth Visualizer</h1>
        <h2 className="text-lg text-teal-600 mb-8 text-center font-semibold">Visualize your SIP journey with a unique progress chart</h2>
        <div className="flex flex-col md:flex-row gap-8 items-center justify-center mb-8">
          <div className="flex-1 flex flex-col gap-4">
            <label className="block font-semibold text-teal-700">Monthly Investment (₹)
              <input type="number" className="mt-1 border rounded px-3 py-2 w-full text-xl font-bold text-teal-800 bg-teal-50" value={monthly} onChange={e => setMonthly(e.target.value)} min="500" max="100000" step="100" />
            </label>
            <label className="block font-semibold text-teal-700">Expected Return (%)
              <input type="number" className="mt-1 border rounded px-3 py-2 w-full text-xl font-bold text-teal-800 bg-teal-50" value={rate} onChange={e => setRate(e.target.value)} min="1" max="20" step="0.01" />
            </label>
            <label className="block font-semibold text-teal-700">Tenure (years)
              <input type="number" className="mt-1 border rounded px-3 py-2 w-full text-xl font-bold text-teal-800 bg-teal-50" value={years} onChange={e => setYears(e.target.value)} min="1" max="30" step="1" />
            </label>
          </div>
          <div className="flex-1 flex flex-col items-center">
            {/* Unique: Circular progress chart */}
            <svg width="140" height="140" viewBox="0 0 140 140" className="mb-2">
              <circle cx="70" cy="70" r="60" fill="#e0f2f1" />
              <circle cx="70" cy="70" r="60" fill="none" stroke="#14b8a6" strokeWidth="12" strokeDasharray={2 * Math.PI * 60} strokeDashoffset={2 * Math.PI * 60 * (1 - percentGain / 100)} strokeLinecap="round" />
              <text x="70" y="78" textAnchor="middle" fontSize="2em" fill="#134e4a" fontWeight="bold">{percentGain}%</text>
            </svg>
            <div className="text-teal-700 font-semibold text-center">Total Gain %</div>
          </div>
        </div>
        {/* Unique: Vertical card stack */}
        <div className="flex flex-col md:flex-row gap-6 mb-8 items-center justify-center">
          <div className="bg-gradient-to-b from-green-400 to-teal-500 rounded-2xl p-6 text-center text-white shadow-xl w-60">
            <div className="text-lg font-semibold mb-1">Maturity Amount</div>
            <div className="text-2xl md:text-3xl font-extrabold">₹{maturity ? Number(maturity).toLocaleString(undefined, {maximumFractionDigits:2}) : '0.00'}</div>
          </div>
          <div className="bg-gradient-to-b from-teal-400 to-green-500 rounded-2xl p-6 text-center text-white shadow-xl w-60">
            <div className="text-lg font-semibold mb-1">Total Gain</div>
            <div className="text-2xl md:text-3xl font-extrabold">₹{maturity ? Number(gain).toLocaleString(undefined, {maximumFractionDigits:2}) : '0.00'}</div>
          </div>
          <div className="bg-gradient-to-b from-blue-400 to-teal-400 rounded-2xl p-6 text-center text-white shadow-xl w-60">
            <div className="text-lg font-semibold mb-1">Invested Amount</div>
            <div className="text-2xl md:text-3xl font-extrabold">₹{invested ? Number(invested).toLocaleString(undefined, {maximumFractionDigits:2}) : '0.00'}</div>
          </div>
        </div>
        <div className="mt-8">
          <h2 className="text-xl font-bold mb-2 text-teal-700">How does this SIP calculator work?</h2>
          <p className="mb-2 text-gray-700">Enter your monthly investment, expected return, and tenure. The circular chart visualizes your total gain percentage. Results update instantly.</p>
          <h3 className="font-semibold mt-4 mb-1 text-teal-700">Example</h3>
          <p className="text-gray-600">For a ₹5,000 SIP at 12% for 10 years, maturity = ₹11,61,695.16</p>
        </div>
        <section className="mt-8" itemScope itemType="https://schema.org/FAQPage">
          <h2 className="text-lg font-bold mb-2 text-teal-700">Frequently Asked Questions</h2>
          <div itemProp="mainEntity" itemScope itemType="https://schema.org/Question">
            <h3 className="font-semibold" itemProp="name">What is a SIP?</h3>
            <div itemProp="acceptedAnswer" itemScope itemType="https://schema.org/Answer">
              <p itemProp="text">A Systematic Investment Plan (SIP) is a way to invest a fixed amount regularly in mutual funds.</p>
            </div>
          </div>
          <div itemProp="mainEntity" itemScope itemType="https://schema.org/Question">
            <h3 className="font-semibold" itemProp="name">How is SIP maturity calculated?</h3>
            <div itemProp="acceptedAnswer" itemScope itemType="https://schema.org/Answer">
              <p itemProp="text">SIP maturity is calculated using the monthly investment, expected return, and tenure. The formula is: M = P × [(1 + r)^n - 1 / r] × (1 + r)</p>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default SipCalculator;
