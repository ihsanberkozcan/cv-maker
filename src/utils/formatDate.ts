import { dateOptionsType } from "../types/type";

import { useTranslation } from "react-i18next";
export const formatDate = (date: Date | undefined) => {
  const { i18n } = useTranslation();
  const options: dateOptionsType = {
    year: "numeric",
    month: "short",
  };
  let createDate: string;
  if (date)
    createDate = new Date(date).toLocaleDateString(i18n.language, options);
  else createDate = "";
  return createDate;
};
