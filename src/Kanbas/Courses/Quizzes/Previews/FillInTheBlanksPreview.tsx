// FillInTheBlanksPreview.tsx
import React, { useState } from "react";

interface Choice {
  text: string;
  isCorrect: boolean;
}

interface Question {
  _id: string;
  type: "fill_in_the_blank" | "multiple_choice" | "true_false" | "short_answer";
  title: string;
  points: number;
  question: string;
  choices?: Choice[];
}

interface FillInTheBlanksPreviewProps {
  question: Question;
  index: number; // New prop to receive the index of the question
}

export default function FillInTheBlanksPreview({ question, index }: FillInTheBlanksPreviewProps) {
  const { title, points, question: textQuestion } = question;
  const [studentAnswer, setStudentAnswer] = useState<string>("");

  const handleSubmit = () => {
    console.log(`Submitted Answer for Question ${index + 1}:`, studentAnswer);
  };

  return (
    <div className="flex m-2">
      <div className="w-75 border">
        <h4 className="p-3 border-bottom bg-light text-dark">
          <span className="float-left">
            <strong>Question {index + 1}</strong>
          </span>
          <span className="float-end text-secondary">{points} pts</span>
        </h4>
        <div className="p-3">
          <strong>{title}</strong>
          <br />
          <p>{textQuestion}</p>

          <div className="mb-2">
            <label>
              <strong>Your Answer:</strong>
            </label>
            <input
              type="text"
              className="form-control"
              value={studentAnswer}
              onChange={(e) => setStudentAnswer(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSubmit();
                }
              }}
              placeholder="Enter your answer"
            />
          </div>
          <br />

          <button className="btn btn-light me-2 border" onClick={handleSubmit}>
            Submit Answer
          </button>
        </div>
      </div>
    </div>
  );
}
