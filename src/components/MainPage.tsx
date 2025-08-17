import StartButton from "./StartButton";
import { useTranslation } from "react-i18next";

function MainPage() {
  const { t } = useTranslation();
  const { i18n } = useTranslation();
  const handleChange = async (e: React.ChangeEvent<HTMLSelectElement>) => {
    await i18n.changeLanguage(e.target.value);
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-gradient-to-tr from-indigo-100 via-white to-indigo-200 relative overflow-hidden">
      <select
        className="rounded p-2 mb-3 border-2 bg-white absolute top-5 right-5 shadow-md z-10"
        onChange={handleChange}
        value={i18n.language}
      >
        <option value="en">🇺🇸 English</option>
        <option value="tr">🇹🇷 Türkçe</option>
      </select>
      <div className="flex flex-row items-center justify-center w-full max-w-4xl z-10">
        <div className="flex flex-col items-center justify-center max-w-xl w-auto px-6 py-10">
          <h1 className="text-center mb-4 text-6xl md:text-7xl font-extrabold font-mono bg-gradient-to-r from-indigo-500 to-blue-500 bg-clip-text text-transparent drop-shadow-lg">
            CV Maker
          </h1>
          <h2 className="text-center mb-8 text-xl md:text-2xl font-light text-gray-700 max-w-2xl">
            {t(
              "Create your professional resume in minutes. Stand out and get hired!"
            )}
          </h2>
          <StartButton />
        </div>
        <img
          src="/site.svg"
          alt="CV Maker"
          className="hidden md:block w-80 h-80 ml-10 drop-shadow-lg"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-tr from-indigo-100 via-white to-indigo-200 opacity-60 pointer-events-none" />
    </div>
  );
}

export default MainPage;
