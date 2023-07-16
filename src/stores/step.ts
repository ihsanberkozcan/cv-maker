import { createSlice } from "@reduxjs/toolkit";
import { pageType } from "../types/type";



const initialState: pageType = {
  currentStep: 0,
  lastStep: 10,
};

const step = createSlice({
  name: "step",
  initialState,
  reducers: {
    nextStep(state) {
      state.currentStep = state.currentStep + 1;
    },
    backStep(state) {
      state.currentStep = state.currentStep + -1;
    },
  },
});

export const { nextStep, backStep } = step.actions;
export default step.reducer;
