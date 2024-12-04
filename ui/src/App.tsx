import React from "react";
import Navbar from "./components/Navbar";
import MainGrid from "./components/MainGrid";
import "./index.css";

const App: React.FC = () => {
  return (
    <div>
      <Navbar />
      <MainGrid />
    </div>
  );
};

export default App;
