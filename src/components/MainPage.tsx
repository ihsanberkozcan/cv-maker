import StartButton from "./StartButton";
import { useTranslation } from "react-i18next";
function MainPage() {
  const { t } = useTranslation();
  const { i18n } = useTranslation();
  const handleChange = async (e: React.ChangeEvent<HTMLSelectElement>) => {
    await i18n.changeLanguage(e.target.value);
  };

  return (
    <div className="flex flex-col justify-center align-middle items-center w-full h-full">
      <select
        className="rounded p-2 mb-3 border-2 bg-white absolute top-5 right-5"
        onChange={handleChange}
        value={i18n.language}
      >
        <option value="en">🇺🇸 English</option>
        <option value="tr">🇹🇷 Türkçe</option>
      </select>
      <h1 className="text-center mb-10 text-6xl font-mono">{t("CV Maker")}</h1>
      <StartButton />
    </div>
  );
}

export default MainPage;
