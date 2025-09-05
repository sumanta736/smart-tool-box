import { Helmet } from 'react-helmet';

const About = () => (
  <section className="container mx-auto px-4 py-12 w-full max-w-6xl font-sans">
    <Helmet>
      <title>About | Smart Tool Box</title>
      <meta name="description" content="About Smart Tool Box: Free online calculators and utilities for finance and tech." />
    </Helmet>
    <div className="bg-gradient-to-br from-blue-50 via-white to-teal-100 rounded-3xl shadow-2xl p-10 border border-teal-200">
      <div className="flex items-center gap-3 mb-6 justify-center">
        <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-teal-200 text-teal-900 text-3xl shadow-lg">🧰</span>
        <h1 className="text-4xl font-extrabold text-teal-800 drop-shadow tracking-wide">About Smart Tool Box</h1>
      </div>
      <p className="mb-6 text-lg text-gray-700 text-center max-w-2xl mx-auto">
        <span className="font-bold text-teal-700">Smart Tool Box</span> is your all-in-one suite of free, privacy-friendly online tools for finance and technology. Our mission is to make everyday calculations and utilities accessible, beautiful, and ad-free for everyone.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="bg-white rounded-2xl shadow p-6 border-l-4 border-blue-400 flex flex-col items-center">
          <span className="text-3xl mb-2">💸</span>
          <h2 className="text-xl font-bold text-blue-700 mb-2">Finance Calculators</h2>
          <ul className="list-disc pl-4 text-gray-600 text-left">
            <li>EMI, SIP, FD, Tax, Retirement, Currency, Crypto & more</li>
            <li>Instant, accurate, and easy to use</li>
          </ul>
        </div>
        <div className="bg-white rounded-2xl shadow p-6 border-l-4 border-teal-400 flex flex-col items-center">
          <span className="text-3xl mb-2">🛠️</span>
          <h2 className="text-xl font-bold text-teal-700 mb-2">Tech Utilities</h2>
          <ul className="list-disc pl-4 text-gray-600 text-left">
            <li>PDF, Image, QR, JSON, Regex, Password, Word Counter & more</li>
            <li>Fast, mobile-friendly, and secure</li>
          </ul>
        </div>
      </div>
      <div className="text-center mt-6">
        <h3 className="text-lg font-semibold text-teal-700 mb-2">Why Smart Tool Box?</h3>
        <p className="text-gray-700 mb-2">No ads. No signups. No tracking. Just useful tools, always free.</p>
        <p className="text-gray-600">Built with ❤️ for students, professionals, and everyone in between.</p>
      </div>
    </div>
  </section>
);

export default About;
