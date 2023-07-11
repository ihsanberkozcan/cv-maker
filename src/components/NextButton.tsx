import React from "react";
import { useDispatch } from "react-redux";
import { nextStep } from "../stores/step";

function NextButton() {
    const dispatch = useDispatch();
  const handleNextButton = () => {
    dispatch(nextStep())
  };

  return <button onClick={handleNextButton}>NextButton</button>;
}

export default NextButton;
