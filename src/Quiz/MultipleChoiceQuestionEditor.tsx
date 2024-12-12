
import "bootstrap/dist/css/bootstrap.min.css";
// import "react-quill/dist/quill.snow.css";

import { FaTrash, FaCheck } from "react-icons/fa";

import { ImArrowRight } from "react-icons/im";
import { Choice } from "../types";



interface MultipleChoiceProps {
  choices: Choice[];
  updateChoice: (index: number, text: string, isCorrect: boolean) => void;
  removeChoice: (ndex: number) => void;
}

const MultipleChoiceQuestionEditor = ({
  choices,
  updateChoice,
  removeChoice,
}: MultipleChoiceProps) => {


  return (
    <div>
      {/* <label className="form-label fw-bold">Answers:</label> */}
      {choices.map((choice, index) => (
        <div key={index} className="d-flex align-items-center mb-2">
          <ImArrowRight
            size={40}
            className={`me-2 ${choice.isCorrect ? "visible" : "invisible"}`}
            color="#90c470"
            style={{ filter: "drop-shadow(1px 1px 2px gray)" }}
          />
          <label className="me-5 text-nowrap">{choice.isCorrect?"Correct Answer": "Possible Answer"}</label>
          <input
            type="text"
            className={`form-control me-2 ${
              choice.isCorrect ? "border-success" : ""
            }`}
            placeholder={`Possible Answer ${index + 1}`}
            value={choice.text}
            onChange={(e) =>
              updateChoice(index, e.target.value, choice.isCorrect)
            }
          />
          <button
            className={`btn me-2 ${
              choice.isCorrect ? "btn-success" : "btn-outline-secondary"
            }`}
            onClick={() => updateChoice(index, choice.text, true)}
          >
            <FaCheck />
          </button>
          <button
            className="btn btn-outline-danger"
            onClick={() => removeChoice(index)}
          >
            <FaTrash />
          </button>
        </div>
      ))}
    </div>
  );
};

export default MultipleChoiceQuestionEditor;
