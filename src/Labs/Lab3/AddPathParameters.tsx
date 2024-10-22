import { useParams, useLocation } from "react-router-dom";
export default function AddPathParameters() {
  const { a, b } = useParams();
  const { pathname } = useLocation();
  return (
    <div id="wd-add">
      <h4>Add Path Parameters</h4>
      {a} + {b} = {parseInt(a as string) + parseInt(b as string)}
    </div>
  );
}
