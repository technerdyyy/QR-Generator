import React from "react";
import { Settings } from "lucide-react";

const CustomizeDesign = ({
  bodyShape,
  eyeFrameShape,
  eyeBallShape,
  onBodyShapeChange,
  onEyeFrameChange,
  onEyeBallChange,
}) => {
  const bodyShapes = [
    "square",
    "rounded",
    "circle",
    "diamond",
    "leaf",
    "star",
    "heart",
    "cross",
    "triangle",
    "hexagon",
    "octagon",
    "plus",
    "minus",
    "flower",
    "butterfly",
    "arrow",
    "zigzag",
    "wave",
    "spiral",
    "lightning",
  ];

  const eyeFrameShapes = [
    "square",
    "rounded",
    "circle",
    "diamond",
    "leaf",
    "star",
    "heart",
    "cross",
    "triangle",
    "hexagon",
    "octagon",
    "plus",
    "minus",
    "flower",
    "butterfly",
  ];

  const eyeBallShapes = [
    "square",
    "rounded",
    "circle",
    "diamond",
    "leaf",
    "star",
    "heart",
    "cross",
    "triangle",
    "hexagon",
    "octagon",
    "plus",
    "minus",
    "flower",
    "butterfly",
    "arrow",
    "zigzag",
  ];

  return (
    <div className="bg-white rounded-lg p-6 border border-gray-200 mb-6">
      <div className="flex items-center space-x-2 mb-4">
        <Settings size={20} className="text-primary-600" />
        <h3 className="text-lg font-semibold text-gray-800">
          CUSTOMIZE DESIGN
        </h3>
      </div>

      <div className="space-y-6">
        <div>
          <h4 className="text-sm font-medium text-gray-700 mb-3">Body Shape</h4>
          <div className="grid grid-cols-10 gap-2">
            {bodyShapes.map((shape, index) => (
              <div
                key={shape}
                className={`w-8 h-8 border-2 cursor-pointer rounded transition-all ${
                  bodyShape === shape
                    ? "border-primary-500 bg-primary-50"
                    : "border-gray-200 hover:border-gray-300"
                }`}
                onClick={() => onBodyShapeChange(shape)}
              >
                <div className="w-full h-full bg-gray-800 rounded-sm" />
              </div>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-medium text-gray-700 mb-3">
            Eye Frame Shape
          </h4>
          <div className="grid grid-cols-10 gap-2">
            {eyeFrameShapes.map((shape, index) => (
              <div
                key={shape}
                className={`w-8 h-8 border-2 cursor-pointer rounded transition-all ${
                  eyeFrameShape === shape
                    ? "border-primary-500 bg-primary-50"
                    : "border-gray-200 hover:border-gray-300"
                }`}
                onClick={() => onEyeFrameChange(shape)}
              >
                <div className="w-full h-full border-2 border-gray-800 rounded-sm" />
              </div>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-medium text-gray-700 mb-3">
            Eye Ball Shape
          </h4>
          <div className="grid grid-cols-10 gap-2">
            {eyeBallShapes.map((shape, index) => (
              <div
                key={shape}
                className={`w-8 h-8 border-2 cursor-pointer rounded transition-all ${
                  eyeBallShape === shape
                    ? "border-primary-500 bg-primary-50"
                    : "border-gray-200 hover:border-gray-300"
                }`}
                onClick={() => onEyeBallChange(shape)}
              >
                <div className="w-full h-full bg-gray-800 rounded-full" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomizeDesign;
