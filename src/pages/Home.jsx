// src/pages/Home.jsx
import banner from "../assets/banner_img.png";

export default function Home() {
  return (
    <div className="space-y-10 flex flex-col items-center">
      {/* Banner Image */}
      <div className="w-full h-80 md:h-[500px] lg:h-[600px] overflow-hidden rounded-2xl shadow-lg">
        <img
          src={banner}
          alt="Banner"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Centered Text */}
      <p className="text-gray-600 text-center max-w-md">
        We escalate transfer efficiency<br />
        and productivity
      </p>
    </div>
  );
}
