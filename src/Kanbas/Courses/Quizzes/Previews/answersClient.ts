import axios from "axios";
const axiosWithCredentials = axios.create({ withCredentials: true });
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const QUESTIONS_API = `${REMOTE_SERVER}/api/questions`;
const QUIZZES_API = `${REMOTE_SERVER}/api/quizzes`;



// Answers API
export const saveAnswersForQuiz = async (
  quizId: any,
  userId: any,
  answers: any
) => {
  const response = await axiosWithCredentials.post(
    `${QUIZZES_API}/${quizId}/answers/${userId}`,
    answers
  );
  return response.data;
};

export const findAnswersByQuizId = async (quizId: string) => {
  const response = await axiosWithCredentials.get(
    `${QUIZZES_API}/${quizId}/answers`
  );
  return response.data;
};

export const findAnswersByUserId = async (userId: string) => {
  const response = await axiosWithCredentials.get(
    `${QUIZZES_API}/answers/${userId}`
  );
  return response.data;
};

export const findAnswersByQuizAndUser = async (
  quizId: string,
  userId: string
) => {
  const response = await axiosWithCredentials.get(
    `${QUIZZES_API}/${quizId}/answers/${userId}`
  );
  return response.data;
};