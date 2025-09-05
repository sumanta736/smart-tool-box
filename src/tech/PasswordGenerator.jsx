import { useState } from 'react';

// Unique: Gradient background, lock icon, modern card, vibrant accent
const similarChars = 'il1Lo0O';
const ambiguousChars = '{}[]()/\\\'"`~,;:.<>';

const PasswordGenerator = () => {
  const [length, setLength] = useState(12);
  const [useUpper, setUseUpper] = useState(true);
  const [useLower, setUseLower] = useState(true);
  const [useNumbers, setUseNumbers] = useState(true);
  const [useSymbols, setUseSymbols] = useState(true);
  const [excludeSimilar, setExcludeSimilar] = useState(false);
  const [excludeAmbiguous, setExcludeAmbiguous] = useState(false);
  const [password, setPassword] = useState('');
  const [copied, setCopied] = useState(false);

  // Password strength calculation
  function getStrength(pw) {
    if (!pw || pw === 'Select at least one option!') return { label: '', color: '' };
    let score = 0;
    if (pw.length >= 8) score++;
    if (/[A-Z]/.test(pw)) score++;
    if (/[a-z]/.test(pw)) score++;
    if (/[0-9]/.test(pw)) score++;
    if (/[^A-Za-z0-9]/.test(pw)) score++;
    if (pw.length >= 16) score++;
    if (score >= 5) return { label: 'Strong', color: 'text-green-600' };
    if (score >= 3) return { label: 'Medium', color: 'text-yellow-600' };
    return { label: 'Weak', color: 'text-red-600' };
  }
  const strength = getStrength(password);

  const generatePassword = () => {
    let chars = '';
    if (useUpper) chars += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (useLower) chars += 'abcdefghijklmnopqrstuvwxyz';
    if (useNumbers) chars += '0123456789';
    if (useSymbols) chars += '!@#$%^&*()-_=+[]{}|;:,.<>?/';
    if (excludeSimilar) chars = chars.split('').filter(c => !similarChars.includes(c)).join('');
    if (excludeAmbiguous) chars = chars.split('').filter(c => !ambiguousChars.includes(c)).join('');
    if (!chars) {
      setPassword('Select at least one option!');
      return;
    }
    let pass = '';
    for (let i = 0; i < length; i++) {
      pass += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setPassword(pass);
    setCopied(false);
  };

  const handleCopy = () => {
    if (!password || password === 'Select at least one option!') return;
    navigator.clipboard.writeText(password);
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  };

  return (
    <section className="container mx-auto px-4 py-12 w-full max-w-6xl font-sans">
      <div className="bg-gradient-to-br from-purple-100 via-white to-blue-100 rounded-3xl shadow-2xl p-8 border border-purple-200">
        <div className="flex items-center gap-3 mb-4 justify-center">
          <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-purple-300 text-purple-900 text-3xl shadow-lg">🔒</span>
          <h1 className="text-3xl md:text-4xl font-extrabold text-purple-700 drop-shadow tracking-wide">Password Generator</h1>
        </div>
        <h2 className="text-lg text-blue-600 mb-6 text-center font-semibold">Generate strong passwords</h2>
        <div className="flex flex-col md:flex-row gap-6 items-center justify-center mb-4">
          <label className="font-semibold text-purple-700 flex items-center gap-2">Length
            <input type="number" min="4" max="32" value={length} onChange={e => setLength(Number(e.target.value))} className="ml-2 border-2 border-purple-300 rounded px-3 py-2 w-20 bg-blue-50 focus:ring-2 focus:ring-purple-400" />
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" checked={useUpper} onChange={e => setUseUpper(e.target.checked)} className="accent-purple-500" />
            <span className="text-purple-700">Uppercase</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" checked={useLower} onChange={e => setUseLower(e.target.checked)} className="accent-purple-500" />
            <span className="text-purple-700">Lowercase</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" checked={useNumbers} onChange={e => setUseNumbers(e.target.checked)} className="accent-purple-500" />
            <span className="text-purple-700">Numbers</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" checked={useSymbols} onChange={e => setUseSymbols(e.target.checked)} className="accent-purple-500" />
            <span className="text-purple-700">Symbols</span>
          </label>
        </div>
        <div className="flex flex-col md:flex-row gap-6 items-center justify-center mb-4">
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" checked={excludeSimilar} onChange={e => setExcludeSimilar(e.target.checked)} className="accent-purple-500" />
            <span className="text-purple-700">Exclude similar (i, l, 1, L, o, 0, O)</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" checked={excludeAmbiguous} onChange={e => setExcludeAmbiguous(e.target.checked)} className="accent-purple-500" />
            <span className="text-purple-700">Exclude ambiguous ({`{}[]()/\\'"~,;:.<>`})</span>
          </label>
        </div>
        <div className="flex gap-2 items-center mb-4 justify-center">
          <button className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-2 rounded font-bold shadow hover:scale-105 transition" onClick={generatePassword}>Generate</button>
          <button className={`bg-gradient-to-r from-blue-400 to-purple-400 text-white px-4 py-2 rounded font-bold shadow hover:scale-105 transition flex items-center gap-2 ${!password || password === 'Select at least one option!' ? 'opacity-50 cursor-not-allowed' : ''}`} onClick={handleCopy} disabled={!password || password === 'Select at least one option!'}>
            {copied ? 'Copied!' : 'Copy'}
          </button>
        </div>
        <div className="bg-purple-50 rounded-xl p-4 text-center text-lg text-blue-700 font-semibold shadow-inner border border-purple-200 select-all break-all min-h-[2.5rem]">
          {password || 'Click Generate to create a password.'}
        </div>
        {/* Password strength meter */}
        {password && password !== 'Select at least one option!' && (
          <div className="mt-2 flex items-center justify-center gap-2">
            <span className={`font-bold ${strength.color}`}>{strength.label}</span>
            <div className="w-32 h-2 rounded bg-gray-200 overflow-hidden">
              <div className={`h-2 rounded ${strength.label==='Strong' ? 'bg-green-400 w-full' : strength.label==='Medium' ? 'bg-yellow-400 w-2/3' : 'bg-red-400 w-1/3'}`}></div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
export default PasswordGenerator;
