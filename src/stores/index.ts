import { configureStore } from "@reduxjs/toolkit";


import userData from "./userData";

const store = configureStore({
  reducer: {
    userData,
  },
});

export default store;
