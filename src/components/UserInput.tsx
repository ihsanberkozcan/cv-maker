import { updateData } from "../stores/userData";
import { useDispatch } from "react-redux";
import { UserInputProps, userDataType } from "../types/type";
import { useTranslation } from "react-i18next";
function UserInput({
  title,
  keyName,
  inputType,
  inputPlaceholder,
  inputValue,
}: UserInputProps) {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const handlechange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    keyName: keyof userDataType
  ) => {
    dispatch(updateData({ key: keyName, value: e.target.value }));
  };
  return (
    <div className="p-10 bg-white border rounded-xl mt-5 shadow-lg">
      <div className="text-lg md:text-xl lg:text-2xl font-semibold mb-1">{t(title)}</div>
      {inputType === "short" ? (
        <input
          className="mt-3 w-full rounded p-2 textInput"
          placeholder={inputPlaceholder}
          value={inputValue}
          onChange={(e) => handlechange(e, keyName)}
        />
      ) : (
        <textarea
          className="mt-3 w-full h-full rounded p-2"
          value={inputValue}
          onChange={(e) => handlechange(e, keyName)}
        />
      )}
    </div>
  );
}

export default UserInput;
