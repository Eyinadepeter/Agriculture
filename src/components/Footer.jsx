import farmer from "../assets/farmer.jpg";
import warehouse from "../assets/warehouse.jpg";
import buyers from "../assets/buyers.jpg";
import truck from "../assets/truck.jpg";
import harvest from "../assets/harvest.jpg";
import tomatoes from "../assets/tomatoes.jpg";
import logo from "../assets/Logo.svg";

import {
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const gallery = [
  farmer,
  warehouse,
  buyers, 
  truck,
  harvest,
  tomatoes,
];

export default function Footer() {
  return (
    <footer className="bg-[#3D7D34] text-white pt-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">

        {/* Brand */}
        <div>
          <div className="flex flex-col items-start mb-4">
            <img
              src={logo}
              alt="HarvestSafe Logo"
              className="h-10 object-contain mb-2 "
            />

            <h2 className="text-sm font-bold text-white">
              Harvest<span className="text-[#A8E063]">Safe</span>
            </h2>
          </div>

          <p className="text-[12px] text-green-100 mb-6">
            Protecting what you grow, reducing waste, and helping your harvest
            go further from farm to market.
          </p>

          <div className="flex gap-3 mb-6">
            <a
              href="#"
              className="w-10 h-10 rounded-full border border-green-300 flex items-center justify-center hover:bg-white hover:text-green-700 transition"
            >
              <FaFacebookF />
            </a>

            <a
              href="#"
              className="w-10 h-10 rounded-full border border-green-300 flex items-center justify-center hover:bg-white hover:text-green-700 transition"
            >
              <FaInstagram />
            </a>

            <a
              href="#"
              className="w-10 h-10 rounded-full border border-green-300 flex items-center justify-center hover:bg-white hover:text-green-700 transition"
            >
              <FaXTwitter />
            </a>

            <a
              href="#"
              className="w-10 h-10 rounded-full border border-green-300 flex items-center justify-center hover:bg-white hover:text-green-700 transition"
            >
              <FaPinterestP />
            </a>
          </div>
        </div>

       {/* Explore */}
<div>
  <h3 className="font-semibold text-lg">Explore</h3>

  <ul className="mt-6 space-y-3 text-green-100 text-[12px]">
    <li><a href="/" className="hover:text-white">Home</a></li>
    <li><a href="/how-it-works" className="hover:text-white">How It Works</a></li>
    <li><a href="/" className="hover:text-white">Our Services</a></li>
    <li><a href="/" className="hover:text-white">Why Choose Us</a></li>
  </ul>

  {/* Connect With Us */}
  <div className="mt-10">
  <h3 className="font-semibold text-lg mb-8">
    Connect With Us
  </h3>

  <div className="space-y-4 text-[12px] text-green-100">
    <p>12, Peace Avenue, Allen, Ikeja, Lagos, Nigeria.</p>
    <p>support@harvestsafe.com</p>
    <p>+234 800 123 4567</p>
  </div>
</div>
</div>

        {/* Farmers */}
        <div>
          <h3  className="font-semibold text-lg">For Farmers</h3>

          <ul className="mt-6 space-y-3 text-green-100 text-[12px]">
            <li><a href="/for-farmers" className="hover:text-white">Protect Your Harvest</a></li>
            <li><a href="/for-farmers" className="hover:text-white">Connect with Buyers</a></li>
            <li><a href="/for-farmers" className="hover:text-white">Manage Your Produce</a></li>
          </ul>
        </div>

        {/* Buyers */}
        <div>
          <h3 className="font-semibold text-lg">For Buyers</h3>

          <ul className="mt-6 space-y-3 text-green-100 text-[12px]">
            <li><a href="/for-buyers" className="hover:text-white">Find Fresh Produce</a></li>
            <li><a href="/for-buyers" className="hover:text-white">Connect with Farmers</a></li>
            <li><a href="/for-buyers" className="hover:text-white">Source with Confidence</a></li>
          </ul>

        </div>

        {/* Gallery */}
        <div>
          <h3 className="font-semibold text-lg">Gallery</h3>

          <div className="grid grid-cols-3 gap-2 mt-6">
            {gallery.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Gallery ${index + 1}`}
                className="w-full h-20 rounded-md object-cover hover:scale-105 transition duration-300"
              />
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-green-500 mt-12">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-green-100">
          <p>© 2026 HarvestSafe. All rights reserved.</p>

          <p>Built for farmers. Designed for better harvests.</p>
        </div>
      </div>
    </footer>
  );
}