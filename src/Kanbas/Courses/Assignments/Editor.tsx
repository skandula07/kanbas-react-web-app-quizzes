import { useParams } from "react-router";
import * as db from "../../Database";
import { Link } from "react-router-dom";

export default function AssignmentEditor() {
  const { aid, cid } = useParams();
  const assignments = db.assignments;
  return (
    <div id="wd-assignments-editor" className="editor-margin">
      {assignments
        .filter((assignment) => assignment._id === aid)
        .map((assignment: any) => (
          <div>
            <div>
              <span id="wd-name">Assignment Name</span>
            </div>
            <div className="mb-3">
              <input
                id="wd-name"
                className="edit-box form-control"
                value={assignment.title}
              />
            </div>
            <div className="mb-3">
              <textarea
                id="wd-description"
                className="form-control"
                cols={44}
                rows={10}
                value={assignment.description}
              ></textarea>
            </div>
            <div className="float-end" style={{ width: "70%" }}>
              <div className="row mb-3">
                <label htmlFor="wd-points" className="col col-form-label">
                  Points
                </label>
                <div className="col-sm-10">
                  <input
                    id="wd-points"
                    className="form-control"
                    value={assignment.points}
                  />
                </div>
              </div>
              <div className="row mb-3">
                <label htmlFor="wd-group" className="col col-form-label">
                  Assignment Group
                </label>
                <div className="col-sm-10">
                  <select id="wd-group" className="form-control">
                    <option selected value="ASSIGNMENTS">
                      ASSIGNMENTS
                    </option>
                    <option value="QUIZZES">QUIZZES</option>
                    <option value="EXAMS">EXAMS</option>
                    <option value="PROJECT">PROJECT</option>
                  </select>
                </div>
              </div>
              <div className="row mb-3">
                <label
                  htmlFor="wd-display-grade-as"
                  className="col col-form-label"
                >
                  Display Grade as
                </label>
                <div className="col-sm-10">
                  <select id="wd-display-grade-as" className="form-control">
                    <option selected value="PERCENTAGE">
                      Percentage
                    </option>
                    <option value="POINTS">Points</option>
                  </select>
                </div>
              </div>
              <div className="row mb-3">
                <label
                  htmlFor="wd-submission-type"
                  className="col col-form-label"
                >
                  Submission Type
                </label>
                <div className="col-sm-10">
                  <div className="form-control">
                    <div className="row mb-3 side-padding">
                      <select
                        id="wd-submission-types"
                        className="col form-control"
                      >
                        <option selected value="ONLINE">
                          Online
                        </option>
                        <option value="ON-PAPER">On Paper</option>
                        <option value="NO-SUBMISSION">No Submission</option>
                        <option value="EXTERNAL-TOOL">External Tool</option>
                      </select>
                    </div>
                    <div className="row mb-3 side-padding">
                      <label className="col col-form-label">
                        <b>Online Entry Options</b>
                      </label>
                      <div className="col-form-check">
                        <input
                          type="checkbox"
                          name="check-online-entry"
                          id="wd-text-entry"
                          className="col-form-check-input"
                        />
                        &nbsp;
                        <label
                          htmlFor="wd-text-entry"
                          className="col-form-check-label"
                        >
                          Text Entry
                        </label>
                      </div>
                      <div className="col-form-check">
                        <input
                          type="checkbox"
                          name="check-online-entry"
                          id="wd-website-url"
                          className="col-form-check-input"
                        />
                        &nbsp;
                        <label
                          htmlFor="wd-website-url"
                          className="col-form-check-label"
                        >
                          Website URL
                        </label>
                      </div>
                      <div className="col-form-check">
                        <input
                          type="checkbox"
                          name="check-online-entry"
                          id="wd-media-recordings"
                          className="col-form-check-input"
                        />
                        &nbsp;
                        <label
                          htmlFor="wd-media-recordings"
                          className="col-form-check-label"
                        >
                          Media Recordings
                        </label>
                      </div>
                      <div className="col-form-check">
                        <input
                          type="checkbox"
                          name="check-online-entry"
                          id="wd-student-annotation"
                          className="col-form-check-input"
                        />
                        &nbsp;
                        <label
                          htmlFor="wd-student-annotation"
                          className="col-form-check-label"
                        >
                          Student Annotation
                        </label>
                      </div>
                      <div className="col-form-check">
                        <input
                          type="checkbox"
                          name="check-online-entry"
                          id="wd-file-upload"
                          className="col-form-check-input"
                        />
                        &nbsp;
                        <label
                          htmlFor="wd-file-upload"
                          className="col-form-check-label"
                        >
                          File Uploads
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mb-3">
                <label className="col col-form-label">Assign</label>
                <div className="col-sm-10">
                  <div className="form-control">
                    <div className="row mb-3 side-padding">
                      <label
                        htmlFor="wd-assign-to"
                        className="col col-form-label"
                      >
                        <b>Assign to</b>
                      </label>
                      <input
                        id="wd-assign-to"
                        value="Everyone"
                        defaultValue="Everyone"
                        className="form-control"
                      />
                    </div>
                    <div className="row mb-3 side-padding">
                      <label
                        htmlFor="wd-due-date"
                        className="col col-form-label"
                      >
                        <b>Due</b>
                      </label>
                      <input
                        id="wd-due-date"
                        type="datetime-local"
                        value={assignment.due_date}
                        className="form-control"
                      />
                    </div>
                    <div className="row mb-3 side-padding d-flex">
                      <div className="w-50">
                        <label
                          htmlFor="wd-available-from"
                          className="col col-form-label"
                        >
                          <b>Available from</b>
                        </label>
                        <input
                          id="wd-available-from"
                          type="datetime-local"
                          value={assignment.available_from_date}
                          className="form-control"
                        />
                      </div>
                      <div className="w-50">
                        <label
                          htmlFor="wd-available-until"
                          className="col col-form-label"
                        >
                          <b>Until</b>
                        </label>
                        <input
                          id="wd-available-until"
                          type="datetime-local"
                          value={assignment.available_until_date}
                          className="form-control"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <hr />
              <Link
                id="save-button"
                to={`/Kanbas/Courses/${cid}/Assignments`}
                className="btn btn-lg btn-danger me-1 float-end"
              >
                Save
              </Link>
              <Link
                id="cancel-button"
                to={`/Kanbas/Courses/${cid}/Assignments`}
                className="btn btn-lg btn-secondary me-1 float-end"
              >
                Cancel
              </Link>
              {/* <button
                id="save-button"
                className="btn btn-lg btn-danger me-1 float-end"
              >
                Save
              </button>
              <button
                id="cancel-button"
                className="btn btn-lg btn-secondary me-1 float-end"
              >
                Cancel
              </button> */}
            </div>
          </div>
        ))}
    </div>
  );
}

