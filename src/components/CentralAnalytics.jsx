import React, { useState } from "react";

const CentralAnalytics = () => {
  const [query, setQuery] = useState("");

  const campaignData = [
    {
      name: "Autumn Promo Blast",
      status: "Delivered",
      audience: "8,240",
      engagement: "89%",
      revenue: "$4,670",
      date: "Oct 28, 2025",
      action: "View Report",
    },
    {
      name: "Black Friday Hype",
      status: "Scheduled",
      audience: "12,500",
      engagement: "—",
      revenue: "$0",
      date: "Nov 20, 2025",
      action: "Edit Campaign",
    },
    {
      name: "New User Onboarding",
      status: "Draft",
      audience: "2,100",
      engagement: "—",
      revenue: "$0",
      date: "Nov 10, 2025",
      action: "Continue Setup",
    },
    {
      name: "Holiday Retargeting",
      status: "Active",
      audience: "6,400",
      engagement: "73%",
      revenue: "$2,980",
      date: "Nov 04, 2025",
      action: "Track Live",
    },
    {
      name: "Customer Loyalty Boost",
      status: "Completed",
      audience: "4,500",
      engagement: "94%",
      revenue: "$3,410",
      date: "Oct 15, 2025",
      action: "View Insights",
    },
  ];

  const filteredCampaigns = campaignData.filter(
    (c) =>
      c.name.toLowerCase().includes(query.toLowerCase()) ||
      c.status.toLowerCase().includes(query.toLowerCase())
  );

  const statusStyle = {
    Delivered: "bg-green-50 text-green-700 border border-green-200",
    Scheduled: "bg-amber-50 text-amber-700 border border-amber-200",
    Draft: "bg-neutral-50 text-neutral-600 border border-neutral-200",
    Active: "bg-blue-50 text-blue-700 border border-blue-200",
    Completed: "bg-purple-50 text-purple-700 border border-purple-200",
  };

  return (
    <section className="p-8 font-sans">
      <div className="bg-white border border-neutral-200 rounded-2xl shadow-sm p-6 transition-all duration-300 hover:shadow-md">
        {/* Header Section */}
        <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
          <h1 className="text-2xl font-semibold text-neutral-800 tracking-tight">
            Campaign Performance Dashboard
          </h1>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search campaign or status..."
            className="border border-neutral-300 rounded-lg px-4 py-2 text-sm text-neutral-700 focus:ring-2 focus:ring-indigo-500 outline-none transition-all w-full sm:w-80"
          />
        </header>

        {/* Table Section */}
        <div className="overflow-x-auto rounded-xl border border-neutral-200">
          <table className="w-full text-left text-sm">
            <thead className="bg-neutral-50 text-neutral-600 uppercase text-xs font-semibold">
              <tr>
                <th className="px-5 py-3">Campaign</th>
                <th className="px-5 py-3">Status</th>
                <th className="px-5 py-3">Audience</th>
                <th className="px-5 py-3">Engagement</th>
                <th className="px-5 py-3">Revenue</th>
                <th className="px-5 py-3">Date</th>
                <th className="px-5 py-3 text-right">Action</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-neutral-100">
              {filteredCampaigns.map((item, i) => (
                <tr
                  key={i}
                  className="hover:bg-neutral-50 transition-colors duration-150"
                >
                  <td className="px-5 py-3 font-medium text-neutral-900">
                    {item.name}
                  </td>
                  <td className="px-5 py-3">
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${statusStyle[item.status]}`}
                    >
                      {item.status}
                    </span>
                  </td>
                  <td className="px-5 py-3 text-neutral-700">{item.audience}</td>
                  <td className="px-5 py-3 text-neutral-700">
                    {item.engagement}
                  </td>
                  <td className="px-5 py-3 text-neutral-700">
                    {item.revenue}
                  </td>
                  <td className="px-5 py-3 text-neutral-700">{item.date}</td>
                  <td className="px-5 py-3 text-right">
                    <button className="text-indigo-600 hover:text-indigo-800 text-sm font-medium transition-all duration-200">
                      {item.action}
                    </button>
                  </td>
                </tr>
              ))}

              {filteredCampaigns.length === 0 && (
                <tr>
                  <td
                    colSpan="7"
                    className="px-5 py-6 text-center text-neutral-500"
                  >
                    No matching campaigns found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination Section */}
        <footer className="flex justify-end items-center mt-6 gap-2 text-sm">
          <button className="px-3 py-1 border border-neutral-300 rounded-md hover:bg-neutral-100 transition">
            Prev
          </button>
          <button className="px-3 py-1 bg-indigo-500 text-white rounded-md shadow-sm">
            1
          </button>
          <button className="px-3 py-1 border border-neutral-300 rounded-md hover:bg-neutral-100 transition">
            2
          </button>
          <button className="px-3 py-1 border border-neutral-300 rounded-md hover:bg-neutral-100 transition">
            3
          </button>
          <span className="px-2 text-neutral-500">...</span>
          <button className="px-3 py-1 border border-neutral-300 rounded-md hover:bg-neutral-100 transition">
            Next
          </button>
        </footer>
      </div>
    </section>
  );
};

export default CentralAnalytics;
