export default function EligibilityDetails({
  lastDonationDate,
  nextEligibleDate,
  daysSinceLastDonation,
}) {
  return (
    <div className="bg-[#111111] border border-gray-800 rounded-2xl p-6">
      <h2 className="text-xl font-bold mb-6">
        Donation Eligibility Details
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        <div>
          <p className="text-gray-500 text-sm">
            Last Donation Date
          </p>

          <p className="text-lg font-semibold mt-2">
            {lastDonationDate
              ? new Date(
                  lastDonationDate
                ).toLocaleDateString()
              : "N/A"}
          </p>
        </div>

        <div>
          <p className="text-gray-500 text-sm">
            Next Eligible Date
          </p>

          <p className="text-lg font-semibold mt-2">
            {nextEligibleDate
              ? new Date(
                  nextEligibleDate
                ).toLocaleDateString()
              : "Eligible Now"}
          </p>
        </div>

        <div>
          <p className="text-gray-500 text-sm">
            Days Since Last Donation
          </p>

          <p className="text-lg font-semibold mt-2">
            {daysSinceLastDonation ??
              "N/A"}
          </p>
        </div>
      </div>
    </div>
  );
}