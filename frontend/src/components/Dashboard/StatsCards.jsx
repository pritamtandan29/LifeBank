import {
  Droplets,
  Heart,
  Calendar,
} from "lucide-react";

export default function StatsCards({data}) {
  
  const cards = [
    {
      title: "Total Donations",
      value: data?.totalDonations || "0",
      sub: "+1 this quarter",
      icon: <Droplets />,
    },
    {
      title: "Estimated Lives Impacted",
      value: data?.livesImpacted || "0",
      sub: "Each donation = 3 lives",
      icon: <Heart />,
    },
    {
      title: "Next Eligible",
      value: data?.nextEligible || "N/A",
      sub: "56 days after donation",
      icon: <Calendar />,
    },
  ];


  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-5">
      {cards.map((card) => (
        <div
          key={card.title}
          className="bg-[#111111] border border-gray-800 rounded-2xl p-5"
        >
          <div className="text-red-500 mb-3">
            {card.icon}
          </div>

          <h2 className="text-3xl font-bold">
            {card.value}
          </h2>

          <p className="mt-2 text-gray-400">
            {card.title}
          </p>

          <p className="text-sm text-gray-500">
            {card.sub}
          </p>
        </div>
      ))}
    </div>
  );
}