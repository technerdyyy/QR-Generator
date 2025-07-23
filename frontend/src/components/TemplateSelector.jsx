import React from "react";
import { X } from "lucide-react";

const TemplateSelector = ({ selectedTemplate, onTemplateChange, onClose }) => {
  const templates = [
    { id: "classic", name: "Classic", color: "#000000" },
    { id: "easy", name: "Easy", color: "#1e40af" },
    { id: "facebook", name: "Facebook", color: "#1877f2" },
    { id: "twitter", name: "Twitter", color: "#1da1f2" },
    { id: "youtube", name: "Youtube", color: "#ff0000" },
    { id: "monkey", name: "Monkey", color: "#10b981" },
    { id: "rain", name: "Rain", color: "#0ea5e9" },
    { id: "jungle", name: "Jungle", color: "#059669" },
    { id: "mosaic", name: "Mosaic", color: "#8b5cf6" },
    { id: "dot", name: "Dot", color: "#06b6d4" },
    { id: "coffee", name: "Coffee", color: "#92400e" },
    { id: "ninja", name: "Ninja", color: "#dc2626" },
    { id: "bitcoin", name: "Bitcoin", color: "#f59e0b" },
  ];

  return (
    <div className="bg-white rounded-lg p-6 border border-gray-200 mb-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-800">PICK A TEMPLATE</h3>
        <button
          onClick={onClose}
          className="text-gray-500 hover:text-gray-700 transition-colors"
        >
          <X size={20} />
        </button>
      </div>

      <p className="text-gray-600 mb-4">CUSTOMIZE DESIGN</p>

      <div className="grid grid-cols-6 gap-4">
        {templates.map((template) => (
          <div
            key={template.id}
            className={`cursor-pointer p-4 rounded-lg border-2 transition-all ${
              selectedTemplate === template.id
                ? "border-primary-500 bg-primary-50"
                : "border-gray-200 hover:border-gray-300"
            }`}
            onClick={() => onTemplateChange(template.id)}
          >
            <div className="w-16 h-16 mx-auto mb-2 bg-gray-100 rounded flex items-center justify-center">
              <div
                className="w-12 h-12 rounded"
                style={{ backgroundColor: template.color }}
              />
            </div>
            <p className="text-xs text-center font-medium text-gray-700">
              {template.name}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-6 flex space-x-2">
        {Array.from({ length: 18 }).map((_, i) => (
          <div
            key={i}
            className="w-8 h-8 bg-gray-200 rounded cursor-pointer hover:bg-gray-300 transition-colors"
          />
        ))}
      </div>
    </div>
  );
};

export default TemplateSelector;
