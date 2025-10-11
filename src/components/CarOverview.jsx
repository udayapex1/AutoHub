export default function CarOverview({ car }) {
  if (!car)
    car = {
      model: "Hyundai Verna",
      year: 2021,
      mileage: "15,000 km",
      price: "₹8,50,000",
    };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden  hover:shadow-md transition-shadow duration-300">
      {/* Header Section */}
      <div className="px-6 py-5 border-b border-gray-100">
        <h2 className="text-2xl font-bold text-gray-900">{car.model}</h2>
        <p className="text-sm text-gray-500 mt-1">Vehicle Information</p>
      </div>

      {/* Details Section */}
      <div className="px-6 py-5 space-y-4">
        <div className="flex items-center justify-between pb-4 border-b border-gray-100">
          <div>
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
              Year
            </p>
            <p className="text-lg font-semibold text-gray-900 mt-1">
              {car.year}
            </p>
          </div>
          <div className="w-1 h-12 bg-gray-200 rounded-full"></div>
          <div>
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
              Mileage
            </p>
            <p className="text-lg font-semibold text-gray-900 mt-1">
              {car.mileage}
            </p>
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-4">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
            Asking Price
          </p>
          <p className="text-2xl font-bold text-gray-900 mt-2">{car.price}</p>
        </div>
      </div>

      {/* Footer Action */}
      <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
        <button className="w-full bg-gray-900 hover:bg-gray-800 text-white font-medium py-2.5 rounded-lg transition-colors duration-200">
          View Details
        </button>
      </div>
    </div>
  );
}
