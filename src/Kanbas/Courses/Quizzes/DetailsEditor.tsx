import { useNavigate, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { addQuiz, updateQuiz } from "./reducer";
import * as coursesClient from "../client";
import * as quizzesClient from "./client";

export default function QuizDetailsEditor() {
  const { cid, qid } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [errorMessage, setErrorMessage] = useState(null);

  const saveQuiz = async (quiz: any) => {
    try {
      await quizzesClient.updateQuiz(quiz);
      dispatch(updateQuiz(quiz));
    } catch (error: any) {
      setErrorMessage(error.response.data.message);
    }
  };

  const createQuizForCourse = async () => {
    if (!cid) return;
    const newQuiz = {
      title,
      course: cid,
      description: description || undefined,
      quizType: quizType || undefined,
      points: points || undefined,
      group: group || undefined,
      shuffleAnswers: shuffleAnswers || undefined,
      timeLimit: timeLimit || undefined,
      multipleAttempts: multipleAttempts || undefined,
      howManyAttempts: howManyAttempts || undefined,
      showCorrectAnswers: showCorrectAnswers || undefined,
      accessCode: accessCode || undefined,
      oneQuestionAtATime: oneQuestionAtATime || undefined,
      webcamReqquired: webcamRequired || undefined,
      lockQuestionsAfterAnswering: lockQuestionsAfterAnswering || undefined,
      dueDate: dueDate || undefined,
      availableDate: availableDate || undefined,
      untilDate: untilDate || undefined,
      published: published || undefined,
    };
    try {
      const quiz = await coursesClient.createQuizForCourse(cid, newQuiz);
      dispatch(addQuiz(quiz));
    } catch (error: any) {
      setErrorMessage(error.response.data.message);
    }
  };

  const quizzes = useSelector(
    (state: { quizzesReducer: { quizzes: any[] } }) =>
      state.quizzesReducer.quizzes || []
  );
  const quiz = quizzes.find((q) => q._id === qid);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [quizType, setQuizType] = useState("");
  const [points, setPoints] = useState(0);
  const [group, setGroup] = useState("");
  const [shuffleAnswers, setShuffleAnswers] = useState("");
  const [timeLimit, setTimeLimit] = useState("");
  const [multipleAttempts, setMultipleAttempts] = useState("");
  const [howManyAttempts, setHowManyAttempts] = useState("");
  const [showCorrectAnswers, setShowCorrectAnswers] = useState("");
  const [accessCode, setAccessCode] = useState("");
  const [oneQuestionAtATime, setOneQuestionAtATime] = useState("");
  const [webcamRequired, setWebcamRequired] = useState("");
  const [lockQuestionsAfterAnswering, setLockQuestionsAfterAnswering] =
    useState("");
  const [dueDate, setDueDate] = useState("");
  const [availableDate, setAvailableDate] = useState("");
  const [untilDate, setUntilDate] = useState("");
  const [published, setPublished] = useState("");

  useEffect(() => {
    if (quiz) {
      setTitle(quiz.title);
      setDescription(quiz.description || "");
      setQuizType(quiz.quizType || "");
      setPoints(quiz.points);
      setGroup(quiz.group || "");
      setShuffleAnswers(quiz.shuffleAnswers || "");
      setTimeLimit(quiz.timeLimit || "");
      setMultipleAttempts(quiz.multipleAttempts || "");
      setHowManyAttempts(quiz.howManyAttempts || "");
      setShowCorrectAnswers(quiz.showCorrectAnswers || "");
      setAccessCode(quiz.accessCode || "");
      setOneQuestionAtATime(quiz.oneQuestionAtATime || "");
      setWebcamRequired(quiz.webcamRequired || "");
      setLockQuestionsAfterAnswering(quiz.lockQuestionsAfterAnswering || "");
      setDueDate(quiz.dueDate);
      setAvailableDate(quiz.availableDate || "");
      setUntilDate(quiz.untilDate || "");
      setPublished(quiz.published || "");
    }
  }, [quiz]);

  const handleSave = async () => {
    try {
      if (!quizType) {
        alert("Please fill in all required fields.");
        return;
      }

      if (quiz) {
        const updatedQuiz = {
          ...quiz,
          title,
          points,
          description: description || undefined,
          quizType: quizType || undefined,
          group: group || undefined,
          shuffleAnswers: shuffleAnswers || undefined,
          timeLimit: timeLimit || undefined,
          multipleattempts: multipleAttempts || undefined,
          howManyAttempts: howManyAttempts || undefined,
          showCorrectAnswers: showCorrectAnswers || undefined,
          accessCode: accessCode || undefined,
          oneQuestionAtATime: oneQuestionAtATime || undefined,
          webcamRequired: webcamRequired || undefined,
          lockQuestionsAfterAnswering: lockQuestionsAfterAnswering || undefined,
          dueDate: dueDate || undefined,
          availableDate: availableDate || undefined,
          untilDate: untilDate || undefined,
          published: published || undefined,
        };
        console.log("Updated quiz:", updatedQuiz);
        await saveQuiz(updatedQuiz);
      } else {
        await createQuizForCourse();
      }

      navigate(`/Kanbas/Courses/${cid}/Quizzes/${qid}`);
    } catch (error: any) {
      setErrorMessage(error.response.data.message);
    }
  };

  const handleSavePublish = async () => {
    try {
      if (!quizType) {
        alert("Please fill in all required fields.");
        return;
      }

      if (quiz) {
        const updatedQuiz = {
          ...quiz,
          title,
          points,
          description: description || undefined,
          quizType: quizType || undefined,
          group: group || undefined,
          shuffleAnswers: shuffleAnswers || undefined,
          timeLimit: timeLimit || undefined,
          multipleattempts: multipleAttempts || undefined,
          howManyAttempts: howManyAttempts || undefined,
          showCorrectAnswers: showCorrectAnswers || undefined,
          accessCode: accessCode || undefined,
          oneQuestionAtATime: oneQuestionAtATime || undefined,
          webcamRequired: webcamRequired || undefined,
          lockQuestionsAfterAnswering: lockQuestionsAfterAnswering || undefined,
          dueDate: dueDate || undefined,
          availableDate: availableDate || undefined,
          untilDate: untilDate || undefined,
          published: true,
        };
        console.log("Updated quiz:", updatedQuiz);
        await saveQuiz(updatedQuiz);
      } else {
        await createQuizForCourse();
      }

      navigate(`/Kanbas/Courses/${cid}/Quizzes`);
    } catch (error: any) {
      setErrorMessage(error.response.data.message);
    }
  };

  const handleCancel = () => {
    navigate(`/Kanbas/Courses/${cid}/Quizzes`); // navigate back, don't save
  };

  return (
    <div>
      <br />
      <div id="wd-quizzes-editor" className="editor-margin">
        <div>
          <div className="mb-3">
            <input
              id="wd-name"
              className="edit-box form-control"
              value={title}
              defaultValue="Quiz"
              onChange={(e) => setTitle(e.target.value)}
              placeholder="New Quiz"
            />
          </div>
          <div>
            <span id="wd-name">Quiz Instructions:</span>
          </div>
          <div className="mb-3">
            <textarea
              id="wd-description"
              className="form-control"
              cols={44}
              rows={10}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Quiz Description"
            ></textarea>
          </div>
          <div className="">
            <div className="row mb-3">
              <label
                htmlFor="wd-group"
                className="quiz-d-e-names col col-form-label"
              >
                Quiz Type
              </label>
              <div className="quiz-d-e-details dropdown">
                <select
                  id="wd-group"
                  className="form-control"
                  value={quizType}
                  onChange={(e) => setQuizType(e.target.value)}
                >
                  <option value="GRADED-QUIZ">Graded Quiz</option>
                  <option value="PRACTICE-QUIZ">Practice Quiz</option>
                  <option value="GRADED-SURVEY">Graded Survey</option>
                  <option value="UNGRADED-SURVEY">Ungraded Survey</option>
                </select>
              </div>
            </div>
            <div className="row mb-3">
              <label
                htmlFor="wd-points"
                className="quiz-d-e-names col col-form-label"
              >
                Points
              </label>
              <div className="quiz-d-e-details">
                <input
                  id="wd-points"
                  type="number"
                  className="w-pt form-control"
                  value={points}
                  onChange={(e) => setPoints(Number(e.target.value))}
                  placeholder="Points"
                />
              </div>
            </div>
            <div className="row mb-3">
              <label
                htmlFor="wd-group"
                className="quiz-d-e-names col col-form-label"
              >
                Group
              </label>
              <div className="quiz-d-e-details dropdown">
                <select
                  id="wd-group"
                  className="form-control"
                  value={group}
                  onChange={(e) => setGroup(e.target.value)}
                >
                  <option value="ASSIGNMENTS">ASSIGNMENTS</option>
                  <option value="QUIZZES">QUIZZES</option>
                  <option value="EXAMS">EXAMS</option>
                  <option value="PROJECT">PROJECT</option>
                </select>
              </div>
            </div>
            <div className="row mb-3">
              <label className="quiz-d-e-names col col-form-label"></label>
              <div className="quiz-d-e-details">
                <div className="form-control transparent-border">
                  <b>Options</b>
                  <div className="row mb-1">
                    <div>
                      <input
                        id="wd-shuffle-answers"
                        type="checkbox"
                        className="quiz-d-e-options-info form-check-input"
                        value={shuffleAnswers}
                        onChange={(e) => setShuffleAnswers(e.target.value)}
                      />
                      <label
                        htmlFor="wd-shuffle-answers"
                        className="quiz-d-e-options-name col col-form-label"
                      >
                        Shuffle Answers
                      </label>
                    </div>
                  </div>
                  <div className="row mb-1">
                    <div className="">
                      <input
                        id="wd-time-limit"
                        type="checkbox"
                        className="quiz-d-e-options-info form-check-input"
                      />
                      <label
                        htmlFor="wd-time-limit"
                        className="quiz-d-e-options-name col col-form-label"
                      >
                        Time Limit
                      </label>
                    </div>
                  </div>
                  <div className="row mb-1">
                    <div className="">
                      <input
                        id="wd-mult-attempts"
                        type="checkbox"
                        className="quiz-d-e-options-info form-check-input"
                      />
                      <label
                        htmlFor="wd-mult-attempts"
                        className="quiz-d-e-options-name col col-form-label"
                      >
                        Allow Multiple Attempts
                      </label>
                    </div>
                  </div>
                  <div className="row mb-1">
                    <div className="">
                      <input
                        id="wd-show-correct"
                        type="checkbox"
                        className="quiz-d-e-options-info form-check-input"
                      />
                      <label
                        htmlFor="wd-show-correct"
                        className="quiz-d-e-options-name col col-form-label"
                      >
                        Show Correct Answers
                      </label>
                    </div>
                  </div>
                  <div className="row mb-1">
                    <label
                      htmlFor="wd-access-code"
                      className="quiz-d-e-options-info access col col-form-label"
                    >
                      Access Code
                    </label>
                    <input
                      id="wd-access-code"
                      type="string"
                      className="quiz-d-e-details options form-control"
                      value={accessCode}
                      onChange={(e) => setAccessCode(e.target.value)}
                    />
                  </div>
                  <div className="row mb-1">
                    <div>
                      <input
                        id="wd-one-question"
                        type="checkbox"
                        className="quiz-d-e-options-info form-check-input"
                        value={oneQuestionAtATime}
                      />
                      <label
                        htmlFor="wd-one-question"
                        className="quiz-d-e-options-name col col-form-label"
                      >
                        One Question at a Time
                      </label>
                    </div>
                  </div>
                  <div className="row mb-1">
                    <div>
                      <input
                        id="wd-webcam-req"
                        type="checkbox"
                        className="quiz-d-e-options-info form-check-input"
                        value={webcamRequired}
                      />
                      <label
                        htmlFor="wd-webcam-req"
                        className="quiz-d-e-options-name col col-form-label"
                      >
                        Web Cam Required
                      </label>
                    </div>
                  </div>
                  <div className="row mb-1">
                    <div>
                      <input
                        id="wd-lock-after-answer"
                        type="checkbox"
                        className="quiz-d-e-options-info form-check-input"
                        value={lockQuestionsAfterAnswering}
                      />
                      <label
                        htmlFor="wd-lock-after-answer"
                        className="quiz-d-e-options-name col col-form-label"
                      >
                        Lock Questions After Answering
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mb-3">
              <label className="quiz-d-e-names col col-form-label">
                Assign
              </label>
              <div className="quiz-d-e-details">
                <div className="form-control">
                  <div className="row mb-3 side-padding">
                    <label htmlFor="wd-due-date" className="col col-form-label">
                      <b>Due</b>
                    </label>
                    <input
                      id="wd-due-date"
                      type="datetime-local"
                      className="form-control"
                      value={dueDate}
                      onChange={(e) => setDueDate(e.target.value)}
                    />
                  </div>
                  <div className="row mb-3 side-padding d-flex">
                    <div className="w-50">
                      <label
                        htmlFor="wd-available-from"
                        className="col col-form-label"
                      >
                        <b>Available from</b>
                      </label>
                      <input
                        id="wd-available-from"
                        type="datetime-local"
                        className="form-control"
                        value={availableDate}
                        onChange={(e) => setAvailableDate(e.target.value)}
                      />
                    </div>
                    <div className="w-50">
                      <label
                        htmlFor="wd-available-until"
                        className="col col-form-label"
                      >
                        <b>Until</b>
                      </label>
                      <input
                        id="wd-available-until"
                        type="datetime-local"
                        className="form-control"
                        value={untilDate}
                        onChange={(e) => setUntilDate(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <button
              id="save-button"
              onClick={handleSave}
              className="btn btn-lg btn-danger me-1 float-end"
            >
              Save
            </button>
            <button
              id="save-publish-button"
              onClick={handleSavePublish}
              className="btn btn-lg btn-success me-1 float-end"
            >
              Save & Publish
            </button>
            <button
              id="cancel-button"
              onClick={handleCancel}
              className="btn btn-lg btn-secondary me-1 float-end"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
