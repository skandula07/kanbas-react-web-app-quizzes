import { BsGripVertical } from "react-icons/bs";
import { PiNotePencil } from "react-icons/pi";
import AssignmentsControls from "./AssignmentsControls";
import AssignmentControlButtons from "./AssignmentControlButtons";
import { useParams } from "react-router";

import {
  setAssignments,
  addAssignment,
  editAssignment,
  updateAssignment,
  deleteAssignment,
} from "./reducer";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import * as coursesClient from "../client";
import * as assignmentsClient from "./client";

import AssignmentRightButtons from "./AssignmentRightButtons";

export default function Assignments() {
  const { cid } = useParams();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const isFaculty = currentUser && currentUser.role === "FACULTY";

  const assignments = useSelector(
    (state: any) => state.assignmentsReducer.assignments
  );

  const dispatch = useDispatch();

  const removeAssignment = async (assignmentId: string) => {
    await assignmentsClient.deleteAssignment(assignmentId);
    dispatch(deleteAssignment(assignmentId));
  };

  const fetchAssignments = async () => {
    const assignments = await coursesClient.findAssignmentsForCourse(
      cid as string
    );
    dispatch(setAssignments(assignments));
  };
  useEffect(() => {
    fetchAssignments();
  }, []);

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
              {assignments.map((assignment: any) => (
                <li
                  key={assignment._id}
                  className="wd-lesson list-group-item p-3 ps-1 d-flex"
                >
                  <div className="assignment-icons">
                    <BsGripVertical className="me-2 fs-3" />
                    {isFaculty && (
                      <a
                        className="wd-assignment-edit"
                        href={`#/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}
                      >
                        <PiNotePencil className="text-success me-2 fs-3" />
                      </a>
                    )}
                  </div>
                  <div className="assignment-info">
                    {assignment.title}
                    <div>
                      <span className="text-danger">Multiple Modules</span> |{" "}
                      {assignment?.available_from_date && (
                        <>
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
                          | <br />{" "}
                        </>
                      )}{" "}
                      <b>Due</b>{" "}
                      {new Date(assignment.due_date).toLocaleString("default", {
                        month: "long",
                      })}{" "}
                      {new Date(assignment.due_date).toLocaleString("default", {
                        day: "numeric",
                      })}{" "}
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
                    {isFaculty && (
                      <AssignmentRightButtons
                        assignmentId={assignment._id}
                        assignmentTitle={assignment.title}
                        deleteAssignment={(assignmentId) =>
                          removeAssignment(assignmentId)
                        }
                      />
                    )}
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
