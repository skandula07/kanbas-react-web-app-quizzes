import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (7)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <Link
            className="wd-dashboard-course-link"
            to="/Kanbas/Courses/1234/Home"
          >
            <img src="/images/reactjs.jpeg" width={200} />
            <div>
              <h5>CS1234 React JS</h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          {" "}
          <Link
            className="wd-dashboard-course-link"
            to="/Kanbas/Courses/2800/Home"
          >
            <img src="/images/CS2800-cover.jpg" width={200} />
            <div>
              <h5>CS2800</h5>
              <p className="wd-dashboard-course-title">Logic and Computation</p>
              <button> Go </button>
            </div>
          </Link>{" "}
        </div>
        <div className="wd-dashboard-course">
          {" "}
          <Link
            className="wd-dashboard-course-link"
            to="/Kanbas/Courses/3500/Home"
          >
            <img src="/images/CS3500-cover.jpg" width={200} />
            <div>
              <h5>CS3500</h5>
              <p className="wd-dashboard-course-title">
                Object Oriented Design
              </p>
              <button> Go </button>
            </div>
          </Link>{" "}
        </div>
        <div className="wd-dashboard-course">
          {" "}
          <Link
            className="wd-dashboard-course-link"
            to="/Kanbas/Courses/2500/Home"
          >
            <img src="/images/CS2500-cover.jpg" width={200} />
            <div>
              <h5>CS2500</h5>
              <p className="wd-dashboard-course-title">
                Fundamentals of Computer Science 1
              </p>
              <button> Go </button>
            </div>
          </Link>{" "}
        </div>
        <div className="wd-dashboard-course">
          {" "}
          <Link
            className="wd-dashboard-course-link"
            to="/Kanbas/Courses/2510/Home"
          >
            <img src="/images/CS2510-cover.jpg" width={200} />
            <div>
              <h5>CS2510</h5>
              <p className="wd-dashboard-course-title">
                Fundamentals of Computer Science 2
              </p>
              <button> Go </button>
            </div>
          </Link>{" "}
        </div>
        <div className="wd-dashboard-course">
          {" "}
          <Link
            className="wd-dashboard-course-link"
            to="/Kanbas/Courses/2810/Home"
          >
            <img src="/images/CS2810-cover.jpg" width={200} />
            <div>
              <h5>CS2810</h5>
              <p className="wd-dashboard-course-title">
                Mathematics of Data Models
              </p>
              <button> Go </button>
            </div>
          </Link>{" "}
        </div>
        <div className="wd-dashboard-course">
          {" "}
          <Link
            className="wd-dashboard-course-link"
            to="/Kanbas/Courses/3000/Home"
          >
            <img src="/images/CS3000-cover.jpg" width={200} />
            <div>
              <h5>CS3000</h5>
              <p className="wd-dashboard-course-title">Algorithms and Data</p>
              <button> Go </button>
            </div>
          </Link>{" "}
        </div>
      </div>
    </div>
  );
}
