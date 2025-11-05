import React from "react";

const TopBar = () => {
  return (
    <header className="w-full bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-200 flex items-center justify-between px-8 py-4 sticky top-0 z-50">
      {/* ===== Left: Page Title ===== */}
      <h2 className="text-2xl font-bold text-gray-900 tracking-tight flex items-center gap-2">
        <span className="inline-block h-2 w-2 rounded-full bg-blue-600"></span>
        Dashboard Overview
      </h2>

      {/* ===== Center: Greeting ===== */}
      <div className="hidden md:flex flex-col text-right leading-tight">
        <span className="text-sm text-gray-500">Welcome back,</span>
        <span className="font-semibold text-gray-900 text-base">Sneha</span>
      </div>

      {/* ===== Right: Status + Profile ===== */}
      <div className="flex items-center space-x-6">
        {/* System Status */}
        <div className="flex items-center text-sm text-gray-600 bg-gray-50 px-3 py-1.5 rounded-full shadow-inner border border-gray-100">
          <span className="h-2 w-2 rounded-full bg-green-500 mr-2"></span>
          <span className="font-medium">All Systems Operational</span>
        </div>

        {/* Divider */}
        <div className="w-px h-5 bg-gray-200"></div>

        {/* Profile Section */}
        <div className="flex items-center gap-3 cursor-pointer hover:bg-gray-50 px-3 py-2 rounded-xl transition-all duration-200">
          <div className="h-9 w-9 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-semibold shadow-sm">
            S
          </div>
          <div className="hidden sm:flex flex-col">
            <span className="text-sm font-semibold text-gray-900">Sneha</span>
            <span className="text-xs text-gray-500">Admin</span>
          </div>
          <span className="text-gray-400 text-lg">▾</span>
        </div>
      </div>
    </header>
  );
};

export default TopBar;
