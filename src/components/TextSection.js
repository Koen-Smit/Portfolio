import { useState } from "react";
import { ChevronDown } from "lucide-react";

const TextSection = ({ title, description, children, collapsible = false }) => {
  const [isOpen, setIsOpen] = useState(!collapsible);


  return (
    <div className="mt-8 w-full max-w-3xl bg-gray-800 p-6 rounded-lg shadow-lg">
      <button
        onClick={() => collapsible && setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between text-left text-3xl font-semibold text-green-500 border-b pb-2"
      >
        {title}
        {collapsible && (
          <ChevronDown
            className={`w-6 h-6 transition-transform ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
          />
        )}
      </button>
      {description && isOpen && <p className="text-gray-400 mt-2">{description}</p>}
      {isOpen && children}
    </div>
  );
};

export default TextSection;
