import React from "react";
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

const gallery: string[] = [
  farmer,
  warehouse,
  buyers,
  truck,
  harvest,
  tomatoes,
];

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#3D7D34] pt-16 text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 md:grid-cols-2 lg:grid-cols-5">
        {/* Brand */}
        <div>
          <div className="mb-4 flex flex-col items-start">
            <img
              src={logo}
              alt="HarvestSafe Logo"
              className="mb-2 h-10 object-contain"
            />

            <h2 className="text-sm font-bold">
              Harvest<span className="text-[#A8E063]">Safe</span>
            </h2>
          </div>

          <p className="mb-6 text-[12px] text-green-100">
            Protecting what you grow, reducing waste, and helping your harvest
            go further from farm to market.
          </p>

          <div className="mb-6 flex gap-3">
            <a
              href="#"
              aria-label="Facebook"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-green-300 transition hover:bg-white hover:text-green-700"
            >
              <FaFacebookF />
            </a>

            <a
              href="#"
              aria-label="Instagram"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-green-300 transition hover:bg-white hover:text-green-700"
            >
              <FaInstagram />
            </a>

            <a
              href="#"
              aria-label="X"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-green-300 transition hover:bg-white hover:text-green-700"
            >
              <FaXTwitter />
            </a>

            <a
              href="#"
              aria-label="Pinterest"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-green-300 transition hover:bg-white hover:text-green-700"
            >
              <FaPinterestP />
            </a>
          </div>
        </div>

        {/* Explore */}
        <div>
          <h3 className="text-lg font-semibold">Explore</h3>

          <ul className="mt-6 space-y-3 text-[12px] text-green-100">
            <li><a href="/">Home</a></li>
            <li><a href="/how-it-works">How It Works</a></li>
            <li><a href="/">Our Services</a></li>
            <li><a href="/">Why Choose Us</a></li>
          </ul>

          <div className="mt-10">
            <h3 className="mb-8 text-lg font-semibold">
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
          <h3 className="text-lg font-semibold">For Farmers</h3>

          <ul className="mt-6 space-y-3 text-[12px] text-green-100">
            <li><a href="/for-farmers">Protect Your Harvest</a></li>
            <li><a href="/for-farmers">Connect with Buyers</a></li>
            <li><a href="/for-farmers">Manage Your Produce</a></li>
          </ul>
        </div>

        {/* Buyers */}
        <div>
          <h3 className="text-lg font-semibold">For Buyers</h3>

          <ul className="mt-6 space-y-3 text-[12px] text-green-100">
            <li><a href="/for-buyers">Find Fresh Produce</a></li>
            <li><a href="/for-buyers">Connect with Farmers</a></li>
            <li><a href="/for-buyers">Source with Confidence</a></li>
          </ul>
        </div>

        {/* Gallery */}
        <div>
          <h3 className="text-lg font-semibold">Gallery</h3>

          <div className="mt-6 grid grid-cols-3 gap-2">
            {gallery.map((image: string, index: number) => (
              <img
                key={index}
                src={image}
                alt={`Gallery ${index + 1}`}
                className="h-20 w-full rounded-md object-cover transition duration-300 hover:scale-105"
              />
            ))}
          </div>
        </div>
      </div>

      <div className="mt-12 border-t border-green-500">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 text-sm text-green-100 md:flex-row">
          <p>© 2026 HarvestSafe. All rights reserved.</p>
          <p>Built for farmers. Designed for better harvests.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
