import { useState } from 'react';

// Unique: Gradient background, lock icon, modern card, vibrant accent
const PasswordGenerator = () => {
  const [length, setLength] = useState(12);
  const [password, setPassword] = useState('');
  const generatePassword = () => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
    let pass = '';
    for (let i = 0; i < length; i++) {
      pass += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setPassword(pass);
  };
  return (
    <section className="container mx-auto px-4 py-12 w-full max-w-6xl font-sans">
      <div className="bg-gradient-to-br from-purple-100 via-white to-blue-100 rounded-3xl shadow-2xl p-8 border border-purple-200">
        <div className="flex items-center gap-3 mb-4 justify-center">
          <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-purple-300 text-purple-900 text-3xl shadow-lg">🔒</span>
          <h1 className="text-3xl md:text-4xl font-extrabold text-purple-700 drop-shadow tracking-wide">Password Generator</h1>
        </div>
        <h2 className="text-lg text-blue-600 mb-6 text-center font-semibold">Generate strong passwords</h2>
        <div className="flex gap-2 items-center mb-4 justify-center">
          <label className="font-semibold text-purple-700">Length
            <input type="number" min="4" max="32" value={length} onChange={e => setLength(Number(e.target.value))} className="ml-2 border-2 border-purple-300 rounded px-3 py-2 w-20 bg-blue-50 focus:ring-2 focus:ring-purple-400" />
          </label>
          <button className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-2 rounded font-bold shadow hover:scale-105 transition" onClick={generatePassword}>Generate</button>
        </div>
        <div className="bg-purple-50 rounded-xl p-4 text-center text-lg text-blue-700 font-semibold shadow-inner border border-purple-200">
          {password || 'Click Generate to create a password.'}
        </div>
      </div>
    </section>
  );
};
export default PasswordGenerator;
