import { useState } from 'react';

// Crypto Profit Calculator page
const CryptoProfitCalculator = () => {
  const [buyPrice, setBuyPrice] = useState('');
  const [sellPrice, setSellPrice] = useState('');
  const [amount, setAmount] = useState('');
  const profit = buyPrice && sellPrice && amount ? ((Number(sellPrice) - Number(buyPrice)) * Number(amount)).toFixed(2) : '';

  return (
    <section className="container mx-auto px-4 py-12 max-w-xl font-sans">
      <div className="bg-white rounded-3xl shadow-2xl p-8 border border-blue-100">
        <h1 className="text-3xl md:text-4xl font-extrabold text-blue-800 mb-4 text-center drop-shadow">Crypto Profit Calculator</h1>
        <h2 className="text-lg text-blue-600 mb-6 text-center font-semibold">Calculate crypto profits</h2>
        <form className="flex flex-col gap-4 mb-6">
          <label className="font-semibold text-blue-700">Buy Price
            <input type="number" className="mt-1 border rounded px-3 py-2 w-full" value={buyPrice} onChange={e => setBuyPrice(e.target.value)} placeholder="e.g. 25000" min="0" />
          </label>
          <label className="font-semibold text-blue-700">Sell Price
            <input type="number" className="mt-1 border rounded px-3 py-2 w-full" value={sellPrice} onChange={e => setSellPrice(e.target.value)} placeholder="e.g. 30000" min="0" />
          </label>
          <label className="font-semibold text-blue-700">Amount
            <input type="number" className="mt-1 border rounded px-3 py-2 w-full" value={amount} onChange={e => setAmount(e.target.value)} placeholder="e.g. 2" min="0" />
          </label>
        </form>
        <div className="bg-blue-50 rounded-xl p-4 text-center text-lg text-blue-700 font-semibold shadow-inner">
          {profit ? `Profit: ₹${profit}` : 'Enter values to calculate profit.'}
        </div>
      </div>
    </section>
  );
};

export default CryptoProfitCalculator;
