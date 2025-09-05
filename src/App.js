import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Contact from './pages/Contact';
import EmiCalculator from './finance/EmiCalculator';
import SipCalculator from './finance/SipCalculator';
import FdCalculator from './finance/FdCalculator';
import TaxCalculator from './finance/TaxCalculator';
import CurrencyConverter from './finance/CurrencyConverter';
import RetirementCalculator from './finance/RetirementCalculator';
import CryptoProfitCalculator from './finance/CryptoProfitCalculator';
import LoanAffordabilityCalculator from './tech/LoanAffordabilityCalculator';
import GoalPlanner from './tech/GoalPlanner';
import PdfTools from './tech/PdfTools';
import ImageTools from './tech/ImageTools';
import WordCounter from './tech/WordCounter';
import CaseConverter from './tech/CaseConverter';
import QrGenerator from './tech/QrGenerator';
import RegexTester from './tech/RegexTester';
import JsonFormatter from './tech/JsonFormatter';
import PasswordGenerator from './tech/PasswordGenerator';
import UnitConverter from './tech/UnitConverter';
import FinanceTools from './pages/FinanceTools';
import TechTools from './pages/TechTools';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/contact" element={<Contact />} />
            {/* Finance Tools */}
            <Route path="/finance" element={<FinanceTools />} />
            <Route path="/finance/emi" element={<EmiCalculator />} />
            <Route path="/finance/sip" element={<SipCalculator />} />
            <Route path="/finance/fd" element={<FdCalculator />} />
            <Route path="/finance/tax" element={<TaxCalculator />} />
            <Route path="/finance/currency" element={<CurrencyConverter />} />
            <Route path="/finance/retirement" element={<RetirementCalculator />} />
            <Route path="/finance/crypto-profit" element={<CryptoProfitCalculator />} />
            {/* Tech Tools */}
            <Route path="/tech" element={<TechTools />} />
            <Route path="/tech/pdf" element={<PdfTools />} />
            <Route path="/tech/image" element={<ImageTools />} />
            <Route path="/tech/word-counter" element={<WordCounter />} />
            <Route path="/tech/case-converter" element={<CaseConverter />} />
            <Route path="/tech/qr-generator" element={<QrGenerator />} />
            <Route path="/tech/regex-tester" element={<RegexTester />} />
            <Route path="/tech/json-formatter" element={<JsonFormatter />} />
            <Route path="/tech/password-generator" element={<PasswordGenerator />} />
            <Route path="/tech/unit-converter" element={<UnitConverter />} />
            <Route path="/tech/loan-affordability" element={<LoanAffordabilityCalculator />} />
            <Route path="/tech/goal-planner" element={<GoalPlanner />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
