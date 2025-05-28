import React from "react";

const StatsCard = () => {
  const stats = [
    { number: "2000+", label: "Company" },
    { number: "10+", label: "Years Exp." },
    { number: "800+", label: "Hours of Digital" },
    { number: "150M+", label: "In Tracked Revenue" },
  ];

  return (
    <div className=" py-8 px-4 rounded-2xl ">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4  gap-6 text-center text-black">
        {stats.map((stat, index) => (
          <div
            key={index}
            className={`w-full p-6 sm:p-8 rounded-2xl bg-[#F9FAFB] border relative group overflow-hidden border-gray-200 shadow transition-shadow hover:shadow-lg`}
          >
                <div className="absolute -bottom-[80%] w-[50px] h-full bg-[#9F1940] rounded-full left-[50%] translate-x-[-50%]
group-hover:w-full group-hover:bottom-0 transition-all duration-300
"></div>
            <div className="text-3xl font-medium relative z-10 group-hover:text-white">{stat.number}</div>
            <div className="text-sm opacity-80 mt-2 relative z-10 group-hover:text-white">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsCard;
