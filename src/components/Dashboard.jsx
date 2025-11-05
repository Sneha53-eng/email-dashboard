import React from "react";
import Sidebar from "./Sidebar";
import TopBar from "./Topbar";
import KPISection from "./KPISection";
import CentralAnalytics from "./CentralAnalytics";

/**
 * Dashboard Component
 * -------------------
 * Main administrative interface layout combining navigation, KPIs,
 * and analytics sections.
 * Follows a professional, desktop-first design system with structured spacing,
 * neutral tones, and clear hierarchy.
 */
const Dashboard = () => {
  return (
    <div className="flex min-h-screen bg-neutral-50 text-neutral-800 font-sans">
      {/* =============== Sidebar Navigation =============== */}
      <aside className="fixed inset-y-0 left-0 w-64 border-r border-neutral-200 shadow-sm bg-white">
        <Sidebar />
      </aside>

      {/* =============== Main Dashboard Layout =============== */}
      <main className="flex-1 flex flex-col ml-64 transition-all duration-300">
        {/* --------- Top Navigation Bar --------- */}
        <header className="sticky top-0 z-20 bg-white border-b border-neutral-200 shadow-sm">
          <TopBar />
        </header>

        {/* --------- Key Performance Indicators --------- */}
        <section className="px-6 py-6">
          <KPISection />
        </section>

        {/* --------- Analytics Table / Campaign Section --------- */}
        <section className="px-6 pb-6">
          <CentralAnalytics />
        </section>

        {/* --------- Overview / Additional Dashboard Content --------- */}
        <section className="px-6 pb-10">
          <div className="bg-white rounded-xl border border-neutral-200 shadow-sm p-6">
            <header className="flex items-center justify-between mb-3">
              <h2 className="text-lg font-semibold tracking-tight">
                Overview
              </h2>
              <span
                className="text-sm text-neutral-500 flex items-center gap-1"
                title="Information"
              >
                ℹ️
              </span>
            </header>
            <p className="text-sm leading-relaxed text-neutral-600">
              This dashboard offers an at-a-glance summary of your platform’s performance,
              system stability, and business growth trends. 
              Future enhancements will introduce intelligent forecasting, automated insights,
              and real-time engagement analytics to empower strategic decision-making.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
