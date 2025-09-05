import { useState } from 'react';

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
    <section className="container mx-auto px-4 py-12 max-w-xl font-sans">
      <div className="bg-white rounded-3xl shadow-2xl p-8 border border-blue-100">
        <h1 className="text-3xl md:text-4xl font-extrabold text-blue-800 mb-4 text-center drop-shadow">Password Generator</h1>
        <h2 className="text-lg text-blue-600 mb-6 text-center font-semibold">Generate strong passwords</h2>
        <div className="flex gap-2 items-center mb-4">
          <label className="font-semibold text-blue-700">Length
            <input type="number" min="4" max="32" value={length} onChange={e => setLength(Number(e.target.value))} className="ml-2 border rounded px-3 py-2 w-20" />
          </label>
          <button className="bg-blue-600 text-white px-4 py-2 rounded font-bold" onClick={generatePassword}>Generate</button>
        </div>
        <div className="bg-blue-50 rounded-xl p-4 text-center text-lg text-blue-700 font-semibold shadow-inner">
          {password || 'Click Generate to create a password.'}
        </div>
      </div>
    </section>
  );
};
export default PasswordGenerator;
