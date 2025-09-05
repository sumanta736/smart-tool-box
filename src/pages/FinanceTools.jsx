import { Link } from 'react-router-dom';

const FinanceTools = () => (
  <div className="container mx-auto px-4 py-8 font-sans">
    <h1 className="text-4xl md:text-5xl font-extrabold mb-8 text-blue-800 tracking-tight leading-tight drop-shadow">Finance Tools</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Link to="/finance/emi" className="block p-6 bg-white rounded-2xl shadow-lg hover:bg-blue-100 transition-all duration-200 font-bold text-xl text-blue-800 tracking-wide font-display">EMI Calculator</Link>
      <Link to="/finance/fd" className="block p-6 bg-white rounded-2xl shadow-lg hover:bg-blue-100 transition-all duration-200 font-bold text-xl text-blue-800 tracking-wide font-display">FD Calculator</Link>
      <Link to="/finance/sip" className="block p-6 bg-white rounded-2xl shadow-lg hover:bg-blue-100 transition-all duration-200 font-bold text-xl text-blue-800 tracking-wide font-display">SIP Calculator</Link>
      <Link to="/finance/tax" className="block p-6 bg-white rounded-2xl shadow-lg hover:bg-blue-100 transition-all duration-200 font-bold text-xl text-blue-800 tracking-wide font-display">Tax Calculator</Link>
      <Link to="/finance/retirement" className="block p-6 bg-white rounded-2xl shadow-lg hover:bg-blue-100 transition-all duration-200 font-bold text-xl text-blue-800 tracking-wide font-display">Retirement Calculator</Link>
      <Link to="/finance/currency" className="block p-6 bg-white rounded-2xl shadow-lg hover:bg-blue-100 transition-all duration-200 font-bold text-xl text-blue-800 tracking-wide font-display">Currency Converter</Link>
      <Link to="/finance/crypto-profit" className="block p-6 bg-white rounded-2xl shadow-lg hover:bg-blue-100 transition-all duration-200 font-bold text-xl text-blue-800 tracking-wide font-display">Crypto Profit Calculator</Link>
    </div>
  </div>
);

export default FinanceTools;
