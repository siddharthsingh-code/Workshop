import { Link } from "react-router-dom";

function WorkshopCard({
  title,
  image,
  desc,
  duration,
}) {
  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:scale-105 transition duration-300">

      <img
        src={image}
        alt={title}
        className="h-56 w-full object-cover"
      />

      <div className="p-6">

        <h2 className="text-2xl font-bold">
          {title}
        </h2>

        <p className="mt-3 text-gray-600">
          {desc}
        </p>

        <p className="mt-4 font-semibold text-blue-700">
          Duration: {duration}
        </p>

        <Link to="/details">
          <button className="mt-6 w-full bg-blue-700 text-white py-3 rounded-xl hover:bg-blue-800 transition">
            View Details
          </button>
        </Link>

      </div>

    </div>
  );
}

export default WorkshopCard;