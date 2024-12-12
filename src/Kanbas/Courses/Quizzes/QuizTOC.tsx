import { useSelector } from "react-redux";
import { useLocation, useParams } from "react-router";

export default function QuizTOC() {
  const { pathname } = useLocation();
  const { cid, qid } = useParams();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  return (
    <div>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <a
            id="wd-quiz-d-editor"
            href={`#/Kanbas/Courses/${cid}/Quizzes/${qid}/Editor/DetailsEditor`}
            className={`nav-link  ${
              pathname.includes("DetailsEditor") ? "active" : "text-danger"
            }`}
          >
            Details
          </a>
        </li>
        <li className="nav-item">
          <a
            id="wd-quiz-q-editor"
            href={`#/Kanbas/Courses/${cid}/Quizzes/${qid}/Editor/QuestionsEditor`}
            className={`nav-link  ${
              pathname.includes("QuestionsEditor") ? "active" : "text-danger"
            }`}
          >
            Questions
          </a>
        </li>
      </ul>
    </div>
  );
}
