import Modules from "../Modules";
import CourseStatus from "./Status";
export default function Home() {
  return (
    <div className="d-flex flex-wrap" id="wd-home" style={{ gap: "40px" }}>
      <div className="flex-fill">
        <Modules />
      </div>
      <div className="d-none d-md-block">
        <CourseStatus />
      </div>
    </div>
  );
}
