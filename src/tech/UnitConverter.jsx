import { useState } from 'react';
import { Helmet } from 'react-helmet';

const units = {
  Length: [
    { label: 'Meter', value: 'm', factor: 1 },
    { label: 'Kilometer', value: 'km', factor: 1000 },
    { label: 'Centimeter', value: 'cm', factor: 0.01 },
    { label: 'Millimeter', value: 'mm', factor: 0.001 },
    { label: 'Mile', value: 'mi', factor: 1609.34 },
    { label: 'Yard', value: 'yd', factor: 0.9144 },
    { label: 'Foot', value: 'ft', factor: 0.3048 },
    { label: 'Inch', value: 'in', factor: 0.0254 },
  ],
  Weight: [
    { label: 'Kilogram', value: 'kg', factor: 1 },
    { label: 'Gram', value: 'g', factor: 0.001 },
    { label: 'Milligram', value: 'mg', factor: 0.000001 },
    { label: 'Pound', value: 'lb', factor: 0.453592 },
    { label: 'Ounce', value: 'oz', factor: 0.0283495 },
  ],
  Temperature: [
    { label: 'Celsius', value: 'C' },
    { label: 'Fahrenheit', value: 'F' },
    { label: 'Kelvin', value: 'K' },
  ],
};

function convert(value, from, to, type) {
  if (type === 'Temperature') {
    if (from === 'C' && to === 'F') return value * 9/5 + 32;
    if (from === 'F' && to === 'C') return (value - 32) * 5/9;
    if (from === 'C' && to === 'K') return value + 273.15;
    if (from === 'K' && to === 'C') return value - 273.15;
    if (from === 'F' && to === 'K') return (value - 32) * 5/9 + 273.15;
    if (from === 'K' && to === 'F') return (value - 273.15) * 9/5 + 32;
    return value;
  } else {
    const fromUnit = units[type].find(u => u.value === from);
    const toUnit = units[type].find(u => u.value === to);
    return value * fromUnit.factor / toUnit.factor;
  }
}

const UnitConverter = () => {
  const [type, setType] = useState('Length');
  const [from, setFrom] = useState('m');
  const [to, setTo] = useState('km');
  const [value, setValue] = useState(1);
  const result = value !== '' ? convert(Number(value), from, to, type) : '';

  return (
    <section className="container mx-auto px-4 py-12 w-full max-w-6xl font-sans">
      <Helmet>
        <title>Unit Converter | Smart Tool Box</title>
        <meta name="description" content="Free Unit Converter: Convert length, weight, and temperature units instantly. Fast, private, and modern unit conversion tool for everyone." />
        <meta name="keywords" content="Unit Converter, Length Converter, Weight Converter, Temperature Converter, Tech Tools, Smart Tool Box" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Unit Converter | Smart Tool Box" />
        <meta property="og:description" content="Free Unit Converter: Convert length, weight, and temperature units instantly. Fast, private, and modern unit conversion tool for everyone." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourdomain.com/tech/unit-converter" />
        <meta property="og:image" content="https://yourdomain.com/logo512.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Unit Converter | Smart Tool Box" />
        <meta name="twitter:description" content="Free Unit Converter: Convert length, weight, and temperature units instantly. Fast, private, and modern unit conversion tool for everyone." />
        <meta name="twitter:image" content="https://yourdomain.com/logo512.png" />
        <link rel="canonical" href="https://yourdomain.com/tech/unit-converter" />
      </Helmet>
      <div className="bg-gradient-to-br from-green-50 via-white to-blue-100 rounded-3xl shadow-2xl p-8 border border-green-200">
        <h1 className="text-4xl font-extrabold text-green-800 mb-2 text-center drop-shadow tracking-wider">Unit Converter</h1>
        <h2 className="text-lg text-green-600 mb-8 text-center font-semibold">Convert length, weight, and temperature units instantly</h2>
        <form className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 bg-white rounded-xl p-6 shadow border border-green-200">
          <label className="block font-semibold text-green-700">Type
            <select className="mt-1 border rounded px-3 py-2 w-full text-lg font-semibold text-green-700 bg-green-50" value={type} onChange={e => {
              setType(e.target.value);
              setFrom(units[e.target.value][0].value);
              setTo(units[e.target.value][1].value);
            }}>
              {Object.keys(units).map(t => <option key={t} value={t}>{t}</option>)}
            </select>
          </label>
          <label className="block font-semibold text-green-700">From
            <select className="mt-1 border rounded px-3 py-2 w-full text-lg font-semibold text-green-700 bg-green-50" value={from} onChange={e => setFrom(e.target.value)}>
              {units[type].map(u => <option key={u.value} value={u.value}>{u.label}</option>)}
            </select>
          </label>
          <label className="block font-semibold text-green-700">To
            <select className="mt-1 border rounded px-3 py-2 w-full text-lg font-semibold text-green-700 bg-green-50" value={to} onChange={e => setTo(e.target.value)}>
              {units[type].map(u => <option key={u.value} value={u.value}>{u.label}</option>)}
            </select>
          </label>
          <label className="block font-semibold text-green-700">Value
            <input type="number" className="mt-1 border rounded px-3 py-2 w-full text-xl font-bold text-green-800 bg-green-50" value={value} onChange={e => setValue(e.target.value)} min="0" step="any" />
          </label>
        </form>
        <div className="flex flex-col md:flex-row gap-6 items-center justify-center mb-8">
          <div className="bg-gradient-to-b from-blue-400 to-green-500 rounded-2xl p-6 text-center text-white shadow-xl w-60">
            <div className="text-lg font-semibold mb-1">Result</div>
            <div className="text-2xl md:text-3xl font-extrabold">{result !== '' ? result.toLocaleString(undefined, {maximumFractionDigits:4}) : '0.00'}</div>
          </div>
        </div>
        <div className="mt-8 bg-green-50 rounded-xl p-6 border border-green-200">
          <h2 className="text-xl font-bold mb-2 text-green-700">How does this converter work?</h2>
          <p className="mb-2 text-gray-700">Select the type, units, and value. The converter instantly calculates the result for length, weight, or temperature conversions.</p>
        </div>
      </div>
    </section>
  );
};

export default UnitConverter;
