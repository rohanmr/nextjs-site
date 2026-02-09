"use client";
import React, { useState } from "react";

import Link from "next/link";
import { Building2, Headset, Menu, X } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Amenities", path: "/amenities" },
    { name: "About Us", path: "/about" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <nav className="bg-white/80 backdrop-blur-md border-b border-slate-200 shadow-sm fixed w-full top-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4">
        <div className="flex justify-between items-center py-3">
          {/* Logo */}
          <div className="flex items-center space-x-3 cursor-pointer">
            <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-blue-50 shadow-sm transform hover:scale-105 transition-transform">
              <Building2 className="text-2xl text-blue-600" />
            </div>
            <div>
              <h1 className="text-xl sm:text-2xl font-bold text-slate-800 leading-tight">
                Housify
              </h1>
              <p className="text-xs text-slate-500 font-medium tracking-wide">
                BUILDING FUTURE SPACES
              </p>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((item, i) => (
              <Link
                key={i}
                href={item.path}
                className="text-slate-600 hover:text-blue-600 font-medium transition"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Desktop Action */}
          <div className="hidden lg:flex items-center space-x-6">
            <Link
              href="/contact"
              className="flex items-center gap-2 text-sm font-medium text-blue-600 border border-blue-600 px-4 py-2 rounded-md hover:bg-blue-600 hover:text-white transition"
            >
              <Headset size={20} /> Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-3">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-slate-700 text-2xl focus:outline-none"
            >
              {menuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden mt-2 bg-white/90 backdrop-blur-md border border-slate-200 rounded-lg shadow-md p-4 space-y-3 transition-all duration-300">
            {navLinks.map((item, i) => (
              <Link
                key={i}
                href={item.path}
                onClick={() => setMenuOpen(false)}
                className="block text-slate-600 hover:text-blue-600 font-medium px-4 py-2 rounded-md hover:bg-blue-50 transition"
              >
                {item.name}
              </Link>
            ))}

            {/* Mobile Button */}
            <div className="pt-3">
              <Link
                href="/contact"
                className="w-full flex justify-center items-center gap-2 text-sm font-semibold text-white bg-blue-600 py-2 rounded-md hover:bg-blue-700 transition"
              >
                <Headset size={20} />
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
