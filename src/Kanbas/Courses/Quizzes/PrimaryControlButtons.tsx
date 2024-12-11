import { IoEllipsisVertical } from "react-icons/io5";
import { BsPlus } from "react-icons/bs";
import GreenCheckmark from "./GreenCheckMark";
import { FaTrash } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";

interface PrimaryControlButtonsProps {
  quizId: string;
  deleteQuiz: (quizId: string) => void; // Expect quizId
  editQuiz: (quizId: string) => void; // Expect quizId
}

export default function PrimaryControlButtons({
  quizId,
  deleteQuiz,
  editQuiz,
}: PrimaryControlButtonsProps) {
  return (
    <div className="float-end">
      {/* Edit Button */}
      <FaPencil onClick={() => editQuiz(quizId)} className="text-primary me-3" />

      {/* Delete Button */}
      <FaTrash
        className="text-danger me-2 mb-1"
        onClick={() => deleteQuiz(quizId)} // Pass quizId
      />
    </div>
  );
}
