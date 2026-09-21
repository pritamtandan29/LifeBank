import { Check } from "lucide-react";

export default function StepIndicator({ step }) {
  const steps = [
    "Personal Info",
    "Medical Info",
    "Location",
    "Security",
  ];

  return (
    <div className="flex items-center justify-between">

      {steps.map((label, index) => {
        const stepNumber = index + 1;

        return (
          <div
            key={stepNumber}
            className="flex items-center flex-1"
          >
            <div className="flex flex-col items-center">

              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center font-bold

                ${
                  step > stepNumber
                    ? "bg-emerald-500 text-white"
                    : step === stepNumber
                    ? "bg-red-600 text-white"
                    : "bg-[#20232d] text-gray-400"
                }
                `}
              >
                {step > stepNumber ? (
                  <Check size={18} />
                ) : (
                  stepNumber
                )}
              </div>

              <p
                className={`mt-3 text-sm whitespace-nowrap

                ${
                  step === stepNumber
                    ? "text-white font-semibold"
                    : "text-gray-500"
                }
                `}
              >
                {label}
              </p>
            </div>

            {index !== steps.length - 1 && (
              <div
                className={`flex-1 h-px mx-4

                ${
                  step > stepNumber
                    ? "bg-emerald-500"
                    : "bg-gray-800"
                }
                `}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}