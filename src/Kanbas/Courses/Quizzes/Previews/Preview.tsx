import { useEffect, useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import FillInTheBlanksPreview from "./FillInTheBlanksPreview";
import MultipleChoicePreview from "./MultipleChoicePreview";
import { setQuestions } from "./questionReducer";
import * as questionsClient from "./questionsClient";
import TrueFalsePreview from "./TrueFalsePreview";

// Interfaces for Types

// Choice interface for question choices
interface Choice {
  text: string;
  isCorrect: boolean;
}

// Base question interface
interface Question {
  _id: string;
  type: "fill_in_the_blank" | "multiple_choice" | "true_false" | "short_answer";
  title: string;
  points: number;
  question: string;
  choices?: Choice[]; // choices will be available for multiple choice questions
}

// Props for FillInTheBlanksPreview component
interface FillInTheBlanksPreviewProps {
  question: Question;
  index: number;  // New prop to pass index
}

export default function Preview() {
  const { qid } = useParams(); // Get quiz ID from URL
  const { currentUser } = useSelector((state: any) => state.accountReducer); // Get current user from Redux
  const isFaculty = currentUser && currentUser.role === "FACULTY"; // Check if the user is a faculty member
  const [questions, setQuestions] = useState<Question[]>([]); // State to store questions
  const [currentPage, setCurrentPage] = useState(0); // State to store the current page (question index)
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Function to fetch questions for a specific quiz
  const fetchQuestions = async () => {
    const fetchedQuestions = await questionsClient.findQuestionsForQuiz(qid as string);
    setQuestions(fetchedQuestions);
  };

  useEffect(() => {
    fetchQuestions();
  }, [qid]); // Fetch questions when the `qid` changes

  // Function to handle different types of questions and render accordingly
  function handlePreview(question: Question, index: number) {
    if (question.type === "fill_in_the_blank") {
      return (
        <div>
          <FillInTheBlanksPreview question={question} index={index} />
          <br />
          <br />
        </div>
      );
    } else if (question.type === "multiple_choice") {
      return (
        <div>
          <MultipleChoicePreview question={question} index={index} />
          <br />
          <br />
        </div>
      );
    } else if (question.type === "true_false") {
      return (
        <div>
          <TrueFalsePreview question={question} index={index} />
          <br />
          <br />
        </div>
      );
    }
    return <div>short_answer</div>;
  }

  // Handle Next Page
  const nextPage = () => {
    if (currentPage < questions.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Handle Previous Page
  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div>
      <button
      className="btn bg-light border"
      onClick={() => navigate(-1)}
      >
        <BiArrowBack /> Back
      </button>
      {questions.length > 0 && (
        <div>
          <div>
            {/* Render the current question based on the current page */}
            {handlePreview(questions[currentPage], currentPage)}
          </div>

          {/* Pagination controls */}
          <div className="pagination-controls ">
            <button
              className="btn border m-2"
              onClick={prevPage}
              disabled={currentPage === 0} // Disable prev button on the first page
            >
              Previous
            </button>
            <span>
              {currentPage + 1} / {questions.length}
            </span>
            <button
              className="btn border m-2"
              onClick={nextPage}
              disabled={currentPage === questions.length - 1} // Disable next button on the last page
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
