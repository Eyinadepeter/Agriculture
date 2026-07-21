import { ArrowRight } from "lucide-react";
import basket from "../../assets/harvest.png";

export default function WelcomeBanner() {
  return (
    <section className="relative overflow-hidden rounded-3xl bg-[#184D3B] px-8 py-8 text-white">
      {/* Background Decoration */}
      <div className="absolute -top-20 -left-16 h-64 w-64 rounded-full bg-white/5"></div>
      <div className="absolute -bottom-24 right-20 h-72 w-72 rounded-full bg-white/5"></div>

      <div className="relative flex flex-col-reverse items-center justify-between gap-8 lg:flex-row">
        {/* Left Content */}
        <div className="max-w-xl">
          <p className="mb-3 text-sm text-green-200">
            👋 Good morning, Grace
          </p>

          <h2 className="text-4xl font-bold leading-tight">
            Protect your harvest,
            <br />
            reduce waste, and
            <br />
            <span className="text-green-300">increase your income.</span>
          </h2>

          <p className="mt-5 max-w-lg text-sm leading-7 text-green-100">
            Manage your harvest, monitor storage conditions, and
            connect with verified buyers—all from one dashboard.
          </p>

          <button className="mt-8 inline-flex items-center gap-3 rounded-xl bg-white px-6 py-3 font-semibold text-[#184D3B] transition hover:bg-gray-100">
            Explore Market
            <ArrowRight size={18} />
          </button>
        </div>

        {/* Right Image */}
        <div className="relative">
          <img
            src={basket}
            alt="Harvest Basket"
            className="w-72 lg:w-96 object-contain"
          />

          {/* Floating Badge */}
          <div className="absolute -left-5 top-10 rounded-xl bg-white p-3 shadow-lg">
            <p className="text-xs text-gray-500">Today's Harvest</p>
            <h3 className="text-lg font-bold text-green-700">520 kg</h3>
          </div>

          {/* Floating Badge */}
          <div className="absolute bottom-8 -right-6 rounded-xl bg-white p-3 shadow-lg">
            <p className="text-xs text-gray-500">Storage</p>
            <h3 className="text-lg font-bold text-green-700">72% Full</h3>
          </div>
        </div>
      </div>
    </section>
  );
}