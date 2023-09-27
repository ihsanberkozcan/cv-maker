import { configureStore } from "@reduxjs/toolkit";


import userData from "./userData";
import step from "./step";
import resumeType from "./resumeType";
import resumeColor from "./resumeColor";

const store = configureStore({
  reducer: {
    userData,
    step,
    resumeType,
    resumeColor
  },
});

export default store;
