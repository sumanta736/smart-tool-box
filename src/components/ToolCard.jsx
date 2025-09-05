import { Link } from 'react-router-dom';

// ToolCard component for displaying tool cards
const ToolCard = ({ title, description, link, icon }) => (
  <div className="bg-white rounded-lg shadow p-5 flex flex-col items-center hover:shadow-lg transition">
    {icon && <div className="mb-2 text-3xl">{icon}</div>}
    <h3 className="font-semibold text-lg mb-1">{title}</h3>
    <p className="text-gray-500 text-sm mb-3 text-center">{description}</p>
    <Link to={link} className="mt-auto px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">Open</Link>
  </div>
);

export default ToolCard;
