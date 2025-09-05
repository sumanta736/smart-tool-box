import { useState } from 'react';
import { Helmet } from 'react-helmet';

const GoalPlanner = () => {
  const [goal, setGoal] = useState('Buy a Car');
  const [targetAmount, setTargetAmount] = useState(500000);
  const [years, setYears] = useState(5);
  const [rate, setRate] = useState(10);
  const n = years * 12;
  const r = rate / 12 / 100;
  // Monthly SIP needed for goal
  const monthlySIP = targetAmount && r && n ? (targetAmount / (((Math.pow(1 + r, n) - 1) / r) * (1 + r))).toFixed(2) : '';

  return (
    <section className="container mx-auto px-4 py-12 w-full max-w-6xl font-sans">
      <Helmet>
        <title>Goal Planner | Smart Tool Box</title>
        <meta name="description" content="Plan your financial goals: Calculate how much to save monthly to reach your target amount. Free, private, and modern goal planner tool." />
        <meta name="keywords" content="Goal Planner, Financial Goals, SIP, Target Amount, Tech Tools, Smart Tool Box, Savings Planner" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Goal Planner | Smart Tool Box" />
        <meta property="og:description" content="Plan your financial goals: Calculate how much to save monthly to reach your target amount." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourdomain.com/tech/goal-planner" />
        <meta property="og:image" content="https://yourdomain.com/logo512.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Goal Planner | Smart Tool Box" />
        <meta name="twitter:description" content="Plan your financial goals: Calculate how much to save monthly to reach your target amount." />
        <meta name="twitter:image" content="https://yourdomain.com/logo512.png" />
        <link rel="canonical" href="https://yourdomain.com/tech/goal-planner" />
      </Helmet>
      <div className="bg-gradient-to-br from-pink-50 via-white to-yellow-100 rounded-3xl shadow-2xl p-8 border border-pink-200">
        <h1 className="text-4xl font-extrabold text-pink-800 mb-2 text-center drop-shadow tracking-wider">Goal Planner</h1>
        <h2 className="text-lg text-pink-600 mb-8 text-center font-semibold">Plan your financial goals and monthly savings</h2>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 bg-white rounded-xl p-6 shadow border border-pink-200">
          <label className="block font-semibold text-pink-700">Goal Name
            <input type="text" className="mt-1 border rounded px-3 py-2 w-full text-xl font-bold text-pink-800 bg-pink-50" value={goal} onChange={e => setGoal(e.target.value)} />
          </label>
          <label className="block font-semibold text-pink-700">Target Amount (₹)
            <input type="number" className="mt-1 border rounded px-3 py-2 w-full text-xl font-bold text-pink-800 bg-pink-50" value={targetAmount} onChange={e => setTargetAmount(Number(e.target.value))} min="10000" max="10000000" step="1000" />
          </label>
          <label className="block font-semibold text-pink-700">Years to Achieve
            <input type="number" className="mt-1 border rounded px-3 py-2 w-full text-xl font-bold text-pink-800 bg-pink-50" value={years} onChange={e => setYears(Number(e.target.value))} min="1" max="30" step="1" />
          </label>
          <label className="block font-semibold text-pink-700">Expected Return (%)
            <input type="number" className="mt-1 border rounded px-3 py-2 w-full text-xl font-bold text-pink-800 bg-pink-50" value={rate} onChange={e => setRate(Number(e.target.value))} min="1" max="20" step="0.01" />
          </label>
        </form>
        <div className="flex flex-col md:flex-row gap-6 items-center justify-center mb-8">
          <div className="bg-gradient-to-b from-yellow-400 to-pink-500 rounded-2xl p-6 text-center text-white shadow-xl w-60">
            <div className="text-lg font-semibold mb-1">Monthly SIP Needed</div>
            <div className="text-2xl md:text-3xl font-extrabold">₹{monthlySIP ? Number(monthlySIP).toLocaleString(undefined, {maximumFractionDigits:2}) : '0.00'}</div>
          </div>
        </div>
        <div className="mt-8 bg-pink-50 rounded-xl p-6 border border-pink-200">
          <h2 className="text-xl font-bold mb-2 text-pink-700">How does this planner work?</h2>
          <p className="mb-2 text-gray-700">Enter your goal, target amount, years, and expected return. The planner calculates the monthly SIP needed to reach your goal.</p>
        </div>
      </div>
    </section>
  );
};

export default GoalPlanner;
