import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "../Modules/GreenCheckmark";
import { FaTrash } from "react-icons/fa";
import QuizDeletion from "./QuizDeletion";

export default function QuizRightButtons({
  quizId,
  quizTitle,
  deleteQuiz,
}: {
  quizId: string;
  quizTitle: string;
  deleteQuiz: (id: string) => void;
}) {
  const modalId = `wd-delete-quiz-dialog-${quizId}`;
  return (
    <div className="float-end">
      <FaTrash
        className="text-danger me-2 mb-1"
        data-bs-toggle="modal"
        data-bs-target={`#${modalId}`} // triggers modal
      />

      <GreenCheckmark />
      <IoEllipsisVertical className="fs-4" />

      <QuizDeletion
        modalId={modalId}
        quizId={quizId}
        quizTitle={quizTitle}
        deleteQuiz={deleteQuiz}
      />
    </div>
  );
}
