// src/layouts/MainLayout.jsx
import Sidebar from "../components/Sidebar";

export default function MainLayout({ children }) {
  return (
    <div className="flex min-h-screen">
      {/* Left column */}
      <Sidebar />

      {/* Right column - scrollable */}
      <main className="flex-1 overflow-y-auto bg-white p-8">
        {children}
      </main>
    </div>
  );
}
