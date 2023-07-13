import React from "react";
import { useDispatch } from "react-redux";
import { nextStep } from "../stores/step";

function StartButton() {
  const dispatch = useDispatch();
  const handleStartButton = () => {
    dispatch(nextStep());
  };

  return (
    <button className="bg-indigo-300 rounded text-white p-5 mt-20" onClick={handleStartButton}>
      Let's Start
    </button>
  );
}

export default StartButton;
