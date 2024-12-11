import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addQuiz, deleteQuiz } from "./reducer";

interface Quiz {
  name: string;
  description: string;
  points: number;
  dueDate: string;
  availableFrom: string;
  availableUntil: string;
  _id: string;
}

interface EditorProps {
  Quiz?: Quiz; // If provided, it's for editing; otherwise, it's for creating a new one
  saveQuiz: (Quiz: Quiz) => void; // Save the Quiz
  closeEditor: () => void; // Close the editor (without saving)
}

const Editor: React.FC<EditorProps> = ({ Quiz, saveQuiz, closeEditor }) => {
  const dispatch = useDispatch();

  // Safely access the Redux state
  const quizzesFromState = useSelector((state: any) =>
    state.quizzes?.quizzes ?? []
  );

  const [formData, setFormData] = useState<Quiz>({
    name: "",
    description: "",
    points: 0,
    dueDate: "",
    availableFrom: "",
    availableUntil: "",
    _id: "",
  });

  useEffect(() => {
    if (Quiz) {
      setFormData(Quiz); // Pre-fill form with existing Quiz data when editing
    }
  }, [Quiz]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    const newQuiz = { ...formData, _id: new Date().getTime().toString() };

    // Save to Redux
    dispatch(addQuiz(newQuiz));

    // Save to localStorage
    const storedQuizzes = JSON.parse(localStorage.getItem("quizzes") || "[]");
    storedQuizzes.push(newQuiz);
    localStorage.setItem("quizzes", JSON.stringify(storedQuizzes));

    saveQuiz(newQuiz);
    closeEditor();
  };

  const handleDelete = (quizId: string) => {
    // Delete from Redux
    dispatch(deleteQuiz(quizId));

    // Delete from localStorage
    const storedQuizzes = JSON.parse(localStorage.getItem("quizzes") || "[]");
    const updatedQuizzes = storedQuizzes.filter((quiz: Quiz) => quiz._id !== quizId);
    localStorage.setItem("quizzes", JSON.stringify(updatedQuizzes));
  };

  const quizzesToShow = [
    ...quizzesFromState,
    ...(JSON.parse(localStorage.getItem("quizzes") || "[]") as Quiz[]),
  ];

  return (
    <div>
      <form>
        {/* Name */}
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Quiz Name</label>
          <input
            type="text"
            id="name"
            name="name"
            className="form-control"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter Quiz name"
          />
        </div>

        {/* Description */}
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Description</label>
          <input
            type="text"
            id="description"
            name="description"
            className="form-control"
            value={formData.description}
            onChange={handleChange}
            placeholder="Enter Quiz description"
          />
        </div>

        {/* Points */}
        <div className="mb-3">
          <label htmlFor="points" className="form-label">Points</label>
          <input
            type="number"
            id="points"
            name="points"
            className="form-control"
            value={formData.points}
            onChange={handleChange}
            placeholder="Enter points"
          />
        </div>

        {/* Due Date */}
        <div className="mb-3">
          <label htmlFor="dueDate" className="form-label">Due Date</label>
          <input
            type="datetime-local"
            id="dueDate"
            name="dueDate"
            className="form-control"
            value={formData.dueDate}
            onChange={handleChange}
          />
        </div>

        {/* Available From Date */}
        <div className="mb-3">
          <label htmlFor="availableFrom" className="form-label">Available From</label>
          <input
            type="datetime-local"
            id="availableFrom"
            name="availableFrom"
            className="form-control"
            value={formData.availableFrom}
            onChange={handleChange}
          />
        </div>

        {/* Available Until Date */}
        <div className="mb-3">
          <label htmlFor="availableUntil" className="form-label">Available Until</label>
          <input
            type="datetime-local"
            id="availableUntil"
            name="availableUntil"
            className="form-control"
            value={formData.availableUntil}
            onChange={handleChange}
          />
        </div>

        {/* Action Buttons */}
        <div className="d-flex justify-content-end">
          {/* <button type="button" className="btn btn-secondary me-2" onClick={closeEditor}>
            Cancel
          </button> */}
          <button type="button" className="btn btn-primary" onClick={handleSave}>
            Save
          </button>
        </div>
      </form>
      <div className="quiz-list">
        {quizzesToShow.map((quiz: Quiz) => (
          <div key={quiz._id}>
            <h4>{quiz.name}</h4>
            <button className="btn btn-danger" onClick={() => handleDelete(quiz._id)}>
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Editor;
