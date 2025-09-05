import { useState } from 'react';
import { Helmet } from 'react-helmet';

function calculateFD(principal, rate, years, freq) {
  // freq: 1=yearly, 2=half-yearly, 4=quarterly, 12=monthly
  if (!principal || !rate || !years) return 0;
  const n = freq;
  const r = rate / 100;
  return (principal * Math.pow(1 + r / n, n * years)).toFixed(2);
}

const freqOptions = [
  { label: 'Yearly', value: 1 },
  { label: 'Half-Yearly', value: 2 },
  { label: 'Quarterly', value: 4 },
  { label: 'Monthly', value: 12 },
];

const FdCalculator = () => {
  const [principal, setPrincipal] = useState(100000);
  const [rate, setRate] = useState(6.5);
  const [years, setYears] = useState(5);
  const [freq, setFreq] = useState(4);
  const maturity = calculateFD(Number(principal), Number(rate), Number(years), Number(freq));
  const interest = maturity - principal;

  return (
    <section className="container mx-auto px-4 py-12 w-full max-w-4xl font-sans">
      <Helmet>
        <title>FD Calculator | Smart Tool Box</title>
        <meta name="description" content="Free FD Calculator: Calculate your Fixed Deposit maturity and interest instantly." />
      </Helmet>
      <div className="bg-gradient-to-br from-yellow-100 via-white to-yellow-50 rounded-3xl shadow-2xl p-8 border border-yellow-200">
        <h1 className="text-4xl font-extrabold text-yellow-800 mb-2 text-center drop-shadow">FD Calculator</h1>
        <h2 className="text-lg text-yellow-600 mb-8 text-center font-semibold">Estimate your Fixed Deposit maturity and interest</h2>
        <form className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <label className="block font-semibold text-yellow-700 mb-2">Principal (₹)</label>
            <input type="range" min="10000" max="10000000" step="1000" value={principal} onChange={e => setPrincipal(e.target.value)} className="w-full accent-yellow-500 bg-yellow-200" />
            <input type="number" className="mt-2 border rounded px-3 py-2 w-full text-xl font-bold text-yellow-800" value={principal} onChange={e => setPrincipal(e.target.value)} min="10000" max="10000000" step="1000" />
          </div>
          <div>
            <label className="block font-semibold text-yellow-700 mb-2">Interest Rate (%)</label>
            <input type="range" min="1" max="15" step="0.01" value={rate} onChange={e => setRate(e.target.value)} className="w-full accent-pink-500 bg-yellow-200" />
            <input type="number" className="mt-2 border rounded px-3 py-2 w-full text-xl font-bold text-pink-700" value={rate} onChange={e => setRate(e.target.value)} min="1" max="15" step="0.01" />
          </div>
          <div>
            <label className="block font-semibold text-yellow-700 mb-2">Tenure (years)</label>
            <input type="range" min="1" max="20" step="1" value={years} onChange={e => setYears(e.target.value)} className="w-full accent-green-500 bg-yellow-200" />
            <input type="number" className="mt-2 border rounded px-3 py-2 w-full text-xl font-bold text-green-700" value={years} onChange={e => setYears(e.target.value)} min="1" max="20" step="1" />
          </div>
          <div>
            <label className="block font-semibold text-yellow-700 mb-2">Compounding</label>
            <select className="border rounded px-3 py-2 w-full text-lg font-semibold text-yellow-700" value={freq} onChange={e => setFreq(e.target.value)}>
              {freqOptions.map(opt => <option key={opt.value} value={opt.value}>{opt.label}</option>)}
            </select>
          </div>
        </form>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-xl p-6 text-center text-white shadow-lg">
            <div className="text-lg font-semibold mb-1">Maturity Amount</div>
            <div className="text-2xl md:text-3xl font-extrabold">₹{maturity ? Number(maturity).toLocaleString(undefined, {maximumFractionDigits:2}) : '0.00'}</div>
          </div>
          <div className="bg-gradient-to-r from-pink-400 to-pink-600 rounded-xl p-6 text-center text-white shadow-lg">
            <div className="text-lg font-semibold mb-1">Total Interest</div>
            <div className="text-2xl md:text-3xl font-extrabold">₹{maturity ? Number(interest).toLocaleString(undefined, {maximumFractionDigits:2}) : '0.00'}</div>
          </div>
          <div className="bg-gradient-to-r from-green-400 to-green-600 rounded-xl p-6 text-center text-white shadow-lg">
            <div className="text-lg font-semibold mb-1">Principal</div>
            <div className="text-2xl md:text-3xl font-extrabold">₹{principal ? Number(principal).toLocaleString(undefined, {maximumFractionDigits:2}) : '0.00'}</div>
          </div>
        </div>
        <div className="mt-8">
          <h2 className="text-xl font-bold mb-2 text-yellow-700">How does this FD calculator work?</h2>
          <p className="mb-2 text-gray-700">Move the sliders or enter values for principal, interest rate, and tenure. Select compounding frequency. The calculator will instantly show your maturity amount and total interest. All calculations are done in your browser.</p>
          <h3 className="font-semibold mt-4 mb-1 text-yellow-700">Example</h3>
          <p className="text-gray-600">For a ₹1,00,000 FD at 6.5% for 5 years (quarterly compounding), maturity = ₹1,38,915.89</p>
        </div>
        <section className="mt-8" itemScope itemType="https://schema.org/FAQPage">
          <h2 className="text-lg font-bold mb-2 text-yellow-700">Frequently Asked Questions</h2>
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
