import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { resumeColorType, UpdateColorPayload } from "../types/type";

const initialState: resumeColorType = {
    headerBackground:"#0000ff",
    headerText:"#ffffff",
    sectionTitleText:"#0000ff",
    textColor: "#000000",
    skillsBubbleBg: "#e0e7ff",
    skillsBubbleText: "#4338ca",
};
const resumeColor = createSlice({
  name: "resumeColor",
  initialState,
  reducers: {
    updateResumeColor(state, action: PayloadAction<UpdateColorPayload>) {
        const { key, value } = action.payload;
        state[key] = value;
    },
  },
});

export const { updateResumeColor } = resumeColor.actions;
export default resumeColor.reducer;
