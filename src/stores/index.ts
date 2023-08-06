import { configureStore } from "@reduxjs/toolkit";


import userData from "./userData";
import step from "./step";
import resumeType from "./resumeType";

const store = configureStore({
  reducer: {
    userData,
    step,
    resumeType
  },
});

export default store;
