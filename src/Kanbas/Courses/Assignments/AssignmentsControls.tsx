import { FaPlus } from "react-icons/fa6";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { addAssignment } from "./reducer";
import { Link, useParams } from "react-router-dom";

export default function AssignmentsControls() {
  const { cid } = useParams();
  const newAssignmentId = new Date().getTime().toString();
  return (
    <div id="wd-assignments-controls" className="d-flex justify-content-end">
      <div className="input-group w-auto">
        <span className="input-group-text border-right-none">
          <HiMagnifyingGlass
          // className="position-relative me-2"
          // style={{ bottom: "1px" }}
          />
        </span>
        <input
          id="wd-search-assignment"
          className="btn btn-lg btn-secondary me-1"
          //   value=""
          placeholder="Search..."
          type="search"
        />
      </div>
      <div>
        <button
          id="wd-add-assignment-group"
          className="btn btn-lg btn-secondary me-1 float-end"
        >
          <FaPlus
            className="position-relative me-2"
            style={{ bottom: "1px" }}
          />
          Group
        </button>
      </div>
      <div>
        <Link
          id="wd-add-assignment"
          to={`/Kanbas/Courses/${cid}/Assignments/${newAssignmentId}`}
          className="btn btn-lg btn-danger me-1 float-end"
        >
          <FaPlus
            className="position-relative me-2"
            style={{ bottom: "1px" }}
          />
          Assignment
        </Link>
        {/*<button
          id="wd-add-assignment"
          className="btn btn-lg btn-danger me-1 float-end"
        >
          <FaPlus
            className="position-relative me-2"
            style={{ bottom: "1px" }}
          />
          Assignment
        </button>
        */}
        {/*
        <Link
          id="wd-add-assignment-btn"
          to="/Kanbas/Account/Profile"
          className="btn btn-primary w-100"
        >
          Sign Up{" "}
        </Link>
        <a
          className="wd-assignment-link"
          href={`#/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}
        >
          {assignment.title}
          
        </a>
        */}
      </div>
    </div>
  );
}
