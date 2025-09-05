import { useState } from 'react';
import { Helmet } from 'react-helmet';

const LoanAffordabilityCalculator = () => {
  const [income, setIncome] = useState(50000);
  const [monthlyObligations, setMonthlyObligations] = useState(10000);
  const [interestRate, setInterestRate] = useState(8);
  const [tenure, setTenure] = useState(20);
  const maxEmi = (income - monthlyObligations) * 0.5;
  const r = interestRate / 12 / 100;
  const n = tenure * 12;
  const affordableLoan = maxEmi && r && n ? (maxEmi * (1 - Math.pow(1 + r, -n)) / r).toFixed(2) : '';

  return (
    <section className="container mx-auto px-4 py-12 w-full max-w-6xl font-sans">
      <Helmet>
        <title>Loan Affordability Calculator | Smart Tool Box</title>
        <meta name="description" content="Find out how much loan you can afford based on your income, obligations, interest rate, and tenure. Free, private, and modern loan affordability calculator." />
        <meta name="keywords" content="Loan Affordability Calculator, Loan Eligibility, EMI, Finance Tools, Smart Tool Box" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Loan Affordability Calculator | Smart Tool Box" />
        <meta property="og:description" content="Find out how much loan you can afford based on your income, obligations, interest rate, and tenure." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourdomain.com/tech/loan-affordability" />
        <meta property="og:image" content="https://yourdomain.com/logo512.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Loan Affordability Calculator | Smart Tool Box" />
        <meta name="twitter:description" content="Find out how much loan you can afford based on your income, obligations, interest rate, and tenure." />
        <meta name="twitter:image" content="https://yourdomain.com/logo512.png" />
        <link rel="canonical" href="https://yourdomain.com/tech/loan-affordability" />
      </Helmet>
      <div className="bg-gradient-to-br from-blue-50 via-white to-green-100 rounded-3xl shadow-2xl p-8 border border-blue-200">
        <h1 className="text-4xl font-extrabold text-blue-800 mb-2 text-center drop-shadow tracking-wider">Loan Affordability Calculator</h1>
        <h2 className="text-lg text-blue-600 mb-8 text-center font-semibold">Estimate the maximum loan you can afford</h2>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 bg-white rounded-xl p-6 shadow border border-blue-200">
          <label className="block font-semibold text-blue-700">Monthly Income (₹)
            <input type="number" className="mt-1 border rounded px-3 py-2 w-full text-xl font-bold text-blue-800 bg-blue-50" value={income} onChange={e => setIncome(Number(e.target.value))} min="10000" max="1000000" step="1000" />
          </label>
          <label className="block font-semibold text-blue-700">Monthly Obligations (₹)
            <input type="number" className="mt-1 border rounded px-3 py-2 w-full text-xl font-bold text-blue-800 bg-blue-50" value={monthlyObligations} onChange={e => setMonthlyObligations(Number(e.target.value))} min="0" max="1000000" step="1000" />
          </label>
          <label className="block font-semibold text-blue-700">Interest Rate (%)
            <input type="number" className="mt-1 border rounded px-3 py-2 w-full text-xl font-bold text-blue-800 bg-blue-50" value={interestRate} onChange={e => setInterestRate(Number(e.target.value))} min="1" max="20" step="0.01" />
          </label>
          <label className="block font-semibold text-blue-700">Tenure (years)
            <input type="number" className="mt-1 border rounded px-3 py-2 w-full text-xl font-bold text-blue-800 bg-blue-50" value={tenure} onChange={e => setTenure(Number(e.target.value))} min="1" max="30" step="1" />
          </label>
        </form>
        <div className="flex flex-col md:flex-row gap-6 items-center justify-center mb-8">
          <div className="bg-gradient-to-b from-green-400 to-blue-500 rounded-2xl p-6 text-center text-white shadow-xl w-60">
            <div className="text-lg font-semibold mb-1">Maximum Affordable EMI</div>
            <div className="text-2xl md:text-3xl font-extrabold">₹{maxEmi ? maxEmi.toLocaleString(undefined, {maximumFractionDigits:2}) : '0.00'}</div>
          </div>
          <div className="bg-gradient-to-b from-blue-400 to-green-500 rounded-2xl p-6 text-center text-white shadow-xl w-60">
            <div className="text-lg font-semibold mb-1">Affordable Loan Amount</div>
            <div className="text-2xl md:text-3xl font-extrabold">₹{affordableLoan ? Number(affordableLoan).toLocaleString(undefined, {maximumFractionDigits:2}) : '0.00'}</div>
          </div>
        </div>
        <div className="mt-8 bg-blue-50 rounded-xl p-6 border border-blue-200">
          <h2 className="text-xl font-bold mb-2 text-blue-700">How does this calculator work?</h2>
          <p className="mb-2 text-gray-700">Enter your monthly income, obligations, interest rate, and tenure. The calculator estimates the maximum EMI and loan amount you can afford based on standard lending criteria.</p>
        </div>
      </div>
    </section>
  );
};

export default LoanAffordabilityCalculator;
