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
  startDate?: string;
  endDate?: string;
  location?: string;
  scores?: string;
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
}

export interface UpdateDataPayload {
  key: keyof userDataType;
  value: any;
}

export interface pageType {
  currentStep: number;
  lastStep: number;
}


export interface UserInputProps {
    title: string;
    keyName: keyof userDataType;
    inputType: string;
    inputPlaceholder?: string
    inputValue: string
  }
  
  export interface dateOptionsType{
    year?: "numeric" | "2-digit";
    month?: "numeric" | "2-digit" | "long" | "short" | "narrow";
    day?: "numeric" | "2-digit";
  }