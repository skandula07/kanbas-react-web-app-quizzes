export default function QuizDetailsEditor() {
  return (
    <div>
      <h3>Details Editor</h3>
      <div className="float-end">
        <div>
          Points
          <span>0</span>
        </div>
        <div>
          <span>Not Published</span>
        </div>
      </div>
      <div id="wd-assignments-editor" className="editor-margin">
        <div>
          <div className="mb-3">
            <input
              id="wd-name"
              className="edit-box form-control"
              value="Quiz Name"
              placeholder="Unnamed Quiz"
            />
          </div>
          <div>
            <span id="wd-name">Quiz Instructions:</span>
          </div>
          <div className="mb-3">
            <textarea
              id="wd-description"
              className="form-control"
              cols={44}
              rows={10}
              value="description"
              placeholder="Quiz Description"
            ></textarea>
          </div>
          <div className="" style={{ width: "70%" }}>
            <div className="row mb-3">
              <label htmlFor="wd-group" className="col col-form-label">
                Quiz Type
              </label>
              <div className="col-sm-10">
                <select
                  id="wd-group"
                  className="form-control"
                  value="GRADED QUIZ"
                >
                  <option value="GRADED-QUIZ">Graded Quiz</option>
                  <option value="PRACTICE-QUIZ">Practice Quiz</option>
                  <option value="GRADED-SURVEY">Graded Survey</option>
                  <option value="UNGRADED-SURVEY">Ungraded Survey</option>
                </select>
              </div>
            </div>
            <div className="row mb-3">
              <label htmlFor="wd-points" className="col col-form-label">
                Points
              </label>
              <div className="col-sm-10">
                <input
                  id="wd-points"
                  type="number"
                  className="form-control"
                  value="10"
                  placeholder="Points"
                />
              </div>
            </div>
            <div className="row mb-3">
              <label htmlFor="wd-group" className="col col-form-label">
                Assignment Group
              </label>
              <div className="col-sm-10">
                <select id="wd-group" className="form-control" value="QUIZZES">
                  <option value="ASSIGNMENTS">ASSIGNMENTS</option>
                  <option value="QUIZZES">QUIZZES</option>
                  <option value="EXAMS">EXAMS</option>
                  <option value="PROJECT">PROJECT</option>
                </select>
              </div>
            </div>
            <div className="row mb-3">
              <label
                htmlFor="wd-shuffle-answers"
                className="col col-form-label"
              >
                Shuffle Answers
              </label>
              <div className="col-sm-10">
                <input
                  id="wd-shuffle-answers"
                  type="checkbox"
                  className="form-check-input"
                  defaultChecked
                />
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
                      value="no"
                    >
                      <option value="ONLINE">Online</option>
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
                      className="form-control"
                      value="no"
                    />
                  </div>
                  <div className="row mb-3 side-padding">
                    <label htmlFor="wd-due-date" className="col col-form-label">
                      <b>Due</b>
                    </label>
                    <input
                      id="wd-due-date"
                      type="datetime-local"
                      className="form-control"
                      value="10/10/10"
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
                        className="form-control"
                        value="10/10/10"
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
                        className="form-control"
                        value=""
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
        </div>
      </div>
    </div>
  );
}
