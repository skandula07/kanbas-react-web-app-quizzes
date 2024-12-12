import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useNavigate, useParams } from "react-router";
import { FaPlus } from "react-icons/fa6";
import { useEffect, useState } from "react";
import WordEditor from "./WordEditor";
import { Choice } from "../../../type";
import MultipleChoiceQuestionEditor from "./MultipleChoiceQuestionEditor";
import TrueFalse from "./TrueFalseQuiz";
import FillInTheBlanks from "./FillintheBlanks";
import { addQuiz, updateQuiz } from "./reducer";
import * as coursesClient from "../client";
import * as quizzesClient from "./client";

export default function QuizQuestionsEditor() {
  const { cid, qid } = useParams();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const newQuizId = new Date().getTime().toString();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const quizzes = useSelector(
    (state: { quizzesReducer: { quizzes: any[] } }) =>
      state.quizzesReducer.quizzes || []
  );
  const quiz = quizzes.find((q) => q._id === qid);

  const [questions, setQuestions] = useState<any[]>([]);
  const [errorMessage, setErrorMessage] = useState(null);

  const [title, setTitle] = useState<string>("Is 2 + 2 = 4?");
  const [points, setPoints] = useState<number>(3);
  const [text, setText] = useState<string>("");
  const [question, setQuestion] = useState<string>(
    "Is it true that 2 + 2 = 4?"
  );
  const [content, setContent] = useState<string>("Is it true that 2 + 2 = 4?");
  const [answer, setAnswer] = useState<"True" | "False" | null>("True");
  const [choices, setChoices] = useState<Choice[]>([
    { text: "4", isCorrect: false },
    { text: "3", isCorrect: false },
    { text: "5", isCorrect: true },
    { text: "7", isCorrect: false },
  ]);
  const [component, setComponent] = useState("mtchoice");

  const createQuizForCourse = async () => {
    if (!cid) return;
    const newQuiz = {
      title,
      course: cid,
      points: totalPoints || undefined,
      questions: questions,
    };
    try {
      const quiz = await coursesClient.createQuizForCourse(cid, newQuiz);
      dispatch(addQuiz(quiz));
    } catch (error: any) {
      setErrorMessage(error.response.data.message);
    }
  };

  const addQuestion = () => {
    setQuestions((questions) => [
      ...questions,
      {
        id: new Date().getTime().toString(),
        type: "MultipleChoice",
        text: "",
        choices: [
          { text: "", isCorrect: false },
          { text: "", isCorrect: false },
          { text: "", isCorrect: false },
        ],
        points: 0,
        editMode: true,
      },
    ]);
  };

  useEffect(() => {
    if (component === "mtchoice") {
      setContent("How much is 2 + 2?");
      setTitle("Easy Question");
      setText(
        "Enter your question and multiple answers, then select the one correct answer."
      );
    } else {
      setTitle("is 2 + 2 = 4?");
      setContent("is it true that 2 + 2 = 4?");
      setText(
        "Enter your question text, then select if True or False is the correct answer."
      );
    }
  }, [component]);

  const addChoice = () => {
    setChoices([...choices, { text: "", isCorrect: false }]);
  };

  const updateChoice = (index: number, text: string, isCorrect: boolean) => {
    const updatedChoices = choices.map((choice, i) =>
      i === index ? { ...choice, text, isCorrect } : choice
    );
    setChoices(updatedChoices);
  };

  const removeChoice = (index: number) => {
    setChoices(choices.filter((_, i) => i !== index));
  };

  const addNewQuestion = () => {
    const newQuestion = {
      title,
      points,
      question,
      content,
      component,
      choices,
    };

    setQuestions([newQuestion, ...questions]); // Add new question at the top of the list
    setTitle("");
    setPoints(0);
    setQuestion("");
    setAnswer(null);
    setChoices([
      { text: "4", isCorrect: false },
      { text: "3", isCorrect: false },
      { text: "5", isCorrect: true },
      { text: "7", isCorrect: false },
    ]);
  };

  const toggleEditMode = (id: string) => {
    setQuestions((questions) =>
      questions.map((q) => (q.id === id ? { ...q, editMode: !q.editMode } : q))
    );
  };

  const updateQuestion = (id: string, updatedData: Partial<any>) => {
    setQuestions((questions) =>
      questions.map((q) => (q.id === id ? { ...q, ...updatedData } : q))
    );
  };

  const totalPoints = questions.reduce((sum, q) => sum + q.points, 0);

  const saveQuiz = async (quiz: any) => {
    try {
      await quizzesClient.updateQuiz(quiz);
      dispatch(updateQuiz(quiz));
    } catch (error: any) {
      setErrorMessage(error.response.data.message);
    }
  };

  const handleSave = async () => {
    try {
      const updatedQuiz = {
        ...quiz,
        points: totalPoints,
        questions,
      };

      if (quiz) {
        await saveQuiz(updatedQuiz);
      } else {
        await createQuizForCourse();
      }

      navigate(`/Kanbas/Courses/${cid}/Quizzes/${qid}`);
    } catch (error: any) {
      const errorMessage = error.response?.data?.message || "An error occurred";
      setErrorMessage(errorMessage);
    }
  };

  const handleCancel = () => {
    navigate(`/Kanbas/Courses/${cid}/Quizzes/${qid}`); // navigate back, don't save
  };

  return (
    <div>
      <h3>Questions Editor</h3>
      <div className="quiz-d-btns">
        <button
          id="add-question"
          onClick={addQuestion}
          className="btn btn-lg btn-secondary me-1"
        >
          <FaPlus
            className="position-relative me-2"
            style={{ bottom: "1px" }}
          />
          New Question
        </button>
      </div>
      <div>
        <ul className="list-group">
          {questions.map((question) => (
            <li key={question.id} className="list-group-item">
              {question.editMode ? (
                <div>
                  <input
                    type="text"
                    value={question.text}
                    onChange={(e) =>
                      updateQuestion(question.id, { text: e.target.value })
                    }
                    placeholder="Enter question text"
                    className="form-control mb-2"
                  />
                  <select
                    value={question.type}
                    onChange={(e) =>
                      updateQuestion(question.id, { type: e.target.value })
                    }
                    className="form-select mb-2"
                  >
                    <option value="MultipleChoice">Multiple Choice</option>
                    <option value="TrueFalse">True/False</option>
                    <option value="FillInTheBlank">Short Answer</option>
                  </select>
                  <input
                    type="number"
                    value={question.points}
                    onChange={(e) =>
                      updateQuestion(question.id, { points: +e.target.value })
                    }
                    placeholder="Enter points"
                    className="form-control mb-2"
                  />
                  {question.type === "MultipleChoice" && (
                    <MultipleChoiceQuestionEditor
                      choices={choices}
                      updateChoice={updateChoice}
                      removeChoice={removeChoice}
                    />
                  )}
                  {question.type === "TrueFalse" && <TrueFalse />}
                  {question.type === "FillInTheBlank" && <FillInTheBlanks />}
                  <button
                    className="btn btn-sm btn-primary"
                    onClick={() => toggleEditMode(question.id)}
                  >
                    Preview
                  </button>
                </div>
              ) : (
                <div>
                  <h5>{question.text}</h5>
                  <p>Type: {question.type}</p>
                  <p>Points: {question.points}</p>
                  <button
                    className="btn btn-sm btn-secondary"
                    onClick={() => toggleEditMode(question.id)}
                  >
                    Edit
                  </button>
                </div>
              )}
            </li>
          ))}
        </ul>
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
        id="cancel-button"
        onClick={handleCancel}
        className="btn btn-lg btn-secondary me-1 float-end"
      >
        Cancel
      </button>
    </div>
  );
}
