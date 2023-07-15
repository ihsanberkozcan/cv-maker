import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface linksType {
  id: number;
  websiteName: string;
  link: string;
}

export interface experienceType {
  id: number;
  employer?: string;
  jobTitle?: string;
  startDate?: string;
  endDate?: string;
  location?: string;
  description?: string;
}
export interface educationType {
  id: number;
  instituteName?: string;
  degreeType?: string;
  fieldOfStudy?: string;
  startDate?: string;
  endDate?: string;
  location?: string;
  scores?: string;
}

export interface userDataType {
  fileName: string;
  name: string;
  title: string;
  email: string;
  phoneNumber: string;
  links: Array<linksType>;
  skills: string;
  experience: Array<experienceType>;
  education: Array<educationType>;
}
const initialState: userDataType = {
  fileName: "CV",
  name: "Name Surname",
  title: "Title",
  email: "test@test.com",
  phoneNumber: "",
  links: [{ id: 0, websiteName: "", link: "" }],
  skills: "",
  experience: [
    {
      id: 0,
      employer: "",
      jobTitle: "",
      startDate: "",
      endDate: "",
      location: "",
      description: "",
    },
  ],
  education: [
    {
      id: 0,
      instituteName: "",
      degreeType: "",
      fieldOfStudy: "",
      startDate: "",
      endDate: "",
      location: "",
      scores: "",
    },
  ],
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
    addExperience(state, action: PayloadAction<experienceType>) {
      const { id } = action.payload;
      const experience = [...state.experience];
      experience[id] = action.payload;
      state.experience = experience;
    },
    updateExperience(state, action: PayloadAction<experienceType>) {
      const { id } = action.payload;
      const experience = [...state.experience];
      experience.map((obj: { [key: string]: string | number }) => {
        if (obj.id === id) {
          const secondKey = Object.keys(action.payload)[1];
          obj[secondKey] = Object.values(action.payload)[1];
        }
      });
      state.experience = experience;
    },
    deleteExperience(state, action: PayloadAction<number>) {
      const id = action.payload;
      const experience = [...state.experience];
      experience.splice(id, 1);
      state.experience = experience;
    },
    addEduaction(state, action: PayloadAction<educationType>) {
      const { id } = action.payload;
      const education = [...state.education];
      education[id] = action.payload;
      state.education = education;
    },
    updateEducation(state, action: PayloadAction<educationType>) {
      const { id } = action.payload;
      const education = [...state.education];
      education.map((obj: { [key: string]: string | number }) => {
        if (obj.id === id) {
          const secondKey = Object.keys(action.payload)[1];
          obj[secondKey] = Object.values(action.payload)[1];
        }
      });
      state.education = education;
    },
    deleteEduaction(state, action: PayloadAction<number>) {
      const id = action.payload;
      const education = [...state.education];
      education.splice(id, 1);
      state.education = education;
    },
  },
});

export const {
  updateData,
  updateLink,
  deleteLink,
  addExperience,
  updateExperience,
  deleteExperience,
  addEduaction,
  updateEducation,
  deleteEduaction,
} = userData.actions;
export default userData.reducer;
