import QuizDetails from "./QuizDetails";
import QuizDetailsEditor from "./QuizDetailsEditor";
import QuizEditor from "./QuizEditor";
import QuizQuestionsEditor from "./QuizQuestionsEditor";

export default function Quizzes() {
  return (
    <div>
      <h2>Quizzes</h2>
      <QuizDetails />
      <QuizEditor />
      <QuizDetailsEditor />
    </div>
  );
}
