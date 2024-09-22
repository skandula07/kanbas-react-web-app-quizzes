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
          <div className="wd-title">
            Week 1, Lecture 1 - Course Introduction, Syllabus, Agenda
          </div>
          <ul className="wd-lessons">
            <li className="wd-lesson">
              <span className="wd-title">LEARNING OBJECTIVES</span>
              <ul className="wd-content">
                <li className="wd-assignment-list-item">
                  Introduction to the course
                </li>
                <li className="wd-assignment-list-item">
                  Learn what is Web Development
                </li>
              </ul>
              <span className="wd-title">READING</span>
              <ul className="wd-content">
                <li className="wd-assignment-list-item">
                  Full Stack Developer - Chapter 1 - Introduction
                </li>
                <li className="wd-assignment-list-item">
                  Full Stack Developer - Chapter 2 - Creating User
                </li>
              </ul>
              <span className="wd-title">SLIDES</span>
              <ul className="wd-content">
                <li className="wd-assignment-list-item">
                  Introduction to Web Development
                </li>
                <li className="wd-assignment-list-item">
                  Creating an HTTP server with Node.js
                </li>
                <li className="wd-assignment-list-item">
                  Creating a React Application
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li className="wd-module">
          <div className="wd-title">
            Week 1, Lecture 2 - Formatting User Interfaces with HTML
          </div>
          <ul className="wd-lessons">
            <li className="wd-lesson">
              <span className="wd-title">LEARNING OBJECTIVES</span>
              <ul className="wd-content">
                <li className="wd-assignment-list-item">
                  Learn how to create user interfaces with HTML
                </li>
                <li className="wd-assignment-list-item">
                  Deploy the assignment to Netflify
                </li>
              </ul>
              <span className="wd-title">SLIDES</span>
              <ul className="wd-content">
                <li className="wd-assignment-list-item">
                  Introduction to HTML and the DOM
                </li>
                <li className="wd-assignment-list-item">
                  Formatting Web content with Headings and{" "}
                </li>
                <li className="wd-assignment-list-item">
                  Formatting content with Lists and Tables
                </li>
              </ul>{" "}
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
