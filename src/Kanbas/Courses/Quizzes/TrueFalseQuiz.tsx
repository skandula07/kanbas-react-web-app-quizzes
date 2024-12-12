import { useState } from "react";
import { FaCheck } from "react-icons/fa";

export default function TrueFalse() {
  const [answer, setAnswer] = useState<"True" | "False" | null>("True");

  return (
    <>
      <div className="mb-3">
        <div className="d-flex align-items-center mb-2">
          <button
            className={`btn me-2 ${
              answer == "True" ? "btn-success" : "btn-outline-secondary"
            }`}
            onClick={() => setAnswer("True")}
          >
            <FaCheck className="me-1" />
            True
          </button>
        </div>
        <div className="d-flex align-items-center">
          <button
            className={`btn me-2 ${
              answer == "False" ? "btn-success" : "btn-outline-secondary"
            }`}
            onClick={() => setAnswer("False")}
          >
            <FaCheck className="me-1" />
            false
          </button>
        </div>
      </div>
    </>
  );
}
