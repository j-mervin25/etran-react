// src/pages/Home.jsx
import banner from "../assets/banner_img.png";
import logo from "../assets/logo1.svg";
import card2 from "../assets/card2.svg";
import card3 from "../assets/card3.svg";
import card4 from "../assets/card4.svg";
import reliable1 from "../assets/reliable1.png";
import reliable2 from "../assets/reliable2.png";
import singleImg from "../assets/single_img.png";
import scard from "../assets/scard.png";
import scard2 from "../assets/scard2.png";
import scard3 from "../assets/scard3.png";
import scard4 from "../assets/scard4.png";
import banner_single from "../assets/banner_single.jpg";

export default function Home() {
  return (
    <>
      <div className="space-y-20 flex flex-col items-center">
        {/* Banner Section */}
        <div className="w-full h-80 md:h-[500px] lg:h-[600px] overflow-hidden rounded-2xl shadow-lg">
          <img
            src={banner}
            alt="Banner"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text Section */}
        <div className="text-gray-600 text-center max-w-md space-y-3 mt-16">
          <p>
            We escalate transfer efficiency<br />
            and productivity
          </p>
        </div>

        {/* New Section */}
        <section className="text-center max-w-5xl w-full space-y-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-800">
              Get more done in a week
            </h2>
            <p className="text-gray-600 mt-3">
              Maximize your productivity with smarter tools designed to
            </p>
            <p className="text-gray-600">
              streamline your workflow, automate tasks, and stay organized.
            </p>
          </div>

          {/* Card Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 px-6 md:px-0">
            <div className="bg-[#D8FFA6] rounded-2xl h-60 flex flex-col justify-center items-center space-y-1">
              <div>
                <p className="text-[72px] leading-none font-extrabold text-[#2E3B0E]">2x</p>
              </div>
              <div>
                <p className="text-lg font-medium text-[#2E3B0E]">Double Your Productivity</p>
              </div>
            </div>

            <div className="bg-[#D8FFA6] rounded-2xl p-10 flex flex-col items-center justify-center space-y-2">
              <img src={card2} alt="Chart" className="w-24 h-24 mb-2" />
              <p className="text-lg font-medium text-green-900">Efficiency Increase Per Transfer</p>
            </div>

            <div className="bg-[#D8FFA6] rounded-2xl p-10 flex flex-col items-center justify-center space-y-2">
              <img src={card3} alt="Centralize" className="w-24 h-24 mb-2" />
              <p className="text-lg font-medium text-green-900">Centralize Your Finances</p>
            </div>

            <div className="bg-[#D8FFA6] rounded-2xl p-10 flex flex-col items-center justify-center space-y-2">
              <img src={card4} alt="Feature 4" className="w-32 h-32 object-contain mb-4" />
              <p className="text-lg font-medium text-green-900">More Activity</p>
            </div>
          </div>
        </section>

        {/* Reliable App Section */}
        <section className="text-center max-w-6xl w-full space-y-10 mt-20">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-800">
            The Most Reliable App
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6 md:px-0">
            <div className="flex flex-col items-center space-y-4">
              <div className="rounded-2xl overflow-hidden w-full shadow-md flex justify-center items-center bg-white min-h-[300px]">
                <img
                  src={reliable1}
                  alt="Virtual card"
                  className="w-full h-auto object-contain"
                />
              </div>
              <div className="max-w-md text-left">
                <p className="text-gray-800 font-medium">
                  Scale Your Team, Not Your Card Expenses
                </p>
                <p className="text-gray-600 text-sm">
                  Issue virtual and physical cards at no additional cost to support teams of any size.
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center space-y-4">
              <div className="rounded-2xl overflow-hidden w-full shadow-md flex justify-center items-center bg-white min-h-[300px]">
                <img
                  src={reliable2}
                  alt="Tax form"
                  className="w-full h-auto object-contain"
                />
              </div>
              <div className="max-w-md text-left">
                <p className="text-gray-800 font-medium">
                  Effortless Paper Tracking, Mobile Convenience
                </p>
                <p className="text-gray-600 text-sm">
                  Get precise control—at scale—with the ability to lock any card and restrict any type of spend.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Single Image Section */}
        <section className="w-full max-w-6xl px-6 md:px-0 mt-40">
          <div className="rounded-2xl overflow-hidden shadow-md h-64 md:h-80">
            <img
              src={singleImg}
              alt="Feature highlight"
              className="w-full h-full object-cover"
            />
          </div>
        </section>

        {/* First Class Software */}
        <section className="text-center max-w-6xl w-full space-y-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-green-900">
              First Class Software
            </h2>
            <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
              Get real-time insights, seamless transactions, and advanced tools to manage your wealth effortlessly.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-6 md:px-0">
            <div className="bg-[#394308] rounded-2xl flex flex-col items-center justify-center p-6 space-y-4">
              <img src={scard} alt="Safe Storage" className="w-16 h-16" />
              <p className="text-white font-medium">Safe Storage</p>
            </div>

            <div className="bg-[#394308] rounded-2xl flex flex-col items-center justify-center p-6 space-y-4">
              <img src={scard2} alt="Secure" className="w-16 h-16" />
              <p className="text-white font-medium">Secure</p>
            </div>

            <div className="bg-[#394308] rounded-2xl flex flex-col items-center justify-center p-6 space-y-4">
              <img src={scard3} alt="Earn Interest" className="w-16 h-16" />
              <p className="text-white font-medium">Earn Interest</p>
            </div>

            <div className="bg-[#394308] rounded-2xl flex flex-col items-center justify-center p-6 space-y-4">
              <img src={scard4} alt="Family Plans" className="w-16 h-16" />
              <p className="text-white font-medium">Family Plans</p>
            </div>
          </div>
        </section>

        {/* Banner Single */}
        <section className="w-full max-w-6xl px-6 md:px-0 mt-40 relative">
          <div className="relative rounded-2xl overflow-hidden shadow-md h-64 md:h-80">
            <img
              src={banner_single}
              alt="Feature highlight"
              className="w-full h-full object-cover"
            />
            <div className="absolute left-6 top-1/2 transform -translate-y-1/2 md:left-12 text-white max-w-md">
              <h2 className="text-2xl md:text-4xl mb-4">
                Download Etran and <br />
                manage everything <br />
                from your phone.
              </h2>
              <button className="bg-[#d2fd9c] text-green-900 px-4 py-1 rounded hover:bg-[#619111] transition">
                Get Started
              </button>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="w-full bg-[#f1f1f1] text-gray-800 py-20 px-8 mt-32">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-stretch">
          {/* Left Section */}
          <div className="flex flex-col justify-between h-full space-y-24">
            <div>
              <img src={logo} alt="Etran Logo" className="w-10 h-10" />
            </div>
            <h1 className="text-5xl font-extrabold tracking-tight">Etran</h1>
          </div>

          {/* Right Section */}
          <div className="flex flex-col justify-between h-full mt-16 md:mt-0 space-y-20 md:space-y-0 text-left md:text-left md:items-end">
            <div className="space-y-2 text-sm">
              <p className="font-medium text-gray-700">Contact</p>
              <a href="mailto:hello@figma.com" className="block hover:underline">
                hello@figma.com
              </a>
              <a href="/" className="block hover:underline">Instagram</a>
              <a href="/" className="block hover:underline">X</a>
              <a href="/" className="block hover:underline">LinkedIn</a>
            </div>

            <div className="text-sm text-gray-600 space-y-1">
              <a href="/" className="block hover:underline">Terms & Conditions</a>
              <a href="/" className="block hover:underline">Privacy</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
