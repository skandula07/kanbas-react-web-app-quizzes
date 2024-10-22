import { Link, useLocation } from "react-router-dom";
import { useParams } from "react-router";

export default function CoursesNavigation() {
  const { pathname } = useLocation();
  const { cid } = useParams();
  const links = [
    "Home",
    "Modules",
    "Piazza",
    "Zoom",
    "Assignments",
    "Quizzes",
    "Grades",
    "People",
  ];
  // const links = [
  //   { label: "Home", path: "/Kanbas/Courses/${cid}/Home" },
  //   { label: "Modules", path: "/Kanbas/Courses/${cid}/Modules" },
  //   { label: "Piazza", path: "/Kanbas/Courses/${cid}/Piazza" },
  //   { label: "Zoom", path: "/Kanbas/Courses/${cid}/Zoom" },
  //   { label: "Assignments", path: "/Kanbas/Courses/${cid}/Assignments" },
  //   { label: "Quizzes", path: "/Kanbas/Courses/${cid}/Quizzes" },
  //   { label: "Grades", path: "/Kanbas/Courses/${cid}/Grades" },
  //   { label: "People", path: "/Kanbas/Courses/${cid}/People" },
  // ];
  /*
    Use useParams() to retrieve the current course's ID 
    and use useLocation() to retrieve the current pathname. 
    The links should highlight when you click on them and 
    the URL should encode the course's ID in the path. 
    Navigation to the Home, Modules, Assignments, 
    and Grades screen should still work as before.
  */
  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      {/* <Link
        id="wd-course-home-link"
        to={`/Kanbas/Courses/${cid}/Home`}
        // className="list-group-item kanbas-nav text-danger border border-0"
        className={`list-group-item kanbas-nav border border-0 ${
          pathname.includes("Home") ? "active" : ""
        }`}
      >
        Home
      </Link> */}
      {links.map((link) => (
        <Link
          key={link}
          to={`/Kanbas/Courses/${cid}/${link}`}
          className={`list-group-item kanbas-nav border border-0
              ${pathname.includes(link) ? "active" : ""}`}
        >
          <br />
          {link}
        </Link>
      ))}
      {/* <h2>{pathname}</h2>
      <h2>{cid}</h2> */}
      {/* <Link
        id="wd-course-modules-link"
        to="/Kanbas/Courses/1234/Modules"
        // className="list-group-item kanbas-nav text-danger border border-0"
        className={`list-group-item kanbas-nav border border-0 ${
          pathname === "/Kanbas/Courses/1234/Modules" ? "active" : ""
        }`}
      >
        Modules
      </Link> */}
      {/* <Link
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
      </Link> */}
      {/* <Link
        id="wd-course-assignments-link"
        to="/Kanbas/Courses/:cid/Assignments"
        className={`list-group-item text-danger border border-0 ${
          pathname === "/" ? "active" : ""
        }`}
      >
        Assignments
      </Link> */}
      {/* <Link
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
      </Link> */}
    </div>
  );
}
