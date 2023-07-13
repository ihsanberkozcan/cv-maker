import React from "react";
import { updateData, userDataType } from "../stores/userData";
import { useDispatch } from "react-redux";

interface UserInputProps {
  title: string;
  keyName: keyof userDataType;
  inputType: string;
  inputPlaceholder?: string
}

function UserInput({ title, keyName, inputType, inputPlaceholder }: UserInputProps) {
  const dispatch = useDispatch();
  const handlechange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
    keyName: keyof userDataType
  ) => {
    dispatch(updateData({ key: keyName, value: e.target.value }));
  };
  return (
    <div>
      <div className="text-4xl mb-3">{title}:</div>
      {inputType === "short" ? (
        <input className="mt-3 w-full rounded p-2" placeholder={inputPlaceholder} onChange={(e) => handlechange(e, keyName)} />
      ) : (
        <textarea className="mt-3 w-full h-full rounded p-2" onChange={(e) => handlechange(e, keyName)} />
      )}
    </div>
  );
}

export default UserInput;
