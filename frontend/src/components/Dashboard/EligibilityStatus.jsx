export default function EligibilityStatus({
  isEligible,
}) {
  return (
    <div
      className={`rounded-2xl border p-6 ${
        isEligible
          ? "bg-green-950 border-green-800"
          : "bg-red-950 border-red-800"
      }`}
    >
      <h2 className="text-2xl font-bold">
        {isEligible
          ? "✅ Eligible to Donate"
          : "❌ Not Eligible Yet"}
      </h2>

      <p className="mt-2 text-gray-300">
        {isEligible
          ? "You can donate blood today."
          : "You must wait until your next eligible date."}
      </p>
    </div>
  );
}