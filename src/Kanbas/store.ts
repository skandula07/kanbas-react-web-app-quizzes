import { configureStore } from "@reduxjs/toolkit";
import modulesReducer from "./Courses/Modules/reducer";
import accountReducer from "./Account/reducer";
import assignmentsReducer from "./Courses/Assignments/reducer";
import enrollmentReducer from "./enrollmentReducer";

const store = configureStore({
  reducer: {
    modulesReducer: modulesReducer,
    accountReducer: accountReducer,
    assignmentsReducer: assignmentsReducer,
    enrollmentReducer: enrollmentReducer,
  },
});
export default store;
