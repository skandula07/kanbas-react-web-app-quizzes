import React from "react";
import "./App.css";
import Labs from "./Labs";
import Kanbas from "./Kanbas";
import { Navigate, HashRouter, Link, Route, Routes } from "react-router-dom";
import Lab1 from "./Labs/Lab1";
import Lab2 from "./Labs/Lab2";

function App() {
  return (
    <HashRouter>
      <div>
        <Routes>
          <Route path="/Kanbas" element={<Kanbas />} />
          <Route path="/Labs/*" element={<Labs />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
