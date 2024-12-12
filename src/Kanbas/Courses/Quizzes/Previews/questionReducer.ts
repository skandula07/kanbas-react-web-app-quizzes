import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  questions: [],
};

const questionsSlice = createSlice({
  name: "questions",
  initialState,
  reducers: {
    setQuestions: (state, action) => {
      state.questions = action.payload;
    },

    addQuestions: (state, { payload: question }) => {
      state.questions = [...state.questions, question] as any;
    },
    deleteQuestions: (state, { payload: questionId }) => {
      state.questions = state.questions.filter((q: any) => q._id !== questionId) as any;
    },
    updateQuestions: (state, { payload: question }) => {
      state.questions = state.questions.map((q: any) =>
        q._id === question._id ? question : q
      ) as any;
    },
    editQuestions: (state, { payload: questionId }) => {
      state.questions = state.questions.map((q: any) =>
        q._id === questionId ? { ...q, editing: true } : q
      ) as any;
    },
  },
});

export const { addQuestions, deleteQuestions, updateQuestions, editQuestions, setQuestions } =
questionsSlice.actions;
export default questionsSlice.reducer;
