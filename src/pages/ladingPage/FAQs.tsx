import { CaretDown, CaretUp } from "@phosphor-icons/react";
import { useState } from "react";

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  const faqs = [
    {
    default: 'Lorem ipsum dolor sit amet, consectetur adi elit.',
      question: "What services does Belsoft Systems offer?",
      answer:
        "Belsoft Systems offers web development, mobile app development, desktop software development, maintenance, and technical support.",
    },
    {
      question: "How do i get started with Belsoft System?",
      answer: "We cate to diverse industries including healthcare finance, education, e-commerce, and entertainment.",
    },
    {
      question: "What industries does Belsoft system serve?",
      answer: "simply reach out to us through our contact form or email and we'll promptly discuss your project requirments and provide a personalized solution",
    },
    {
      question: "What technologies does Belsoft Systems use",
      answer: "we specialize in javaScript, phython, java , PHP, swift, React Native, and more",
    },
    {
      question: "How does Belsoft Systems ensure project security?",
      answer: "we follow industry best practices for secure coding and implement robust security ",
    },
  ];

  return (
    <div className="px-[5%] py-10 mb-10">
      <h2 className="text-2xl sm:text-3xl font-bold mb-5">
        FAQs
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 px-10">
        {faqs.map((faq, index) => (
          <div key={index} className="">
            <div
              className={`flex ${
                openIndex === index ? "text-purple-600" : "text-black"
              }`}
              onClick={() => toggleAccordion(index)}
            >
             <h1 className="text-2xl"> {faq.question}</h1>
              <span>
                {openIndex === index ? (
                  <CaretUp size={24} />
                ) : (
                  <CaretDown size={24} />
                )}
              </span>
            </div>
            {openIndex === index && (
              <p className="text-wrap">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQs;
