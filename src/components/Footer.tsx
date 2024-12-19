import React from 'react';
import { Instagram, Facebook, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="mb-2">Phone: +62 123 456 789</p>
            <p className="mb-2">Email: info@lautemas.com</p>
            <p>Address: Jakarta, Indonesia</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="hover:text-blue-300">About Us</a></li>
              <li><a href="/services" className="hover:text-blue-300">Services</a></li>
              <li><a href="/portfolio" className="hover:text-blue-300">Portfolio</a></li>
              <li><a href="/contact" className="hover:text-blue-300">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-300"><Instagram className="h-6 w-6" /></a>
              <a href="#" className="hover:text-blue-300"><Facebook className="h-6 w-6" /></a>
              <a href="#" className="hover:text-blue-300"><MessageCircle className="h-6 w-6" /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-blue-800 text-center">
          <p>&copy; {new Date().getFullYear()} Laut Emas Aquascape. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}