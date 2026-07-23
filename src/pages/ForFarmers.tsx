import CtaBanner from '../components/CtaBanner/CtaBanner.jsx'
import Header from '../components/Header.js'
import Testimonials from '../components/Testimonials.jsx'
import manholding from '../assets/manholding.png'
import problem from "../assets/problem.png";
import solutionImage from "../assets/storage.png";
import dashboardImage from "../assets/dashboard.png";
import farmerImage from "../assets/farmer.png";
import Footer from '../components/Footer.js';

const problems = [
  'Produce spoiling before it reaches the market',
  'Limited access to reliable storage',
  'Difficulty finding trusted buyers',
  'Uncertainty around pricing and selling',
  'Challenges moving produce from the farm to market',
]

const solutions = [
  {
    title: "Protect Your Produce",
    body: "Keep your harvest fresh for longer and reduce spoilage.",
  },
  {
    title: "Find Better Buyers",
    body: "Connect with buyers looking for fresh produce.",
  },
  {
    title: "Manage Your Harvest",
    body: "Keep track of your produce, storage status, and its journey from farm to market.",
  },
  {
    title: "Move with Confidence",
    body: "Get your harvest closer to the right market with less stress.",
  },
];

const bullets = [
  "Track Active Harvests",
  "Monitor Storage Status",
  "Discover Buyer Opportunities",
  "Manage Sales & Orders",
  "Monitor Harvest Value",
];

const whyBullets = ['Reduce Post-Harvest Loss', 'Access Better Storage', 'Reach More Buyers', 'Manage Your Produce Easily']

