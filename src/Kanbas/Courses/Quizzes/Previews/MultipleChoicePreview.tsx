import React, { useState } from 'react';

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
  choices?: Choice[]; // choices will be available for multiple choice questions
}

interface MultipleChoiceProps {
  question: Question;
  index: Number;
}

export default function MultipleChoicePreview({ question, index }: MultipleChoiceProps) {
  const { title, points, question: textQuestion, choices } = question;
  
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const count = Number(index)

  const handleSubmit = () => {
    if (selectedAnswer === null) {
      alert("Please select an option before submitting.");
      return;
    }

    // Find the selected choice
    const selectedChoice = choices?.find(choice => choice.text === selectedAnswer);
    
    // Check if the selected answer is correct
    if (selectedChoice?.isCorrect) {
      alert("Correct answer!");
    } else {
      alert("Incorrect answer.");
    }

    // Mark the answer as submitted
    setIsSubmitted(true);
  };

  return (
    <div className="flex m-2">
      <div className="w-75 border">
        <h4 className="p-3 border-bottom bg-light text-dark">
          <span className="float-left"><strong>Question {count}</strong></span>
          <span className="float-end text-secondary">{points} pts</span>
        </h4>
        <div className="p-3">
          <strong>{title}</strong>
          <br />
          <p>{textQuestion}</p>

          <div className="mb-3">
            <label><strong>Options:</strong></label>
            <div className="form-check">
              {choices?.map((choice, index) => (
                <div key={index}>
                  <input
                    type="radio"
                    id={`choice-${index}`}
                    name="multipleChoice"
                    value={choice.text}
                    className="form-check-input"
                    onChange={(e) => setSelectedAnswer(e.target.value)}
                    disabled={isSubmitted}  // Disable after submission
                  />
                  <label className="form-check-label" htmlFor={`choice-${index}`}>
                    {choice.text}
                  </label>
                </div>
              ))}
            </div>
          </div>

          <br />

          <button
            className="btn btn-light me-2 border"
            onClick={handleSubmit}
            disabled={isSubmitted}  // Disable submit button after submission
          >
            {isSubmitted ? "Answer Submitted" : "Submit Answer"}
          </button>
        </div>
      </div>
    </div>
  );
}
