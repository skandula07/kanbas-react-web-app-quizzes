import { useParams } from "react-router";
import { PiNotePencil } from "react-icons/pi";

export default function QuizDetails() {
  const { cid, qid } = useParams();
  return (
    <div>
      <div className="quiz-d-btns">
        <button className="btn btn-secondary me-1">Preview</button>
        <button className="btn btn-secondary me-1 float-center">
          <PiNotePencil className="" />
          Edit
        </button>
      </div>

      <hr />
      <div>
        <h2>Q1 - HTML</h2>
        <br />
        <br />
        <div className="quiz-d-box">
          <div className="row mb-1">
            <span className="quiz-d-names">Quiz Type</span>
            <div className="quiz-d-details">
              <span>Graded Quiz</span>
            </div>
          </div>
          <div className="row mb-1">
            <span className="quiz-d-names">Points</span>
            <div className="quiz-d-details">
              <span>10</span>
            </div>
          </div>
          <div className="row mb-1">
            <span className="quiz-d-names">Assignment Group</span>
            <div className="quiz-d-details">
              <span>QUIZZES</span>
            </div>
          </div>
          <div className="row mb-1">
            <span className="quiz-d-names">Shuffle Answers</span>
            <div className="quiz-d-details">
              <span>No</span>
            </div>
          </div>
          <div className="row mb-1">
            <span className="quiz-d-names">Time Limit</span>
            <div className="quiz-d-details">
              <span>30 Minutes</span>
            </div>
          </div>
          <div className="row mb-1">
            <span className="quiz-d-names">Multiple Attempts</span>
            <div className="quiz-d-details">
              <span>No</span>
            </div>
          </div>
          <div className="row mb-1">
            <span className="quiz-d-names">How Many Attempts</span>
            <div className="quiz-d-details">
              <span>1</span>
            </div>
          </div>
          <div className="row mb-1">
            <span className="quiz-d-names">Show Correct Answers</span>
            <div className="quiz-d-details">
              <span>Yes (When?)</span>
            </div>
          </div>
          <div className="row mb-1">
            <span className="quiz-d-names">Access Code</span>
            <div className="quiz-d-details">
              <span></span>
            </div>
          </div>
          <div className="row mb-1">
            <span className="quiz-d-names">One Question at a Time</span>
            <div className="quiz-d-details">
              <span>Yes</span>
            </div>
          </div>
          <div className="row mb-1">
            <span className="quiz-d-names">Webcam Required</span>
            <div className="quiz-d-details">
              <span>No</span>
            </div>
          </div>
          <div className="row mb-1">
            <span className="quiz-d-names">Lock Questions After Answering</span>
            <div className="quiz-d-details">
              <span>No</span>
            </div>
          </div>
          <div className="row mb-1">
            <span className="quiz-d-names">One Question at a Time</span>
            <div className="quiz-d-details">
              <span>Yes</span>
            </div>
          </div>
        </div>
        <br />
        <div className="quiz-d-box">
          <div className="row mb-0">
            <div className="bold-font col-4 col-md-4">
              <span>Due Date</span>
            </div>
            <div className="bold-font col-4 col-md-4">
              <span>Available From</span>
            </div>
            <div className="bold-font col-4 col-md-4">
              <span>Until</span>
            </div>
          </div>
          <hr className="hr-10" />
          <div className="row mb-0">
            <div className="col-4 col-md-4">
              <span>Sep 21st at 1:00pm</span>
            </div>
            <div className="col-4 col-md-4">
              <span>Sep 21st at 11:40am</span>
            </div>
            <div className="col-4 col-md-4">
              <span>Sep 21st at 1:00pm</span>
            </div>
          </div>
          <hr className="hr-10" />
        </div>
        <br />
        <br />
        <br />
      </div>
      {qid}
    </div>
  );
}
