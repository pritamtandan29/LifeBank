import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "Who can donate blood?",
    answer:
      "Anyone aged 18–65, weighing over 50 kg, with no major health conditions can donate."
  },
  {
    question: "How long does a donation take?",
    answer:
      "The complete donation process usually takes 30–45 minutes."
  },
  {
    question: "Is blood donation safe?",
    answer:
      "Yes. Sterile equipment is used for every donation."
  },
  {
    question: "How do I request blood in an emergency?",
    answer:
      "Use the emergency request form available on our platform."
  },
  {
    question: "Can I track my donation?",
    answer:
      "Yes. Donors can track the status of their donations."
  },
  {
    question: "What blood groups are always in demand?",
    answer:
      "O−, AB−, and rare blood groups are generally in higher demand."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="mt-0 mb-0 border-t border-gray-700 bg-black">
    <section className="py-12 px-4 bg-black text-white">
      <div className="max-w-3xl mx-auto">

        <p className="text-xl font-bold text-red-500 uppercase tracking-widest text-center mb-2">
          FAQ
        </p>

        <h2 className="text-4xl font-bold text-center mb-12">
          Common Questions
        </h2>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-4 text-left"
              >
                <span className="font-semibold text-lg">
                  {faq.question}
                </span>

                {openIndex === index ? (
                  <ChevronUp size={20} />
                ) : (
                  <ChevronDown size={20} />
                )}
              </button>

              {openIndex === index && (
                <div className="px-6 pb-6 text-gray-400">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
    </div>
  );
};

export default FAQ;