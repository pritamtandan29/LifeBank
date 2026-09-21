export default function BloodGroupCard() {
  const user = JSON.parse(localStorage.getItem("user"));
  
  return (
    <div className="bg-[#111111] border border-gray-800 rounded-2xl p-6 h-full">

      <p className="text-center text-gray-400 tracking-widest">
        BLOOD GROUP
      </p>

      <div className="flex justify-center mt-8">
        <div className="bg-red-600 h-16 w-16 rounded-3xl flex items-center justify-center text-3xl font-bold">
          {user?.bloodGroup}
        </div>
      </div>

      <h3 className="text-center mt-5 text-xl">
        Universal Donor
      </h3>

      <div className="flex justify-center mt-4">
        <span className="bg-green-900 text-green-400 px-4 py-2 rounded-full">
          High Demand
        </span>
      </div>

    </div>
  );
}