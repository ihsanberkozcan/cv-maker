import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  awardType,
  educationType,
  experienceType,
  linksType,
  UpdateDataPayload,
  userDataType,
} from "../types/type";

const initialState: userDataType = {
  fileName: "CV",
  name: "",
  title: "",
  email: "",
  location: "",
  phoneNumber: "",
  links: [{ id: 0, websiteName: "", link: "" }],
  skills: "",
  experience: [
    {
      id: 0,
      employer: "",
      jobTitle: "",
      startDate: new Date(),
      endDate: new Date(),
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
      startDate: new Date(),
      endDate: new Date(),
      location: "",
      scores: "",
    },
  ],
  project: [
    {
      id: 0,
      projectTitle: "",
      projectLink: "",
      projectDescription: "",
    },
  ],
  certification: [
    {
      id: 0,
      certificateTitle: "",
      certificateLink: "",
      IssuedBy: "",
    },
  ],
  award: [
    {
      id: 0,
      awardTitle: "",
      awardDescription: "",
    },
  ],
};

export interface projectType {
  id: number;
  projectTitle?: string;
  projectLink?: string;
  projectDescription?: string;
}

export interface certificationType {
  id: number;
  certificateTitle?: string;
  certificateLink?: string;
  IssuedBy?: string;
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
      experience.map((obj: { [key: string]: string | number | Date }) => {
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
      education.map((obj: { [key: string]: string | number | Date }) => {
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
    addProject(state, action: PayloadAction<projectType>) {
      const { id } = action.payload;
      const project = [...state.project];
      project[id] = action.payload;
      state.project = project;
    },
    updateProject(state, action: PayloadAction<projectType>) {
      const { id } = action.payload;
      const project = [...state.project];
      project.map((obj: { [key: string]: string | number | Date }) => {
        if (obj.id === id) {
          const secondKey = Object.keys(action.payload)[1];
          obj[secondKey] = Object.values(action.payload)[1];
        }
      });
      state.project = project;
    },
    deleteProject(state, action: PayloadAction<number>) {
      const id = action.payload;
      const project = [...state.project];
      project.splice(id, 1);
      state.project = project;
    },
    addCertification(state, action: PayloadAction<certificationType>) {
      const { id } = action.payload;
      const certification = [...state.certification];
      certification[id] = action.payload;
      state.certification = certification;
    },
    updateCertification(state, action: PayloadAction<certificationType>) {
      const { id } = action.payload;
      const certification = [...state.certification];
      certification.map((obj: { [key: string]: string | number | Date }) => {
        if (obj.id === id) {
          const secondKey = Object.keys(action.payload)[1];
          obj[secondKey] = Object.values(action.payload)[1];
        }
      });
      state.certification = certification;
    },
    deleteCertification(state, action: PayloadAction<number>) {
      const id = action.payload;
      const certification = [...state.certification];
      certification.splice(id, 1);
      state.certification = certification;
    },
    addAward(state, action: PayloadAction<awardType>) {
      const { id } = action.payload;
      const award = [...state.award];
      award[id] = action.payload;
      state.award = award;
    },
    updateAward(state, action: PayloadAction<educationType>) {
      const { id } = action.payload;
      const award = [...state.award];
      award.map((obj: { [key: string]: string | number | Date }) => {
        if (obj.id === id) {
          const secondKey = Object.keys(action.payload)[1];
          obj[secondKey] = Object.values(action.payload)[1];
        }
      });
      state.award = award;
    },
    deleteAward(state, action: PayloadAction<number>) {
      const id = action.payload;
      const award = [...state.award];
      award.splice(id, 1);
      state.award = award;
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
  addProject,
  updateProject,
  deleteProject,
  addCertification,
  updateCertification,
  deleteCertification,
  addAward,
  updateAward,
  deleteAward,
} = userData.actions;
export default userData.reducer;
