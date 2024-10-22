import { Navigate, Route, Routes } from "react-router";
import Lab1 from "./Lab1";
import Lab2 from "./Lab2";
import TOC from "./TOC";
import Lab3 from "./Lab3";

export default function Labs() {
  return (
    <div>
      <h3>Gillian Scott</h3>
      <h4>CS 4550 - Section 01</h4>
      <h1>Labs</h1>
      <TOC />
      <Routes>
        <Route path="/" element={<Navigate to="/Labs/Lab1" />} />
        <Route path="/Lab1" element={<Lab1 />} />
        <Route path="/Lab2" element={<Lab2 />} />
        <Route path="/Lab3/*" element={<Lab3 />} />
      </Routes>
    </div>
  );
}
