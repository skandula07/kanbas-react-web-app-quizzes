import { Link } from "react-router-dom";
export default function Lab2Navigation() {
  return (
    <div id="wd-lab-2-navigation">
      <br />
      <Link to="/Labs/Lab2" id="wd-account-link">
        Account
      </Link>
      <br />
      <Link to="/Labs/Lab2" id="wd-dashboard-link">
        Dashboard
      </Link>
      <br />
      <Link to="/Labs/Lab2" id="wd-course-link">
        Courses
      </Link>
      <br />
      <Link to="/Labs/Lab2" id="wd-calendar-link">
        Calendars
      </Link>
      <br />
      <Link to="/Labs/Lab2" id="wd-inbox-link">
        Inbox
      </Link>
    </div>
  );
}
