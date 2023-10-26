import { useDispatch, useSelector } from "react-redux";
import {
  addEduaction,
  updateEducation,
  deleteEduaction,
} from "../stores/userData";
import DatePicker from "react-datepicker";
import { useTranslation } from "react-i18next";
import "react-datepicker/dist/react-datepicker.css";
import { motion } from "framer-motion";

function Education() {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { education } = useSelector((state: any) => state.userData);

  const addNewEducation = () => {
    dispatch(
      addEduaction({
        id: education.length,
        instituteName: "",
        location: "",
        degreeType: "",
        fieldOfStudy: "",
        startDate: new Date(),
        endDate: new Date(),
        scores: "",
      })
    );
  };

  const handleUpdateEducation = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    id: number,
    update: string
  ) => {
    dispatch(
      updateEducation({
        id: id,
        [update]: e.target.value,
      })
    );
  };
  const handleUpdateEducationDate = (
    date: Date,
    id: number,
    update: string
  ) => {
    dispatch(
      updateEducation({
        id: id,
        [update]: date,
      })
    );
  };

  const removeEducation = (id: number) => {
    dispatch(deleteEduaction(id));
  };

  const renderEducation = () => {
    const content = [];

    for (let i = 0; i < education.length; i++) {
      content.push(
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1}}
          transition={{ duration: 0.5 }}
        >
          <div className="p-6 md:p-10 bg-white border rounded-xl mt-5 shadow-lg">
            <div className="flex justify-between items-center mb-1">
              <h2 className="text-lg md:text-xl lg:text-2xl font-semibold mb-1">
                {i + 1}. {t("Education")}
              </h2>
              <button
                className="text-red-200 p-2"
                onClick={() => removeEducation(i)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={3}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                  />
                </svg>
              </button>
            </div>
            {t("Institute Name")}
            <input
              className="textInput"
              type="text"
              onChange={(e) => handleUpdateEducation(e, i, "instituteName")}
              value={education[i].instituteName}
            />
            {t("Degree Type")}
            <select
              className="rounded p-2 h-[44px] mb-3 w-full border-2 bg-white"
              onChange={(e) => handleUpdateEducation(e, i, "degreeType")}
              value={education[i].degreeType}
            >
              <option value="">{t("Please Select")}</option>
              <option value={t("Associate's Degree")}>{t("Associate's Degree")}</option>
              <option value={t("Bachelor's Degree")}>{t("Bachelor's Degree")}</option>
              <option value={t("Master's Degree")}>{t("Master's Degree")}</option>
              <option value={t("Doctorate (Ph.D.) Degree")}>
              {t("Doctorate (Ph.D.) Degree")}
              </option>
            </select>
            {t("Field of Study")}
            <input
              className="textInput"
              type="text"
              onChange={(e) => handleUpdateEducation(e, i, "fieldOfStudy")}
              value={education[i].fieldOfStudy}
            />
            <div className="w-full">{t("Start Date")}</div>
            <DatePicker
              wrapperClassName="w-full"
              selected={education[i].startDate}
              onChange={(date: Date) =>
                handleUpdateEducationDate(date, i, "startDate")
              }
              showMonthYearPicker
              dateFormat="MMM yyyy"
            />
            <div className="w-full">{t("End Date")}</div>
            <DatePicker
              wrapperClassName="w-full"
              selected={education[i].endDate}
              onChange={(date: Date) =>
                handleUpdateEducationDate(date, i, "endDate")
              }
              showMonthYearPicker
              dateFormat="MMM yyyy"
            />
            <div className="w-full">{t("Location")}</div>
            <input
              className="textInput"
              type="text"
              onChange={(e) => handleUpdateEducation(e, i, "location")}
              value={education[i].location}
            />
            {t("Scores")}
            <input
              className="textInput"
              type="text"
              onChange={(e) => handleUpdateEducation(e, i, "scores")}
              value={education[i].scores}
            />
          </div>
        </motion.div>
      );
    }
    return content;
  };

  return (
    <div>
      <div>{renderEducation()}</div>
      <button
        className="bg-indigo-300 rounded text-white p-3 mt-5 mb-16 w-full"
        onClick={() => addNewEducation()}
      >
        {t("Add New Education")}
      </button>
    </div>
  );
}

export default Education;
