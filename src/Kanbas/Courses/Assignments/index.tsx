import { BsGripVertical } from "react-icons/bs";
import { PiNotePencil } from "react-icons/pi";
import AssignmentsControls from "./AssignmentsControls";
import LessonControlButtons from "../Modules/LessonControlButtons";
import AssignmentControlButtons from "./AssignmentControlButtons";
import { useParams } from "react-router";
import * as db from "../../Database";
import AssignmentLeftControls from "./AssignmentLeftControls";
import { useState } from "react";
import {
  addAssignment,
  deleteAssignment,
  updateAssignment,
  editAssignment,
} from "./reducer";
import { useSelector, useDispatch } from "react-redux";

export default function Assignments() {
  const { cid } = useParams();
  const [assignmentTitle, setAssignmentTitle] = useState("");
  //const assignments = db.assignments;
  //const [assignments, setAssignments] = useState<any[]>(db.assignments);
  const { assignments } = useSelector((state: any) => state.assignments);
  const dispatch = useDispatch();

  return (
    <div>
      <AssignmentsControls />
      <br />
      <br />
      <ul id="wd-assignments" className="list-group rounded-0">
        {assignments.filter((assignment: any) => assignment.course === cid)
          .length > 0 && (
          <li className="wd-assignment list-group-item p-0 mb-5 fs-5 border-gray">
            <div className="wd-title p-3 ps-2 bg-secondary">
              <BsGripVertical className="me-2 fs-3" />
              ASSIGNMENTS
              <AssignmentControlButtons />
            </div>

            <ul className="wd-lessons list-group rounded-0">
              {assignments
                .filter((assignment: any) => assignment.course === cid)
                .map((assignment: any) => (
                  <li
                    key={assignment._id}
                    className="wd-lesson list-group-item p-3 ps-1 d-flex"
                  >
                    <div className="assignment-icons">
                      <BsGripVertical className="me-2 fs-3" />
                      <a
                        className="wd-assignment-edit"
                        href={`#/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}
                      >
                        <PiNotePencil className="text-success me-2 fs-3" />
                      </a>
                    </div>
                    <div className="assignment-info">
                      {assignment.title}
                      <div>
                        <span className="text-danger">Multiple Modules</span> |{" "}
                        <b>Not Available until</b>{" "}
                        {new Date(
                          assignment.available_from_date
                        ).toLocaleString("default", { month: "long" })}{" "}
                        {new Date(
                          assignment.available_from_date
                        ).toLocaleString("default", { day: "numeric" })}{" "}
                        {" at "}
                        {new Date(
                          assignment.available_from_date
                        ).toLocaleTimeString("default", {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}{" "}
                        | <br /> <b>Due</b>{" "}
                        {new Date(assignment.due_date).toLocaleString(
                          "default",
                          { month: "long" }
                        )}{" "}
                        {new Date(assignment.due_date).toLocaleString(
                          "default",
                          { day: "numeric" }
                        )}{" "}
                        {" at "}
                        {new Date(assignment.due_date).toLocaleTimeString(
                          "default",
                          {
                            hour: "2-digit",
                            minute: "2-digit",
                          }
                        )}{" "}
                        | {assignment.points} pts
                      </div>
                    </div>
                    <div className="assignment-icons right">
                      <LessonControlButtons />
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
