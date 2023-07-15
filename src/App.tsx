import { MyDocument } from "./components/MyDocument";
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

  const renderStep = (currentStep: number) => {
    switch (currentStep) {
      case 0:
        return (
          <div className="flex flex-col justify-center align-middle items-center w-full h-full">
            <h1 className="text-center mb-10 text-6xl font-mono">
              CV Maker
            </h1>
            <StartButton />
          </div>
        );
        break;
      case 1:
        return (
          <UserInput title="Name Surname" keyName="name" inputType="short" />
        );
        break;
      case 2:
        return (
          <UserInput title="Job Title" keyName="title" inputType="short" />
        );
        break;
      case 3:
        return (
          <UserInput
            title="Email"
            keyName="email"
            inputType="short"
            inputPlaceholder="test@test.com"
          />
        );
        break;
      case 4:
        return (
          <UserInput
            title="Phone Number"
            keyName="phoneNumber"
            inputType="short"
            inputPlaceholder="+900000000000"
          />
        );
        break;
      case 5:
        return <UserInput title="Skills" keyName="skills" inputType="long" />;
        break;

      case 6:
        return <AddLink />;
        break;
      case 7:
        return <Experience />;
        break;
      case 8:
        return <Education />;
        break;
      case 9:
        return <MyDocument />;
        break;
      case 10:
        <></>;
        break;

      default:
        break;
    }
  };
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-r from-indigo-300 via-purple-400 to-pink-300">
      <div className="flex bg-indigo-50 w-5/6 h-5/6 md:w-5/6 md:h-5/6  lg:w-3/4 lg:h-3/5 drop-shadow-xl rounded-lg relative ">
        {currentStep == 0 ? null : <BackButton />}
        <div className="w-full p-4 md:p-5 lg:p-20">{renderStep(currentStep)}</div>
        {currentStep !== lastStep && currentStep !== 0 ? <NextButton /> : <></>}
      </div>
    </div>
  );
}

export default App;
