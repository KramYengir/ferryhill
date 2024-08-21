"use client";
import { ChevronDown, ChevronUp } from "lucide-react";
import React, { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items: FAQItem[];
}

const FAQ: React.FC<FAQProps> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="border border-neutral-300 overflow-hidden rounded-md">
      {items.map((item, index) => (
        <div key={index}>
          <div
            className="flex items-center justify-between p-4 cursor-pointer bg-gray-50 hover:bg-gray-200"
            onClick={() => handleToggle(index)}
            aria-expanded={openIndex === index}
            aria-controls={`answer-${index}`}
            id={`question-${index}`}
          >
            <h2 className="text-lg font-semibold">{item.question}</h2>
            <span className="text-xl font-semibold">
              {openIndex === index ? <ChevronUp /> : <ChevronDown />}
            </span>
          </div>
          {openIndex === index && (
            <div
              className="p-4 bg-neutral-50"
              id={`answer-${index}`}
              aria-labelledby={`question-${index}`}
            >
              <p>{item.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
