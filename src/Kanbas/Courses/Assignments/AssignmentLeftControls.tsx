import { BsGripVertical } from "react-icons/bs";
import { PiNotePencil } from "react-icons/pi";

export default function AssignmentLeftControls({
  assignmentId,
  updateAssignment,
}: {
  assignmentId: string;
  updateAssignment: (assignmentId: string) => void;
}) {
  return (
    <div className="float-end">
      <BsGripVertical className="me-2 fs-3" />
      <PiNotePencil
        onClick={() => updateAssignment(assignmentId)}
        className="text-success me-2 fs-3"
      />
    </div>
  );
}
