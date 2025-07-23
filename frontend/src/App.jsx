import React from "react";
import Header from "./components/Header";
import QRGenerator from "./components/QRGenerator";

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-500 via-amber-700 to-green-700 animate-gradient-xy text-white">
      <Header />
      <QRGenerator />
    </div>
  );
};

export default App;
