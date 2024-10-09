import { BsPlus } from "react-icons/bs";
import { IoEllipsisVertical } from "react-icons/io5";

export default function AssignmentControlButtons() {
  return (
    <div className="float-end">
      <span
        className="wd-rounded-corners-all-around wd-border-thin 
      wd-border-black wd-border-solid wd-padding-thin me-1 position-relative"
      >
        40% of Total
      </span>
      <BsPlus className="fs-4" />
      <IoEllipsisVertical className="fs-4" />
    </div>
  );
}
