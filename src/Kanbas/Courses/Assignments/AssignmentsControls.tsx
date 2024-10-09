import { FaPlus } from "react-icons/fa6";
import { HiMagnifyingGlass } from "react-icons/hi2";

export default function AssignmentsControls() {
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
        <button
          id="wd-add-assignment"
          className="btn btn-lg btn-danger me-1 float-end"
        >
          <FaPlus
            className="position-relative me-2"
            style={{ bottom: "1px" }}
          />
          Assignment
        </button>
      </div>
    </div>
  );
}
