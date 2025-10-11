import { useState } from "react";
import { X, BarChart3 } from "lucide-react";

export default function EMICalculator({ onClose }) {
  const [loanAmount, setLoanAmount] = useState(10.608);
  const [downPayment, setDownPayment] = useState(2.652);
  const [duration, setDuration] = useState(66);

  // Calculate EMI (simple formula: P * R * (1+R)^N / ((1+R)^N - 1))
  // Using assumed rate of 8% per annum (0.667% per month)
  const monthlyRate = 0.08 / 12;
  const n = duration;
  const emi =
    (loanAmount * 1000000 * monthlyRate * Math.pow(1 + monthlyRate, n)) /
    (Math.pow(1 + monthlyRate, n) - 1);

  const handleLoanSlider = (e) => {
    setLoanAmount(parseFloat(e.target.value));
  };

  const handleDownPaymentSlider = (e) => {
    setDownPayment(parseFloat(e.target.value));
  };

  const handleDurationSlider = (e) => {
    setDuration(parseInt(e.target.value));
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl overflow-hidden  max-h-[90vh] ">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100 bg-white">
          <h2 className="text-2xl font-bold text-gray-900">
            Check Eligibility
          </h2>
          {onClose && (
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="Close"
            >
              <X size={24} className="text-gray-600" />
            </button>
          )}
        </div>

        {/* Content */}
        <div className="px-6 py-6 space-y-7">
          {/* EMI Calculator Title */}
          <div>
            <h3 className="text-lg font-bold text-gray-900">EMI Calculator</h3>
          </div>

          {/* Loan Amount Slider */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <label className="text-sm font-semibold text-gray-800">
                Loan Amount
              </label>
              <span className="text-base font-bold text-gray-900">
                ₹ {loanAmount.toFixed(2)} L
              </span>
            </div>
            <input
              type="range"
              min="1"
              max="13.26"
              step="0.1"
              value={loanAmount}
              onChange={handleLoanSlider}
              className="w-full h-2.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-gray-900"
            />
            <div className="flex justify-between text-xs text-gray-500 mt-2">
              <span>₹ 1,00,000</span>
              <span>₹ 13,26,000</span>
            </div>
          </div>

          {/* Down Payment Slider */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <label className="text-sm font-semibold text-gray-800">
                Down Payment*
              </label>
              <span className="text-base font-bold text-gray-900">
                ₹ {downPayment.toFixed(2)} L
              </span>
            </div>
            <input
              type="range"
              min="0"
              max="12.26"
              step="0.1"
              value={downPayment}
              onChange={handleDownPaymentSlider}
              className="w-full h-2.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-gray-900"
            />
            <div className="flex justify-between text-xs text-gray-500 mt-2">
              <span>₹ 0</span>
              <span>₹ 12,26,000</span>
            </div>
          </div>

          {/* Duration Slider */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <label className="text-sm font-semibold text-gray-800">
                Duration of Loan
              </label>
              <span className="text-base font-bold text-gray-900">
                {duration} Months
              </span>
            </div>
            <input
              type="range"
              min="12"
              max="84"
              step="1"
              value={duration}
              onChange={handleDurationSlider}
              className="w-full h-2.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-gray-900"
            />
            <div className="flex justify-between text-xs text-gray-500 mt-2">
              <span>12 Months</span>
              <span>84 Months</span>
            </div>
          </div>

          {/* EMI Display */}
          <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
            <div className="text-center">
              <p className="text-sm text-gray-600 mb-2">Monthly EMI</p>
              <div className="text-4xl font-bold text-gray-900">
                ₹{Math.round(emi).toLocaleString()}
              </div>
              <p className="text-xs text-gray-500 mt-1">per month</p>
            </div>
          </div>

          {/* View Loan Breakup */}

          {/* Check Eligibility Button */}
          <button className="w-full bg-gray-900 hover:bg-gray-800 text-white font-semibold py-3 rounded-xl transition-colors flex items-center justify-center gap-2 shadow-lg hover:shadow-xl">
            <div className="w-5 h-5 bg-yellow-400 rounded-full flex-shrink-0"></div>
            <span>Check eligibility</span>
          </button>

          {/* Disclaimer */}
          <div className="text-xs text-gray-600 leading-relaxed space-y-1 bg-gray-50 p-4 rounded-lg border border-gray-200">
            <p>
              *Rate of interest can vary subject to credit profile. Loan
              approval is at the sole discretion of the finance partner.
            </p>
            <p>**Processing fee and other loan charges are not included.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
