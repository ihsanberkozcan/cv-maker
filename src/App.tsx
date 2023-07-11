
import { MyDocument } from "./components/MyDocument";
import UserInput from "./components/UserInput";
import AddLink from "./components/AddLink";

function App() {
  return (
    <div>
      <UserInput title="Name Surname" keyName="name" inputType="short" />
      <UserInput title="Job Title" keyName="title" inputType="short" />
      <UserInput title="Email" keyName="email" inputType="short" />
      <UserInput title="Skills" keyName="skills" inputType="long" />
      <AddLink />
      <MyDocument />
    </div>
  );
}

export default App;
