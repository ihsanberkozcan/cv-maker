import { deleteLink, updateLink } from "../stores/userData";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
function AddLink() {
  const { links: myLinks } = useSelector((state: any) => state.userData);
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const handleWebsiteNameChange = (
    e: React.ChangeEvent<HTMLSelectElement>,
    id: number
  ) => {
    dispatch(
      updateLink({
        id: id,
        websiteName: e.target.value,
        link: myLinks[id].link,
      })
    );
  };

  const handleLinkChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    id: number
  ) => {
    dispatch(
      updateLink({
        id: id,
        websiteName: myLinks[id].websiteName,
        link: e.target.value,
      })
    );
  };

  const deleteWebsiteLink = (id: number) => {
    dispatch(deleteLink(id));
  };

  const addNewLink = () => {
    dispatch(
      updateLink({
        id: myLinks.length,
        websiteName: "",
        link: "",
      })
    );
  };

  const renderLink = () => {
    const content = [];

    for (let i = 0; i < myLinks.length; i++) {
      content.push(
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1}}
          transition={{ duration: 0.5 }}
        >
          <li className="flex">
            <select
              className="rounded p-2 h-[48px] mr-3 w-1/2 border-2 bg-white"
              onChange={(e) => handleWebsiteNameChange(e, i)}
              value={myLinks[i].websiteName}
            >
              <option value="">{t("Please Select")}</option>
              <option value="GitHub">GitHub</option>
              <option value="GitLab">GitLab</option>
              <option value="LinkedIn">LinkedIn</option>
              <option value="Website">Website</option>
              <option value="Medium">Medium</option>
            </select>

            <input
              className="rounded p-2 mr-2 textInput"
              onChange={(e) => handleLinkChange(e, i)}
              value={myLinks[i].link}
            />
            <button
              className="bg-indigo-300 rounded text-white mb-3 p-3"
              onClick={() => deleteWebsiteLink(i)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </li>
        </motion.div>
      );
    }
    return content;
  };

  return (
    <div className="h-full overflow-auto">
      <div className="p-5 md:p-6 md:p-10 bg-white border rounded-xl mt-5 shadow-lg">
        <div className="text-lg md:text-xl lg:text-2xl font-semibold mb-1 mb-3">
          Link
        </div>
        <ul className="list-none">{renderLink()}</ul>
      </div>
      <button
        className="bg-indigo-300 rounded text-white p-3 mt-5 w-full"
        onClick={() => addNewLink()}
      >
        {t("Add New Link")}
      </button>
    </div>
  );
}

export default AddLink;
