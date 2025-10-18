import { useEffect, useState } from "react";
import { useStatus } from "../../providers/StatusProvider";

const DashHome = () => {
  const [selectedDisease, setSelectedDisease] = useState<string | null>(null);
  const [hoveredSegment, setHoveredSegment] = useState<number | null>(null);
  const { isEnglish } = useStatus();

  const stats = [
    {
      title: isEnglish ? "Total Patients" : "Patients totaux",
      value: "1000",
      change: isEnglish ? "+5% since yesterday" : "+5% depuis hier",
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
      title: isEnglish ? "Total Doctors" : "Médecins totaux",
      value: "50",
      change: isEnglish ? "+11 since today" : "+11 depuis aujourd'hui",
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
      title: isEnglish ? "Total Users" : "Utilisateurs totaux",
      value: "450",
      change: isEnglish ? "+5% since yesterday" : "+5% depuis hier",
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
    {
      id: 1,
      name: isEnglish ? "Cardiovascular Disease" : "Maladie cardiovasculaire",
      percentage: 35,
      color: "#ef4444",
      patients: 350,
      description: isEnglish
        ? "Heart and blood vessel disorders"
        : "Troubles du cœur et des vaisseaux sanguins",
    },
    {
      id: 2,
      name: isEnglish ? "Diabetes" : "Diabète",
      percentage: 28,
      color: "#3b82f6",
      patients: 280,
      description: isEnglish
        ? "Blood sugar regulation disorders"
        : "Troubles de la régulation de la glycémie",
    },
    {
      id: 3,
      name: isEnglish ? "Respiratory Disease" : "Maladie respiratoire",
      percentage: 22,
      color: "#10b981",
      patients: 220,
      description: isEnglish
        ? "Lung and breathing disorders"
        : "Troubles pulmonaires et respiratoires",
    },
    {
      id: 4,
      name: isEnglish ? "Cancer" : "Cancer",
      percentage: 15,
      color: "#f59e0b",
      patients: 150,
      description: isEnglish
        ? "Malignant cell growth disorders"
        : "Troubles de la croissance cellulaire maligne",
    },
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
  const segments = diseaseData.map((disease, index) => {
    const segmentLength = (disease.percentage / total) * circumference;
    const offset = currentOffset;
    const angle = (disease.percentage / total) * 360;
    const midAngle = (currentOffset / circumference) * 360 + angle / 2;
    currentOffset += segmentLength;
    return {
      ...disease,
      segmentLength,
      offset,
      angle,
      midAngle,
      index,
    };
  });

  const handleSegmentHover = (index: number | null) => {
    setHoveredSegment(index);
  };

  const handleSegmentClick = (diseaseName: string) => {
    setSelectedDisease(selectedDisease === diseaseName ? null : diseaseName);
  };

  const getSegmentTransform = (index: number) => {
    const isHovered = hoveredSegment === index;
    const isSelected = selectedDisease === segments[index]?.name;
    return isHovered || isSelected ? "scale(1.05)" : "scale(1)";
  };
  const { setPageTitle } = useStatus();
  useEffect(() => {
    setPageTitle(isEnglish ? "Dashboard" : "Tableau de bord");
  }, [isEnglish]);

  return (
    <div className="min-h-screen w-full bg-white p-3 sm:p-4 md:p-6 lg:p-8">
      {/* Header */}
      <div className="mb-6 md:mb-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-2">
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-800">
            {isEnglish ? "Welcome back, Sohan!" : "Bon retour, Sohan !"}
          </h1>
        </div>
        <p className="text-sm sm:text-base text-gray-600">
          {isEnglish
            ? "Here's your dashboard overview for today"
            : "Voici l'aperçu de votre tableau de bord pour aujourd'hui"}
        </p>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 sm:gap-5 md:gap-6 items-stretch">
        {/* Left Section - Stats and Chart */}
        <div className="xl:col-span-2 space-y-4 sm:space-y-5 md:space-y-6 h-full flex flex-col">
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
          <div className="bg-gray-50 rounded-lg shadow p-4 sm:p-5 md:p-6 hover:shadow-md transition-shadow flex-1 flex flex-col justify-center">
            <div className="flex items-center justify-between mb-4 sm:mb-6">
              <h3 className="text-base sm:text-lg font-semibold text-gray-800">
                {isEnglish
                  ? "Disease Distribution"
                  : "Répartition des maladies"}
              </h3>
              <div className="text-sm text-gray-500">
                {isEnglish ? "Total Patients" : "Patients totaux"}:{" "}
                {diseaseData.reduce((sum, d) => sum + d.patients, 0)}
              </div>
            </div>

            <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12">
              {/* Interactive Donut Chart */}
              <div className="relative flex-shrink-0">
                <svg
                  width="280"
                  height="280"
                  className="transform -rotate-90"
                  viewBox="0 0 300 300"
                >
                  {/* Background circle */}
                  <circle
                    cx="150"
                    cy="150"
                    r={radius}
                    fill="none"
                    stroke="#f3f4f6"
                    strokeWidth="40"
                  />

                  {/* Disease segments */}
                  {segments.map((segment, index) => (
                    <g key={segment.id}>
                      <circle
                        cx="150"
                        cy="150"
                        r={radius}
                        fill="none"
                        stroke={segment.color}
                        strokeWidth={hoveredSegment === index ? "45" : "40"}
                        strokeDasharray={`${segment.segmentLength} ${circumference}`}
                        strokeDashoffset={-segment.offset}
                        className="transition-all duration-300 cursor-pointer"
                        style={{
                          filter:
                            hoveredSegment === index
                              ? "brightness(1.1)"
                              : "brightness(1)",
                          transformOrigin: "150px 150px",
                          transform: getSegmentTransform(index),
                        }}
                        onMouseEnter={() => handleSegmentHover(index)}
                        onMouseLeave={() => handleSegmentHover(null)}
                        onClick={() => handleSegmentClick(segment.name)}
                      />
                    </g>
                  ))}
                </svg>

                {/* Center info */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center bg-white rounded-full w-24 h-24 flex flex-col items-center justify-center shadow-sm">
                    {hoveredSegment !== null ? (
                      <div className="text-center">
                        <div className="text-lg font-bold text-gray-800">
                          {segments[hoveredSegment].percentage}%
                        </div>
                        <div className="text-xs text-gray-600">
                          {segments[hoveredSegment].patients}
                        </div>
                      </div>
                    ) : (
                      <>
                        <div className="text-lg font-bold text-gray-800">
                          1000
                        </div>
                        <div className="text-xs text-gray-600">Total</div>
                        <div className="text-xs text-gray-600">
                          {isEnglish ? "Total" : "Total"}
                        </div>
                      </>
                    )}
                  </div>
                </div>

                {/* Tooltip */}
                {hoveredSegment !== null && (
                  <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap z-10">
                    <div className="font-semibold">
                      {segments[hoveredSegment].name}
                    </div>
                    <div className="text-xs opacity-90">
                      {segments[hoveredSegment].description}
                    </div>
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-800"></div>
                  </div>
                )}
              </div>

              {/* Interactive Legend */}
              <div className="grid grid-cols-1 gap-3 sm:gap-4 w-full lg:w-auto">
                {diseaseData.map((disease, index) => (
                  <div
                    key={disease.id}
                    className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-all duration-200 ${
                      hoveredSegment === index ||
                      selectedDisease === disease.name
                        ? "bg-white shadow-md scale-105"
                        : "hover:bg-white hover:shadow-sm"
                    }`}
                    onMouseEnter={() => handleSegmentHover(index)}
                    onMouseLeave={() => handleSegmentHover(null)}
                    onClick={() => handleSegmentClick(disease.name)}
                  >
                    <div
                      className={`w-4 h-4 rounded-full flex-shrink-0 transition-all duration-200 ${
                        hoveredSegment === index ? "scale-125" : ""
                      }`}
                      style={{ backgroundColor: disease.color }}
                    ></div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-gray-700">
                          {disease.name}
                        </span>
                        <span className="text-sm font-bold text-gray-800">
                          {disease.percentage}%
                        </span>
                      </div>
                      <div className="flex items-center justify-between mt-1">
                        <span className="text-xs text-gray-500">
                          {disease.patients}{" "}
                          {isEnglish ? "patients" : "patients"}
                        </span>
                        <div className="w-16 bg-gray-200 rounded-full h-1.5">
                          <div
                            className="h-1.5 rounded-full transition-all duration-500"
                            style={{
                              width: `${disease.percentage}%`,
                              backgroundColor: disease.color,
                            }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Selected Disease Details */}
            {selectedDisease && (
              <div className="mt-6 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-400">
                <div className="flex items-center justify-between">
                  <h4 className="font-semibold text-blue-800 text-sm">
                    {isEnglish
                      ? `${selectedDisease} Details`
                      : `Détails de ${selectedDisease}`}
                  </h4>
                  <button
                    onClick={() => setSelectedDisease(null)}
                    className="text-blue-600 hover:text-blue-800"
                  >
                    ✕
                  </button>
                </div>
                <p className="text-sm text-blue-700 mt-2">
                  {
                    diseaseData.find((d) => d.name === selectedDisease)
                      ?.description
                  }
                </p>
                <div className="flex gap-4 mt-3 text-sm">
                  <span className="text-blue-600">
                    {isEnglish ? "Patients" : "Patients"}:{" "}
                    {
                      diseaseData.find((d) => d.name === selectedDisease)
                        ?.patients
                    }
                  </span>
                  <span className="text-blue-600">
                    {isEnglish ? "Percentage" : "Pourcentage"}:{" "}
                    {
                      diseaseData.find((d) => d.name === selectedDisease)
                        ?.percentage
                    }
                    %
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right Section - Recent Patients */}
        <div className="bg-gray-50 rounded-lg shadow p-4 sm:p-5 md:p-6 hover:shadow-md transition-shadow h-full flex flex-col">
          <div className="flex items-center justify-between mb-4 sm:mb-6">
            <h3 className="text-base sm:text-lg font-semibold text-gray-800">
              {isEnglish
                ? "Recent Added Patients"
                : "Patients récemment ajoutés"}
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
          <div className="space-y-3 sm:space-y-4 max-h-[400px] sm:max-h-[500px] overflow-y-auto flex-1">
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
            {isEnglish ? "View All Patients" : "Voir tous les patients"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashHome;
