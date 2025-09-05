import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const FinanceTools = () => (
  <div className="container mx-auto px-4 py-8 font-sans">
    <Helmet>
      <title>Finance Tools | Smart Tool Box</title>
      <meta name="description" content="Explore free, modern finance tools: SIP Calculator, Tax Calculator, EMI Calculator, FD Calculator, Retirement Calculator, Currency Converter, and more. No login required." />
      <meta name="keywords" content="Finance Tools, SIP Calculator, Tax Calculator, EMI Calculator, FD Calculator, Retirement Calculator, Currency Converter, Smart Tool Box, Investment Tools, Financial Calculators" />
      <meta name="robots" content="index, follow" />
      <meta property="og:title" content="Finance Tools | Smart Tool Box" />
      <meta property="og:description" content="Explore free, modern finance tools: SIP Calculator, Tax Calculator, EMI Calculator, FD Calculator, Retirement Calculator, Currency Converter, and more." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://yourdomain.com/finance" />
      <meta property="og:image" content="https://yourdomain.com/logo512.png" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Finance Tools | Smart Tool Box" />
      <meta name="twitter:description" content="Explore free, modern finance tools: SIP Calculator, Tax Calculator, EMI Calculator, FD Calculator, Retirement Calculator, Currency Converter, and more." />
      <meta name="twitter:image" content="https://yourdomain.com/logo512.png" />
      <link rel="canonical" href="https://yourdomain.com/finance" />
    </Helmet>
    <h1 className="text-4xl md:text-5xl font-extrabold mb-8 text-blue-800 tracking-tight leading-tight drop-shadow">Finance Tools</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Link to="/finance/emi" className="block p-6 bg-white rounded-2xl shadow-lg hover:bg-blue-100 transition-all duration-200 font-bold text-xl text-blue-800 tracking-wide font-display">EMI Calculator</Link>
      <Link to="/finance/fd" className="block p-6 bg-white rounded-2xl shadow-lg hover:bg-blue-100 transition-all duration-200 font-bold text-xl text-blue-800 tracking-wide font-display">FD Calculator</Link>
      <Link to="/finance/sip" className="block p-6 bg-white rounded-2xl shadow-lg hover:bg-blue-100 transition-all duration-200 font-bold text-xl text-blue-800 tracking-wide font-display">SIP Calculator</Link>
      <Link to="/finance/tax" className="block p-6 bg-white rounded-2xl shadow-lg hover:bg-blue-100 transition-all duration-200 font-bold text-xl text-blue-800 tracking-wide font-display">Tax Calculator</Link>
      <Link to="/finance/retirement" className="block p-6 bg-white rounded-2xl shadow-lg hover:bg-blue-100 transition-all duration-200 font-bold text-xl text-blue-800 tracking-wide font-display">Retirement Calculator</Link>
      <Link to="/finance/currency" className="block p-6 bg-white rounded-2xl shadow-lg hover:bg-blue-100 transition-all duration-200 font-bold text-xl text-blue-800 tracking-wide font-display">Currency Converter</Link>
      <Link to="/finance/crypto-profit" className="block p-6 bg-white rounded-2xl shadow-lg hover:bg-blue-100 transition-all duration-200 font-bold text-xl text-blue-800 tracking-wide font-display">Crypto Profit Calculator</Link>
      <Link to="/tech/loan-affordability" className="block p-6 bg-white rounded-2xl shadow-lg hover:bg-blue-100 transition-all duration-200 font-bold text-xl text-blue-800 tracking-wide font-display">Loan Affordability Calculator</Link>
      <Link to="/tech/goal-planner" className="block p-6 bg-white rounded-2xl shadow-lg hover:bg-blue-100 transition-all duration-200 font-bold text-xl text-blue-800 tracking-wide font-display">Goal Planner</Link>
    </div>
  </div>
);

export default FinanceTools;
