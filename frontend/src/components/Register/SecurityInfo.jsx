export default function SecurityInfo({
  formData,
  setFormData,
}) {
  return (
    <div className="space-y-5">

      <div>
        <label className="text-sm text-gray-300">
          Password *
        </label>

        <input
          type="password"
          placeholder="Minimum 8 characters"
          className="w-full mt-2 bg-[#111111] border border-gray-800 rounded-2xl px-5 py-4"
          value={formData.password}
          onChange={(e) =>
            setFormData({
              ...formData,
              password: e.target.value,
            })
          }
        />
      </div>

      <div>
        <label className="text-sm text-gray-300">
          Confirm Password *
        </label>

        <input
          type="password"
          placeholder="Repeat password"
          className="w-full mt-2 bg-[#111111] border border-gray-800 rounded-2xl px-5 py-4"
          value={formData.confirmPassword}
          onChange={(e) =>
            setFormData({
              ...formData,
              confirmPassword: e.target.value,
            })
          }
        />
      </div>

      <label className="flex items-start gap-3">
        <input type="checkbox" />
        <span className="text-gray-300 text-sm">
          I confirm my medical eligibility to donate blood.
        </span>
      </label>

      <label className="flex items-start gap-3">
        <input type="checkbox" defaultChecked />
        <span className="text-gray-300 text-sm">
          Receive donation reminders and emergency alerts.
        </span>
      </label>

    </div>
  );
}