import {
  Link,
  Type,
  Mail,
  Phone,
  Facebook,
  Twitter,
  Youtube,
  Wifi,
} from "lucide-react";

const ContentSelector = ({
  selectedType,
  setSelectedType,
  content,
  setContent,
}) => {
  const contentTypes = [
    {
      id: "url",
      label: "URL",
      icon: Link,
      placeholder: "https://www.example.com",
    },
    {
      id: "text",
      label: "TEXT",
      icon: Type,
      placeholder: "Enter your text here",
    },
    {
      id: "email",
      label: "EMAIL",
      icon: Mail,
      placeholder: "example@email.com",
    },
    {
      id: "phone",
      label: "PHONE",
      icon: Phone,
      placeholder: "+1 234 567 8900",
    },
    {
      id: "facebook",
      label: "FACEBOOK",
      icon: Facebook,
      placeholder: "https://facebook.com/yourpage",
    },
    {
      id: "twitter",
      label: "TWITTER",
      icon: Twitter,
      placeholder: "https://twitter.com/youraccount",
    },
    {
      id: "youtube",
      label: "YOUTUBE",
      icon: Youtube,
      placeholder: "https://youtube.com/yourchannel",
    },
    {
      id: "wifi",
      label: "WIFI",
      icon: Wifi,
      placeholder: "Network:Password:Security",
    },
  ];

  const selectedTypeData = contentTypes.find(
    (type) => type.id === selectedType
  );
  const IconComponent = selectedTypeData?.icon;

  const handleTypeChange = (typeId) => {
    setSelectedType(typeId);
    setContent(""); // Clear content when changing type
  };

  const renderSpecialInputs = () => {
    if (selectedType === "wifi") {
      return (
        <div className="space-y-3">
          <input
            type="text"
            placeholder="Network Name (SSID)"
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <select className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option value="WPA">WPA/WPA2</option>
            <option value="WEP">WEP</option>
            <option value="nopass">No Password</option>
          </select>
        </div>
      );
    }

    return (
      <div className="relative">
        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-500">
          {IconComponent && <IconComponent size={20} />}
        </div>
        <input
          type={
            selectedType === "email"
              ? "email"
              : selectedType === "phone"
              ? "tel"
              : "text"
          }
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder={selectedTypeData?.placeholder}
          className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
          // 👆 THIS makes the input text visible
        />
      </div>
    );
  };

  return (
    <div className="space-y-4">
      {/* Content Type Selector */}
      <div className="grid grid-cols-4 gap-2">
        {contentTypes.map((type) => {
          const Icon = type.icon;
          return (
            <button
              key={type.id}
              onClick={() => handleTypeChange(type.id)}
              className={`flex flex-col items-center p-3 rounded-lg border transition-all duration-200 ${
                selectedType === type.id
                  ? "bg-blue-500 text-white border-blue-500 shadow-md"
                  : "bg-white text-gray-600 border-gray-300 hover:bg-gray-50"
              }`}
            >
              <Icon size={20} className="mb-1" />
              <span className="text-xs font-medium">{type.label}</span>
            </button>
          );
        })}
      </div>

      {/* Content Input */}
      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">
          Your {selectedTypeData?.label}
        </label>
        {renderSpecialInputs()}
      </div>

      {/* Additional Options */}
      <div className="flex items-center space-x-4 text-sm text-gray-600">
        <label className="flex items-center space-x-2">
          <input type="checkbox" className="rounded" />
          <span>Statistics and Editability</span>
        </label>
      </div>
    </div>
  );
};

export default ContentSelector;
