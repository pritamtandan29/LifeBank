export default function RoleTabs({ role, setRole }) {
  const roles = [
    "Donor",
    "Hospital",
    "Blood Bank",
    "Admin",
  ];

  return (
    <div className="bg-[#111111] rounded-2xl p-1 grid grid-cols-4 mb-8">
      {roles.map((item) => (
        <button
          key={item}
          onClick={() => setRole(item)}
          className={`py-3 rounded-xl text-sm font-medium transition-all ${
            role === item
              ? "bg-red-600 text-white"
              : "text-gray-400"
          }`}
        >
          {item}
        </button>
      ))}
    </div>
  );
}