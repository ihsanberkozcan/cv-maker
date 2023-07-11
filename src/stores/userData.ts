import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface linksType {
  id: number;
  websiteName: string;
  link: string;
}

/* interface experienceType {
  employer: string;
  jobTitle: string;
  startDate: string;
  endDate: string;
  location: string;
  description: string;
} */

export interface userDataType {
  fileName: string;
  name: string;
  title: string;
  email: string;
  phoneNumber: string;
  links: Array<linksType>;
  skills: string;
  experience: Array<object>;
  education: Array<object>;
}
const initialState: userDataType = {
  fileName: "CV",
  name: "Name Surname",
  title: "Title",
  email: "test@test.com",
  phoneNumber: "",
  links: [{ id: 0, websiteName: "", link: "" }],
  skills: "",
  experience: [],
  education: [],
};

interface UpdateDataPayload {
  key: keyof userDataType;
  value: any;
}

const userData = createSlice({
  name: "userData",
  initialState,
  reducers: {
    updateData(state, action: PayloadAction<UpdateDataPayload>) {
      const { key, value } = action.payload;
      state[key] = value;
    },
    updateLink(state, action: PayloadAction<linksType>) {
      const { id } = action.payload;
      const newLinks = [...state.links];
      newLinks[id] = action.payload;
      state.links = newLinks;
    },
    deleteLink(state, action: PayloadAction<number>) {
      const id = action.payload;
      const newLinks = [...state.links];
      newLinks.splice(id, 1);
      state.links = newLinks;
    },
  },
});

export const { updateData, updateLink, deleteLink } = userData.actions;
export default userData.reducer;
