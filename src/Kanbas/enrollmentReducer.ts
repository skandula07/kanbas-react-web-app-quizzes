import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  enrolledCourses: [] as { _id: string; user: string; course: string }[],
};

const isUserEnrolled = (
  state: { enrolledCourses: any[] },
  userId: string,
  courseId: string
) =>
  state.enrolledCourses.some(
    (enrollment) => enrollment.user === userId && enrollment.course === courseId
  );

const removeEnrollment = (
  state: { enrolledCourses: any[] },
  userId: string,
  courseId: string
) => {
  state.enrolledCourses = state.enrolledCourses.filter(
    (enrollment) =>
      !(enrollment.user === userId && enrollment.course === courseId)
  );
};

const addEnrollment = (
  state: { enrolledCourses: any[] },
  userId: string,
  courseId: string
) => {
  const newEnrollment = {
    _id: new Date().getTime().toString(),
    user: userId,
    course: courseId,
  };

  state.enrolledCourses = [...state.enrolledCourses, newEnrollment];
};

const enrollmentSlice = createSlice({
  name: "enrollment",
  initialState,
  reducers: {
    toggleEnrollment: (
      state,
      {
        payload: { courseId, userId },
      }: { payload: { courseId: string; userId: string } }
    ) => {
      if (isUserEnrolled(state, userId, courseId)) {
        removeEnrollment(state, userId, courseId);
      } else {
        addEnrollment(state, userId, courseId);
      }
    },

    // update enrollments
    setEnrollments: (
      state,
      { payload }: { payload: { _id: string; user: string; course: string }[] }
    ) => {
      state.enrolledCourses = payload;
    },
  },
});

export const { toggleEnrollment, setEnrollments } = enrollmentSlice.actions;
export default enrollmentSlice.reducer;

{
  /*toggleEnrollment: (state, { payload: courseId }: { payload: string }) => {
      // check if course is already in enrolledCourses[]
      const isEnrolled = state.enrolledCourses.includes(courseId);
      state.enrolledCourses = isEnrolled
        ? state.enrolledCourses.filter((id) => id !== courseId) // Unenroll
        : [...state.enrolledCourses, courseId]; // Enroll
    },

    // Set enrollments directly (e.g., after fetching from a backend).
    setEnrollments: (state, { payload }: { payload: string[] }) => {
      state.enrolledCourses = payload;
    },
   */
}
