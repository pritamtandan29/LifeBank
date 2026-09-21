const bloodGroups = [
  "A+",
  "A-",
  "B+",
  "B-",
  "AB+",
  "AB-",
  "O+",
  "O-",
];

export default function MedicalInfo({
  formData,
  setFormData,
}) {
  return (
    <div className="space-y-5">

      <div className="grid md:grid-cols-2 gap-5">

        <div>
          <label className="text-sm text-gray-300">
            Age *
          </label>

          <input
            type="number"
            placeholder="28"
            className="w-full mt-2 bg-[#111111] border border-gray-800 rounded-2xl px-5 py-4 text-white"
            value={formData.age}
            onChange={(e) =>
              setFormData({
                ...formData,
                age: e.target.value,
              })
            }
          />
        </div>

        <div>
          <label className="text-sm text-gray-300">
            Gender *
          </label>

          <select
            className="w-full mt-2 bg-[#111111] border border-gray-800 rounded-2xl px-5 py-4 text-white"
            value={formData.gender}
            onChange={(e) =>
              setFormData({
                ...formData,
                gender: e.target.value,
              })
            }
          >
            <option value="">Select</option>
            <option>Male</option>
            <option>Female</option>
          </select>
        </div>

      </div>

      <div>
        <h3 className="text-sm text-gray-300 mb-3">
          Blood Group *
        </h3>

        <div className="grid grid-cols-4 gap-3">
          {bloodGroups.map((group) => (
            <button
              key={group}
              type="button"
              onClick={() =>
                setFormData({
                  ...formData,
                  bloodGroup: group,
                })
              }
              className={`h-14 rounded-2xl font-bold border transition ${
                formData.bloodGroup === group
                  ? "bg-red-600 border-red-600 text-white"
                  : "bg-[#111111] border-gray-800 text-white"
              }`}
            >
              {group}
            </button>
          ))}
        </div>
      </div>

      <div>
        <label className="text-sm text-gray-300">
          Last Donation Date
        </label>

        <input
          type="date"
          className="w-full mt-2 bg-[#111111] border border-gray-800 rounded-2xl px-5 py-4 text-white"
          value={formData.lastDonation}
          onChange={(e) =>
            setFormData({
              ...formData,
              lastDonation: e.target.value,
            })
          }
        />
      </div>

    </div>
  );
}