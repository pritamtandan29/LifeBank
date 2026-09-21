import { useState } from "react";
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
} from "lucide-react";

import { loginUser } from "../../services/authApi";
import { useNavigate } from "react-router-dom";

export default function LoginForm({ role }) {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] =
    useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] =
    useState("");

  const handleLogin = async () => {
    try {
      const response = await loginUser({
        email,
        password,
      });

      localStorage.setItem(
        "token",
        response.token
      );

      localStorage.setItem(
        "user",
        JSON.stringify(response.user)
      );

      alert(response.message);

      // Redirect based on role
      if (response.user.role === "admin") {
        navigate("/admin");
      } else if (
        response.user.role === "hospital"
      ) {
        navigate("/hospital");
      } else {
        navigate("/dashboard");
      }

    } catch (error) {
      alert(
        error.response?.data?.message ||
          "Login failed"
      );
    }
  };

  return (
    <>
      {/* Email */}

      <div className="mb-5">
        <label className="block text-sm text-gray-400 mb-2">
          Email Address
        </label>

        <div className="relative">
          <Mail
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
          />

          <input
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            className="w-full bg-[#111111] border border-gray-800 rounded-2xl py-4 pl-12 pr-4 text-white outline-none"
          />
        </div>
      </div>

      {/* Password */}

      <div>
        <label className="block text-sm text-gray-400 mb-2">
          Password
        </label>

        <div className="relative">
          <Lock
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
          />

          <input
            type={
              showPassword
                ? "text"
                : "password"
            }
            placeholder="••••••••"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
            className="w-full bg-[#111111] border border-gray-800 rounded-2xl py-4 pl-12 pr-12 text-white outline-none"
          />

          <button
            type="button"
            onClick={() =>
              setShowPassword(
                !showPassword
              )
            }
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
          >
            {showPassword ? (
              <EyeOff size={18} />
            ) : (
              <Eye size={18} />
            )}
          </button>
        </div>
      </div>

      {/* Remember */}

      <div className="flex justify-between items-center mt-5 mb-8">
        <label className="flex items-center gap-2 text-gray-300">
          <input type="checkbox" />
          Remember me
        </label>

        <button className="text-red-500">
          Forgot password?
        </button>
      </div>

      {/* Login */}

      <button
        onClick={handleLogin}
        className="w-full bg-red-600 hover:bg-red-700 transition py-4 rounded-2xl text-white font-semibold"
      >
        Sign In as {role}
      </button>

      {/* Divider */}

      <div className="text-center text-gray-500 my-8">
        or continue with
      </div>

      {/* Social */}

      <div className="grid grid-cols-2 gap-4">
        <button className="bg-[#111111] border border-gray-800 rounded-2xl py-4 text-white">
          Google
        </button>

        <button className="bg-[#111111] border border-gray-800 rounded-2xl py-4 text-white">
          Microsoft
        </button>
      </div>
    </>
  );
}