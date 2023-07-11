import { configureStore } from "@reduxjs/toolkit";


import userData from "./userData";
import step from "./step";

const store = configureStore({
  reducer: {
    userData,
    step
  },
});

export default store;
