import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "../Modules/GreenCheckmark";
import { FaTrash } from "react-icons/fa";
import AssignmentDeletion from "./AssignmentDeletion";

export default function AssignmentRightButtons({
  assignmentId,
  assignmentTitle,
  deleteAssignment,
}: {
  assignmentId: string;
  assignmentTitle: string;
  deleteAssignment: (id: string) => void;
}) {
  const modalId = `wd-delete-assignment-dialog-${assignmentId}`;
  return (
    <div className="float-end">
      <FaTrash
        className="text-danger me-2 mb-1"
        data-bs-toggle="modal"
        data-bs-target={`#${modalId}`} // triggers modal
      />

      <GreenCheckmark />
      <IoEllipsisVertical className="fs-4" />

      <AssignmentDeletion
        modalId={modalId}
        assignmentId={assignmentId}
        assignmentTitle={assignmentTitle}
        deleteAssignment={deleteAssignment}
      />
    </div>
  );
}
