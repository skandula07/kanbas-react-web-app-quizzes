import { BsGripVertical } from "react-icons/bs";
import { PiNotePencil } from "react-icons/pi";
import QuizzesControls from "./QuizzesControls";
import QuizControlButtons from "./QuizControlButtons";
import { useParams } from "react-router";

import {
  setQuizzes,
  addQuiz,
  editQuiz,
  updateQuiz,
  deleteQuiz,
} from "./reducer";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import * as coursesClient from "../client";
import * as quizzesClient from "./client";

import QuizRightButtons from "./QuizRightButtons";
import QuizDetailsEditor from "./DetailsEditor";

export default function Quizzes() {
  const { cid } = useParams();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const isFaculty = currentUser && currentUser.role === "FACULTY";

  const quizzes = useSelector((state: any) => state.quizzesReducer.quizzes);

  const dispatch = useDispatch();

  const removeQuiz = async (quizId: string) => {
    await quizzesClient.deleteQuiz(quizId);
    dispatch(deleteQuiz(quizId));
  };

  const fetchQuizzes = async () => {
    const quizzes = await coursesClient.findQuizzesForCourse(cid as string);
    dispatch(setQuizzes(quizzes));
  };
  useEffect(() => {
    fetchQuizzes();
  }, []);

  return (
    <div>
      <QuizzesControls />
      <br />
      <br />
      <ul id="wd-quizzes" className="list-group rounded-0">
        {quizzes.filter((quiz: any) => quiz.course === cid).length > 0 && (
          <li className="wd-quiz list-group-item p-0 mb-5 fs-5 border-gray">
            <div className="wd-title p-3 ps-2 bg-secondary">
              <BsGripVertical className="me-2 fs-3" />
              QUIZZES
              <QuizControlButtons />
            </div>

            <ul className="wd-lessons list-group rounded-0">
              {quizzes.map((quiz: any) => (
                <li
                  key={quiz._id}
                  className="wd-lesson list-group-item p-3 ps-1 d-flex"
                >
                  <div className="quiz-icons">
                    <BsGripVertical className="me-2 fs-3" />
                    {isFaculty && (
                      <a
                        className="wd-quizzes-details"
                        href={`#/Kanbas/Courses/${cid}/Quizzes/${quiz._id}`}
                      >
                        <PiNotePencil className="text-success me-2 fs-3" />
                      </a>
                    )}
                  </div>
                  <div className="quiz-info">
                    {quiz.title}
                    <div>
                      <span className="text-danger">Multiple Modules</span> |{" "}
                      {quiz?.availableDate && (
                        <>
                          <b>Not Available until</b>{" "}
                          {new Date(quiz.availableDate).toLocaleString(
                            "default",
                            { month: "long" }
                          )}{" "}
                          {new Date(quiz.availableDate).toLocaleString(
                            "default",
                            { day: "numeric" }
                          )}{" "}
                          {" at "}
                          {new Date(quiz.availableDate).toLocaleTimeString(
                            "default",
                            {
                              hour: "2-digit",
                              minute: "2-digit",
                            }
                          )}{" "}
                          | <br />{" "}
                        </>
                      )}{" "}
                      <b>Due</b>{" "}
                      {new Date(quiz.dueDate).toLocaleString("default", {
                        month: "long",
                      })}{" "}
                      {new Date(quiz.dueDate).toLocaleString("default", {
                        day: "numeric",
                      })}{" "}
                      {" at "}
                      {new Date(quiz.dueDate).toLocaleTimeString("default", {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}{" "}
                      | {quiz.points} pts
                    </div>
                  </div>
                  <div className="quiz-icons right">
                    {isFaculty && (
                      <QuizRightButtons
                        quizId={quiz._id}
                        quizTitle={quiz.title}
                        deleteQuiz={(quizId) => removeQuiz(quizId)}
                      />
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </li>
        )}
      </ul>
    </div>
  );
}
