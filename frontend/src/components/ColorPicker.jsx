import React from "react";
import { ArrowLeftRight } from "lucide-react";

const ColorInput = ({ id, value, onChange }) => (
  <div className="flex items-center space-x-2">
    <div
      className="w-10 h-10 border-2 border-gray-700 rounded cursor-pointer"
      style={{ backgroundColor: value }}
      onClick={() => document.getElementById(id).click()}
    />
    <input
      id={id}
      type="color"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="sr-only"
    />
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="border bg-gray-200 text-black border-none px-2 py-2 rounded-md w-24 text-sm font-mono"
    />
  </div>
);

const ColorPicker = ({
  foregroundColor,
  backgroundColor,
  onForegroundChange,
  onBackgroundChange,
  gradientColor,
  onGradientChange,
  eyeColor1,
  eyeColor2,
  onEyeColor1Change,
  onEyeColor2Change,
  onEyeColorsSwap,
  colorMode,
  onColorModeChange,
  customEyeColor,
  onCustomEyeColorChange,
}) => {
  return (
    <div className="space-y-6">
      {/* Foreground Mode Selector */}
      <div>
        <label className="block text-sm font-medium text-gray-900 mb-2">
          Foreground Color
        </label>
        <div className="flex space-x-4 mb-4">
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="colorMode"
              checked={colorMode === "single"}
              onChange={() => onColorModeChange("single")}
            />
            <span className="text-sm text-gray-600 font-medium">Single</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="colorMode"
              checked={colorMode === "gradient"}
              onChange={() => onColorModeChange("gradient")}
            />
            <span className="text-sm text-gray-600 font-medium">Gradient</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={customEyeColor}
              onChange={(e) => onCustomEyeColorChange(e.target.checked)}
            />
            <span className="text-sm text-gray-600 font-medium">
              Customize Eye Colors
            </span>
          </label>
        </div>

        {colorMode === "single" ? (
          <ColorInput
            id="singleColor"
            value={foregroundColor}
            onChange={onForegroundChange}
          />
        ) : (
          <div className="flex items-center space-x-4">
            <ColorInput
              id="grad1"
              value={foregroundColor}
              onChange={onForegroundChange}
            />
            <ColorInput
              id="grad2"
              value={gradientColor}
              onChange={onGradientChange}
            />
            <button
              onClick={() => {
                onForegroundChange(gradientColor);
                onGradientChange(foregroundColor);
              }}
              className="p-2 rounded text-black cursor-pointer bg-gray-200 hover:bg-gray-100"
              title="Swap colors"
            >
              <ArrowLeftRight size={16} />
            </button>
          </div>
        )}
      </div>

      {/* Eye Color Toggle */}
      <div>
        {customEyeColor && (
          <div className="flex items-center space-x-4">
            <ColorInput
              id="eye1"
              value={eyeColor1}
              onChange={onEyeColor1Change}
            />
            <ColorInput
              id="eye2"
              value={eyeColor2}
              onChange={onEyeColor2Change}
            />
            <button
              onClick={onEyeColorsSwap}
              className="p-2 rounded hover:bg-gray-100 cursor-pointer text-black bg-gray-200"
              title="Swap eye colors"
            >
              <ArrowLeftRight size={16} />
            </button>
          </div>
        )}
      </div>

      {/* Background Color */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Background Color
        </label>
        <ColorInput
          id="bg"
          value={backgroundColor}
          onChange={onBackgroundChange}
        />
      </div>
    </div>
  );
};

export default ColorPicker;
