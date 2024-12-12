import React, { useState } from "react";
import {
  AiOutlineBgColors,
  AiOutlineItalic,
  AiOutlineUnderline,
} from "react-icons/ai";
import { BiChevronDown, BiTrash } from "react-icons/bi";
import { FaAlignCenter, FaAlignLeft, FaAlignRight } from "react-icons/fa";
import { FiMoreVertical } from "react-icons/fi";
import { FaB } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

const FillInTheBlanks = () => {
  const [questionTitle, setQuestionTitle] = useState("");
  const [mainQuestion, setMainQuestion] = useState("");
  const [questionPoints, setQuestionPoints] = useState(0);
  const [studentAnswer, setStudentAnswer] = useState("");
  const navigate = useNavigate();
  const [blanks, setBlanks] = useState([
    {
      id: 1,
      correctAnswer: "",
    },
  ]);
  const [feedback, setFeedback] = useState("");
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const isFaculty = currentUser?.role === "FACULTY";

  const handleAddBlank = () => {
    const newBlank = {
      id: blanks.length + 1,
      correctAnswer: "",
    };
    setBlanks([...blanks, newBlank]);
  };

  const handleRemoveBlank = (id: any) => {
    setBlanks(blanks.filter((blank) => blank.id !== id));
  };

  const handleBlankChange = (id: any, field: any, value: any) => {
    const updatedBlanks = blanks.map((blank) =>
      blank.id === id ? { ...blank, [field]: value } : blank
    );
    setBlanks(updatedBlanks);
  };

  const handleSave = () => {
    console.log("Saved Question:", {
      title: questionTitle,
      points: questionPoints,
      blanks,
    });
    alert("Question Saved Successfully!");
  };

  const handleSubmit = () => {
    const possibleAnswers = blanks.map((answer) => answer.correctAnswer);

    if (possibleAnswers.includes(studentAnswer)) {
      setFeedback(`Correct!`);
    } else if (!possibleAnswers.includes(studentAnswer)) {
      setFeedback("Not even close!");
    } else {
      setFeedback("");
    }
  };

  const handleCancel = () => {
    setFeedback("");
  };

  return (
    <div className="container mt-4">
      <div className="border p-3 w-75">
        <p>
          Enter your question text, then define all the possible correct answers
          for the blank. <br />
          Students will see the question followed by a small text box to type
          their answer.
        </p>

        <span className="mb-4">Question Editor</span>
        <label className="form-label">
          <strong>Points: &nbsp; </strong>
        </label>
        <input
          type="number"
          value={questionPoints}
          className="border rounded p-2"
          onChange={(e) => setQuestionPoints(Number(e.target.value))}
        />

        <div className="mb-3">
          <br />
          <label className="form-label">
            <strong>Title:</strong>
          </label>
          <input
            type="text"
            className="form-control"
            value={questionTitle}
            onChange={(e) => setQuestionTitle(e.target.value)}
            placeholder="Enter question title"
          />
          <br />
          <span>Question</span>
          <b>Edit</b> &nbsp;&nbsp;&nbsp;&nbsp; View &nbsp;&nbsp; &nbsp;&nbsp;
          Insert &nbsp;&nbsp;&nbsp;&nbsp; Format &nbsp;&nbsp;&nbsp;&nbsp; Tools
          &nbsp;&nbsp;&nbsp;&nbsp; Table
          <hr />
          12pt <BiChevronDown /> &nbsp;&nbsp;&nbsp;&nbsp; Paragraph{" "}
          <BiChevronDown /> &nbsp;&nbsp; <FaB /> <AiOutlineItalic />
          <AiOutlineUnderline />
          <AiOutlineBgColors />
          <BiChevronDown /> | <FaAlignLeft /> <FaAlignCenter /> <FaAlignRight />{" "}
          | <FiMoreVertical />
          <br />
          <textarea
            className="form-control mt-2"
            value={mainQuestion}
            onChange={(e) => setMainQuestion(e.target.value)}
            placeholder="Enter the question for this blank"
            rows={2}
          />
        </div>

        <div className="mb-3">
          {blanks.map((blank) => (
            <div key={blank.id} className="border p-1 mb-2 row">
              <label className="col">
                <strong>Possible Answer {blank.id}:</strong>
              </label>
              <input
                type="text"
                className="col form-control"
                value={blank.correctAnswer}
                onChange={(e) =>
                  handleBlankChange(blank.id, "correctAnswer", e.target.value)
                }
                placeholder="Enter the correct answer"
              />
              <button
                className="btn col"
                onClick={() => handleRemoveBlank(blank.id)}
              >
                <BiTrash className="" size={18} />
              </button>
            </div>
          ))}
          <button
            className="btn mt-2 float-end text-danger"
            onClick={handleAddBlank}
          >
            + Add Another Blank
          </button>
        </div>

        <div className="border-top pt-4 flex">
          <button
            className="btn btn-light me-2 border"
            onClick={() => navigate(-1)}
          >
            Cancel
          </button>
          <button className="btn btn-danger me-2" onClick={handleSave}>
            Update Question
          </button>
        </div>
      </div>
      <br />
      <br />

      <button className="btn btn-danger me-2" onClick={handleCancel}>
        Cancel
      </button>
    </div>
  );
};

export default FillInTheBlanks;
