import { dateOptionsType } from "../types/type";

export const formatDate = (
  date: Date | undefined,
  language: string = "en-US"
) => {
  const options: dateOptionsType = {
    year: "numeric",
    month: "short",
  };
  let createDate: string;
  if (date) createDate = new Date(date).toLocaleDateString(language, options);
  else createDate = "";
  return createDate;
};
