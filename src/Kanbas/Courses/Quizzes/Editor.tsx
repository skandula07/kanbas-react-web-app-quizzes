import { Provider, useSelector } from "react-redux";
import { Navigate, Route, Routes, useLocation, useParams } from "react-router";
import QuizTOC from "./QuizTOC";
import store from "../../store";
import QuizDetailsEditor from "./DetailsEditor";
import QuizQuestionsEditor from "./QuestionsEditor";

export default function QuizEditor() {
  const { pathname } = useLocation();
  const { cid, qid } = useParams();
  const { currentUser } = useSelector((state: any) => state.accountReducer);

  const quizzes = useSelector(
    (state: { quizzesReducer: { quizzes: any[] } }) =>
      state.quizzesReducer.quizzes || []
  );
  const quiz = quizzes.find((q) => q._id === qid);

  return (
    <Provider store={store}>
      <div>
        <div className="float-end">
          <span>Points {quiz?.points}</span> <span>Published</span>
        </div>
        <br />
        <hr />
        <QuizTOC />
        <Routes>
          <Route path="/" element={<Navigate to="DetailsEditor" />} />
          <Route path="DetailsEditor" element={<QuizDetailsEditor />} />
          <Route path="QuestionsEditor" element={<QuizQuestionsEditor />} />
        </Routes>
      </div>
    </Provider>
  );
}
