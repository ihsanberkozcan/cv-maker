import React from "react";
import { useDispatch } from "react-redux";
import { backStep } from "../stores/step";

function BackButton() {
  const dispatch = useDispatch();
  const handleBackButton = () => {
    dispatch(backStep());
  };

  return <button onClick={handleBackButton}>BackButton</button>;
}

export default BackButton;
