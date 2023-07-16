import { useDispatch, useSelector } from "react-redux";
import {
  addExperience,
  deleteExperience,
  updateExperience,
} from "../stores/userData";

function Experience() {
  const dispatch = useDispatch();

  const { experience } = useSelector((state: any) => state.userData);

  const addNewExperience = () => {
    dispatch(
      addExperience({
        id: experience.length,
        employer: "",
        jobTitle: "",
        startDate: "",
        endDate: "",
        location: "",
        description: "",
      })
    );
  };

  const handleUpdateExperience = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    id: number,
    update: string
  ) => {
    dispatch(
      updateExperience({
        id: id,
        [update]: e.target.value,
      })
    );
  };

  const removeExperience = (id: number) => {
    dispatch(deleteExperience(id));
  };

  const renderExperience = () => {
    const content = [];

    for (let i = 0; i < experience.length; i++) {
      content.push(
        <div>
          <div className="flex justify-between mb-2">
            <h2 className="text-2xl md:text-2xl lg:text-4xl">
              {i + 1}. Experience:
            </h2>
            <button
              className="text-red-200 p-3 mt-"
              onClick={() => removeExperience(i)}
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
          Company Name:
          <input
            type="text"
            onChange={(e) => handleUpdateExperience(e, i, "employer")}
            value={experience[i].employer}
          />
          Job Title:
          <input
            type="text"
            onChange={(e) => handleUpdateExperience(e, i, "jobTitle")}
            value={experience[i].jobTitle}
          />
          Start Date:
          <input
            type="text"
            onChange={(e) => handleUpdateExperience(e, i, "startDate")}
            value={experience[i].startDate}
          />
          End Date:
          <input
            type="text"
            onChange={(e) => handleUpdateExperience(e, i, "endDate")}
            value={experience[i].endDate}
          />
          Location:
          <input
            type="text"
            onChange={(e) => handleUpdateExperience(e, i, "location")}
            value={experience[i].location}
          />
          Description:
          <textarea
            onChange={(e) => handleUpdateExperience(e, i, "description")}
            value={experience[i].description}
          />
        </div>
      );
    }
    return content;
  };

  return (
    <div className="h-full overflow-auto">
      {renderExperience()}

      <button
        className="bg-indigo-300 rounded text-white p-3 mt-5 w-full"
        onClick={() => addNewExperience()}
      >
        Add New Experience
      </button>
    </div>
  );
}

export default Experience;
