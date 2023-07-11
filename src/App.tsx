import { MyDocument } from "./components/MyDocument";
import UserInput from "./components/UserInput";
import AddLink from "./components/AddLink";
import Experience from "./components/Experience";
import NextButton from "./components/NextButton";
import BackButton from "./components/BackButton";
import { useSelector } from "react-redux";
import Navigation from "./components/Navigation";
import StartButton from "./components/StartButton";
import Education from "./components/Education";

function App() {
  const { currentStep } = useSelector((state: any) => state.step);
  return (
    <div>
    
      {currentStep === 0 ? (
        <>
          <h1>CV Maker</h1>
          <StartButton />
        </>
      ) : currentStep === 1 ? (
        <UserInput title="Name Surname" keyName="name" inputType="short" />
      ) : currentStep === 2 ? (
        <UserInput title="Job Title" keyName="title" inputType="short" />
      ) : currentStep === 3 ? (
        <UserInput title="Email" keyName="email" inputType="short" />
      ) : currentStep === 4 ? (
        <UserInput title="Skills" keyName="skills" inputType="long" />
      ) : currentStep === 5 ? (
        <AddLink />
      ) : currentStep === 6 ? (
        <Experience />
      ) : currentStep === 7 ? (
        <Education />
      ) :currentStep === 8 ? (
        <MyDocument />
      ) : (
        <></>
      )}
      <Navigation />
    </div>
  );
}

export default App;
