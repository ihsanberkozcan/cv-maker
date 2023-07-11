import React from "react";
import { updateData, userDataType } from "../stores/userData";
import { useDispatch } from "react-redux";

interface UserInputProps {
  title: string;
  keyName: keyof userDataType;
  inputType: string;

}

function UserInput({
  title,
  keyName,
  inputType,

}: UserInputProps) {
    const dispatch = useDispatch();
    const handlechange = (
        e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>,
        keyName: keyof userDataType
      ) => {
        dispatch(updateData({ key: keyName, value: e.target.value }));
      };
  return (
    <div>
      {title}:
      {inputType === "short" ? (
        <input onChange={(e) => handlechange(e, keyName)} />
      ) : (
        <textarea name="" id="" onChange={(e) => handlechange(e, keyName)} />
      )}
    </div>
  );
}

export default UserInput;
