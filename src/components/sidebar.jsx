 import React from "react";

export default function Sidebar() {
  const menuItems = [
    { name: "Dashboard", icon: "📊" },
    { name: "Email Lists", icon: "📋" },
    { name: "Email Accounts", icon: "📫" },
    { name: "Email Campaign", icon: "🚀" },
    { name: "Analytics", icon: "📈" },
    { name: "Master List", icon: "🗂️" },
  ];

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-white border-r border-gray-200 shadow-sm flex flex-col font-sans">
      {/* ===== Brand Section ===== */}
      <div className="px-6 py-6 border-b border-gray-100 text-center">
        <h1 className="text-2xl font-bold text-neutral-800 tracking-tight">
          PersonaWave
        </h1>
        <p className="text-xs text-neutral-500 mt-1 font-medium uppercase tracking-wider">
          Marketing Platform
        </p>
      </div>

      {/* ===== Navigation Menu ===== */}
      <nav className="flex-1 mt-4 space-y-1">
        {menuItems.map((item, idx) => (
          <div
            key={idx}
            className={`group flex items-center gap-3 px-6 py-3 mx-3 rounded-md text-neutral-700 text-sm font-medium cursor-pointer transition-all duration-200 hover:bg-neutral-100 hover:shadow-sm ${
              item.name === "Dashboard"
                ? "bg-neutral-100 font-semibold"
                : ""
            }`}
          >
            {/* Consistent icon style */}
            <span className="text-base opacity-70">{item.icon}</span>
            <span className="group-hover:translate-x-1 transition-transform duration-150">
              {item.name}
            </span>
          </div>
        ))}
      </nav>

      {/* ===== Footer Section ===== */}
      <footer className="border-t border-gray-100 px-6 py-5 text-xs text-neutral-500 bg-white">
        <button className="w-full text-center py-2 mb-3 border border-neutral-300 rounded-md text-sm font-medium hover:bg-neutral-100 active:scale-95 transition-all duration-150">
          Log Out
        </button>
        <p className="text-neutral-600 font-medium">© 2025 PersonaWave</p>
        <p className="text-neutral-400">All rights reserved</p>
      </footer>
    </aside>
  );
}
