import React from "react";
import { FaPlus } from "react-icons/fa6";
import Editor from "./QuizEditor";
// import GreenCheckmark from "./GreenCheckmark";
// import Editor from "./Editor";

interface QuizControlsProps {
  QuizName: string;
  setQuizName: (name: string) => void;
  addQuiz: (updatedQuiz: any) => void; // Make sure this receives the updated Quiz
}

const QuizControls: React.FC<QuizControlsProps> = ({
  QuizName,
  setQuizName,
  addQuiz,
}) => {
  return (
    <div id="wd-Quizs-controls" className="text-nowrap">
      {/* Button to add Quiz */}
      <button
        id="wd-add-Quiz-btn"
        className="btn btn-lg btn-danger me-1 float-end"
        data-bs-toggle="modal"
        data-bs-target="#wd-add-Quiz-dialog"
      >
        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
        Quiz
      </button>

      {/* Modal for Quiz Editor */}
      <div
        className="modal fade"
        id="wd-add-Quiz-dialog"
        tabIndex={-1}
        aria-labelledby="wd-add-Quiz-dialog-label"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="wd-add-Quiz-dialog-label">
                {QuizName ? "Edit Quiz" : "Create Quiz"}
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              {/* Editor component */}
              <Editor
                Quiz={{
                  name: QuizName,
                  description: "",
                  points: 0,
                  dueDate: "",
                  availableFrom: "",
                                  availableUntil: "",
                                  _id: ""
                }} // Pass Quiz name and other details
                saveQuiz={(updatedQuiz) => {
                  addQuiz(updatedQuiz); // Pass the updated assignment data
                }}
                closeEditor={() => {}} // You can add logic to close the modal if necessary
              />
            </div>
          </div>
        </div>
      </div>

      {/* Dropdown for Quiz options */}
      <div className="dropdown d-inline me-1 float-end">
        <button
          className="btn btn-lg btn-secondary"
          type="button"
        >
          Group
        </button>
      </div>
    </div>
  );
};

export default QuizControls;
