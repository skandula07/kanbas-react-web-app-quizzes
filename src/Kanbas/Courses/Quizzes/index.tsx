import { useParams } from "react-router";
import { BsGripVertical } from "react-icons/bs";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import QuizControls from "./QuizControls";
import QuizControlButtons from "./QuizControlButtons";
import { addQuiz, updateQuiz, deleteQuiz } from "./reducer";
import QuizzesControlButtons from "./QuizzesControlsButtons";
import { RxRocket } from "react-icons/rx";
import PrimaryControlButtons from "./PrimaryControlButtons";

interface QuizControlsProps {
  CourseId: string;
}

export const Quizzes: React.FC<QuizControlsProps> = ({ CourseId }) => {
  interface Quiz {
    name: string;
    description: string;
    points: number;
    due_date: string;
    availableFrom: string;
    availableUntil: string;
    _id: string;
  }

  const cid = CourseId; // Course ID from props
  console.log(cid);
  const [quizName, setQuizName] = useState("");
  const { quizzes } = useSelector((state: any) => state.quizzesReducer); // Redux state
  const dispatch = useDispatch();

  // Function to handle adding a new quiz
  const addQuizHandler = () => {
    if (quizName.trim()) {
      dispatch(addQuiz({ name: quizName, course: cid }));
      setQuizName(""); // Clear the input after adding
    }
  };

  const quizzesToShow = [
    ...(JSON.parse(localStorage.getItem("quizzes") || "[]") as Quiz[]),
  ];

  return (
    <div>
      {/* Quiz Controls */}
      <QuizControls
        QuizName={quizName}
        setQuizName={setQuizName}
        addQuiz={addQuizHandler}
      />
      <br />
      <br />
      <br />
      <br />

      {/* Quizzes List */}
      <ul id="wd-quizzes" className="list-group rounded-0">
        {quizzes
          .filter((quiz: any) => quiz.course === cid)
          .map((quiz: any) => {
            // Format the due_date
            const formattedDueDate = new Intl.DateTimeFormat("en-US", {
              month: "short",
              day: "numeric",
              hour: "numeric",
              minute: "numeric",
              hour12: true,
            }).format(new Date(quiz.due_date));

            return (
              <li
                key={quiz._id}
                className="wd-quizzes list-group-item p-0  border-gray"
              >
                <div className="wd-title  title bg-white bold margin">
                <RxRocket className="rocket"/>
                  {/* <BsGripVertical className="me-2 fs-3" /> */}

                  {/* Toggle between Viewing and Editing */}
                  {!quiz.editing && quiz.title}
                  {quiz.editing && (
                    <input
                      className="form-control w-50 d-inline-block"
                      onChange={(e) => {
                        console.log(quiz);
                        dispatch(
                          updateQuiz({ ...quiz, title: e.target.value })
                        );
                      }}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          dispatch(updateQuiz({ ...quiz, editing: false }));
                        }
                      }}
                      defaultValue={quiz.title}
                    />
                  )}

                  {/* Quiz Control Buttons */}
                  <QuizControlButtons
                    quizId={quiz._id}
                    deleteQuiz={(quizId) => {
                      dispatch(deleteQuiz(quizId));
                    }}
                    editQuiz={(quizId) =>
                      dispatch(updateQuiz({ ...quiz, editing: true }))
                    }
                  />
                </div>
                <div className="quizDetails">
                  <p>Available: <span className="red">{quiz.submission_type}</span> </p>
                  <p>|</p>
                 
                  <p>{"Due Date: " + formattedDueDate}</p>
                  <p>|</p>
                  <p>{quiz.points + "pts"}</p>
                  <PrimaryControlButtons
                  quizId={quiz._id}
                  deleteQuiz={(quizId) => {
                    dispatch(deleteQuiz(quizId));
                  }}
                  editQuiz={(quizId) =>
                    dispatch(updateQuiz({ ...quiz, editing: true }))
                  }
                />
                </div>
              </li>
              
            );
          })}
      </ul>
    </div>
  );
};