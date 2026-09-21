import { Droplets } from "lucide-react";
import { Link } from "react-router-dom";


const isLoggedIn = localStorage.getItem("token");
function Navbar() {
  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-black/30 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="bg-red-600 w-8 h-8 rounded-md flex items-center justify-center">
              <Droplets size={15} className="text-white" />
            </div>


            <h1 className="text-xl font-semibold text-white">LifeBank</h1>
          </div>

          {/* Center Menu */}
          <div className="hidden md:flex items-center gap-8 text-sm text-gray-300 font-medium">
            <a href="#" className="hover:text-white transition">
              Availability
            </a>

            <a href="#" className="hover:text-white transition">
              How It Works
            </a>

            <a href="#" className="hover:text-white transition">
              Impact
            </a>

            <a href="#" className="hover:text-white transition">
              Contact
            </a>
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-4">
            <div className="hidden lg:flex items-center gap-2 text-sm text-gray-500">
              <Link  to={isLoggedIn ? "/Dashboard" : "/login"}>Donor</Link>
              <span>•</span>
              <Link to={isLoggedIn ? "/Dashboard" : "/login"}>Hospital</Link>
              <span>•</span>
              <Link to={isLoggedIn ? "/Dashboard" : "/login"}>Admin</Link>
            </div>
            {" "}
            <Link to="/login">
              <button className="text-white text-sm font-medium hover:text-red-400 transition">
                Sign In
              </button>
            </Link>
            <Link to="/register">
              <button className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg text-sm font-semibold text-white transition">
                Register
              </button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Spacer because navbar is fixed */}
      <div className="h-16"></div>
    </>
  );
}

export default Navbar;
