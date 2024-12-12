import axios from "axios";
const axiosWithCredentials = axios.create({ withCredentials: true });
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const QUESTIONS_API = `${REMOTE_SERVER}/api/questions`;
const QUIZZES_API = `${REMOTE_SERVER}/api/quizzes`;


export const findQuestionsForQuiz = async (quizId: string) => {
    const response = await axiosWithCredentials.get(
      `${QUIZZES_API}/${quizId}/questions`
    );
    return response.data;
  };


