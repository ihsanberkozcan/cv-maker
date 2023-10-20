import { useState, useEffect } from "react";

interface ProgressBarType {
  currentStep: number;
  lastStep: number;
}

function ProgressBar({ currentStep, lastStep }: ProgressBarType) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const percentage = (currentStep / lastStep) * 100;
    setProgress(percentage);
  }, [currentStep, lastStep]);

  return (
    <div className="h-2 bg-gray-200 rounded-full mx-5 lg:mx-12">
      <div
        className="h-full bg-indigo-300 rounded-full"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
}

export default ProgressBar;
