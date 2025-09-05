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
  <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center border border-blue-100 hover:scale-105 hover:shadow-2xl transition-transform duration-200">
    <div className="mb-3 text-4xl">{iconMap[title] || <FaTools className="text-blue-400" />}</div>
    <h3 className="font-bold text-lg mb-1 text-blue-700 text-center">{title}</h3>
    <p className="text-gray-500 text-sm mb-4 text-center">{description}</p>
    <Link to={link} className="mt-auto px-5 py-2 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-full font-semibold shadow hover:from-blue-600 hover:to-blue-800 transition">Open</Link>
  </div>
);

export default ToolCard;
