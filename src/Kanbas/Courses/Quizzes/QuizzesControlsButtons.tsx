import { IoEllipsisVertical } from "react-icons/io5";
import { BsPlus } from "react-icons/bs"

export default function QuizzesControlButtons() {
  return (
    <div className="float-end">
        <button className="btn btn-secondary">
            40% of Total
        </button>
        <button className="btn btn-secondary">
        <BsPlus/>
          </button>
          <button className="btn btn-secondary">
      <IoEllipsisVertical className="fs-4" />
      </button>
    </div>
);}
