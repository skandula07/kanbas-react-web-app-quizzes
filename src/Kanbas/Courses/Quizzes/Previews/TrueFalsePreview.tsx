import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import  * as answersClient from "./answersClient"

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

interface TrueFalseProps {
  question: Question;
  index: Number;
}

export default function TrueFalsePreview({ question, index }: TrueFalseProps) {
  const { title, points, question: textQuestion, choices } = question;
  const count = Number(index);
  
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const {cid, qid} = useParams();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const userId = currentUser._id;



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
              {/* True option */}
              <input
                type="radio"
                id="true"
                name="trueFalse"
                value="True"
                className="form-check-input"
                onChange={() => setSelectedAnswer("True")}
                // disabled={isSubmitted}  // Disable after submission
              />
              <label className="form-check-label" htmlFor="true">
                True
              </label>
            </div>

            <div className="form-check">
              {/* False option */}
              <input
                type="radio"
                id="false"
                name="trueFalse"
                value="False"
                className="form-check-input"
                onChange={() => setSelectedAnswer("False")}
                // disabled={isSubmitted}  // Disable after submission
              />
              <label className="form-check-label" htmlFor="false">
                False
              </label>
            </div>
          </div>

          <br />

          <button
            className="btn btn-light me-2 border"
            onClick={handleSubmit}
            // disabled={isSubmitted}  // Disable submit button after submission
          >
            {isSubmitted ? "Answer Submitted" : "Submit Answer"}
          </button>
        </div>
      </div>
    </div>
  );
}
