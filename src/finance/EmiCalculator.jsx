import { useState } from 'react';
import { Helmet } from 'react-helmet';

function calculateEMI(p, r, n) {
  const monthlyRate = r / 12 / 100;
  return p && r && n
    ? (p * monthlyRate * Math.pow(1 + monthlyRate, n)) / (Math.pow(1 + monthlyRate, n) - 1)
    : 0;
}

const EmiCalculator = () => {
  const [principal, setPrincipal] = useState(100000);
  const [rate, setRate] = useState(8.5);
  const [months, setMonths] = useState(60);
  const emi = calculateEMI(Number(principal), Number(rate), Number(months));
  const totalPayment = emi * months;
  const totalInterest = totalPayment - principal;

  // For slider colors
  const sliderThumb = 'bg-gradient-to-r from-blue-500 to-blue-700';
  const sliderTrack = 'bg-blue-200';

  return (
    <section className="container mx-auto px-4 py-12 w-full max-w-6xl font-sans">
      <Helmet>
        <title>EMI Calculator | Smart Tool Box</title>
        <meta name="description" content="Free EMI Calculator: Calculate your loan EMI, interest, and total payment instantly." />
        <meta name="description" content="Free EMI Calculator: Calculate your monthly loan EMI, total payment, and interest. Fast, private, and modern EMI calculator for all loan types." />
        <meta name="keywords" content="EMI Calculator, Loan EMI, Monthly EMI, Loan Interest, Finance Tools, Smart Tool Box, Payment Calculator" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="EMI Calculator | Smart Tool Box" />
        <meta property="og:description" content="Free EMI Calculator: Calculate your monthly loan EMI, total payment, and interest. Fast, private, and modern EMI calculator for all loan types." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourdomain.com/finance/emi" />
        <meta property="og:image" content="https://yourdomain.com/logo512.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="EMI Calculator | Smart Tool Box" />
        <meta name="twitter:description" content="Free EMI Calculator: Calculate your monthly loan EMI, total payment, and interest. Fast, private, and modern EMI calculator for all loan types." />
        <meta name="twitter:image" content="https://yourdomain.com/logo512.png" />
        <link rel="canonical" href="https://yourdomain.com/finance/emi" />
      </Helmet>
      <div className="bg-gradient-to-br from-blue-100 via-white to-blue-50 rounded-3xl shadow-2xl p-8 border border-blue-200">
        <h1 className="text-4xl font-extrabold text-blue-800 mb-2 text-center drop-shadow">EMI Calculator</h1>
        <h2 className="text-lg text-blue-600 mb-8 text-center font-semibold">Calculate your monthly loan EMI easily</h2>
        <form className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <label className="block font-semibold text-blue-700 mb-2">Principal Amount (₹)</label>
            <input type="range" min="10000" max="10000000" step="1000" value={principal} onChange={e => setPrincipal(e.target.value)} className={`w-full accent-blue-600 ${sliderTrack}`} />
            <input type="number" className="mt-2 border rounded px-3 py-2 w-full text-xl font-bold text-blue-800" value={principal} onChange={e => setPrincipal(e.target.value)} min="10000" max="10000000" step="1000" />
          </div>
          <div>
            <label className="block font-semibold text-blue-700 mb-2">Interest Rate (%)</label>
            <input type="range" min="1" max="20" step="0.01" value={rate} onChange={e => setRate(e.target.value)} className={`w-full accent-pink-500 ${sliderTrack}`} />
            <input type="number" className="mt-2 border rounded px-3 py-2 w-full text-xl font-bold text-pink-700" value={rate} onChange={e => setRate(e.target.value)} min="1" max="20" step="0.01" />
          </div>
          <div>
            <label className="block font-semibold text-blue-700 mb-2">Tenure (months)</label>
            <input type="range" min="6" max="360" step="1" value={months} onChange={e => setMonths(e.target.value)} className={`w-full accent-green-500 ${sliderTrack}`} />
            <input type="number" className="mt-2 border rounded px-3 py-2 w-full text-xl font-bold text-green-700" value={months} onChange={e => setMonths(e.target.value)} min="6" max="360" step="1" />
          </div>
        </form>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gradient-to-r from-blue-400 to-blue-600 rounded-xl p-6 text-center text-white shadow-lg">
            <div className="text-lg font-semibold mb-1">Monthly EMI</div>
            <div className="text-2xl md:text-3xl font-extrabold">₹{emi ? emi.toLocaleString(undefined, {maximumFractionDigits:2}) : '0.00'}</div>
          </div>
          <div className="bg-gradient-to-r from-pink-400 to-pink-600 rounded-xl p-6 text-center text-white shadow-lg">
            <div className="text-lg font-semibold mb-1">Total Interest</div>
            <div className="text-2xl md:text-3xl font-extrabold">₹{emi && months && principal ? totalInterest.toLocaleString(undefined, {maximumFractionDigits:2}) : '0.00'}</div>
          </div>
          <div className="bg-gradient-to-r from-green-400 to-green-600 rounded-xl p-6 text-center text-white shadow-lg">
            <div className="text-lg font-semibold mb-1">Total Payment</div>
            <div className="text-2xl md:text-3xl font-extrabold">₹{emi && months ? totalPayment.toLocaleString(undefined, {maximumFractionDigits:2}) : '0.00'}</div>
          </div>
        </div>
        <div className="mt-8">
          <h2 className="text-xl font-bold mb-2 text-blue-700">How does this EMI calculator work?</h2>
          <p className="mb-2 text-gray-700">Move the sliders or enter values for loan amount, interest rate, and tenure. The calculator will instantly show your monthly EMI, total payment, and total interest. All calculations are done in your browser.</p>
          <h3 className="font-semibold mt-4 mb-1 text-blue-700">Example</h3>
          <p className="text-gray-600">For a ₹1,00,000 loan at 8% for 5 years (60 months), EMI = ₹2,027.53</p>
        </div>
        <section className="mt-8" itemScope itemType="https://schema.org/FAQPage">
          <h2 className="text-lg font-bold mb-2 text-blue-700">Frequently Asked Questions</h2>
          <div itemProp="mainEntity" itemScope itemType="https://schema.org/Question">
            <h3 className="font-semibold" itemProp="name">What is an EMI?</h3>
            <div itemProp="acceptedAnswer" itemScope itemType="https://schema.org/Answer">
              <p itemProp="text">EMI stands for Equated Monthly Installment. It is the fixed payment amount made by a borrower to a lender at a specified date each month.</p>
            </div>
          </div>
          <div itemProp="mainEntity" itemScope itemType="https://schema.org/Question">
            <h3 className="font-semibold" itemProp="name">How is EMI calculated?</h3>
            <div itemProp="acceptedAnswer" itemScope itemType="https://schema.org/Answer">
              <p itemProp="text">EMI is calculated using the principal, interest rate, and tenure. The formula is: EMI = [P x R x (1+R)^N] / [(1+R)^N-1]</p>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default EmiCalculator;
