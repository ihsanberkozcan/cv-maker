import React from "react";
import { useDispatch } from "react-redux";
import { nextStep } from "../stores/step";

function NextButton() {
  const dispatch = useDispatch();
  const handleNextButton = () => {
    dispatch(nextStep());
  };

  return (
    <button className="text-white p-4 h-full bg-indigo-300 rounded-r-lg" onClick={handleNextButton}>
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
