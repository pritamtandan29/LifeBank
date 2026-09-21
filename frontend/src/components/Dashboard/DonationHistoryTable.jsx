import { Download, Droplets } from "lucide-react";

export default function DonationHistoryTable({ donations }) {
  return (
    <div className="mt-8 bg-[#111111] border border-gray-800 rounded-3xl overflow-hidden">
      {/* Header */}

      <div className="flex justify-between items-center p-6 border-b border-gray-800">
        <h2 className="text-xl font-bold">
          All Donations ({donations.length} total)
        </h2>

        <button className="flex items-center gap-2 bg-[#1A1A1A] px-4 py-2 rounded-xl text-gray-300 hover:bg-[#222]">
          <Download size={16} />
          Export PDF
        </button>
      </div>

      {/* Rows */}

      {donations.map((donation) => (
        <div
          key={donation._id}
          className="flex items-center justify-between p-6 border-b border-gray-900"
        >
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center">
              <Droplets size={16} />
            </div>

            <div>
              <h3 className="font-semibold text-lg">{donation.hospitalName}</h3>

              <p className="text-gray-400 text-sm">
                {new Date(donation.donationDate).toLocaleDateString()} •{" "}
                {donation.unitsDonated} unit donated
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <span className="bg-green-900 text-green-400 px-3 py-1 rounded-full text-sm">
              {donation.status}
            </span>

          </div>
        </div>
      ))}
    </div>
  );
}
