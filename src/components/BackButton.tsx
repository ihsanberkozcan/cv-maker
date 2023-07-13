import React from "react";
import { useDispatch } from "react-redux";
import { backStep } from "../stores/step";

function BackButton() {
  const dispatch = useDispatch();
  const handleBackButton = () => {
    dispatch(backStep());
  };

  return (
    <button className="text-white p-4 h-full bg-indigo-300 rounded-l-lg" onClick={handleBackButton}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={4}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 19.5L8.25 12l7.5-7.5"
        />
      </svg>
    </button>
  );
}

export default BackButton;
