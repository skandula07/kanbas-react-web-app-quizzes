import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";

export default function KanbasNavigation() {
  const { pathname } = useLocation();
  const links = [
    { label: "Dashboard", path: "/Kanbas/Dashboard", icon: AiOutlineDashboard },
    { label: "Courses", path: "/Kanbas/Dashboard", icon: LiaBookSolid },
    { label: "Calendar", path: "/Kanbas/Calendar", icon: IoCalendarOutline },
    { label: "Inbox", path: "/Kanbas/Inbox", icon: FaInbox },
    { label: "Labs", path: "/Labs", icon: LiaCogSolid },
  ];

  return (
    <div
      id="wd-kanbas-navigation"
      style={{ width: 120 }}
      className="list-group rounded-0 bg-black
    position-fixed bottom-0 top-0 z-2 d-none d-md-block"
    >
      <a
        href="https://www.northeastern.edu/"
        id="wd-neu-link"
        target="_blank"
        rel="noreferrer"
        className="list-group-item bg-black border-0 text-center"
      >
        <img src="/images/NEU.png" width="75px" />
      </a>
      <br />
      <Link
        to="/Kanbas/Account"
        className={`list-group-item text-center border-0 bg-black
            ${
              pathname.includes("Account")
                ? "bg-white text-danger"
                : "bg-black text-white"
            }`}
      >
        <FaRegCircleUser
          className={`fs-1 ${
            pathname.includes("Account") ? "text-danger" : "text-white"
          }`}
        />
        <br />
        Account
      </Link>
      {links.map((link) => (
        <Link
          key={link.path}
          to={link.path}
          className={`list-group-item bg-black text-center border-0
              ${
                pathname.includes(link.label)
                  ? "text-danger bg-white"
                  : "text-white bg-black"
              }`}
        >
          {link.icon({ className: "fs-1 text-danger" })}
          <br />
          {link.label}
        </Link>
      ))}
      {/* <Link
        to="/Kanbas/Account"
        id="wd-account-link"
        // className="list-group-item text-center border-0 bg-black text-white"
        className={`list-group-item main-nav text-center border-0 ${
          pathname === "/Kanbas/Account" ? "active" : ""
        }`}
      >
        <FaRegCircleUser className="fs-1 text text-white" />
        <br />
        Account
      </Link> */}
      {/* <Link
        to="/Kanbas/Dashboard"
        id="wd-dashboard-link"
        // className="list-group-item text-center border-0 bg-black text-white"
        className={`list-group-item main-nav text-center border-0 ${
          pathname === "/Kanbas/Dashboard" ? "active" : ""
        }`}
      >
        <AiOutlineDashboard className="fs-1 text-danger" />
        <br />
        Dashboard
      </Link>
      <Link
        to="/Kanbas/Courses"
        id="wd-course-link"
        // className="list-group-item text-white
        //            bg-black text-center border-0"
        className={`list-group-item main-nav text-center border-0 ${
          pathname === "/Kanbas/Courses" ? "active" : ""
        }`}
      >
        <LiaBookSolid className="fs-1 text-danger" />
        <br />
        Courses
      </Link> */}

      {/* <Link
        to="/Kanbas/Calendar"
        id="wd-calendar-link"
        //   className="list-group-item text-white
        // bg-black text-center border-0"
        className={`list-group-item main-nav text-center border-0 ${
          pathname === "/Kanbas/Calendar" ? "active" : ""
        }`}
      >
        <IoCalendarOutline className="fs-1 text-danger" />
        <br />
        Calendar
      </Link>
      <Link
        to="/Kanbas/Inbox"
        id="wd-inbox-link"
        //   className="list-group-item text-white
        // bg-black text-center border-0"
        className={`list-group-item main-nav text-center border-0 ${
          pathname === "/Kanbas/Inbox" ? "active" : ""
        }`}
      >
        <FaInbox className="fs-1 text-danger" />
        <br />
        Inbox
      </Link>
      <Link
        to="/Labs"
        id="wd-labs-link"
        //   className="list-group-item text-white
        // bg-black text-center border-0"
        className={`list-group-item main-nav text-center border-0 ${
          pathname === "/Labs" ? "active" : ""
        }`}
      >
        <LiaCogSolid className="fs-1 text-danger" />
        <br />
        Labs
      </Link> */}
    </div>
  );
}
