import {
  LayoutDashboard,
  User,
  History,
  HeartPulse,
  Calendar,
  Bell,
  Settings,
  Droplets,
} from "lucide-react";

import { Link, useLocation } from "react-router-dom";

export default function Sidebar() {
  const location = useLocation();

  const menuItems = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: LayoutDashboard,
    },
    {
      name: "My Profile",
      path: "/dashboard/profile",
      icon: User,
    },
    {
      name: "Donation History",
      path: "/dashboard/history",
      icon: History,
    },
    {
      name: "Eligibility",
      path: "/dashboard/eligibility",
      icon: HeartPulse,
    },
  ];

  return (
    <div className="w-64 bg-[#080808] border-r border-gray-900 flex flex-col">
      
      {/* Logo */}
      <div className="p-6 flex items-center gap-3">
        <div className="bg-red-600 p-3 rounded-xl">
          <Droplets />
        </div>

        <div>
          <h2 className="font-bold text-xl text-white">
            LifeBank
          </h2>

          <p className="text-xs text-gray-500">
            Donor Portal
          </p>
        </div>
      </div>

      {/* Menu */}
      <div className="px-4 mt-4 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.name}
              to={item.path}
              className={`w-full flex items-center gap-3 p-4 rounded-xl transition-all duration-200
                ${
                  location.pathname === item.path
                    ? "bg-red-950 text-red-400"
                    : "text-gray-400 hover:bg-[#111111]"
                }`}
            >
              <Icon size={18} />
              {item.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
}