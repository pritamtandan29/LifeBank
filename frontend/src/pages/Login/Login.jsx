import { useState } from "react";
import { Droplets } from "lucide-react";
import { Link } from "react-router-dom";

import RoleTabs from "../../components/Login/RoleTabs";
import LoginForm from "../../components/Login/LoginForm";

export default function Login() {
  const [role, setRole] = useState("Donor");

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">

      <div className="w-full max-w-lg">

        {/* Logo */}

        <div className="flex items-center gap-3 mb-10">
          <div className="bg-red-600 p-3 rounded-2xl">
            <Droplets className="text-white" />
          </div>

          <h1 className="text-3xl font-bold text-white">
            LifeBank
          </h1>
        </div>

        {/* Heading */}

        <h2 className="text-5xl font-bold text-white">
          Welcome Back
        </h2>

        <p className="text-gray-400 mt-3 mb-8">
          Sign in to your LifeBank account
        </p>

        <RoleTabs
          role={role}
          setRole={setRole}
        />

        <LoginForm role={role} />

        <p className="text-center mt-8 text-gray-400">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="text-red-500 font-semibold"
          >
            Register here
          </Link>
        </p>

      </div>

    </div>
  );
}