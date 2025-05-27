"use client";

import React, { useState } from "react";
import {
  Search,
  Menu,
  X,
  Bell,
  Bookmark,
  User,
} from "lucide-react";
import { signOut } from "next-auth/react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div>
      {/* Header/Navigation */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center">
              <span className="text-2xl font-bold text-blue-600">DevBlog</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a
                href="#"
                className="text-gray-900 font-medium hover:text-blue-600 transition-colors"
              >
                Home
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-blue-600 transition-colors"
              >
                Articles
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-blue-600 transition-colors"
              >
                Categories
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-blue-600 transition-colors"
              >
                About
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-blue-600 transition-colors"
              >
                Contact
              </a>
            </nav>

            {/* Desktop Action Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <button
                title="search"
                className="p-2 text-gray-500 hover:text-blue-600 transition-colors"
              >
                <Search size={20} />
              </button>
              <button
                title="notification"
                className="p-2 text-gray-500 hover:text-blue-600 transition-colors"
              >
                <Bell size={20} />
              </button>
              <button
                title="bookmark"
                className="p-2 text-gray-500 hover:text-blue-600 transition-colors"
              >
                <Bookmark size={20} />
              </button>
              <div className="h-8 w-8 rounded-full bg-blue-600 flex items-center justify-center text-white">
                <User size={16} />
              </div>
              <div 
                className="h-8 w-8 rounded-full bg-blue-600 flex items-center justify-center text-white" 
                onClick={() => {
                  signOut()
                }}
              >
                LogOut
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-gray-500 hover:text-blue-600 transition-colors"
              onClick={toggleMenu}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="container mx-auto px-4 py-2">
              <nav className="flex flex-col space-y-3 py-3">
                <a
                  href="#"
                  className="text-gray-900 font-medium py-2 hover:text-blue-600 transition-colors"
                >
                  Home
                </a>
                <a
                  href="#"
                  className="text-gray-500 py-2 hover:text-blue-600 transition-colors"
                >
                  Articles
                </a>
                <a
                  href="#"
                  className="text-gray-500 py-2 hover:text-blue-600 transition-colors"
                >
                  Categories
                </a>
                <a
                  href="#"
                  className="text-gray-500 py-2 hover:text-blue-600 transition-colors"
                >
                  About
                </a>
                <a
                  href="#"
                  className="text-gray-500 py-2 hover:text-blue-600 transition-colors"
                >
                  Contact
                </a>
              </nav>
              <div className="flex items-center space-x-4 py-3 border-t">
                <button
                  title="search"
                  className="p-2 text-gray-500 hover:text-blue-600 transition-colors"
                >
                  <Search size={20} />
                </button>
                <button
                  title="notification"
                  className="p-2 text-gray-500 hover:text-blue-600 transition-colors"
                >
                  <Bell size={20} />
                </button>
                <button
                  title="bookmark"
                  className="p-2 text-gray-500 hover:text-blue-600 transition-colors"
                >
                  <Bookmark size={20} />
                </button>
              </div>
            </div>
          </div>
        )}
      </header>
    </div>
  );
};

export default Header;
