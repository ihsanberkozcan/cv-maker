import { MyCV } from "./components/MyCV";
import UserInput from "./components/UserInput";
import AddLink from "./components/AddLink";
import Experience from "./components/Experience";
import NextButton from "./components/NextButton";
import BackButton from "./components/BackButton";
import { useSelector } from "react-redux";
import StartButton from "./components/StartButton";
import Education from "./components/Education";

function App() {
  const { currentStep, lastStep } = useSelector((state: any) => state.step);
  const { name, title, email, location, phoneNumber, skills } = useSelector(
    (state: any) => state.userData
  );

  const renderStep = (currentStep: number) => {
    switch (currentStep) {
      case 0:
        return (
          <div className="flex flex-col justify-center align-middle items-center w-full h-full">
            <h1 className="text-center mb-10 text-6xl font-mono">CV Maker</h1>
            <StartButton />
          </div>
        );
      case 1:
        return (
          <UserInput
            title="Name Surname"
            keyName="name"
            inputType="short"
            inputValue={name}
          />
        );
      case 2:
        return (
          <UserInput
            title="Job Title"
            keyName="title"
            inputType="short"
            inputValue={title}
          />
        );
      case 3:
        return (
          <UserInput
            title="Location"
            keyName="location"
            inputType="short"
            inputValue={location}
          />
        );
      case 4:
        return (
          <UserInput
            title="Email"
            keyName="email"
            inputType="short"
            inputPlaceholder="test@test.com"
            inputValue={email}
          />
        );
      case 5:
        return (
          <UserInput
            title="Phone Number"
            keyName="phoneNumber"
            inputType="short"
            inputPlaceholder="+900000000000"
            inputValue={phoneNumber}
          />
        );
      case 6:
        return (
          <UserInput
            title="Skills"
            keyName="skills"
            inputType="long"
            inputValue={skills}
          />
        );

      case 7:
        return <AddLink />;

      case 8:
        return <Experience />;

      case 9:
        return <Education />;

      case 10:
        return <MyCV />;

      default:
        break;
    }
  };
  return (
    <div className="flex flex-col h-screen relative">
      <div
        className={`w-full h-full p-4 md:p-5 lg:p-10 bg-[#F9F7F7] ${
          currentStep !== 0 ? "mt-20" : ""
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
