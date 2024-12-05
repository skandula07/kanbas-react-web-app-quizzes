import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

export default function AccountNavigation() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const links = currentUser ? ["Profile"] : ["Signin", "Signup"];
  const active = (path: string) =>
    pathname.includes(path) ? "active" : "text-danger";
  const { pathname } = useLocation();
  return (
    <div id="wd-account-navigation" className="wd list-group fs-5 rounded-0">
      {links.map((link) => (
        <Link
          key={link}
          to={`/Kanbas/Account/${link}`}
          className={`list-group-item border border-0 ${active(link)}`}
        >
          {link}
        </Link>
      ))}
      {currentUser && currentUser.role === "ADMIN" && (
        <Link
          to={`/Kanbas/Account/Users`}
          className={`list-group-item border border-0 ${active("Users")}`}
        >
          {" "}
          Users{" "}
        </Link>
      )}

      {/* <Link
        id="wd-course-people-link"
        to="/Kanbas/Courses/:cid/People"
        className="list-group-item text-danger border border-0"
      >
        People
      </Link> */}
    </div>
  );
}

{
  /*
  import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

export default function AccountNavigation() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const links = currentUser ? ["Profile"] : ["Signin", "Signup"];
  const active = (path: string) => (pathname.includes(path) ? "active" : "");
  const { pathname } = useLocation();
  return (
    <div id="wd-account-navigation" className="wd list-group fs-5 rounded-0">
      {links.map((link) => {
        const linkPath = `/Kanbas/Account/${link}`;
        const isActive =
          pathname === linkPath ||
          (link === "Signin" && pathname === "/Kanbas/Account");

        return (
          <Link
            key={link}
            to={linkPath}
            className={`list-group-item border border-0 ${
              isActive ? "active" : "text-danger"
            }`}
          >
            {link === "Signin"
              ? "Sign In"
              : link === "Signup"
              ? "Sign Up"
              : link}
          </Link>
        );
      })}
      </div>
    );
  }
   */
}
