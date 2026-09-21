import { useState } from "react";
import { Droplets, Check, ArrowRight, ArrowLeft } from "lucide-react";

import PersonalInfo from "../../components/Register/PersonalInfo";
import MedicalInfo from "../../components/Register/MedicalInfo";
import LocationInfo from "../../components/Register/LocationInfo";
import SecurityInfo from "../../components/Register/SecurityInfo";
import { Link } from "react-router-dom";
import { registerUser } from "../../services/authApi";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",

    age: "",
    gender: "",
    bloodGroup: "",
    lastDonation: "",

    city: "",
    address: "",
    pincode: "",

    password: "",
    confirmPassword: "",
  });

  const handleRegister = async () => {
    try {
      const userData = {
        name: formData.firstName + " " + formData.lastName,

        email: formData.email,
        password: formData.password,

        role: "donor",

        phone: formData.phone,
        bloodGroup: formData.bloodGroup,

        age: Number(formData.age),
        gender: formData.gender,

        city: formData.city,
        address: formData.address,
        pincode: formData.pincode,
      };

      const response = await registerUser(userData);

      alert(response.message);

      navigate("/login");
    } catch (error) {
      alert(error.response?.data?.message || "Registration failed");
    }
  };

  const steps = ["Personal Info", "Medical Info", "Location", "Security"];

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  return (
    <div className="min-h-screen bg-black text-white flex justify-center items-center px-4">
      <div className="w-full max-w-2xl">
        {/* Logo */}

        <div className="flex items-center gap-3 mb-8">
          <div className="bg-red-600 p-3 rounded-2xl">
            <Droplets size={26} />
          </div>

          <h2 className="text-3xl font-bold">LifeBank</h2>
        </div>

        {/* Heading */}

        <h1 className="text-5xl font-bold">Create your account</h1>

        <p className="text-gray-400 mt-3">
          Register as a blood donor and start saving lives.
        </p>

        {/* Stepper */}

        <div className="flex items-center justify-between mt-12 mb-12">
          {steps.map((label, index) => {
            const current = index + 1;

            return (
              <div key={current} className="flex items-center flex-1">
                <div className="flex flex-col items-center">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center font-bold
                    ${
                      step > current
                        ? "bg-emerald-500"
                        : step === current
                          ? "bg-red-600"
                          : "bg-[#1A1A1A]"
                    }`}
                  >
                    {step > current ? <Check size={18} /> : current}
                  </div>

                  <span
                    className={`text-sm mt-3 ${
                      step === current ? "text-white" : "text-gray-500"
                    }`}
                  >
                    {label}
                  </span>
                </div>

                {current < 4 && (
                  <div
                    className={`flex-1 h-px mx-4 ${
                      step > current ? "bg-emerald-500" : "bg-gray-800"
                    }`}
                  />
                )}
              </div>
            );
          })}
        </div>

        {/* Form Card */}

        <div className="bg-[#0D0D0D] border border-gray-900 rounded-3xl p-8">
          {step === 1 && (
            <PersonalInfo formData={formData} setFormData={setFormData} />
          )}

          {step === 2 && (
            <MedicalInfo formData={formData} setFormData={setFormData} />
          )}

          {step === 3 && (
            <LocationInfo formData={formData} setFormData={setFormData} />
          )}

          {step === 4 && (
            <SecurityInfo formData={formData} setFormData={setFormData} />
          )}

          {/* Buttons */}

          <div className="flex gap-4 mt-8">
            {step > 1 && (
              <button
                onClick={prevStep}
                className="flex-1 bg-[#151515] border border-gray-800 py-4 rounded-2xl flex items-center justify-center gap-2"
              >
                <ArrowLeft size={18} />
                Back
              </button>
            )}

            {step < 4 ? (
              <button
                onClick={nextStep}
                className="flex-1 bg-red-600 hover:bg-red-700 py-4 rounded-2xl flex items-center justify-center gap-2"
              >
                Continue
                <ArrowRight size={18} />
              </button>
            ) : (
              <button
                onClick={handleRegister}
                className="flex-1 bg-red-600 hover:bg-red-700 py-4 rounded-2xl"
              >
                Create Account
              </button>
            )}
          </div>
        </div>

        <p className="text-center mt-8 text-gray-400">
          Already have an account?
          <span className="text-red-500 ml-2 font-semibold cursor-pointer">
            <Link to="/login">Sign in</Link>
          </span>
        </p>
      </div>
    </div>
  );
}
