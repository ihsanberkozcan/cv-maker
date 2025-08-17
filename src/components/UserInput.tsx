import { updateData } from "../stores/userData";
import { useDispatch, useSelector } from "react-redux";
import { UserInputProps, userDataType } from "../types/type";
import { useTranslation } from "react-i18next";
import { useState } from "react";

function UserInput({
  title,
  keyName,
  inputType,
  inputPlaceholder,
  inputValue,
}: UserInputProps) {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const skills = useSelector((state: any) => state.userData.skills);
  const [skillInput, setSkillInput] = useState("");

  const handlechange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    keyName: keyof userDataType
  ) => {
    dispatch(updateData({ key: keyName, value: e.target.value }));
  };

  const handleAddSkill = () => {
    if (skillInput.trim() && !skills.includes(skillInput.trim())) {
      dispatch(
        updateData({ key: "skills", value: [...skills, skillInput.trim()] })
      );
      setSkillInput("");
    }
  };

  const handleRemoveSkill = (skill: string) => {
    dispatch(
      updateData({
        key: "skills",
        value: skills.filter((s: string) => s !== skill),
      })
    );
  };

  return (
    <div className="p-6 md:p-10 bg-white border rounded-xl mt-5 shadow-lg">
      <div className="text-lg md:text-xl lg:text-2xl font-semibold mb-1">
        {t(title)}
      </div>
      {keyName === "skills" ? (
        <>
          <div className="flex gap-2 mt-3">
            <input
              className="rounded p-2 flex-1 border"
              placeholder={t("Add a skill")}
              value={skillInput}
              onChange={(e) => setSkillInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleAddSkill();
              }}
            />
            <button
              className="bg-indigo-400 text-white px-4 py-2 rounded hover:bg-indigo-500"
              onClick={handleAddSkill}
            >
              {t("Add")}
            </button>
          </div>
          <div className="flex flex-wrap gap-2 mt-4">
            {skills.map((skill: string, idx: number) => (
              <span
                key={idx}
                className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-md text-sm flex items-center gap-2 shadow"
              >
                {skill}
                <button
                  className="ml-1 text-xl text-indigo-700"
                  onClick={() => handleRemoveSkill(skill)}
                  title={t("Remove")}
                >
                  ×
                </button>
              </span>
            ))}
          </div>
        </>
      ) : inputType === "short" ? (
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
