import React from "react";

const metrics = [
  { title: "Total Campaigns", value: "128", change: "+12%" },
  { title: "Monthly Revenue", value: "$38,420", change: "+9.3%" },
  { title: "New Subscribers", value: "4,860", change: "+6.5%" },
  { title: "Engagement Rate", value: "74%", change: "+4.1%" },
  { title: "Unsubscribe Rate", value: "0.9%", change: "-0.3%" },
];

/**
 * KPISection Component
 * --------------------
 * Displays key performance indicators in a neutral, professional dashboard layout.
 * Focuses on typography, spacing, and hierarchy without relying on hardcoded colors.
 */
const KPISection = () => {
  return (
    <section className="px-6 py-8 bg-neutral-50 font-sans">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-6">
        {metrics.map((metric, index) => {
          const isNegative = metric.change.includes("-");
          return (
            <div
              key={index}
              className="bg-white border border-neutral-200 rounded-xl shadow-sm p-6 flex flex-col justify-between hover:shadow-md transition-all duration-300"
            >
              <header className="mb-2">
                <h3 className="text-neutral-500 text-sm font-medium tracking-wide uppercase">
                  {metric.title}
                </h3>
              </header>

              <main className="flex items-end justify-between">
                <p className="text-3xl font-bold text-neutral-900 leading-none">
                  {metric.value}
                </p>
                <span
                  className={`text-sm font-semibold flex items-center gap-1 ${
                    isNegative ? "text-red-500" : "text-green-600"
                  }`}
                >
                  {isNegative ? "▼" : "▲"} {metric.change}
                </span>
              </main>

              <footer className="mt-3">
                <div className="h-1.5 w-full bg-neutral-100 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full ${
                      isNegative ? "bg-red-400" : "bg-green-500"
                    }`}
                    style={{
                      width: `${Math.min(
                        Math.abs(parseFloat(metric.change)) * 8,
                        100
                      )}%`,
                    }}
                  ></div>
                </div>
              </footer>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default KPISection;
