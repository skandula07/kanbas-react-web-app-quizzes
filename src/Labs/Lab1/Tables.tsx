export default function Tables() {
  return (
    <div>
      <div id="wd-tables">
        <h3>Table Tag</h3>
        <table border={1} width="100%">
          <thead>
            <tr>
              <th>Quiz</th>
              <th>Topic</th>
              <th>Date</th>
              <th>Grade</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Q1</td>
              <td>HTML</td>
              <td>2/3/21</td>
              <td>85</td>
            </tr>
            <tr>
              <td>Q2</td>
              <td>CSS</td>
              <td>2/10/21</td>
              <td>90</td>
            </tr>
            <tr>
              <td>Q3</td>
              <td>JavaScript</td>
              <td>2/17/21</td>
              <td>95</td>
            </tr>
            <tr>
              <td>Q4</td>
              <td>Interfaces</td>
              <td>2/24/21</td>
              <td>70</td>
            </tr>
            <tr>
              <td>Q5</td>
              <td>Redux</td>
              <td>3/1/21</td>
              <td>84</td>
            </tr>
            <tr>
              <td>Q6</td>
              <td>Authentication</td>
              <td>3/8/21</td>
              <td>97</td>
            </tr>
            <tr>
              <td>Q7</td>
              <td>Node</td>
              <td>3/15/21</td>
              <td>100</td>
            </tr>
            <tr>
              <td>Q8</td>
              <td>State</td>
              <td>3/22/21</td>
              <td>95</td>
            </tr>
            <tr>
              <td>Q9</td>
              <td>Session</td>
              <td>3/29/21</td>
              <td>87</td>
            </tr>
            <tr>
              <td>Q10</td>
              <td>MongoDB</td>
              <td>4/5/21</td>
              <td>100</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={3}>Average</td>
              <td>90.3</td>
            </tr>
          </tfoot>
        </table>

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
      </div>
    </div>
  );
}
