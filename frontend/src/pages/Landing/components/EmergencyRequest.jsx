import { AlertTriangle, Zap, CheckCircle } from "lucide-react";
import { useState } from "react";

const EmergencyRequest = () => {
  const [priority, setPriority] = useState("High");

  return (
    <div className="mt-0 mb-0 border-t border-gray-700 bg-black">
    <section className="bg-black py-24 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        {/* Left Side */}

        <div>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-red-800 bg-red-950 text-red-400 mb-6">
            <AlertTriangle size={16} />
            Emergency Protocol
          </div>

          <h2 className="text-4xl font-bold text-white mb-6">
            Emergency Blood Request
          </h2>

          <p className="text-gray-400 text-base leading-9 mb-10">
            Critical need? Submit an emergency request and our
            system will automatically alert the nearest available
            blood banks and trigger priority dispatch.
          </p>

          <div className="text-sm space-y-5">

            <div className="flex items-center gap-3 text-white">
              <CheckCircle className="text-green-400" />
              Request submitted instantly
            </div>

            <div className="flex items-center gap-3 text-white">
              <CheckCircle className="text-green-400" />
              Nearest banks notified automatically
            </div>

            <div className="flex items-center gap-3 text-white">
              <CheckCircle className="text-green-400" />
              Real-time fulfillment tracking
            </div>

            <div className="flex items-center gap-3 text-white">
              <CheckCircle className="text-green-400" />
              Dispatch within 60–90 minutes
            </div>

          </div>
        </div>

        {/* Right Side Form */}

        <div className="bg-[#111111] border border-gray-800 rounded-3xl p-8">

          <div className="flex items-center gap-2 text-white text-xl font-semibold mb-8">
            <Zap className="text-red-500" />
            Emergency Blood Request Form
          </div>

          <form className="space-y-5">

            <div>
              <label className="block text-gray-400 mb-2">
                Hospital Name
              </label>

              <input
                type="text"
                placeholder="Apollo Hospitals, Mumbai"
                className="w-full bg-[#181818] border border-gray-700 rounded-xl px-5 py-4 text-white"
              />
            </div>

            <div>
              <label className="block text-gray-400 mb-2">
                Patient Name / Case ID
              </label>

              <input
                type="text"
                placeholder="Patient Name or Case ID"
                className="w-full bg-[#181818] border border-gray-700 rounded-xl px-5 py-4 text-white"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">

              <div>
                <label className="block text-gray-400 mb-2">
                  Blood Group
                </label>

                <select className="w-full bg-[#181818] border border-gray-700 rounded-xl px-5 py-4 text-white">
                  <option>O+</option>
                  <option>O-</option>
                  <option>A+</option>
                  <option>A-</option>
                  <option>B+</option>
                  <option>B-</option>
                  <option>AB+</option>
                  <option>AB-</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-400 mb-2">
                  Units Required
                </label>

                <input
                  type="number"
                  defaultValue={2}
                  className="w-full bg-[#181818] border border-gray-700 rounded-xl px-5 py-4 text-white"
                />
              </div>

            </div>

            {/* Priority */}

            

            <button
              type="submit"
              className="w-full bg-red-600 hover:bg-red-700 text-white py-5 rounded-xl text-lg font-semibold"
            >
              Submit Emergency Request
            </button>

            <p className="text-center text-gray-500 text-xs">
              By submitting, you confirm this is a verified medical emergency.
            </p>

          </form>
        </div>

      </div>
    </section>
  </div>
  );
};

export default EmergencyRequest;