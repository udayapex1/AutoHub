import { useState } from "react";
import { Users, Clock, Calculator } from "lucide-react";

export default function PriceCalculator({ baseRate = 50 }) {
  const [invites, setInvites] = useState(50);
  const [duration, setDuration] = useState(2);

  const durationFactor = 1 + Math.max(0, duration - 1) * 0.2;
  const total = Math.round(baseRate * invites * durationFactor);
  const baseTotal = baseRate * invites;
  const extraCharge = total - baseTotal;

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden  hover:shadow-md transition-shadow duration-300">
      {/* Header */}
      <div className="px-6 py-5 border-b border-gray-100">
        <div className="flex items-center gap-2">
          <Calculator size={22} className="text-gray-900" />
          <div>
            <h3 className="text-xl font-bold text-gray-900">
              Price Calculator
            </h3>
            <p className="text-xs text-gray-500 mt-0.5">Get instant pricing</p>
          </div>
        </div>
      </div>

      {/* Input Section */}
      <div className="px-6 py-5 space-y-5">
        {/* Invites Input */}
        <div>
          <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
            <Users size={16} className="text-gray-600" />
            Number of Invites
          </label>
          <input
            type="number"
            min={1}
            value={invites}
            onChange={(e) => setInvites(Number(e.target.value))}
            className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
            placeholder="Enter number of invites"
          />
          <p className="text-xs text-gray-500 mt-1">
            At ₹{baseRate} per invite
          </p>
        </div>

        {/* Duration Input */}
        <div>
          <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
            <Clock size={16} className="text-gray-600" />
            Duration (hours)
          </label>
          <input
            type="number"
            min={1}
            value={duration}
            onChange={(e) => setDuration(Number(e.target.value))}
            className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
            placeholder="Enter duration in hours"
          />
          <p className="text-xs text-gray-500 mt-1">+20% per additional hour</p>
        </div>
      </div>

      {/* Breakdown Section */}
      <div className="px-6 py-5 bg-gray-50 border-t border-gray-100 space-y-3">
        <div className="flex justify-between items-center text-sm">
          <span className="text-gray-600">Base charge</span>
          <span className="font-semibold text-gray-900">₹{baseTotal}</span>
        </div>
        {extraCharge > 0 && (
          <div className="flex justify-between items-center text-sm">
            <span className="text-gray-600">Duration surcharge</span>
            <span className="font-semibold text-gray-900">₹{extraCharge}</span>
          </div>
        )}
        <div className="h-px bg-gray-200"></div>
        <div className="flex justify-between items-center">
          <span className="text-sm font-semibold text-gray-700">
            Total Value
          </span>
          <span className="text-2xl font-bold text-gray-900">₹{total}</span>
        </div>
      </div>

      {/* CTA Button */}
      <div className="px-6 py-4 border-t border-gray-100">
        <button className="w-full bg-gray-900 hover:bg-gray-800 text-white font-medium py-2.5 rounded-lg transition-colors duration-200">
          Proceed to Booking
        </button>
      </div>
    </div>
  );
}
