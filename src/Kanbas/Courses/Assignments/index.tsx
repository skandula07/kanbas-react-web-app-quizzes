import { BsGripVertical } from "react-icons/bs";
import { PiNotePencil } from "react-icons/pi";
import AssignmentsControls from "./AssignmentsControls";
import LessonControlButtons from "../Modules/LessonControlButtons";
import AssignmentControlButtons from "./AssignmentControlButtons";

export default function Assignments() {
  return (
    <div>
      <AssignmentsControls />
      <br />
      <br />
      <ul id="wd-assignments" className="list-group rounded-0">
        <li className="wd-assignment list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-3" />
            ASSIGNMENTS
            <AssignmentControlButtons />
          </div>
          <ul className="wd-lessons list-group rounded-0">
            <li className="wd-lesson list-group-item p-3 ps-1 d-flex">
              <div className="assignment-icons">
                <BsGripVertical className="me-2 fs-3" />
                <PiNotePencil className="text-success me-2 fs-3" />
              </div>
              <div className="assignment-info">
                <a
                  className="wd-assignment-link"
                  href="#/Kanbas/Courses/1234/Assignments/123"
                >
                  <b>A1</b>
                </a>
                <div>
                  <span className="text-danger">Multiple Modules</span> |{" "}
                  <b>Not Available until</b> May 6 at 12:00am | <br />{" "}
                  <b>Due</b> May 13 at 11:59pm | 100 pts
                </div>
              </div>
              <div className="assignment-icons right">
                <LessonControlButtons />
              </div>
            </li>
            <li className="wd-lesson list-group-item p-3 ps-1 d-flex">
              <div className="assignment-icons">
                <BsGripVertical className="me-2 fs-3" />
                <PiNotePencil className="text-success me-2 fs-3" />
              </div>
              <div className="assignment-info">
                <a
                  className="wd-assignment-link"
                  href="#/Kanbas/Courses/1234/Assignments/123"
                >
                  <b>A2</b>
                </a>
                <div>
                  <span className="text-danger">Multiple Modules</span> |{" "}
                  <b>Not Available until</b> May 13 at 12:00am | <br />{" "}
                  <b>Due</b> May 20 at 11:59pm | 100 pts
                </div>
              </div>
              <div className="assignment-icons right">
                <LessonControlButtons />
              </div>
            </li>
            <li className="wd-lesson list-group-item p-3 ps-1 d-flex">
              <div className="assignment-icons">
                <BsGripVertical className="me-2 fs-3" />
                <PiNotePencil className="text-success me-2 fs-3" />
              </div>
              <div className="assignment-info">
                <a
                  className="wd-assignment-link"
                  href="#/Kanbas/Courses/1234/Assignments/123"
                >
                  <b>A3</b>
                </a>
                <div>
                  <span className="text-danger">Multiple Modules</span> |{" "}
                  <b>Not Available until</b> May 20 at 12:00am |
                  <br />
                  <b>Due</b> May 27 at 11:59pm | 100 pts
                </div>
              </div>
              <div className="assignment-icons right">
                <LessonControlButtons />
              </div>
            </li>
          </ul>
        </li>

        <h3 id="wd-assignments-title">
          ASSIGNMENTS 40% of Total <button>+</button>
        </h3>
        <ul id="wd-assignment-list">
          <li className="wd-assignment-list-item">
            <a
              className="wd-assignment-link"
              href="#/Kanbas/Courses/1234/Assignments/123"
            >
              A1 - ENV + HTML
            </a>
            <div>
              Multiple Modules | <b>Not Available until</b> May 6 at 12:00am |{" "}
              <br /> <b>Due</b> May 13 at 11:59pm | 100 pts
            </div>
          </li>
          <li className="wd-assignment-list-item">
            <a
              className="wd-assignment-link"
              href="#/Kanbas/Courses/1234/Assignments/123"
            >
              A2 - CSS + BOOTSTRAP
            </a>
            <div>
              Multiple Modules | <b>Not Available until</b> May 13 at 12:00am |{" "}
              <br /> <b>Due</b> May 20 at 11:59pm | 100 pts
            </div>
          </li>
          <li className="wd-assignment-list-item">
            <a
              className="wd-assignment-link"
              href="#/Kanbas/Courses/1234/Assignments/123"
            >
              A2 - JAVASCRIPT + REACT
            </a>
            <div>
              Multiple Modules | <b>Not Available until</b> May 20 at 12:00am |
              <br />
              <b>Due</b> May 27 at 11:59pm | 100 pts
            </div>
          </li>
        </ul>
      </ul>
    </div>
  );
}
