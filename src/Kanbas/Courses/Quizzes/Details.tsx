import { useParams } from "react-router";
import { PiNotePencil } from "react-icons/pi";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function QuizDetails() {
  const { cid, qid } = useParams();
  const quizzes = useSelector(
    (state: { quizzesReducer: { quizzes: any[] } }) =>
      state.quizzesReducer.quizzes || []
  );
  const quiz = quizzes.find((q) => q._id === qid);
  return (
    <div>
      <div className="quiz-d-btns ">
        <button className="btn btn-secondary me-1">Preview</button>
        <Link
          id="wd-edit-quiz"
          to={`/Kanbas/Courses/${cid}/Quizzes/${qid}/Editor`}
          className="btn btn-secondary me-1 float-center"
        >
          <PiNotePencil
            className="position-relative me-2"
            style={{ bottom: "1px" }}
          />
          Edit
        </Link>
      </div>

      <hr />
      <div>
        <h2>{quiz.title}</h2>
        <br />
        <br />
        <div className="quiz-d-box">
          <div className="row mb-1">
            <span className="quiz-d-names">Quiz Type</span>
            <div className="quiz-d-details">
              <span>{quiz.type}</span>
            </div>
          </div>
          <div className="row mb-1">
            <span className="quiz-d-names">Points</span>
            <div className="quiz-d-details">
              <span>{quiz.points}</span>
            </div>
          </div>
          <div className="row mb-1">
            <span className="quiz-d-names">Assignment Group</span>
            <div className="quiz-d-details">
              <span>{quiz.group}</span>
            </div>
          </div>
          <div className="row mb-1">
            <span className="quiz-d-names">Shuffle Answers</span>
            <div className="quiz-d-details">
              <span>{quiz.shuffleAnswers}</span>
            </div>
          </div>
          <div className="row mb-1">
            <span className="quiz-d-names">Time Limit</span>
            <div className="quiz-d-details">
              <span>{quiz.timeLimit} Minutes</span>
            </div>
          </div>
          <div className="row mb-1">
            <span className="quiz-d-names">Multiple Attempts</span>
            <div className="quiz-d-details">
              <span>{quiz.multipleAttempts}</span>
            </div>
          </div>
          <div className="row mb-1">
            <span className="quiz-d-names">How Many Attempts</span>
            <div className="quiz-d-details">
              <span>{quiz.howManyAttempts}</span>
            </div>
          </div>
          <div className="row mb-1">
            <span className="quiz-d-names">Show Correct Answers</span>
            <div className="quiz-d-details">
              <span>{quiz.showCorrectAnswers}</span>
            </div>
          </div>
          <div className="row mb-1">
            <span className="quiz-d-names">Access Code</span>
            <div className="quiz-d-details">
              <span>{quiz.accessCode}</span>
            </div>
          </div>
          <div className="row mb-1">
            <span className="quiz-d-names">One Question at a Time</span>
            <div className="quiz-d-details">
              <span>{quiz.oneQuestionAtATime}</span>
            </div>
          </div>
          <div className="row mb-1">
            <span className="quiz-d-names">Webcam Required</span>
            <div className="quiz-d-details">
              <span>{quiz.webcamRequired}</span>
            </div>
          </div>
          <div className="row mb-1">
            <span className="quiz-d-names">Lock Questions After Answering</span>
            <div className="quiz-d-details">
              <span>{quiz.lockQuestionsAfterAnswering}</span>
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
              <span>
                {new Date(quiz.dueDate).toLocaleString("default", {
                  month: "long",
                })}{" "}
                {new Date(quiz.dueDate).toLocaleString("default", {
                  day: "numeric",
                })}{" "}
                at{" "}
                {new Date(quiz.dueDate).toLocaleTimeString("default", {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </span>
            </div>
            <div className="col-4 col-md-4">
              <span>
                {new Date(quiz.availableDate).toLocaleString("default", {
                  month: "long",
                })}{" "}
                {new Date(quiz.availableDate).toLocaleString("default", {
                  day: "numeric",
                })}{" "}
                at{" "}
                {new Date(quiz.availableDate).toLocaleTimeString("default", {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </span>
            </div>
            <div className="col-4 col-md-4">
              <span>
                {new Date(quiz.untilDate).toLocaleString("default", {
                  month: "long",
                })}{" "}
                {new Date(quiz.untilDate).toLocaleString("default", {
                  day: "numeric",
                })}{" "}
                at{" "}
                {new Date(quiz.untilDate).toLocaleTimeString("default", {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </span>
            </div>
          </div>
          <hr className="hr-10" />
        </div>
        <br />
        <br />
        <br />
      </div>
    </div>
  );
}
