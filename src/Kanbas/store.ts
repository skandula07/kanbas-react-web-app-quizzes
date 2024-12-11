import { Quizzes } from './Courses/Quizzes/index';
import { configureStore } from "@reduxjs/toolkit";
import quizzesReducer from "./Courses/Quizzes/reducer"


const store = configureStore({
  reducer: {
    quizzesReducer, 
  },
});

export default store;