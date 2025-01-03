import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from "./components/Navbar";
import Fahrzeug from "./components/navbarpages/Fahrzeug";
import Kontakt from "./components/navbarpages/Kontakt";
import Einloggen from "./components/navbarpages/Einloggen";

import AdminLayout from "./components/navbarpages/admin/AdminLayout";
import FahrzeugVerwalten from "./components/navbarpages/admin/FahrzeugVerwalten";
import Profil from "./components/navbarpages/admin/Profil";

import MainGrid from "./components/MainGrid";
import KfzAufbereitung from './components/maingridpages/kfzAufbereitung';
import Scheibentoenung from './components/maingridpages/Scheibentoenung';
import Autoglasservice from './components/maingridpages/Autoglasservice';
import Klimaservice from './components/maingridpages/Klimaservice';
import "./App.css";

const App: React.FC = () => {
  return (
    <>
    <Router>
      <Navbar />
      <div className="main-content">
         <Routes>
          <Route path="/" element={<MainGrid />}/>
          <Route path="/kfzaufbereitung" element={<KfzAufbereitung />} />
          <Route path="/scheibentoenung" element={<Scheibentoenung />} />
          <Route path="/autoglasservice" element={<Autoglasservice />} />
          <Route path="/klimaservice" element={<Klimaservice />} />
          <Route path="/fahrzeug" element={<Fahrzeug />}/>
          <Route path="/kontakt" element={<Kontakt />}/>
          <Route path="/einloggen" element={<Einloggen />}/>
          <Route path="/adminlayout" element={<AdminLayout />}>
            <Route path="fahrzeugverwalten" element={<FahrzeugVerwalten />} />
            <Route path="profil" element={<Profil />} />
          </Route>
        </Routes>
      </div>
    </Router>
    </>
  );
};

export default App;
