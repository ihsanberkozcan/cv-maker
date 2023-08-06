import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface resumeTypeType {
  resumeType: string;
}

const initialState: resumeTypeType = {
  resumeType: "",
};

const resumeType = createSlice({
  name: "resumeType",
  initialState,
  reducers: {
    updateResumeType(state, action: PayloadAction<string>) {
      state.resumeType = action.payload;
    },
  },
});

export const { updateResumeType } = resumeType.actions;
export default resumeType.reducer;
