import Sidebar from "../../components/Dashboard/Sidebar";
import Topbar from "../../components/Dashboard/Topbar";

export default function MyProfile() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="bg-black text-white min-h-screen flex">
      <Sidebar />

      <div className="flex-1">
        <Topbar />

        <div className="p-8">

          <h1 className="text-4xl font-bold mb-8">
            My Profile
          </h1>

          <div className="bg-[#111111] border border-gray-800 rounded-3xl p-8 max-w-5xl">

            {/* Header */}

            <div className="flex items-center gap-6">

              <div className="h-20 w-20 bg-red-600 rounded-2xl flex items-center justify-center text-3xl font-bold">
                {user?.name?.charAt(0)}
              </div>

              <div>
                <h2 className="text-3xl font-bold">
                  {user?.name}
                </h2>

                <p className="text-gray-400 mt-1">
                  {user?.email}
                </p>

                <div className="flex gap-3 mt-4">

                  <span className="px-4 py-1 rounded-full bg-green-900 text-green-400 text-sm">
                    Donor
                  </span>

                  <span className="px-4 py-1 rounded-full bg-red-900 text-red-300 text-sm">
                    {user?.bloodGroup}
                  </span>

                </div>
              </div>

            </div>

            <div className="border-t border-gray-800 my-8"></div>

            {/* Details */}

            <div className="grid md:grid-cols-2 gap-y-8">

              <div>
                <p className="text-gray-500 text-sm">
                  Age
                </p>

                <p className="text-xl font-semibold mt-1">
                  {user?.age || "N/A"}
                </p>
              </div>

              <div>
                <p className="text-gray-500 text-sm">
                  Gender
                </p>

                <p className="text-xl font-semibold mt-1">
                  {user?.gender || "N/A"}
                </p>
              </div>

              <div>
                <p className="text-gray-500 text-sm">
                  Blood Group
                </p>

                <p className="text-xl font-semibold mt-1">
                  {user?.bloodGroup || "N/A"}
                </p>
              </div>

              <div>
                <p className="text-gray-500 text-sm">
                  Phone
                </p>

                <p className="text-xl font-semibold mt-1">
                  {user?.phone || "N/A"}
                </p>
              </div>

              <div>
                <p className="text-gray-500 text-sm">
                  City
                </p>

                <p className="text-xl font-semibold mt-1">
                  {user?.city || "N/A"}
                </p>
              </div>

              <div>
                <p className="text-gray-500 text-sm">
                  PIN Code
                </p>

                <p className="text-xl font-semibold mt-1">
                  {user?.pincode || "N/A"}
                </p>
              </div>

              <div className="md:col-span-2">
                <p className="text-gray-500 text-sm">
                  Address
                </p>

                <p className="text-xl font-semibold mt-1">
                  {user?.address || "N/A"}
                </p>
              </div>

            </div>

          </div>

        </div>
      </div>
    </div>
  );
}