import { useDispatch, useSelector } from "react-redux";
import { addProject, deleteProject, updateProject } from "../stores/userData";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

function Project() {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { project } = useSelector((state: any) => state.userData);

  const handleUpdateProject = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    id: number,
    update: string
  ) => {
    dispatch(
      updateProject({
        id: id,
        [update]: e.target.value,
      })
    );
  };

  const addNewProject = () => {
    dispatch(
      addProject({
        id: project.length,
      })
    );
  };

  const renderProject = () => {
    const removeProject = (id: number) => {
      dispatch(deleteProject(id));
    };
    const content = [];

    for (let i = 0; i < project.length; i++) {
      content.push(
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1}}
          transition={{ duration: 0.5 }}
        >
          <div className="p-6 md:p-10 bg-white border rounded-xl mt-5 shadow-lg">
            <div className="flex justify-between items-center mb-1">
              <h2 className="text-lg md:text-xl lg:text-2xl font-semibold mb-1">
                {i + 1}. {t("Project")}
              </h2>
              <button
                className="text-red-200 p-2"
                onClick={() => removeProject(i)}
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
            {t("Project Title")}
            <input
              className="textInput"
              type="text"
              onChange={(e) => handleUpdateProject(e, i, "projectTitle")}
              value={project[i].projectTitle}
            />
            {t("Project Link")}
            <input
              className="textInput"
              type="text"
              onChange={(e) => handleUpdateProject(e, i, "projectLink")}
              value={project[i].projectLink}
            />
            {t("Project Description")}
            <textarea
              onChange={(e) => handleUpdateProject(e, i, "projectDescription")}
              value={project[i].projectDescription}
            />
          </div>
        </motion.div>
      );
    }
    return content;
  };

  return (
    <div>
      <div>{renderProject()}</div>
      <button
        className="bg-indigo-300 rounded text-white p-3 mt-5 mb-16 w-full"
        onClick={() => addNewProject()}
      >
        {t("Add New Project")}
      </button>
    </div>
  );
}

export default Project;
