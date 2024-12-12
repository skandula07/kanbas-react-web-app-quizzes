import CoursesNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";

import { Navigate, Route, Routes, useParams, useLocation } from "react-router";
import { FaAlignJustify } from "react-icons/fa6";
import PeopleTable from "./People/Table";
import Quizzes from "./Quizzes";
import QuizEditor from "./Quizzes/Editor";
import QuizDetails from "./Quizzes/Details";
import QuizDetailsEditor from "./Quizzes/DetailsEditor";
import QuizQuestionsEditor from "./Quizzes/QuestionsEditor";
//import { findUsersForCourse } from "./client";
import { useEffect, useState } from "react";
import * as client from "./client";

export default function Courses({ courses }: { courses: any[] }) {
  const { cid } = useParams();
  const course = courses.find((course) => course._id === cid);
  const [users, setUsers] = useState<any[]>([]);
  const fetchUsers = async () => {
    const users = await client.findUsersForCourse(course._id);
    setUsers(users);
  };
  useEffect(() => {
    fetchUsers();
  }, [cid]);

  const { pathname } = useLocation();
  return (
    <div id="wd-courses">
      <h4 className="text-danger">
        <FaAlignJustify className="me-4 fs-4 mb-1" />
        {course && course.name} &gt; {pathname.split("/")[4]}
      </h4>
      <hr />
      <div className="d-flex" style={{ gap: "20px" }}>
        <div className="d-none d-md-block">
          <CoursesNavigation />
        </div>
        <div className="flex-fill">
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home />} />
            <Route path="Modules" element={<Modules />} />
            <Route path="Assignments" element={<Assignments />} />
            <Route path="Assignments/:aid" element={<AssignmentEditor />} />
            <Route path="Quizzes" element={<Quizzes />} />
            <Route path="Quizzes/:qid" element={<QuizDetails />} />
            <Route path="Quizzes/:qid/Editor/*" element={<QuizEditor />} />
            <Route path="People" element={<PeopleTable users={users} />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
