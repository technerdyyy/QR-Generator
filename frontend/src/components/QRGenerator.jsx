import React, { useState } from "react";
import QRPreview from "./QRPreview";
import ColorPicker from "./ColorPicker";
import ContentSelector from "./ContentSelector";
import LogoUploader from "./LogoUploader";
import CustomizeDesign from "./CustomizeDesign";
import { ChevronDown, ChevronUp } from "lucide-react";

const QRGenerator = () => {
  const [activeSection, setActiveSection] = useState("content");

  const [selectedType, setSelectedType] = useState("url");
  const [content, setContent] = useState("");
  const [finalSettings, setFinalSettings] = useState({
    value: "",
    foregroundColor: "#000000",
    gradientColor: "#a5bb02",
    backgroundColor: "#ffffff",
    colorMode: "gradient",
    eyeColor1: "#000000",
    eyeColor2: "#000000",
    customEyeColor: false,
  });

  const [foregroundColor, setForegroundColor] = useState("#000000");
  const [gradientColor, setGradientColor] = useState("#a5bb02");
  const [backgroundColor, setBackgroundColor] = useState("#ffffff");

  const [colorMode, setColorMode] = useState("gradient");
  const [eyeColor1, setEyeColor1] = useState("#000000");
  const [eyeColor2, setEyeColor2] = useState("#000000");
  const [customEyeColor, setCustomEyeColor] = useState(false);
  const [logoImage, setLogoImage] = useState(null);
  const [removeBackground, setRemoveBackground] = useState(false);

  const handleGenerate = () => {
    setFinalSettings({
      value: content,
      foregroundColor,
      gradientColor,
      backgroundColor,
      colorMode,
      eyeColor1,
      eyeColor2,
      customEyeColor,
      removeBackground,
    });
  };

  const handleEyeColorsSwap = () => {
    setEyeColor1(eyeColor2);
    setEyeColor2(eyeColor1);
  };

  const renderSection = (id, title, component) => (
    <div className="border rounded-md shadow-sm overflow-hidden">
      <button
        onClick={() => setActiveSection((prev) => (prev === id ? "" : id))}
        className="w-full flex justify-between items-center bg-gray-200 px-4 py-3 font-semibold text-left text-gray-800"
      >
        {title}
        {activeSection === id ? (
          <ChevronUp size={20} />
        ) : (
          <ChevronDown size={20} />
        )}
      </button>
      {activeSection === id && (
        <div className="bg-white px-4 py-4">{component}</div>
      )}
    </div>
  );

  return (
    <main className="py-10 px-4">
      <div className="max-w-7xl mx-auto bg-white rounded-xl shadow-md p-6 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Panel */}
        <div className="col-span-1 lg:col-span-2 space-y-4">
          {renderSection(
            "content",
            "Enter Content",
            <ContentSelector
              selectedType={selectedType}
              setSelectedType={setSelectedType}
              content={content}
              setContent={setContent}
            />
          )}
          {renderSection(
            "color",
            "Set Colors",
            <ColorPicker
              foregroundColor={foregroundColor}
              backgroundColor={backgroundColor}
              onForegroundChange={setForegroundColor}
              onBackgroundChange={setBackgroundColor}
              gradientColor={gradientColor}
              onGradientChange={setGradientColor}
              colorMode={colorMode}
              onColorModeChange={setColorMode}
              eyeColor1={eyeColor1}
              eyeColor2={eyeColor2}
              onEyeColor1Change={setEyeColor1}
              onEyeColor2Change={setEyeColor2}
              onEyeColorsSwap={handleEyeColorsSwap}
              customEyeColor={customEyeColor}
              onCustomEyeColorChange={setCustomEyeColor}
            />
          )}
          {renderSection(
            "logo",
            "Add Logo Image",
            <LogoUploader
              logoImage={logoImage}
              onLogoUpload={setLogoImage}
              onRemoveLogo={() => setLogoImage(null)}
              onRemoveBackgroundChange={setRemoveBackground}
            />
          )}
          {renderSection("design", "Customize Design", <CustomizeDesign />)}
          {/* {renderSection("template", "Choose Template", <TemplateSelector />)} */}

          <div className="relative border-t pt-4">
            <p className="text-sm text-gray-600 mb-2">
              <span className="text-blue-500 cursor-pointer hover:underline">
                Upload MP3, PDF or any file
              </span>{" "}
              you wish to your QR Code.
            </p>
          </div>
        </div>

        {/* Right Preview Panel */}
        <div className="col-span-1">
          <QRPreview
            value={finalSettings.value}
            foregroundColor={finalSettings.foregroundColor}
            backgroundColor={finalSettings.backgroundColor}
            gradientColor={finalSettings.gradientColor}
            eyeColor1={finalSettings.eyeColor1}
            eyeColor2={finalSettings.eyeColor2}
            colorMode={finalSettings.colorMode}
            customEyeColor={finalSettings.customEyeColor}
            onGenerate={handleGenerate}
            logoImage={logoImage}
            removeBackground={finalSettings.removeBackground}
          />
        </div>
      </div>
    </main>
  );
};

export default QRGenerator;
