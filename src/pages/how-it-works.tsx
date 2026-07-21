import React from "react";
import { FaUser, FaLeaf, FaHandshake } from "react-icons/fa";
import Header from "../components/Header";
import CtaBanner from "../components/CtaBanner/CtaBanner";
import Footer from "../components/Footer";

interface Step {
  number: string;
  title: string;
  desc: string;
  icon: React.ElementType;
}

const steps: Step[] = [
  {
    number: "01",
    title: "Create Your Account",
    desc: "Set up your profile, tell us about your farming needs, and get access to tools that help protect your produce, reduce post-harvest waste, manage your harvest buyers, and take your harvest farther from farm to market.",
    icon: FaUser,
  },
  {
    number: "02",
    title: "Protect Your Harvest",
    desc: "Access reliable storage options and tools designed to help you keep your produce fresh for longer, minimize post-harvest waste, manage your harvest more efficiently, and protect the value of your hard work.",
    icon: FaLeaf,
  },
  {
    number: "03",
    title: "Connect & Sell",
    desc: "Connect with trusted buyers, discover better opportunities for your produce, manage your sales, and move your harvest confidently from the farm to the market.",
    icon: FaHandshake,
  },
];

const HowItWorks: React.FC = () => {
  return (
    <>
    <Header/>
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-20">
          <p className="text-[#69B34C] text-sm font-medium mb-2">
            🌱 How It Works
          </p>

          <h2 className="text-4xl font-bold text-[#1F5130]">
            Three Steps To a Safer Harvest
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">

          {/* Center Line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-green-600 -translate-x-1/2 border-l-2 border-dashed border-green-600" />

          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={step.number}
                className={`relative mb-20 flex flex-col lg:flex-row items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Text */}
                <div className="lg:w-5/12 w-full">

                  <h3 className="font-semibold text-xl text-[#234E2F] mb-3">
                    {step.title}
                  </h3>

                  <p className="text-gray-500 leading-7 text-sm">
                    {step.desc}
                  </p>

                  <div className="mt-5 border-b border-dashed border-gray-300"></div>
                </div>

                {/* Timeline Number */}
                <div className="hidden lg:flex lg:w-2/12 justify-center relative z-10">
                  <div className="bg-white px-4 text-center">
                    <p className="text-xs tracking-widest text-gray-400 uppercase">
                      STEP
                    </p>

                    <h2 className="text-4xl font-bold text-[#1F5130]">
                      {step.number}
                    </h2>
                  </div>
                </div>

                {/* Icon */}
                <div className="lg:w-5/12 w-full flex justify-center my-10 lg:my-0">

                  <div className="relative">

                    <div className="w-36 h-36 rounded-full bg-gray-100 flex items-center justify-center">

                      <Icon className="text-[#1F5130] text-5xl" />

                    </div>

                    <div className="absolute inset-0 rounded-full bg-[#69B34C]/10 scale-110"></div>

                  </div>

                </div>

                {/* Mobile Number */}
                <div className="lg:hidden mb-8 text-center">

                  <p className="text-xs uppercase tracking-widest text-gray-400">
                    STEP
                  </p>

                  <h2 className="text-3xl font-bold text-[#1F5130]">
                    {step.number}
                  </h2>

                </div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
    <CtaBanner/>
    <Footer/>
    </>
  );
};

export default HowItWorks;