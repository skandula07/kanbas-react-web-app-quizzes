export default function Modules() {
  return (
    <div>
      <div>
        <button
          id="wd-collapse-all-button"
          onClick={() => alert("Collapse")}
          type="button"
        >
          Collapse All
        </button>
        &nbsp;
        <button
          id="wd-view-progress-button"
          onClick={() => alert("View Progress")}
          type="button"
        >
          View Progress
        </button>
        &nbsp;
        <select name="publish">
          <option value="publish-all">Publish All</option>
          <option value="publish-none">Publish None</option>
        </select>
        &nbsp;
        <button
          id="wd-add-module-button"
          onClick={() => alert("Add module")}
          type="button"
        >
          + Module
        </button>
      </div>
      <ul id="wd-modules">
        <li className="wd-module">
          <div className="wd-title">Week 1</div>
          <ul className="wd-lessons">
            <li className="wd-lesson">
              <span className="wd-title">LEARNING OBJECTIVES</span>
              <ul className="wd-content">
                <li className="wd-content-item">Introduction to the course</li>
                <li className="wd-content-item">
                  Learn what is Web Development
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li className="wd-module">
          <div className="wd-title">Week 2</div>
          <ul className="wd-lessons">
            <li className="wd-lesson">
              <span className="wd-title">LEARNING OBJECTIVES</span>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
