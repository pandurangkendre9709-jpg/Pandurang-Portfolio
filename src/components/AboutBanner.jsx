import RollingNumber from "./RollingNumber";

function AboutBanner() {
  const stats = [
    {
      value: 10, // Updated to reflect your growing portfolio
      suffix: "+",
      title: "Projects",
      subtitle: "completed",
      bg: "bg-black",
      numberColor: "text-[#EB6200]",
      titleColor: "text-white",
      subColor: "text-[#EB6200]",
    },
    {
      value: 1, // Rounded up for "1st Year" or keep 0.8 if you prefer precision
      suffix: "+",
      title: "Year",
      subtitle: "at Accure Softtech",
      bg: "bg-[#D2D2D2]",
      numberColor: "text-black",
      titleColor: "text-[#EB6200]",
      subColor: "text-black",
    },
    {
      value: 5,
      suffix: "+",
      title: "Skills",
      subtitle: "Node/Express/React",
      bg: "bg-[#EB6200]",
      numberColor: "text-white",
      titleColor: "text-black",
      subColor: "text-white",
    },
  ];

  return (
    <section className="grid grid-cols-1 md:grid-cols-3 mt-16 overflow-hidden shadow-xl">
      {stats.map((stat, i) => (
        <div
          key={i}
          className={`flex gap-4 justify-center items-center p-10 transition-transform hover:scale-105 duration-300 ${stat.bg}`}
        >
          <div className="flex flex-col items-center md:items-start">
            <h1 className={`text-5xl md:text-7xl font-extrabold tracking-tighter ${stat.numberColor}`}>
              <RollingNumber value={stat.value} />
              {stat.suffix}
            </h1>
          </div>

          <div className="flex flex-col">
            <h2 className={`text-2xl md:text-3xl font-bold leading-tight ${stat.titleColor}`}>
              {stat.title}
            </h2>
            <p className={`text-sm uppercase tracking-widest font-medium ${stat.subColor}`}>
              {stat.subtitle}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
}

export default AboutBanner;