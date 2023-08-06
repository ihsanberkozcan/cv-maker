import { useDispatch, useSelector } from "react-redux";
import { nextStep } from "../stores/step";
import { toast } from "react-toastify";

function NextButton() {
  const dispatch = useDispatch();
  const { currentStep } = useSelector((state: any) => state.step);
  const { resumeType } = useSelector((state: any) => state.resumeType);
  const handleNextButton = () => {
    if (currentStep === 1 && resumeType === "") {
      toast.warn("Please select a resume style", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      dispatch(nextStep());
    }
  };

  return (
    <button
      className="text-white p-4 h-full bg-indigo-300 rounded-lg"
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
