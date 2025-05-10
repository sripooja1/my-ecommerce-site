'use client';

import Link from 'next/link';
import { ShoppingCart, Menu } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-gray-800">
              StyleHub
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-600 hover:text-gray-900">
              Home
            </Link>
            <Link href="/category/men" className="text-gray-600 hover:text-gray-900">
              Men
            </Link>
            <Link href="/category/women" className="text-gray-600 hover:text-gray-900">
              Women
            </Link>
            <Link href="/cart" className="text-gray-600 hover:text-gray-900">
              <ShoppingCart className="h-6 w-6" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-gray-900"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link
                href="/"
                className="block px-3 py-2 text-gray-600 hover:text-gray-900"
              >
                Home
              </Link>
              <Link
                href="/category/men"
                className="block px-3 py-2 text-gray-600 hover:text-gray-900"
              >
                Men
              </Link>
              <Link
                href="/category/women"
                className="block px-3 py-2 text-gray-600 hover:text-gray-900"
              >
                Women
              </Link>
              <Link
                href="/cart"
                className="block px-3 py-2 text-gray-600 hover:text-gray-900"
              >
                Cart
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
} 