import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from "./components/Navbar";
import Fahrzeug from "./components/navbarpages/Fahrzeug";
import Kontakt from "./components/navbarpages/Kontakt";
import Einloggen from "./components/navbarpages/Einloggen";

import MainGrid from "./components/MainGrid";
import KfzAufbereitung from './components/maingridpages/kfzAufbereitung';
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
