import { useNavigate, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { addAssignment, updateAssignment } from "./reducer";

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const assignments = useSelector(
    (state: { assignmentsReducer: { assignments: any[] } }) =>
      state.assignmentsReducer.assignments || []
  );
  const assignment = assignments.find((a) => a._id === aid);

  const [title, setTitle] = useState("");
  const [points, setPoints] = useState(0);
  const [dueDate, setDueDate] = useState("");
  const [availableFrom, setAvailableFrom] = useState("");
  const [availableUntil, setAvailableUntil] = useState("");
  const [description, setDescription] = useState("");
  const [group, setGroup] = useState("");
  const [displayGrade, setDisplayGrade] = useState("");
  const [submissionType, setSubmissionType] = useState("");
  const [assignTo, setAssignTo] = useState("");

  useEffect(() => {
    if (assignment) {
      setTitle(assignment.title);
      setPoints(assignment.points);
      setDueDate(assignment.due_date);
      setAvailableFrom(assignment.available_from_date || "");
      setAvailableUntil(assignment.available_until_date || "");
      setDescription(assignment.description || "");
      setGroup(assignment.group || "");
      setDisplayGrade(assignment.display_grade || "");
      setSubmissionType(assignment.submission_type || "");
      setAssignTo(assignment.assign_to || "");
    }
  }, [assignment]);

  const handleSave = () => {
    const newAssignment = {
      _id: aid || new Date().getTime().toString(), // create id if new
      title,
      course: cid,
      points,
      due_date: dueDate,
      available_from_date: availableFrom || undefined,
      available_until_date: availableUntil || undefined,
      description: description || undefined,
      group: group || undefined,
      display_grade: displayGrade || undefined,
      submission_type: submissionType || undefined,
      assign_to: assignTo || undefined,
    };

    if (assignment) {
      dispatch(updateAssignment(newAssignment));
    } else {
      dispatch(addAssignment(newAssignment));
    }

    navigate(`/Kanbas/Courses/${cid}/Assignments`);
  };

  const handleCancel = () => {
    navigate(`/Kanbas/Courses/${cid}/Assignments`); // navigate back, don't save
  };

  return (
    <div id="wd-assignments-editor" className="editor-margin">
      <div>
        <div>
          <span id="wd-name">Assignment Name</span>
        </div>
        <div className="mb-3">
          <input
            id="wd-name"
            className="edit-box form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Assignment Title"
          />
        </div>
        <div className="mb-3">
          <textarea
            id="wd-description"
            className="form-control"
            cols={44}
            rows={10}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Assignment Description"
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
                type="number"
                className="form-control"
                value={points}
                onChange={(e) => setPoints(Number(e.target.value))}
                placeholder="Points"
              />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="wd-group" className="col col-form-label">
              Assignment Group
            </label>
            <div className="col-sm-10">
              <select
                id="wd-group"
                className="form-control"
                value={group}
                onChange={(e) => setGroup(e.target.value)}
              >
                <option value="ASSIGNMENTS">ASSIGNMENTS</option>
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
              <select
                id="wd-display-grade-as"
                className="form-control"
                value={displayGrade}
                onChange={(e) => setDisplayGrade(e.target.value)}
              >
                <option value="PERCENTAGE">Percentage</option>
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
                  <select
                    id="wd-submission-types"
                    className="col form-control"
                    value={submissionType}
                    onChange={(e) => setSubmissionType(e.target.value)}
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
                  <label htmlFor="wd-assign-to" className="col col-form-label">
                    <b>Assign to</b>
                  </label>
                  <input
                    id="wd-assign-to"
                    className="form-control"
                    value={assignTo}
                    onChange={(e) => setAssignTo(e.target.value)}
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
                    value={dueDate}
                    onChange={(e) => setDueDate(e.target.value)}
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
                      value={availableFrom}
                      onChange={(e) => setAvailableFrom(e.target.value)}
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
                      value={availableUntil}
                      onChange={(e) => setAvailableUntil(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <button
            id="save-button"
            onClick={handleSave}
            className="btn btn-lg btn-danger me-1 float-end"
          >
            Save
          </button>
          <button
            id="cancel-button"
            onClick={handleCancel}
            className="btn btn-lg btn-secondary me-1 float-end"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
