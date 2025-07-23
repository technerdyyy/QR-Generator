import React from "react";
import { QrCode, Zap } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white shadow-lg">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <QrCode size={40} className="text-white" />
              <Zap
                size={16}
                className="absolute -top-1 -right-1 text-yellow-300"
              />
            </div>
            <div>
              <h1 className="text-3xl font-bold">ZappyQR</h1>
              <p className="text-primary-100 text-sm">
                THE 100% FREE QR CODE GENERATOR
              </p>
            </div>
          </div>

          <nav className="hidden md:flex space-x-8">
            <a
              href="#about"
              className="hover:text-primary-200 transition-colors"
            >
              ABOUT
            </a>
            <a
              href="#chrome-app"
              className="hover:text-primary-200 transition-colors"
            >
              CHROME APP
            </a>
            <a href="#api" className="hover:text-primary-200 transition-colors">
              QR CODE API
            </a>
            <div className="relative">
              <select className="bg-transparent border border-primary-300 rounded px-2 py-1 text-sm">
                <option className="text-gray-900">ENGLISH</option>
              </select>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
