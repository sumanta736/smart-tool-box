import { useState } from 'react';
import { Helmet } from 'react-helmet';

// Unique: Neon/pink palette, crypto icons, vertical card, animated profit bar
const CryptoProfitCalculator = () => {
  const [buyPrice, setBuyPrice] = useState(25000);
  const [sellPrice, setSellPrice] = useState(30000);
  const [amount, setAmount] = useState(2);
  const profit = buyPrice && sellPrice && amount ? ((Number(sellPrice) - Number(buyPrice)) * Number(amount)).toFixed(2) : '';
  const percentProfit = buyPrice && sellPrice ? Math.round(((sellPrice - buyPrice) / buyPrice) * 100) : 0;

  return (
    <section className="container mx-auto px-4 py-12 w-full max-w-6xl font-sans">
      <Helmet>
        <title>Crypto Profit Calculator | Smart Tool Box</title>
        <meta name="description" content="Free Crypto Profit Calculator: Calculate your crypto profits instantly." />
      </Helmet>
      <div className="bg-gradient-to-br from-pink-50 via-white to-blue-50 rounded-3xl shadow-2xl p-8 border border-pink-200">
        <h1 className="text-4xl font-extrabold text-pink-700 mb-2 text-center drop-shadow tracking-wider flex items-center justify-center gap-2">
          <span role="img" aria-label="crypto">🪙</span> Crypto Profit Calculator
        </h1>
        <h2 className="text-lg text-pink-500 mb-8 text-center font-semibold">See your crypto profit with a visual bar</h2>
        <div className="flex flex-col md:flex-row gap-8 items-center justify-center mb-8">
          <div className="flex-1 flex flex-col gap-4">
            <label className="block font-semibold text-pink-700">Buy Price (₹)
              <input type="number" className="mt-1 border rounded px-3 py-2 w-full text-xl font-bold text-pink-800 bg-pink-50" value={buyPrice} onChange={e => setBuyPrice(e.target.value)} min="1" max="1000000" step="1" />
            </label>
            <label className="block font-semibold text-pink-700">Sell Price (₹)
              <input type="number" className="mt-1 border rounded px-3 py-2 w-full text-xl font-bold text-pink-800 bg-pink-50" value={sellPrice} onChange={e => setSellPrice(e.target.value)} min="1" max="1000000" step="1" />
            </label>
            <label className="block font-semibold text-pink-700">Amount
              <input type="number" className="mt-1 border rounded px-3 py-2 w-full text-xl font-bold text-pink-800 bg-pink-50" value={amount} onChange={e => setAmount(e.target.value)} min="0.01" max="100" step="0.01" />
            </label>
          </div>
          <div className="flex-1 flex flex-col items-center justify-center">
            <div className="bg-gradient-to-b from-pink-400 to-pink-600 rounded-2xl p-8 text-center text-white shadow-xl w-60 flex flex-col items-center gap-2">
              <span className="text-5xl">🚀</span>
              <div className="text-lg font-semibold mb-1">Profit</div>
              <div className="text-2xl md:text-3xl font-extrabold">₹{profit ? Number(profit).toLocaleString(undefined, {maximumFractionDigits:2}) : '0.00'}</div>
              <div className="w-full mt-3">
                <div className="h-4 bg-pink-200 rounded-full overflow-hidden">
                  <div className="h-4 bg-gradient-to-r from-pink-500 to-blue-500 transition-all duration-500" style={{ width: `${percentProfit > 100 ? 100 : percentProfit < 0 ? 0 : percentProfit}%` }}></div>
                </div>
                <div className="text-xs text-pink-100 mt-1">{percentProfit > 0 ? `+${percentProfit}%` : `${percentProfit}%`} profit</div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 bg-pink-50 rounded-xl p-6 border border-pink-200">
          <h2 className="text-xl font-bold mb-2 text-pink-700">How does this Crypto Profit Calculator work?</h2>
          <p className="mb-2 text-gray-700">Enter your buy price, sell price, and amount. The animated bar shows your profit percentage. Results update instantly.</p>
          <h3 className="font-semibold mt-4 mb-1 text-pink-700">Example</h3>
          <p className="text-gray-600">For 2 coins bought at ₹25,000 and sold at ₹30,000, profit = ₹10,000</p>
        </div>
        <section className="mt-8" itemScope itemType="https://schema.org/FAQPage">
          <h2 className="text-lg font-bold mb-2 text-pink-700">Frequently Asked Questions</h2>
          <div itemProp="mainEntity" itemScope itemType="https://schema.org/Question">
            <h3 className="font-semibold" itemProp="name">What is a Crypto Profit Calculator?</h3>
            <div itemProp="acceptedAnswer" itemScope itemType="https://schema.org/Answer">
              <p itemProp="text">A Crypto Profit Calculator helps you estimate your profit or loss from buying and selling cryptocurrencies.</p>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default CryptoProfitCalculator;
