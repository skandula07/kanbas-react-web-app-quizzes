import { IoEllipsisVertical } from "react-icons/io5";
import { BsPlus } from "react-icons/bs";
import GreenCheckmark from "./GreenCheckMark";
import { FaTrash } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";

interface QuizControlButtonsProps {
  quizId: string;
  deleteQuiz: (quizId: string) => void; // Expect quizId
  editQuiz: (quizId: string) => void; // Expect quizId
}

export default function QuizControlButtons({
  quizId,
  deleteQuiz,
  editQuiz,
}: QuizControlButtonsProps) {
  return (
    <div className="float-end flex ">
      {/* Edit Button */}
      {/* <FaPencil onClick={() => editQuiz(quizId)} className="text-primary me-3" /> */}

      {/* Delete Button */}
     
      <div className="padding">
        
      <GreenCheckmark />
</div>
      <IoEllipsisVertical className="fs-4 " />
      {/* <BsPlus /> */}
    </div>
  );
}
