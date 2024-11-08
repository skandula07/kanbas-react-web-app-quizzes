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
      {links.map((link) => (
        <Link
          key={link}
          to={`/Kanbas/Courses/${cid}/${link}`}
          className={`list-group-item kanbas-nav border border-0
              ${pathname.includes(link) ? "active" : ""}`}
        >
          {link}
        </Link>
      ))}
    </div>
  );
}
