import { useDispatch, useSelector } from "react-redux";
import {
  addCertification,
  deleteCertification,
  updateCertification,
} from "../stores/userData";
import { useTranslation } from "react-i18next";
function Certification() {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { certification } = useSelector((state: any) => state.userData);

  const handleUpdateCertification = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    id: number,
    update: string
  ) => {
    dispatch(
      updateCertification({
        id: id,
        [update]: e.target.value,
      })
    );
  };

  const addNewCertification = () => {
    dispatch(
      addCertification({
        id: certification.length,
      })
    );
  };

  const renderCertification = () => {
    const removeCertification = (id: number) => {
      dispatch(deleteCertification(id));
    };
    const content = [];

    for (let i = 0; i < certification.length; i++) {
      content.push(
        <div>
          <div className="flex justify-between mb-2">
            <h2 className="text-2xl md:text-2xl lg:text-4xl">
              {i + 1}. {t("Certification")}:
            </h2>
            <button
              className="text-red-200 p-3 mt-"
              onClick={() => removeCertification(i)}
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
          {t("Certificate Title")}:
          <input
            type="text"
            onChange={(e) =>
              handleUpdateCertification(e, i, "certificateTitle")
            }
            value={certification[i].certificateTitle}
          />
          {t("Issued By")}:
          <input
            type="text"
            onChange={(e) => handleUpdateCertification(e, i, "IssuedBy")}
            value={certification[i].IssuedBy}
          />
          {t("Certificate Link")}:
          <input
            type="text"
            onChange={(e) => handleUpdateCertification(e, i, "certificateLink")}
            value={certification[i].certificateLink}
          />
        </div>
      );
    }
    return content;
  };

  return (
    <div>
      <>{renderCertification()}</>
      <button
        className="bg-indigo-300 rounded text-white p-3 mt-5 mb-5 w-full"
        onClick={() => addNewCertification()}
      >
        {t("Add New Certificate")}
      </button>
    </div>
  );
}

export default Certification;
