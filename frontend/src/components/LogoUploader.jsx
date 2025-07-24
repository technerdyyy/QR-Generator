import React, { useEffect, useRef, useState } from "react";
import { Image as ImageIcon } from "lucide-react";

import whatsapp from "../../public/logo/whatsapp.png";
import youtube from "../../public/logo/youtube.png";
import instagram from "../../public/logo/instagram.png";
import facebookSquare from "../../public/logo/facebook-square.png";
import facebookRound from "../../public/logo/facebook-round.png";
import linkedin from "../../public/logo/linkedin.png";
import gmail from "../../public/logo/gmail.png";
import playstore from "../../public/logo/playstore.png";
import telephone from "../../public/logo/telephone-call.png";

const LogoUploader = ({
  logoImage,
  onLogoUpload,
  onRemoveLogo,
  onRemoveBackgroundChange,
}) => {
  const [dragActive, setDragActive] = useState(false);
  const fileInputRef = useRef(null);
  const [removeBackground, setRemoveBackground] = useState(false);

  const handleRemove = () => {
    onRemoveLogo();
    if (fileInputRef.current) {
      fileInputRef.current.value = ""; // ensure input is reset on removal
    }
  };

  useEffect(() => {
    onRemoveBackgroundChange?.(removeBackground);
  }, [removeBackground, onRemoveBackgroundChange]);

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleFile = (file) => {
    if (file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = (e) => {
        onLogoUpload(e.target.result);
        if (fileInputRef.current) {
          fileInputRef.current.value = ""; // reset input so selecting same file again triggers onChange
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const socialIcons = [
    { src: whatsapp, alt: "Whatsapp" },
    { src: youtube, alt: "Youtube" },
    { src: instagram, alt: "Instagram" },
    { src: facebookSquare, alt: "Facebook Square" },
    { src: facebookRound, alt: "Facebook Round" },
    { src: linkedin, alt: "LinkedIn" },
    { src: gmail, alt: "Gmail" },
    { src: playstore, alt: "PlayStore" },
    { src: telephone, alt: "Telephone" },
  ];

  //handler for selecting social icons
  const handleSocialIconSelect = (iconSrc) => {
    onLogoUpload(iconSrc);
  };

  return (
    <>
      <div
        className={`rounded-lg p-8 text-center transition-colors ${
          dragActive ? "border-primary-500 bg-primary-50" : "border-gray-300"
        }`}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
      >
        <div className="flex flex-col items-center space-y-4">
          <div className="w-24 h-24 bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden  border-2 border-gray-300 border-dashed">
            {logoImage ? (
              <img
                src={logoImage}
                alt="Logo Preview"
                className="w-full h-full object-contain"
              />
            ) : (
              <ImageIcon size={32} className="text-gray-400" />
            )}
          </div>
          <div>
            <button
              className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors cursor-pointer"
              onClick={() => document.getElementById("logoInput").click()}
            >
              Upload Image
            </button>

            <input
              key={logoImage ? "has-logo" : "no-logo"}
              id="logoInput"
              type="file"
              accept="image/*"
              ref={fileInputRef}
              onChange={(e) =>
                e.target.files[0] && handleFile(e.target.files[0])
              }
              className="sr-only"
            />
          </div>
          {logoImage && (
            <button
              className="border-gray-500 border-2 text-black px-6 py-2 rounded-lg hover:bg-gray-200 transition-colors cursor-pointer"
              onClick={onRemoveLogo}
            >
              Remove Logo
            </button>
          )}
          <div className="text-center">
            <p className="text-sm text-gray-600 mb-2">
              <span className="font-medium">Spotlight your logo!</span>
            </p>
            <p className="text-xs text-gray-500">
              Make your brand instantly recognizable as your company logo
              becomes the center of attention on your QR Code.{" "}
              <span className="text-primary-600 font-medium cursor-pointer">
                Try now.
              </span>
            </p>
          </div>
        </div>
      </div>

      <div className="mt-6">
        <div className="flex items-center space-x-2 mb-3">
          <input
            type="checkbox"
            id="removeBackground"
            checked={removeBackground}
            onChange={(e) => setRemoveBackground(e.target.checked)}
            className="text-primary-600 focus:ring-primary-500"
          />
          <label htmlFor="removeBackground" className="text-sm text-gray-700">
            Remove Background Behind Logo
          </label>
        </div>

        <div className="grid grid-cols-9 gap-3">
          {socialIcons.map((item, index) => (
            <div
              key={index}
              className="w-16 h-16 rounded-lg border border-gray-200 flex items-center justify-center cursor-pointer hover:bg-gray-50 transition-colors"
              onClick={() => handleSocialIconSelect(item.src)}
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-10 h-10 object-contain"
              />
            </div>
          ))}
        </div>

        <p className="text-xs text-gray-500 mt-3">
          Upload your own custom logo image as <strong>.png</strong>,{" "}
          <strong>.jpg</strong>, <strong>.gif</strong> or <strong>.svg</strong>{" "}
          file format with a <strong>maximum size of 2 MB</strong>. You can also
          select a logo for your QR Code from the gallery.
        </p>
      </div>
    </>
  );
};

export default LogoUploader;
