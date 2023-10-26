import { useEffect, useState } from "react";
import ClassicImage from "../assets/Classic.png";
import ModernImage from "../assets/Modern.png";
import { useDispatch, useSelector } from "react-redux";
import { updateResumeType } from "../stores/resumeType";
import { useTranslation } from "react-i18next";
import toast from "react-hot-toast";
function ResumeType() {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { resumeType } = useSelector((state: any) => state.resumeType);
  const [classicButtonStyle, setClassicButtonStyle] = useState<String>("");
  const [classicButtonTextStyle, setClassicButtonTextStyle] =
    useState<String>("");
  const [modernButtonStyle, setModernButtonStyle] = useState<String>("");
  const [modernButtonTextStyle, setModernButtonTextStyle] =
    useState<String>("");
  useEffect(() => {
    if (resumeType === "classic") {
      setClassicButtonStyle("bg-indigo-300 hover:bg-indigo-300");
      setClassicButtonTextStyle("text-white");
      setModernButtonStyle("bg-none");
      setModernButtonTextStyle("text-indigo-300");
    } else if (resumeType === "modern") {
      setModernButtonStyle("bg-indigo-300 hover:bg-indigo-300");
      setModernButtonTextStyle("text-white");
      setClassicButtonStyle("bg-none");
      setClassicButtonTextStyle("text-indigo-300");
    }
  }, []);
  const handleSelectResumeType = (type: string) => {
    toast.dismiss();
    if (type === "classic") {
      dispatch(updateResumeType(type));
      setClassicButtonStyle("bg-indigo-300 hover:bg-indigo-300");
      setClassicButtonTextStyle("text-white");
      setModernButtonStyle("bg-none");
      setModernButtonTextStyle("text-indigo-300");
    } else if (type === "modern") {
      dispatch(updateResumeType(type));
      setModernButtonStyle("bg-indigo-300 hover:bg-indigo-300");
      setModernButtonTextStyle("text-white");
      setClassicButtonStyle("bg-none");
      setClassicButtonTextStyle("text-indigo-300");
    }
  };

  return (
    <div className="w-full flex items-center justify-center flex-col">
      <div className="text-2xl my-4 md:my-5 font-medium">{t("Please select a resume style")}</div>
      <div className="flex flex-col justify-around lg:flex-row lg:space-x-10 mb-10 md:mb-0">
        <button
          className={`resume-type ${classicButtonStyle}`}
          onClick={() => handleSelectResumeType("classic")}
        >
          <img
            className="sm:h-image object-contain drop-shadow-md mb-2"
            src={ClassicImage}
            alt=""
          />
          <div className={`text-lg font-medium ${classicButtonTextStyle}`}>
            {t("Classic")}
          </div>
        </button>
        
        <button
          className={`resume-type ${modernButtonStyle}`}
          onClick={() => handleSelectResumeType("modern")}
        >
          <img
            className="sm:h-image object-contain drop-shadow-md mb-2"
            src={ModernImage}
            alt=""
          />

          <div className={`text-lg font-medium ${modernButtonTextStyle}`}>
            {t("Modern")}
          </div>
        </button>
      </div>
    </div>
  );
}

export default ResumeType;
