import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Fahrzeug from "./components/Fahrzeug";
import Kontakt from "./components/Kontakt";
import Einloggen from "./components/Einloggen";
import MainGrid from "./components/MainGrid";
import KfzAufbereitung from './components/pages/kfzaufbereitung';
import "./App.css";

const App: React.FC = () => {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainGrid />}/>
        <Route path="/kfzaufbereitung" element={<KfzAufbereitung />} />
        <Route path="/fahrzeug" element={<Fahrzeug />}/>
        <Route path="/kontakt" element={<Kontakt />}/>
        <Route path="/einloggen" element={<Einloggen />}/>
      </Routes>
    </Router>
    </>
  );
};

export default App;
