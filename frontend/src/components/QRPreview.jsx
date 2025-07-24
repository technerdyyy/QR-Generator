import React, { useState, useEffect, useRef } from "react";
import QRCodeStyling from "qr-code-styling";

const QRPreview = ({
  value,
  foregroundColor,
  backgroundColor,
  gradientColor,
  eyeColor1,
  eyeColor2,
  colorMode,
  customEyeColor,
  pixelSize = 8,
  onGenerate,
  logoImage,
  removeBackground,
}) => {
  const size = pixelSize * 35;
  const [quality, setQuality] = useState(8);
  const [shouldGenerate, setShouldGenerate] = useState(false);
  const qrRef = useRef(null);
  const qrCodeRef = useRef(null);

  const createQRCode = () => {
    const isGradient = colorMode === "gradient";

    // Create base QR code
    const qrCode = new QRCodeStyling({
      width: size,
      height: size,
      data: value || "Sample QR Code",
      dotsOptions: {
        type: "rounded",
        ...(isGradient
          ? {
              gradient: {
                type: "linear",
                rotation: 0,
                colorStops: [
                  { offset: 0, color: foregroundColor || "#000000" },
                  { offset: 1, color: gradientColor || "#0000ff" },
                ],
              },
            }
          : {
              color: foregroundColor || "#000000",
            }),
      },
      backgroundOptions: {
        color: backgroundColor || "#ffffff",
      },
      cornersSquareOptions: {
        color: customEyeColor
          ? eyeColor1 || "#000000"
          : foregroundColor || "#000000",
        type: "extra-rounded",
      },
      cornersDotOptions: {
        color: customEyeColor
          ? eyeColor2 || "#000000"
          : foregroundColor || "#000000",
        type: "dot",
      },
      // Add logo image if available
      ...(logoImage && {
        image: logoImage,
        imageOptions: {
          crossOrigin: "anonymous",
          imageSize: 0.5,
          hideBackgroundDots: removeBackground,
        },
      }),
    });

    qrCodeRef.current = qrCode;

    if (qrRef.current) {
      qrRef.current.innerHTML = "";
      qrCode.append(qrRef.current);
    }
  };

  useEffect(() => {
    createQRCode();
    if (shouldGenerate) {
      setShouldGenerate(false);
    }
  }, [shouldGenerate]);

  const handleGenerate = () => {
    setShouldGenerate(true); // trigger QR generation AFTER render
    onGenerate?.();
  };

  const handleDownload = () => {
    if (qrCodeRef.current) {
      qrCodeRef.current.download({
        name: "qr-code",
        extension: "png",
      });
    }
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-xl border border-purple-100">
      <div className="flex flex-col items-center space-y-4">
        <div ref={qrRef}></div>

        <div className="px-2">
          <input
            type="range"
            min="4"
            max="16"
            value={quality}
            onChange={(e) => setQuality(Number(e.target.value))}
            className="w-full"
          />
          <div className="text-md font-semibold text-center text-gray-500 mt-1">
            {quality * 100} x {quality * 100} Px
          </div>
        </div>

        <div className="flex space-x-2">
          <button
            onClick={handleGenerate}
            className="px-6 py-3 bg-gradient-to-r from-purple-600 to-purple-400 text-white rounded-xl font-semibold hover:from-purple-700 hover:to-purple-600 transition-all duration-200 transform hover:scale-105 shadow-lg cursor-pointer"
          >
            Generate QR Code
          </button>
          <button
            onClick={handleDownload}
            className="text-center px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all duration-200 transform hover:scale-105 shadow-lg cursor-pointer"
          >
            Download PNG
          </button>
        </div>

        <p className="text-xs text-gray-500 text-center max-w-xs">
          * Now supports color gradients with qr-code-styling
        </p>
      </div>
    </div>
  );
};

export default QRPreview;
