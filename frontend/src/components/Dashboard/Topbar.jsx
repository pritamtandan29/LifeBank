import {
  Moon,
  Bell
} from "lucide-react";

export default function Topbar() {
  return (
    <div className="h-16 border-b border-gray-900 flex items-center justify-between px-8">

      <h2 className="font-semibold text-xl">
        Dashboard
      </h2>

      <div className="flex items-center gap-5">

        <Moon size={18} />

        <Bell size={18} />

        <div className="w-10 h-10 rounded-xl bg-red-600 flex items-center justify-center font-bold">
          R
        </div>

      </div>

    </div>
  );
}