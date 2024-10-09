import { Link } from "react-router-dom";
import { useLocation } from "react-router";
export default function AccountNavigation() {
  const { pathname } = useLocation();
  return (
    <div id="wd-account-navigation" className="wd list-group fs-5 rounded-0">
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
