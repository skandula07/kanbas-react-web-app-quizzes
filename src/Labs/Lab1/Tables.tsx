export default function Tables() {
  return (
    <div>
      <h3>Tables</h3>
      <table>
        <thead></thead>
        <tbody></tbody>
      </table>

      <table border={1}>
        <thead>
          <tr>
            <th>Username</th>
            <th>Password</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Role</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
      </table>

      <table border={1}>
        <tbody>
          <tr>
            <td>alice</td> <td>*****</td> <td>Alice</td>
            <td>Wonderland</td> <td>Student</td> <td>Edit | Remove</td>
          </tr>
        </tbody>
      </table>

      <div id="wd-tables">
        <h4>Table Tag</h4>
        <table border={1} width="100%">
          {" "}
          {/* table, border, width */}
          <thead>
            {" "}
            {/* table headings */}
            <tr>
              {" "}
              {/* table row */}
              <th>Quiz</th> {/* table heading*/}
              <th>Topic</th>
              <th>Date</th>
              <th>Grade</th>
            </tr>
          </thead>
          <tbody>
            {" "}
            {/* table body */}
            <tr>
              {" "}
              {/* table row */}
              <td>Q1</td> {/* table data / cell */}
              <td>HTML</td>
              <td>2/3/21</td>
              <td>85</td>
            </tr>
          </tbody>
          <tfoot>
            {" "}
            {/* table row */}
            <tr>
              <td colSpan={3}>Average</td> {/* column span */}
              <td>90</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}
