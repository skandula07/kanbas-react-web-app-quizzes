import React from "react";
import "./App.css";
import Labs from "./Labs";
import Kanbas from "./Kanbas";
import { Navigate, HashRouter, Link, Route, Routes } from "react-router-dom";
import store from "./Kanbas/store";
import { Provider } from "react-redux";

function App() {
  console.log(process.env.REACT_APP_API_URL); // Example of logging an environment variable
  console.log(process.env.PORT); // To check if PORT is being loaded
  return (
    <HashRouter>
      <Provider store={store}>
        <div>
          <Routes>
            <Route path="/" element={<Navigate to="/Kanbas" />} />
            <Route path="/Labs/*" element={<Labs />} />
            <Route path="/Kanbas/*" element={<Kanbas />} />
          </Routes>
        </div>
      </Provider>
    </HashRouter>
  );
}

export default App;
