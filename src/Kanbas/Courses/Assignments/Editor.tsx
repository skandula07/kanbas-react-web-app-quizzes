export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <h3 id="wd-name">Assignment Name</h3>
      <input id="wd-name" value="A1 - ENV + HTML" />
      <br />
      <br />
      <textarea id="wd-description" cols={44} rows={10}>
        The assignment is available online Submit a link to the landing page of
        your Web application running on Netflify. The landing page should
        include the following: Your full name and section Links to each of the
        lab assignments Link to the Kanbas application Links to all relevant
        source code repositories The Kanbas application should include a link to
        navigate back to the landing page.
      </textarea>
      <br />
      <br />
      <table>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-points">Points</label>
          </td>
          <td>
            <input id="wd-points" defaultValue={100} />
          </td>
        </tr>
        <br />
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-group">Assignment Group</label>
          </td>
          <td>
            <select id="wd-group">
              <option selected value="ASSIGNMENTS">
                ASSIGNMENTS
              </option>
              <option value="QUIZZES">QUIZZES</option>
              <option value="EXAMS">EXAMS</option>
              <option value="PROJECT">PROJECT</option>
            </select>
          </td>
        </tr>
        <br />
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-display-grade-as">Display Grade as</label>
          </td>
          <td>
            <select id="wd-display-grade-as">
              <option selected value="PERCENTAGE">
                Percentage
              </option>
              <option value="POINTS">Points</option>
            </select>
          </td>
        </tr>
        <br />
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-submission-type">Submission Type</label>
          </td>
          <td>
            <select id="wd-submission-types">
              <option selected value="ONLINE">
                Online
              </option>
              <option value="ON-PAPER">On Paper</option>
              <option value="NO-SUBMISSION">No Submission</option>
              <option value="EXTERNAL-TOOL">External Tool</option>
            </select>
            <br />
            <br />
            <label>Online Entry Options</label> <br />
            <input
              type="checkbox"
              name="check-online-entry"
              id="wd-text-entry"
            />
            <label htmlFor="wd-text-entry">Text Entry</label>
            <br />
            <input
              type="checkbox"
              name="check-online-entry"
              id="wd-website-url"
            />
            <label htmlFor="wd-website-url">Website URL</label>
            <br />
            <input
              type="checkbox"
              name="check-online-entry"
              id="wd-media-recordings"
            />
            <label htmlFor="wd-media-recordings">Media Recordings</label>
            <br />
            <input
              type="checkbox"
              name="check-online-entry"
              id="wd-student-annotation"
            />
            <label htmlFor="wd-student-annotation">Student Annotation</label>
            <br />
            <input
              type="checkbox"
              name="check-online-entry"
              id="wd-file-upload"
            />
            <label htmlFor="wd-file-upload">File Uploads</label>
            <br />
          </td>
        </tr>
        <br />
        <tr>
          <td align="right" valign="top">
            <label>Assign</label>
          </td>
          <td align="left" valign="top">
            <table>
              <tr>
                <td>
                  <label htmlFor="wd-assign-to">Assign to</label> <br />
                  <input
                    id="wd-assign-to"
                    value="Everyone"
                    defaultValue="Everyone"
                  />
                  <br />
                  <br />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="wd-due-date">Due</label> <br />
                  <input
                    id="wd-due-date"
                    type="date"
                    value="2024-05-13"
                    defaultValue="2024-05-13"
                  />
                  <br />
                  <br />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="wd-available-from">Available from</label>{" "}
                  <br />
                  <input
                    id="wd-available-from"
                    type="date"
                    value="2024-05-06"
                    defaultValue="2024-05-06"
                  />
                </td>
                <td>
                  <label htmlFor="wd-available-until">Until</label> <br />
                  <input
                    id="wd-available-until"
                    type="date"
                    value="2024-05-20"
                    defaultValue="2024-05-20"
                  />
                </td>
              </tr>
            </table>
          </td>
          {/* <td>
            <label htmlFor="wd-assign-to">Assign to</label> <br />
            <input id="wd-assign-to" value="Everyone" defaultValue="Everyone" />
            <br />
            <br />
            <label htmlFor="wd-due-date">Due</label> <br />
            <input
              id="wd-due-date"
              type="date"
              value="2024-05-13"
              defaultValue="2024-05-13"
            />
            <br />
            <br />
            <td>
              <label htmlFor="wd-available-from">Available from</label> <br />
              <input
                id="wd-available-from"
                type="date"
                value="2024-05-06"
                defaultValue="2024-05-06"
              />
            </td>
            <td>
              <label htmlFor="wd-available-until">Until</label> <br />
              <input
                id="wd-available-until"
                type="date"
                value="2024-05-20"
                defaultValue="2024-05-20"
              />
            </td>
          </td> */}
        </tr>
      </table>
      <hr></hr>
      <table align="right">
        <tr>
          <td>
            <button>Cancel</button>{" "}
          </td>
          <td>
            <button>Save</button>
          </td>
        </tr>
      </table>
    </div>
  );
}
