export interface linksType {
  id: number;
  websiteName: string;
  link: string;
}

export interface experienceType {
  id: number;
  employer?: string;
  jobTitle?: string;
  startDate?: Date;
  endDate?: Date;
  location?: string;
  description?: string;
}
export interface educationType {
  id: number;
  instituteName?: string;
  degreeType?: string;
  fieldOfStudy?: string;
  startDate?: Date;
  endDate?: Date;
  location?: string;
  scores?: string;
}

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

export interface awardType {
  id: number;
  awardTitle?: string;
  awardDescription?: string;
}


export interface resumeColorType {
  headerBackground: string;
  headerText: string;
  sectionTitleText: string;
  textColor: string;
}
export interface userDataType {
  fileName?: string;
  name: string;
  title: string;
  email: string;
  location: string;
  phoneNumber: string;
  links: Array<linksType>;
  skills: string;
  experience: Array<experienceType>;
  education: Array<educationType>;
  project: Array<projectType>;
  certification: Array<certificationType>;
  award: Array<awardType>;
}

export interface UpdateDataPayload {
  key: keyof userDataType;
  value: any;
}

export interface UpdateColorPayload {
  key: keyof resumeColorType;
  value: any;
}

export interface pageType {
  currentStep: number;
  previousStep: number;
  lastStep: number;
}

export interface UserInputProps {
  title: string;
  keyName: keyof userDataType;
  inputType: string;
  inputPlaceholder?: string;
  inputValue: string;
}

export interface dateOptionsType {
  year?: "numeric" | "2-digit";
  month?: "numeric" | "2-digit" | "long" | "short" | "narrow";
  day?: "numeric" | "2-digit";
}
