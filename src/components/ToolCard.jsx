import { Link } from 'react-router-dom';
import { FaCalculator, FaTools, FaFilePdf, FaImage, FaFont, FaQrcode, FaKey, FaCode, FaCoins, FaChartLine } from 'react-icons/fa';

const iconMap = {
  'EMI Calculator': <FaCalculator className="text-blue-500" />, 'SIP Calculator': <FaChartLine className="text-green-500" />,
  'FD Calculator': <FaCoins className="text-yellow-500" />, 'Tax Calculator': <FaCalculator className="text-red-500" />,
  'Currency Converter': <FaCoins className="text-indigo-500" />, 'Retirement Calculator': <FaChartLine className="text-purple-500" />,
  'Crypto Profit Calculator': <FaCoins className="text-pink-500" />, 'PDF Tools': <FaFilePdf className="text-red-600" />,
  'Image Tools': <FaImage className="text-green-600" />, 'Word Counter': <FaFont className="text-blue-600" />,
  'Case Converter': <FaFont className="text-orange-500" />, 'QR Code Generator': <FaQrcode className="text-black" />,
  'Regex Tester': <FaCode className="text-gray-700" />, 'JSON Formatter': <FaCode className="text-green-700" />,
  'Password Generator': <FaKey className="text-yellow-600" />
};

// ToolCard component for displaying tool cards with icons and accent
const ToolCard = ({ title, description, link }) => (
  <div className="relative group bg-gradient-to-br from-white via-blue-50 to-blue-100 rounded-3xl shadow-xl p-7 flex flex-col items-center border-2 border-transparent hover:border-blue-300 hover:shadow-2xl transition-all duration-200 min-h-[270px] font-sans">
    {/* Floating animated icon */}
    <div className="-mt-12 mb-2 z-10">
      <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-tr from-blue-100 via-white to-blue-200 shadow-lg border-2 border-blue-200 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-200">
        {iconMap[title] || <FaTools className="text-blue-400 text-3xl" />}
      </div>
    </div>
    <h3 className="font-extrabold text-lg md:text-xl mb-1 text-blue-800 text-center tracking-wide font-display drop-shadow-sm mt-2">{title}</h3>
    <p className="text-gray-600 text-base md:text-lg mb-6 text-center leading-relaxed font-medium font-sans">{description}</p>
    <Link to={link} className="mt-auto px-6 py-2 bg-gradient-to-r from-blue-500 to-teal-400 text-white rounded-full font-bold shadow-md hover:from-blue-600 hover:to-teal-500 hover:scale-105 transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-blue-300 font-sans">Open Tool</Link>
    {/* Decorative accent ring */}
    <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-20 h-20 rounded-full bg-gradient-to-tr from-blue-200 via-white to-blue-100 opacity-40 blur-2xl z-0" />
  </div>
);

export default ToolCard;
