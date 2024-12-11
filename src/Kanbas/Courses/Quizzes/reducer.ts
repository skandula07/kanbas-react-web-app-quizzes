import { createSlice } from "@reduxjs/toolkit";
import  quizzes  from "../../Database/index"; // Replace with the correct path to your database

const initialState = {
  quizzes: quizzes, // Assuming `quizzes` is an array of initial quizzes
};

const quizzesSlice = createSlice({
    name: "quizzes",
    initialState,
    reducers: {
      addQuiz: (state, { payload: quiz }) => {
        const newQuiz: any = {
          _id: new Date().getTime().toString(),
          title: quiz.title,
          description: quiz.description,
          dueDate: quiz.dueDate,
          availableFrom: quiz.availableFrom,
          availableUntil: quiz.availableUntil,
          points: quiz.points,
          courseId: quiz.courseId,
        };
        state.quizzes.push(newQuiz);
      },
      deleteQuiz: (state, { payload: quizId }) => {
        state.quizzes = state.quizzes.filter(
          (a: any) => a._id !== quizId
        );
      },
      updateQuiz: (state, { payload: updatedQuiz }) => {
        state.quizzes = state.quizzes.map((a: any) =>
          a._id === updatedQuiz._id ? updatedQuiz : a
        );
      },
      // Optional: For marking an quiz as being edited
      editQuiz: (state, { payload: quizId }) => {
        state.quizzes = state.quizzes.map((a: any) =>
          a._id === quizId ? { ...a, editing: true } : a
        );
      },
    },
  });
  
  export const {
    addQuiz,
    deleteQuiz,
    updateQuiz,
    editQuiz,
  } = quizzesSlice.actions;
  
  export default quizzesSlice.reducer;
  