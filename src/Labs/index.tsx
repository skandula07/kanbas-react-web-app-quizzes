import { Navigate, Route, Routes } from "react-router";
import store from "./store";
import { Provider } from "react-redux";
import Lab1 from "./Lab1";
import Lab2 from "./Lab2";
import TOC from "./TOC";
import Lab3 from "./Lab3";
import Lab4 from "./Lab4";
import Lab5 from "./Lab5";

export default function Labs() {
  return (
    <Provider store={store}>
      <div className="container-fluid">
        <h4>CS 4550 - Section 01</h4>
        <ul id="project-members">
          <li>Gillian Scott</li>
          <li>Sree Kandula</li>
          <li>Giovanna Bruno</li>
          <li>Parnika Jain</li>
        </ul>
        <h1>Labs</h1>
        <TOC />
        <Routes>
          <Route path="/" element={<Navigate to="/Labs/Lab1" />} />
          <Route path="/Lab1" element={<Lab1 />} />
          <Route path="/Lab2" element={<Lab2 />} />
          <Route path="/Lab3/*" element={<Lab3 />} />
          <Route path="/Lab4/*" element={<Lab4 />} />
          <Route path="/Lab5/*" element={<Lab5 />} />
        </Routes>
      </div>
    </Provider>
  );
}
