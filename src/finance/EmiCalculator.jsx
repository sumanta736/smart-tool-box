import { useState } from 'react';
import { Helmet } from 'react-helmet';

function calculateEMI(p, r, n) {
  const monthlyRate = r / 12 / 100;
  return p && r && n
    ? (p * monthlyRate * Math.pow(1 + monthlyRate, n)) / (Math.pow(1 + monthlyRate, n) - 1)
    : 0;
}

const EmiCalculator = () => {
  const [principal, setPrincipal] = useState('');
  const [rate, setRate] = useState('');
  const [months, setMonths] = useState('');
  const emi = calculateEMI(Number(principal), Number(rate), Number(months));

  return (
    <section className="container mx-auto px-4 py-12 max-w-xl font-sans">
      <div className="bg-white rounded-3xl shadow-2xl p-8 border border-blue-100">
        <Helmet>
          <title>EMI Calculator | Smart Tool Box</title>
          <meta name="description" content="Free EMI Calculator: Calculate your loan EMI, interest, and total payment instantly." />
        </Helmet>
        <h1 className="text-3xl md:text-4xl font-extrabold text-blue-800 mb-4 text-center drop-shadow">EMI Calculator</h1>
        <h2 className="text-lg text-blue-600 mb-6 text-center font-semibold">Calculate your monthly loan EMI easily</h2>
        <form className="bg-white rounded shadow p-6 flex flex-col gap-4">
          <label>Principal Amount
            <input type="number" className="border rounded px-3 py-2 w-full" value={principal} onChange={e => setPrincipal(e.target.value)} placeholder="e.g. 100000" min="0" />
          </label>
          <label>Annual Interest Rate (%)
            <input type="number" className="border rounded px-3 py-2 w-full" value={rate} onChange={e => setRate(e.target.value)} placeholder="e.g. 8.5" min="0" step="0.01" />
          </label>
          <label>Loan Tenure (months)
            <input type="number" className="border rounded px-3 py-2 w-full" value={months} onChange={e => setMonths(e.target.value)} placeholder="e.g. 60" min="1" />
          </label>
        </form>
        <div className="mt-6 bg-blue-50 rounded p-4 text-center">
          <div className="text-lg font-semibold">Monthly EMI: <span className="text-blue-700">₹{emi ? emi.toFixed(2) : '0.00'}</span></div>
          <div className="text-sm text-gray-500 mt-1">Total Payment: ₹{emi && months ? (emi * months).toFixed(2) : '0.00'}</div>
          <div className="text-sm text-gray-500">Total Interest: ₹{emi && months && principal ? (emi * months - principal).toFixed(2) : '0.00'}</div>
        </div>
        <article className="mt-8">
          <h2 className="text-xl font-semibold mb-2">How to use the EMI Calculator?</h2>
          <p className="mb-2 text-gray-700">Enter your loan amount, annual interest rate, and tenure in months. The calculator will instantly show your monthly EMI, total payment, and total interest.</p>
          <h3 className="font-semibold mt-4 mb-1">Example</h3>
          <p className="text-gray-600">For a ₹1,00,000 loan at 8% for 5 years (60 months), EMI = ₹2,027.53</p>
        </article>
        <section className="mt-8" itemScope itemType="https://schema.org/FAQPage">
          <h2 className="text-lg font-bold mb-2">Frequently Asked Questions</h2>
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
