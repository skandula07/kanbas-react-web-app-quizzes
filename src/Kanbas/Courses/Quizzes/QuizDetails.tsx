import { useParams } from "react-router";

export default function QuizDetails() {
  const { qid } = useParams();
  return (
    <div>
      <h2>Quiz Details</h2>
      {qid}
    </div>
  );
}
