import { Link } from "react-router-dom";
import { useLocation } from "react-router";
export default function CoursesNavigation() {
  const { pathname } = useLocation();
  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      <Link
        id="wd-course-home-link"
        to="/Kanbas/Courses/1234/Home"
        // className="list-group-item kanbas-nav text-danger border border-0"
        className={`list-group-item kanbas-nav border border-0 ${
          pathname === "/Kanbas/Courses/1234/Home" ? "active" : ""
        }`}
      >
        Home
      </Link>
      <Link
        id="wd-course-modules-link"
        to="/Kanbas/Courses/1234/Modules"
        // className="list-group-item kanbas-nav text-danger border border-0"
        className={`list-group-item kanbas-nav border border-0 ${
          pathname === "/Kanbas/Courses/1234/Modules" ? "active" : ""
        }`}
      >
        Modules
      </Link>
      <Link
        id="wd-course-piazza-link"
        to="/Kanbas/Courses/1234/Piazza"
        // className="list-group-item kanbas-nav text-danger border border-0"
        className={`list-group-item kanbas-nav border border-0 ${
          pathname === "/Kanbas/Courses/1234/Piazza" ? "active" : ""
        }`}
      >
        Piazza
      </Link>
      <Link
        id="wd-course-zoom-link"
        to="/Kanbas/Courses/1234/Zoom"
        // className="list-group-item kanbas-nav text-danger border border-0"
        className={`list-group-item kanbas-nav border border-0 ${
          pathname === "/Kanbas/Courses/1234/Zoom" ? "active" : ""
        }`}
      >
        Zoom
      </Link>
      <Link
        id="wd-course-assignments-link"
        to="/Kanbas/Courses/1234/Assignments"
        // className="list-group-item kanbas-nav text-danger border border-0"
        className={`list-group-item kanbas-nav border border-0 ${
          pathname === "/Kanbas/Courses/1234/Assignments" ? "active" : ""
        }`}
      >
        Assignments
      </Link>
      {/* <Link
        id="wd-course-assignments-link"
        to="/Kanbas/Courses/:cid/Assignments"
        className={`list-group-item text-danger border border-0 ${
          pathname === "/" ? "active" : ""
        }`}
      >
        Assignments
      </Link> */}
      <Link
        id="wd-course-quizzes-link"
        to="/Kanbas/Courses/1234/Quizzes"
        // className="list-group-item kanbas-nav text-danger border border-0"
        className={`list-group-item kanbas-nav border border-0 ${
          pathname === "/Kanbas/Courses/1234/Quizzes" ? "active" : ""
        }`}
      >
        Quizzes
      </Link>
      <Link
        id="wd-course-grades-link"
        to="/Kanbas/Courses/1234/Grades"
        // className="list-group-item kanbas-nav text-danger border border-0"
        className={`list-group-item kanbas-nav border border-0 ${
          pathname === "/Kanbas/Courses/1234/Grades" ? "active" : ""
        }`}
      >
        Grades
      </Link>
      <Link
        id="wd-course-people-link"
        to="/Kanbas/Courses/1234/People"
        // className="list-group-item kanbas-nav text-danger border border-0"
        className={`list-group-item kanbas-nav border border-0 ${
          pathname === "/Kanbas/Courses/1234/People" ? "active" : ""
        }`}
      >
        People
      </Link>
    </div>
  );
}
