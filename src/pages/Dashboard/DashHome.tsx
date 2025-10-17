// import React from "react";

const DashHome = () => {
  const stats = [
    {
      title: "Total Patients",
      value: "1000",
      change: "+5% since yesterday",
      icon: (
        <svg
          className="w-5 h-5 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
    },
    {
      title: "Total Doctors",
      value: "50",
      change: "+11 since today",
      icon: (
        <svg
          className="w-5 h-5 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      title: "Total Users",
      value: "450",
      change: "+5% since yesterday",
      icon: (
        <svg
          className="w-5 h-5 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
        </svg>
      ),
    },
  ];

  const diseaseData = [
    { name: "Breast Cancer", percentage: 35, color: "#1e3a8a" },
    { name: "Leukemia", percentage: 14, color: "#3b82f6" },
    { name: "Brain Cancer", percentage: 7, color: "#60a5fa" },
    { name: "Calf Scours", percentage: 46, color: "#93c5fd" },
  ];

  const recentPatients = [
    { name: "Sarah Johnson", date: "2025-10-15" },
    { name: "Michael Chen", date: "2025-10-15" },
    { name: "Emily Davis", date: "2025-10-15" },
    { name: "Robert Wilson", date: "2025-10-15" },
    { name: "Sarah Johnson", date: "2025-10-15" },
    { name: "Sarah Johnson", date: "2025-10-15" },
  ];

  const total = diseaseData.reduce((sum, d) => sum + d.percentage, 0);
  const radius = 80;
  const circumference = 2 * Math.PI * radius;

  let currentOffset = 0;
  const segments = diseaseData.map((disease) => {
    const segmentLength = (disease.percentage / total) * circumference;
    const offset = currentOffset;
    currentOffset += segmentLength;
    return { ...disease, segmentLength, offset };
  });

  return (
    <div className="min-h-screen w-full bg-white p-3 sm:p-4 md:p-6 lg:p-8">
      {/* Header */}
      <div className="mb-6 md:mb-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-2">
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-800">
            Welcome back, Sohan!
          </h1>
          
        </div>
        <p className="text-sm sm:text-base text-gray-600">
          Here's your dashboard overview for today
        </p>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
        {/* Left Section - Stats and Chart */}
        <div className="xl:col-span-2 space-y-4  sm:space-y-5 md:space-y-6">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg shadow p-4 sm:p-5 md:p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-between mb-3 md:mb-4">
                  <span className="text-gray-600 text-xs sm:text-sm font-medium">
                    {stat.title}
                  </span>
                  {stat.icon}
                </div>
                <div className="text-2xl sm:text-3xl lg:text-3xl font-bold text-gray-900 mb-1 md:mb-2">
                  {stat.value}
                </div>
                <div className="text-xs text-gray-500">{stat.change}</div>
              </div>
            ))}
          </div>

          {/* Disease Chart */}
          <div className="bg-gray-50 h-full rounded-lg shadow p-4 sm:p-5 md:p-6 hover:shadow-md transition-shadow">
            <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-4 sm:mb-6">
              Total Disease
            </h3>
            <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12">
              {/* Donut Chart */}
              <div className="relative flex-shrink-0">
                <svg
                  width="200"
                  height="200"
                  className="transform -rotate-90 sm:w-[220px] sm:h-[220px] md:w-[240px] md:h-[240px]"
                  viewBox="0 0 240 240"
                >
                  <circle
                    cx="120"
                    cy="120"
                    r={radius}
                    fill="none"
                    stroke="#e5e7eb"
                    strokeWidth="40"
                  />
                  {segments.map((segment, index) => (
                    <circle
                      key={index}
                      cx="120"
                      cy="120"
                      r={radius}
                      fill="none"
                      stroke={segment.color}
                      strokeWidth="40"
                      strokeDasharray={`${segment.segmentLength} ${circumference}`}
                      strokeDashoffset={-segment.offset}
                    />
                  ))}
                </svg>
                {/* Percentage Labels */}
                <div className="absolute top-6 left-8 sm:top-8 sm:left-10 md:top-8 md:left-12 bg-blue-500 text-white text-xs font-semibold px-2 py-1 rounded shadow-sm">
                  7%
                </div>
                <div className="absolute top-12 right-2 sm:top-14 sm:right-3 md:top-16 md:right-4 bg-blue-500 text-white text-xs font-semibold px-2 py-1 rounded shadow-sm">
                  14%
                </div>
                <div className="absolute bottom-6 right-0 sm:bottom-7 sm:right-1 md:bottom-8 md:right-2 bg-gray-700 text-white text-xs font-semibold px-2 py-1 rounded shadow-sm">
                  35%
                </div>
                <div className="absolute bottom-12 -left-1 sm:bottom-14 sm:-left-1 md:bottom-16 md:left-0 bg-blue-400 text-white text-xs font-semibold px-2 py-1 rounded shadow-sm">
                  46%
                </div>
              </div>

              {/* Legend */}
              <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-1 gap-3 sm:gap-4 w-full lg:w-auto">
                {diseaseData.map((disease, index) => (
                  <div key={index} className="flex items-center gap-2 sm:gap-3">
                    <div
                      className="w-3 h-3 rounded-full flex-shrink-0"
                      style={{ backgroundColor: disease.color }}
                    ></div>
                    <span className="text-xs sm:text-sm text-gray-700">
                      {disease.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Section - Recent Patients */}
        <div className="bg-gray-50 rounded-lg shadow p-4 sm:p-5 md:p-6   hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between mb-4 sm:mb-6">
            <h3 className="text-base sm:text-lg font-semibold text-gray-800">
              Recent Added Patients
            </h3>
            <svg
              className="w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
          </div>
          <div className="space-y-3 sm:space-y-4 max-h-[400px] sm:max-h-[500px] overflow-y-auto">
            {recentPatients.map((patient, index) => (
              <div
                key={index}
                className="pb-3 sm:pb-4 border-b border-gray-100 last:border-0 hover:bg-gray-50 -mx-2 px-2 rounded transition-colors"
              >
                <div className="text-sm font-medium text-gray-800">
                  {patient.name}
                </div>
                <div className="text-xs text-gray-500 mt-1">{patient.date}</div>
              </div>
            ))}
          </div>
          <button className="w-full mt-4 sm:mt-6 text-center text-sm text-gray-600 hover:text-gray-800 font-medium py-2 hover:bg-gray-50 rounded transition-colors">
            View All Patients
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashHome;
