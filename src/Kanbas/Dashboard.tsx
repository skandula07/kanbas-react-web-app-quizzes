import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
//import * as db from "./Database";
import { toggleEnrollment, setEnrollments } from "./enrollmentReducer";
import * as userClient from "./Account/client";

export default function Dashboard({
  courses,
  course,
  setCourse,
  addNewCourse,
  deleteCourse,
  updateCourse,
}: {
  courses: any[];
  course: any;
  setCourse: (course: any) => void;
  addNewCourse: () => void;
  deleteCourse: (course: any) => void;
  updateCourse: () => void;
}) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  //const { enrollments } = db;

  {
    /*const { enrolledCourses } = useSelector(
    (state: any) => state.enrollmentReducer
  );
  */
  }
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isFaculty = currentUser?.role === "FACULTY";
  const isStudent = currentUser?.role === "STUDENT";
  const isTA = currentUser?.role === "TA";
  const isAdmin = currentUser?.role === "ADMIN";

  const [showAllCourses, setShowAllCourses] = useState(false);
  const [enrolledCourses, setEnrolledCourses] = useState<any[]>([]);

  const resetCourseEditor = () => {
    setCourse({ name: "", description: "" });
  };

  useEffect(() => {
    if (currentUser?.role === "STUDENT") {
      setEnrolledCourses(currentUser?.enrolledCourses || []);
    }
  }, [currentUser]);

  const handleToggleEnrollment = async (courseId: string) => {
    if (enrolledCourses.some((course) => course._id === courseId)) {
      await userClient.unenrollFromCourse(courseId);
      setEnrolledCourses(
        enrolledCourses.filter((course) => course._id !== courseId)
      );
    } else {
      await userClient.enrollInCourse(courseId);
      setEnrolledCourses([...enrolledCourses, { _id: courseId }]);
    }
  };

  const displayedCourses = showAllCourses
    ? courses
    : courses.filter((course) =>
        enrolledCourses.some(
          (enrolledCourse) => enrolledCourse._id === course._id
        )
      );

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      {!isFaculty && (
        <button
          className="btn btn-primary float-end"
          onClick={() => setShowAllCourses(!showAllCourses)}
        >
          {showAllCourses ? "My Enrollments" : "Enrollments"}
        </button>
      )}
      {isFaculty && (
        <>
          <h5>
            New Course
            <button
              className="btn btn-primary float-end"
              id="wd-add-new-course-click"
              onClick={() => {
                addNewCourse();
                resetCourseEditor();
              }}
            >
              {" "}
              Add{" "}
            </button>
            <button
              className="btn btn-warning float-end me-2"
              id="wd-update-course-click"
              onClick={() => {
                updateCourse();
                resetCourseEditor();
              }}
            >
              Update
            </button>
          </h5>
          <br />
          <input
            value={course.name}
            className="form-control mb-2"
            onChange={(e) => setCourse({ ...course, name: e.target.value })}
          />
          <textarea
            value={course.description}
            className="form-control"
            onChange={(e) =>
              setCourse({ ...course, description: e.target.value })
            }
          />
          <hr />
        </>
      )}
      <h2 id="wd-dashboard-published">
        Published Courses ({displayedCourses.length})
      </h2>{" "}
      <hr />
      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {displayedCourses.map((course) => (
            <div
              key={course._id}
              className="wd-dashboard-course col"
              style={{ width: "300px" }}
            >
              <div className="card rounded-3 overflow-hidden">
                <Link
                  className="wd-dashboard-course-link text-decoration-none text-dark"
                  to={
                    !isFaculty &&
                    !enrolledCourses.some(
                      (enrolledCourse) => enrolledCourse._id === course._id
                    )
                      ? "/Kanbas/Dashboard"
                      : `/Kanbas/Courses/${course._id}/Home`
                  }
                >
                  <img src="/images/reactjs.jpeg" width="100%" height={160} />
                  <div className="card-body">
                    <h5 className="wd-dashboard-course-title card-title">
                      {course.name}
                    </h5>
                    <p
                      className="wd-dashboard-course-title  overflow-y-hidden"
                      style={{ maxHeight: 100 }}
                    >
                      {course.description}
                    </p>
                    <button className="btn btn-primary me-2"> Go </button>

                    {isFaculty && (
                      <>
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            deleteCourse(course._id);
                          }}
                          className="btn btn-danger me-2 float-end"
                          id="wd-delete-course-click"
                        >
                          Delete
                        </button>
                        <button
                          id="wd-edit-course-click"
                          onClick={(e) => {
                            e.preventDefault();
                            setCourse(course);
                          }}
                          className="btn btn-warning me-2 float-end"
                        >
                          Edit
                        </button>
                      </>
                    )}
                    {!isFaculty && (
                      <button
                        className={`btn ${
                          enrolledCourses.some(
                            (enrolledCourse) =>
                              enrolledCourse._id === course._id
                          )
                            ? "btn-danger me-2"
                            : "btn-success me-2"
                        }`}
                        onClick={(e) => {
                          e.preventDefault();
                          handleToggleEnrollment(course._id);
                        }}
                      >
                        {enrolledCourses.some(
                          (enrolledCourse) => enrolledCourse._id === course._id
                        )
                          ? "Unenroll"
                          : "Enroll"}
                      </button>
                    )}
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

{
  /*
  const displayedCourses = !isFaculty
    ? showAllCourses
      ? courses
      : courses.filter((course) => {
          // Filter courses based on whether the current user is enrolled
          return enrolledCourses.some(
            (enrollment: { user: string; course: string }) => {
              return (
                enrollment.user === currentUser._id &&
                enrollment.course === course._id
              );
            }
          );
        })
    : courses;

  const resetCourseEditor = () => {
    setCourse({ name: "", description: "" });
  };

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      {!isFaculty && (
        <button
          className="btn btn-primary float-end"
          onClick={() => setShowAllCourses(!showAllCourses)}
        >
          {showAllCourses ? "My Enrollments" : "Enrollments"}
        </button>
      )}
      {isFaculty && (
        <>
          <h5>
            New Course
            <button
              className="btn btn-primary float-end"
              id="wd-add-new-course-click"
              onClick={() => {
                addNewCourse();
                resetCourseEditor();
              }}
            >
              {" "}
              Add{" "}
            </button>
            <button
              className="btn btn-warning float-end me-2"
              id="wd-update-course-click"
              onClick={() => {
                updateCourse();
                resetCourseEditor();
              }}
            >
              Update
            </button>
          </h5>
          <br />
          <input
            value={course.name}
            className="form-control mb-2"
            onChange={(e) => setCourse({ ...course, name: e.target.value })}
          />
          <textarea
            value={course.description}
            className="form-control"
            onChange={(e) =>
              setCourse({ ...course, description: e.target.value })
            }
          />
          <hr />
        </>
      )}
      <h2 id="wd-dashboard-published">
        Published Courses ({displayedCourses.length})
      </h2>{" "}
      <hr />
      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {displayedCourses.map((course) => (
            <div
              key={course._id}
              className="wd-dashboard-course col"
              style={{ width: "300px" }}
            >
              <div className="card rounded-3 overflow-hidden">
                <Link
                  className="wd-dashboard-course-link text-decoration-none text-dark"
                  to={
                    !isFaculty &&
                    !enrolledCourses.some(
                      (enrollment: { user: string; course: string }) =>
                        enrollment.user === currentUser._id &&
                        enrollment.course === course._id
                    )
                      ? "/Kanbas/Dashboard"
                      : `/Kanbas/Courses/${course._id}/Home`
                  }
                >
                  <img src="/images/reactjs.jpeg" width="100%" height={160} />
                  <div className="card-body">
                    <h5 className="wd-dashboard-course-title card-title">
                      {course.name}
                    </h5>
                    <p
                      className="wd-dashboard-course-title  overflow-y-hidden"
                      style={{ maxHeight: 100 }}
                    >
                      {course.description}
                    </p>
                    <button className="btn btn-primary me-2"> Go </button>

                    {isFaculty && (
                      <>
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            deleteCourse(course._id);
                          }}
                          className="btn btn-danger me-2 float-end"
                          id="wd-delete-course-click"
                        >
                          Delete
                        </button>
                        <button
                          id="wd-edit-course-click"
                          onClick={(e) => {
                            e.preventDefault();
                            setCourse(course);
                          }}
                          className="btn btn-warning me-2 float-end"
                        >
                          Edit
                        </button>
                      </>
                    )}
                    {!isFaculty && (
                      <button
                        className={`btn ${
                          enrolledCourses.some(
                            (enrollment: { user: string; course: string }) =>
                              enrollment.user === currentUser._id &&
                              enrollment.course === course._id
                          )
                            ? "btn-danger me-2"
                            : "btn-success me-2"
                        }`}
                        onClick={(e) => {
                          e.preventDefault();
                          handleToggleEnrollment(course._id);
                        }}
                      >
                        {enrolledCourses.some(
                          (enrollment: { user: string; course: string }) =>
                            enrollment.user === currentUser._id &&
                            enrollment.course === course._id
                        )
                          ? "Unenroll"
                          : "Enroll"}
                      </button>
                    )}
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}



*/
}
