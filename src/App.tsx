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
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import GiveFeedback from "./components/GiveFeedback";
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
    <div className="flex flex-col h-screen relative">
      <GiveFeedback />
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div
        className={`w-full h-full p-6 md:p-8 lg:p-10 overflow-x-hidden bg-[#F9F7F7] ${
          currentStep !== 0 ? "mt-20 md:mt-20 lg:mt-16" : ""
        }`}
      >
        {renderStep(currentStep)}
      </div>
      {currentStep !== 0 ? (
        <div className="w-full flex justify-between px-4 md:px-5 lg:px-10 py-3 fixed top-0 items-center bg-white drop-shadow-md">
          {currentStep == 0 ? null : <BackButton />}
          {currentStep !== 0 ? (
            <>
              {currentStep}/{lastStep}
            </>
          ) : (
            <></>
          )}

          {currentStep !== lastStep && currentStep !== 0 ? (
            <NextButton />
          ) : (
            <div className="w-[56px]"></div>
          )}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default App;
