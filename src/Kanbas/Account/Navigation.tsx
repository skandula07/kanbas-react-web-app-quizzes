import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

export default function AccountNavigation() {
  const { currentUser } = useSelector((state: any) => state.account);
  const links = currentUser ? ["Profile"] : ["Signin", "Signup"];
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
  <Link
        to={`/Kanbas/Account/Signin`}
        className="list-group-item active border border-0"
      >
        {" "}
        Signin{" "}
      </Link>{" "}
      <Link
        to={`/Kanbas/Account/Signup`}
        className="list-group-item text-danger border border-0"
      >
        {" "}
        Signup{" "}
      </Link>{" "}
      <Link
        to={`/Kanbas/Account/Profile`}
        className="list-group-item text-danger border border-0"
      >
        {" "}
        Profile{" "}
      </Link>{" "}
   */
}