export default function ForFarmers() {
  return (
    <>
    <Header  />
      <section className="hero-inner">
  <div className="wrap">
    <div className="hero-inner-copy w-full">
      <p className="eyebrow eyebrow-pill">
        <span className="leaf">🌱</span> Built for every harvest
      </p>

      <h1>
        Protect What You Grow. Grow What <em>Matters</em>.
      </h1>

      <p>
        HarvestSafe helps farmers protect their produce, reduce
        post-harvest waste, connect with trusted buyers, and get more
        value from every harvest.
      </p>

      <button className="btn btn-primary">
        Get Started
      </button>
    </div>

    <div className="hero-inner-media">
      <img
        src={manholding}
        alt="Farmer holding a basket of vegetables"
      />
    </div>
  </div>
</section>

      {/* The Problem */}
      <section className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-6">

    <div className="grid lg:grid-cols-2 gap-16 items-center">

      {/* Image */}
      <div className="relative">
        <img
          src={problem}
          alt="Farmer sorting tomatoes"
          className="w-full h-[420px] object-cover rounded-3xl"
        />

        {/* Small floating image (optional) */}
        <div className="absolute -bottom-5 right-6 w-20 h-20 rounded-full border-4 border-white overflow-hidden shadow-lg">
          <img
            src={problem}
            alt="Farmer"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Content */}
      <div>

        <p className="text-[#67B246] text-sm font-medium mb-4">
          🌱 The Problem
        </p>

        <h2 className="text-4xl font-bold text-[#1F5130] leading-tight mb-6">
          Your Harvest Deserves <br /> More Time
        </h2>

        <p className="text-gray-500 leading-8 mb-8">
          Farmers work hard to grow and harvest their produce, but the
          journey from farm to market is not always easy. Without the
          right storage, market access, and support, valuable produce
          can be lost before it reaches the people who need it.
        </p>

        <ul className="space-y-5">
          {problems.map((problem) => (
            <li
              key={problem}
              className="flex items-start gap-3 text-gray-600"
            >
              <span className="text-red-500 text-xl font-bold">✕</span>

              <span>{problem}</span>
            </li>
          ))}
        </ul>

      </div>

    </div>

  </div>
</section>

      {/* The Solution */}
     <section className="py-20 bg-[#F8FCF7]">
  <div className="max-w-7xl mx-auto px-6">
    <div className="grid lg:grid-cols-2 gap-16 items-center">

      {/* Left Content */}
      <div>

        <p className="text-[#69B34C] text-sm font-medium mb-4">
          🌱 The Solution
        </p>

        <h2 className="text-4xl font-bold text-[#214E34] leading-tight mb-6">
          What HarvestSafe <br />
          Helps You Do
        </h2>

        <p className="text-gray-500 leading-8 mb-8">
          Farmers work hard to grow and harvest their produce, but the
          journey from farm to market is not always easy. HarvestSafe
          brings the tools together in one place.
        </p>

        <div className="space-y-6">
          {solutions.map((item) => (
            <div key={item.title} className="flex items-start gap-4">

              <div className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-green-100 text-green-700">
                ✓
              </div>

              <div>
                <h4 className="font-semibold text-[#214E34]">
                  {item.title}
                </h4>

                <p className="mt-1 text-sm leading-6 text-gray-500">
                  {item.body}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Right Image */}
      <div className="relative">

        <img
          src={solutionImage}
          alt="Cold storage"
          className="h-[420px] w-full rounded-3xl object-cover"
        />

        {/* Floating avatar */}
        <div className="absolute -bottom-5 right-6 h-20 w-20 overflow-hidden rounded-full border-4 border-white shadow-lg">
          <img
            src={solutionImage}
            alt="Harvest"
            className="h-full w-full object-cover"
          />
        </div>

      </div>

    </div>
  </div>
</section>

      {/* All in one place */}
      <section className="bg-[#3E7D34] py-20">
  <div className="max-w-7xl mx-auto px-6">

    <div className="grid lg:grid-cols-2 gap-16 items-center">

      {/* Dashboard */}
      <div className="flex justify-center lg:justify-start">

        <div className="bg-[#DDF1D9] rounded-2xl p-5 shadow-xl">

          <img
            src={dashboardImage}
            alt="HarvestSafe Dashboard"
            className="rounded-xl w-full max-w-md"
          />

        </div>

      </div>

      {/* Content */}
      <div>

        <p className="text-green-200 text-sm font-medium mb-4">
          🌱 All In One Place
        </p>

        <h2 className="text-4xl font-bold leading-tight text-white mb-8">
          Your Harvest. Your{" "}
          <span className="text-[#9BE564]">
            Opportunities.
          </span>
        </h2>

        <ul className="space-y-4">
          {bullets.map((item) => (
            <li
              key={item}
              className="flex items-center gap-3 text-white"
            >
              <span className="w-2 h-2 rounded-full bg-[#9BE564]"></span>

              <span>{item}</span>
            </li>
          ))}
        </ul>

      </div>

    </div>

  </div>
</section>

      {/* Why farmers choose us */}
      <section className="bg-[#163C2D] py-16 mt-16">
  <div className="mx-auto flex max-w-7xl flex-col overflow-hidden rounded-lg md:flex-row">
    
    {/* Left Content */}
    <div className="flex w-full flex-col justify-center px-8 py-12 md:w-1/2 lg:px-16">
      <p className="mb-3 flex items-center text-sm font-medium text-green-300">
        <span className="mr-2">🌱</span>
        Why Farmers Choose HarvestSafe
      </p>

      <h2 className="mb-6 text-4xl font-bold leading-tight text-white">
        Protect More. Waste Less.{" "}
        <span className="text-green-300">Earn</span> More.
      </h2>

      <ul className="space-y-4">
        {whyBullets.map((item) => (
          <li key={item} className="flex items-center text-white">
            <span className="mr-3 h-2 w-2 rounded-full bg-green-400"></span>
            {item}
          </li>
        ))}
      </ul>
    </div>

    {/* Right Image */}
    <div className="w-full md:w-1/2">
      <img
        src={farmerImage}
        alt="Farmer smiling while holding fresh vegetables"
        className="h-full w-full object-cover"
      />
    </div>
  </div>
</section>

      <Testimonials eyebrow="Trusted by Farmers" title="Trusted by Those Who Grow" />
      <CtaBanner />
      <Footer />
    </>
  )
}
