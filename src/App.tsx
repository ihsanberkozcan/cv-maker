import { ClassicResume } from "./components/ClassicResume";
import UserInput from "./components/UserInput";
import AddLink from "./components/AddLink";
import Experience from "./components/Experience";
import NextButton from "./components/NextButton";
import BackButton from "./components/BackButton";
import { useSelector } from "react-redux";
import Education from "./components/Education";
import Project from "./components/Project";
import Certification from "./components/Certification";
import Award from "./components/Award";
import AnimationRender from "./components/AnimationRender";
import MainPage from "./components/MainPage";
import ResumeStyle from "./components/ResumeStyle";
import { ModernResume } from "./components/ModernResume";

import GiveFeedback from "./components/GiveFeedback";
import ProgressBar from "./components/ProgressBar";
import { Toaster } from "react-hot-toast";
function App() {
  const { currentStep, lastStep } = useSelector((state: any) => state.step);
  const { resumeType } = useSelector((state: any) => state.resumeType);
  const { name, title, email, location, phoneNumber, skills } = useSelector(
    (state: any) => state.userData
  );

  const renderStep = (currentStep: number) => {
    switch (currentStep) {
      case 0:
        return (
          <AnimationRender>
            <MainPage />
          </AnimationRender>
        );
      case 1:
        return (
          <AnimationRender>
            <ResumeStyle />
          </AnimationRender>
        );
      case 2:
        return (
          <AnimationRender>
            <UserInput
              title="Name Surname"
              keyName="name"
              inputType="short"
              inputValue={name}
            />
          </AnimationRender>
        );
      case 3:
        return (
          <AnimationRender>
            <UserInput
              title="Job Title"
              keyName="title"
              inputType="short"
              inputValue={title}
            />
          </AnimationRender>
        );

      case 4:
        return (
          <AnimationRender>
            <UserInput
              title="Email"
              keyName="email"
              inputType="short"
              inputPlaceholder="test@test.com"
              inputValue={email}
            />
          </AnimationRender>
        );
      case 5:
        return (
          <AnimationRender>
            <UserInput
              title="Phone Number"
              keyName="phoneNumber"
              inputType="short"
              inputPlaceholder="+900000000000"
              inputValue={phoneNumber}
            />
          </AnimationRender>
        );
      case 6:
        return (
          <AnimationRender>
            <UserInput
              title="Location"
              keyName="location"
              inputType="short"
              inputValue={location}
            />
          </AnimationRender>
        );
      case 7:
        return (
          <AnimationRender>
            <AddLink />
          </AnimationRender>
        );
      case 8:
        return (
          <AnimationRender>
            <UserInput
              title="Skills"
              keyName="skills"
              inputType="long"
              inputValue={skills}
            />
          </AnimationRender>
        );
      case 9:
        return (
          <AnimationRender>
            <Experience />
          </AnimationRender>
        );
      case 10:
        return (
          <AnimationRender>
            <Education />
          </AnimationRender>
        );
      case 11:
        return (
          <AnimationRender>
            <Project />
          </AnimationRender>
        );
      case 12:
        return (
          <AnimationRender>
            <Certification />
          </AnimationRender>
        );
      case 13:
        return (
          <AnimationRender>
            <Award />
          </AnimationRender>
        );
      case 14:
        return (
          <AnimationRender>
            {resumeType === "classic" ? (
              <ClassicResume />
            ) : resumeType === "modern" ? (
              <ModernResume />
            ) : null}
          </AnimationRender>
        );
      default:
        break;
    }
  };
  return (
    <div className="h-full">
      <GiveFeedback />
      <div className="flex flex-col h-screen relative">
      <div><Toaster/></div>
      
        <div
          className={`w-full h-full px-8 md:px-24 lg-64 xl:px-72 overflow-x-hidden bg-[#F9F7F7] ${
            currentStep !== 0 ? "pt-28" : ""
          }`}
        >
          {renderStep(currentStep)}
        </div>
        {currentStep !== 0 ? (
          <div className=" flex justify-center">
            <div className="w-11/12 mt-5 flex justify-between px-4 md:px-5 py-3 fixed top-0 items-center rounded-xl border bg-white shadow">
              {currentStep == 0 ? null : <BackButton />}
              {currentStep !== 0 ? (
                <div className="flex-1">
                  <ProgressBar currentStep={currentStep} lastStep={lastStep} />
                </div>
              ) : (
                <></>
              )}

              {currentStep !== lastStep && currentStep !== 0 ? (
                <NextButton />
              ) : (
                <div className="w-[48px]"></div>
              )}
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default App;
