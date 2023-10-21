import { useDispatch, useSelector } from "react-redux";
import { nextStep } from "../stores/step";
import toast from "react-hot-toast";
import { t } from "i18next";

function NextButton() {
  const dispatch = useDispatch();
  const { currentStep } = useSelector((state: any) => state.step);
  const { resumeType } = useSelector((state: any) => state.resumeType);
  const handleNextButton = () => {
    if (currentStep === 1 && resumeType === "") {
      toast(t("Please select a resume style"), {
        icon: "🥺",
        style: {
          padding: "12px 36px",
          color: "#f8bd25",
          fontWeight: 600,
        },
      });
    } else {
      dispatch(nextStep());
    }
  };

  return (
    <button
      className="text-white p-3 h-full bg-indigo-300 rounded-xl"
      onClick={handleNextButton}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8.25 4.5l7.5 7.5-7.5 7.5"
        />
      </svg>
    </button>
  );
}

export default NextButton;
