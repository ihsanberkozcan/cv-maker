import { useEffect, useState } from "react";
import ClassicImage from "../assets/Classic.png";
import ModernImage from "../assets/Modern.png";
import { useDispatch, useSelector } from "react-redux";
import { updateResumeType } from "../stores/resumeType";
import { t } from "i18next";
import toast from "react-hot-toast";
function ResumeType() {
  const dispatch = useDispatch();
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
    <div className="w-full h-full flex items-center justify-center flex-col">
      <div className="text-2xl mb-10">{t("Please select a resume style")}</div>
      <div className="h-5/6 flex flex-col md:justify-center md:flex-row">
        <button
          className={`resume-type mb-10 md:mr-12 ${classicButtonStyle}`}
          onClick={() => handleSelectResumeType("classic")}
        >
          <img
            className="w-full h-full object-contain drop-shadow-md"
            src={ClassicImage}
            alt=""
          />
          <div className={`text-lg font-medium ${classicButtonTextStyle}`}>
            Classic
          </div>
        </button>
        <button
          className={`resume-type mb-10 ${modernButtonStyle}`}
          onClick={() => handleSelectResumeType("modern")}
        >
          <img
            className="w-full h-full object-contain drop-shadow-md"
            src={ModernImage}
            alt=""
          />

          <div className={`text-lg font-medium ${modernButtonTextStyle}`}>
            Modern
          </div>
        </button>
      </div>
    </div>
  );
}

export default ResumeType;