{
  /* <div id="wd-assignments-editor" className="editor-margin">
      <div>
        <span id="wd-name">Assignment Name</span>
      </div>
      <div className="mb-3">
        <input
          id="wd-name"
          className="edit-box form-control"
          value="A1 - ENV + HTML"
        />
      </div>
      <div className="mb-3">
        <textarea
          id="wd-description"
          className="form-control"
          cols={44}
          rows={10}
        >
          The assignment is available online Submit a link to the landing page
          of your Web application running on Netflify. The landing page should
          include the following: Your full name and section Links to each of the
          lab assignments Link to the Kanbas application Links to all relevant
          source code repositories The Kanbas application should include a link
          to navigate back to the landing page.
        </textarea>
      </div>
      <div className="float-end" style={{ width: "70%" }}>
        <div className="row mb-3">
          <label htmlFor="wd-points" className="col col-form-label">
            Points
          </label>
          <div className="col-sm-10">
            <input id="wd-points" className="form-control" defaultValue={100} />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="wd-group" className="col col-form-label">
            Assignment Group
          </label>
          <div className="col-sm-10">
            <select id="wd-group" className="form-control">
              <option selected value="ASSIGNMENTS">
                ASSIGNMENTS
              </option>
              <option value="QUIZZES">QUIZZES</option>
              <option value="EXAMS">EXAMS</option>
              <option value="PROJECT">PROJECT</option>
            </select>
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="wd-display-grade-as" className="col col-form-label">
            Display Grade as
          </label>
          <div className="col-sm-10">
            <select id="wd-display-grade-as" className="form-control">
              <option selected value="PERCENTAGE">
                Percentage
              </option>
              <option value="POINTS">Points</option>
            </select>
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="wd-submission-type" className="col col-form-label">
            Submission Type
          </label>
          <div className="col-sm-10">
            <div className="form-control">
              <div className="row mb-3 side-padding">
                <select id="wd-submission-types" className="col form-control">
                  <option selected value="ONLINE">
                    Online
                  </option>
                  <option value="ON-PAPER">On Paper</option>
                  <option value="NO-SUBMISSION">No Submission</option>
                  <option value="EXTERNAL-TOOL">External Tool</option>
                </select>
              </div>
              <div className="row mb-3 side-padding">
                <label className="col col-form-label">
                  <b>Online Entry Options</b>
                </label>
                <div className="col-form-check">
                  <input
                    type="checkbox"
                    name="check-online-entry"
                    id="wd-text-entry"
                    className="col-form-check-input"
                  />
                  &nbsp;
                  <label
                    htmlFor="wd-text-entry"
                    className="col-form-check-label"
                  >
                    Text Entry
                  </label>
                </div>
                <div className="col-form-check">
                  <input
                    type="checkbox"
                    name="check-online-entry"
                    id="wd-website-url"
                    className="col-form-check-input"
                  />
                  &nbsp;
                  <label
                    htmlFor="wd-website-url"
                    className="col-form-check-label"
                  >
                    Website URL
                  </label>
                </div>
                <div className="col-form-check">
                  <input
                    type="checkbox"
                    name="check-online-entry"
                    id="wd-media-recordings"
                    className="col-form-check-input"
                  />
                  &nbsp;
                  <label
                    htmlFor="wd-media-recordings"
                    className="col-form-check-label"
                  >
                    Media Recordings
                  </label>
                </div>
                <div className="col-form-check">
                  <input
                    type="checkbox"
                    name="check-online-entry"
                    id="wd-student-annotation"
                    className="col-form-check-input"
                  />
                  &nbsp;
                  <label
                    htmlFor="wd-student-annotation"
                    className="col-form-check-label"
                  >
                    Student Annotation
                  </label>
                </div>
                <div className="col-form-check">
                  <input
                    type="checkbox"
                    name="check-online-entry"
                    id="wd-file-upload"
                    className="col-form-check-input"
                  />
                  &nbsp;
                  <label
                    htmlFor="wd-file-upload"
                    className="col-form-check-label"
                  >
                    File Uploads
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mb-3">
          <label className="col col-form-label">Assign</label>
          <div className="col-sm-10">
            <div className="form-control">
              <div className="row mb-3 side-padding">
                <label htmlFor="wd-assign-to" className="col col-form-label">
                  <b>Assign to</b>
                </label>
                <input
                  id="wd-assign-to"
                  value="Everyone"
                  defaultValue="Everyone"
                  className="form-control"
                />
              </div>
              <div className="row mb-3 side-padding">
                <label htmlFor="wd-due-date" className="col col-form-label">
                  <b>Due</b>
                </label>
                <input
                  id="wd-due-date"
                  type="datetime-local"
                  // value="2024-05-13"
                  defaultValue="2024-05-13"
                  className="form-control"
                />
              </div>
              <div className="row mb-3 side-padding d-flex">
                <div className="w-50">
                  <label
                    htmlFor="wd-available-from"
                    className="col col-form-label"
                  >
                    <b>Available from</b>
                  </label>
                  <input
                    id="wd-available-from"
                    type="datetime-local"
                    // value="2024-05-06"
                    defaultValue="2024-05-06"
                    className="form-control"
                  />
                </div>
                <div className="w-50">
                  <label
                    htmlFor="wd-available-until"
                    className="col col-form-label"
                  >
                    <b>Until</b>
                  </label>
                  <input
                    id="wd-available-until"
                    type="datetime-local"
                    // value="2024-05-20"
                    defaultValue="2024-05-20"
                    className="form-control"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <button
          id="save-button"
          className="btn btn-lg btn-danger me-1 float-end"
        >
          Save
        </button>
        <button
          id="cancel-button"
          className="btn btn-lg btn-secondary me-1 float-end"
        >
          Cancel
        </button>
      </div>
    </div> */
}
