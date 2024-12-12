import { useNavigate, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { addQuiz, updateQuiz } from "./reducer";
import * as coursesClient from "../client";
import * as quizzesClient from "./client";


export default function QuizQuestionsEditor() {
  const { cid, qid } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState(null);
  const handleRefresh = () => {
    window.location.reload();
  };

  // const saveQuiz = async (quiz: any) => {
  //   try {
  //     await quizzesClient.updateQuiz(quiz);
  //     dispatch(updateQuiz(quiz));
  //   } catch (error: any) {
  //     setErrorMessage(error.response.data.message);
  //   }
  // };
  return (
    <div className="Questions-container">
      {/* <div className="Questions-header">
        <ul className="Questions-tabs">
          <li className="tab active">Details</li>
          <li className="tab">Questions</li>
        </ul>
        <div className="points">Points 0</div>
      </div> */}
      <div className="Questions-body">
        <button className="new-question-btn">+ New Question</button> {/*onClick={/*multiple choice route*/}
      </div>
      <div className="Questions-footer">
        <button className="cancel-btn" onClick={handleRefresh}>Cancel</button>
        <button className="save-btn" > Save</button>  {/*onClick={specific editor's implementation of save}*/}
      </div>
    </div>
  );
}
