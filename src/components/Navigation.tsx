import React from "react";
import NextButton from "./NextButton";
import BackButton from "./BackButton";
import { useSelector } from "react-redux";

export default function Navigation() {
  const { currentStep, lastStep } = useSelector((state: any) => state.step);
  return (
    <div>
      {currentStep == 0 ? null : (
        <>
          <BackButton />
          {currentStep !== lastStep ? <NextButton /> : null}
        </>
      )}
    </div>
  );
}
