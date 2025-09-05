// Tax Calculator page
const TaxCalculator = () => {
  return (
    <section className="container mx-auto px-4 py-12 max-w-xl font-sans">
      <div className="bg-white rounded-3xl shadow-2xl p-8 border border-blue-100">
        <h1 className="text-3xl md:text-4xl font-extrabold text-blue-800 mb-4 text-center drop-shadow">Tax Calculator</h1>
        <h2 className="text-lg text-blue-600 mb-6 text-center font-semibold">Quickly estimate your tax liability</h2>
        {/* Example input fields for tax calculation */}
        <form className="flex flex-col gap-4 mb-6">
          <label className="font-semibold text-blue-700">Annual Income
            <input type="number" className="mt-1 border rounded px-3 py-2 w-full focus:ring-2 focus:ring-blue-400" placeholder="e.g. 500000" min="0" />
          </label>
          <label className="font-semibold text-blue-700">Deductions
            <input type="number" className="mt-1 border rounded px-3 py-2 w-full focus:ring-2 focus:ring-blue-400" placeholder="e.g. 150000" min="0" />
          </label>
          <button type="button" className="mt-2 bg-blue-600 text-white px-5 py-2 rounded-full font-bold shadow hover:bg-blue-700 transition">Calculate Tax</button>
        </form>
        {/* Example result area */}
        <div className="bg-blue-50 rounded-xl p-4 text-center text-lg text-blue-700 font-semibold shadow-inner">
          Your estimated tax will appear here.
        </div>
      </div>
    </section>
  );
};
export default TaxCalculator;
