import { FaPlus } from "react-icons/fa6";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

export default function AssignmentsControls() {
  const { cid } = useParams();
  const newAssignmentId = new Date().getTime().toString();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const isFaculty = currentUser && currentUser.role === "FACULTY";

  return (
    <div id="wd-assignments-controls" className="d-flex justify-content-end">
      <div className="input-group w-auto">
        <span className="input-group-text border-right-none">
          <HiMagnifyingGlass />
        </span>
        <input
          id="wd-search-assignment"
          className="btn btn-lg btn-secondary me-1"
          //   value=""
          placeholder="Search..."
          type="search"
        />
      </div>
      {isFaculty && (
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
      )}
      {isFaculty && (
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
        </div>
      )}
    </div>
  );
}
