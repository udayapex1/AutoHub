import { useState } from "react";
import { Menu, X, Search, ShoppingCart, User } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [];

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-40 shadow-sm rounded-md mb-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="/" className="text-2xl font-bold text-gray-900">
              AutoHub
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right Side Icons */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Search */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search cars..."
                className="px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent w-48"
              />
              <Search
                className="absolute right-3 top-2.5 text-gray-400"
                size={18}
              />
            </div>

            {/* Cart Icon */}
            <button className="p-2 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors">
              <ShoppingCart size={20} />
            </button>

            {/* User Icon */}
            <button className="p-2 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors">
              <User size={20} />
            </button>

            {/* Sign In Button */}
            <button className="px-4 py-2 bg-gray-900 hover:bg-gray-800 text-white font-medium rounded-lg transition-colors">
              Sign In
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <button className="p-2 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors">
              <Search size={20} />
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-gray-100 py-4 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 border-t border-gray-100 space-y-2">
              <button className="w-full px-4 py-2 bg-gray-900 hover:bg-gray-800 text-white font-medium rounded-lg transition-colors">
                Sign In
              </button>
              <button className="w-full px-4 py-2 border border-gray-900 text-gray-900 hover:bg-gray-50 font-medium rounded-lg transition-colors">
                Sign Up
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
