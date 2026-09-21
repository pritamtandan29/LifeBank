const donations = [
  {
    hospital: "Kokilaben Hospital",
    date: "14 Oct 2025",
    amount: "450 ml",
  },
];

export default function RecentDonations() {
  return (
    <div className="bg-[#111111] border border-gray-800 rounded-2xl mt-6">

      <div className="p-6 border-b border-gray-800">
        <h2 className="font-bold text-xl">
          Recent Donations
        </h2>
      </div>

      {donations.map((item) => (
        <div
          key={item.hospital}
          className="p-4 flex justify-between"
        >
          <div>
            <h3 className="font-semibold">
              {item.hospital}
            </h3>

            <p className="text-gray-500">
              {item.date}
            </p>
          </div>

          <span className="text-green-400">
            Completed
          </span>
        </div>
      ))}
    </div>
  );
}