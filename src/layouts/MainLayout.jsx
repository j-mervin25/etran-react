// src/layouts/MainLayout.jsx
import Sidebar from "../components/Sidebar";
import Home from "../pages/Home";

export default function MainLayout() {
  return (
    <div className="flex min-h-screen">
      {/* Left Sidebar */}
      <Sidebar />

      {/* Right column */}
      <main className="flex-1 ml-[33%] overflow-y-auto bg-white p-8">
        <Home />
      </main>
    </div>
  );
}
