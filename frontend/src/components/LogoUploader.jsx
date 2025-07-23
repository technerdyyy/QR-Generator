import React, { useState } from "react";
import {
  Upload,
  Image as ImageIcon,
  Facebook,
  Twitter,
  Youtube,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Globe,
} from "lucide-react";

const LogoUploader = ({ onLogoUpload }) => {
  const [dragActive, setDragActive] = useState(false);

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
      };
      reader.readAsDataURL(file);
    }
  };

  const socialIcons = [
    { icon: Facebook, color: "#1877f2" },
    { icon: Twitter, color: "#1da1f2" },
    { icon: Youtube, color: "#ff0000" },
    { icon: Instagram, color: "#e4405f" },
    { icon: Linkedin, color: "#0077b5" },
    { icon: Mail, color: "#ea4335" },
    { icon: Phone, color: "#34a853" },
    { icon: MapPin, color: "#fbbc05" },
    { icon: Globe, color: "#4285f4" },
  ];

  return (
    <>
      {/* <div className="flex items-center space-x-2 mb-4">
        <ImageIcon size={20} className="text-primary-600" />
        <h3 className="text-lg font-semibold text-gray-800">ADD LOGO IMAGE</h3>
      </div> */}

      <div
        className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
          dragActive ? "border-primary-500 bg-primary-50" : "border-gray-300"
        }`}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
      >
        <div className="flex flex-col items-center space-y-4">
          <div className="w-24 h-24 bg-gray-100 rounded-lg flex items-center justify-center">
            <ImageIcon size={32} className="text-gray-400" />
          </div>
          <div>
            <button
              className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors"
              onClick={() => document.getElementById("logoInput").click()}
            >
              Upload Image
            </button>
            <input
              id="logoInput"
              type="file"
              accept="image/*"
              onChange={(e) =>
                e.target.files[0] && handleFile(e.target.files[0])
              }
              className="sr-only"
            />
          </div>
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
              className="w-12 h-12 rounded-lg border border-gray-200 flex items-center justify-center cursor-pointer hover:bg-gray-50 transition-colors"
              style={{ borderColor: item.color }}
            >
              <item.icon size={20} style={{ color: item.color }} />
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
