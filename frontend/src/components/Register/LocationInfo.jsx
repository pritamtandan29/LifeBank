export default function LocationInfo({
  formData,
  setFormData,
}) {
  return (
    <div className="space-y-5">

      <div>
        <label className="text-sm text-gray-300">
          City *
        </label>

        <input
          type="text"
          placeholder="Mumbai"
          className="w-full mt-2 bg-[#111111] border border-gray-800 rounded-2xl px-5 py-4"
          value={formData.city}
          onChange={(e) =>
            setFormData({
              ...formData,
              city: e.target.value,
            })
          }
        />
      </div>

      <div>
        <label className="text-sm text-gray-300">
          Full Address *
        </label>

        <textarea
          rows="4"
          placeholder="123, Andheri West, Mumbai"
          className="w-full mt-2 bg-[#111111] border border-gray-800 rounded-2xl px-5 py-4"
          value={formData.address}
          onChange={(e) =>
            setFormData({
              ...formData,
              address: e.target.value,
            })
          }
        />
      </div>

      <div>
        <label className="text-sm text-gray-300">
          PIN Code
        </label>

        <input
          type="text"
          placeholder="400053"
          className="w-full mt-2 bg-[#111111] border border-gray-800 rounded-2xl px-5 py-4"
          value={formData.pincode}
          onChange={(e) =>
            setFormData({
              ...formData,
              pincode: e.target.value,
            })
          }
        />
      </div>

    </div>
  );
}