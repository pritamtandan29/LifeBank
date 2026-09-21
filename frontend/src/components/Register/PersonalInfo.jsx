export default function PersonalInfo({ formData, setFormData }) {
  return (
    <div className="space-y-5">

      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <label className="text-gray-300 text-sm">
            First Name *
          </label>

          <input
            type="text"
            placeholder="Rahul"
            className="w-full mt-2 bg-[#111111] border border-gray-800 rounded-2xl px-5 py-4 text-white outline-none focus:border-red-500"
            value={formData.firstName}
            onChange={(e) =>
              setFormData({
                ...formData,
                firstName: e.target.value,
              })
            }
          />
        </div>

        <div>
          <label className="text-gray-300 text-sm">
            Last Name *
          </label>

          <input
            type="text"
            placeholder="Verma"
            className="w-full mt-2 bg-[#111111] border border-gray-800 rounded-2xl px-5 py-4 text-white outline-none focus:border-red-500"
            value={formData.lastName}
            onChange={(e) =>
              setFormData({
                ...formData,
                lastName: e.target.value,
              })
            }
          />
        </div>
      </div>

      <div>
        <label className="text-gray-300 text-sm">
          Email Address *
        </label>

        <input
          type="email"
          placeholder="rahul.verma@email.com"
          className="w-full mt-2 bg-[#111111] border border-gray-800 rounded-2xl px-5 py-4 text-white outline-none focus:border-red-500"
          value={formData.email}
          onChange={(e) =>
            setFormData({
              ...formData,
              email: e.target.value,
            })
          }
        />
      </div>

      <div>
        <label className="text-gray-300 text-sm">
          Phone Number *
        </label>

        <input
          type="text"
          placeholder="+91 98765 43210"
          className="w-full mt-2 bg-[#111111] border border-gray-800 rounded-2xl px-5 py-4 text-white outline-none focus:border-red-500"
          value={formData.phone}
          onChange={(e) =>
            setFormData({
              ...formData,
              phone: e.target.value,
            })
          }
        />
      </div>

    </div>
  );
}