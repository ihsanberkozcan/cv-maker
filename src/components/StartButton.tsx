import { useDispatch } from "react-redux";
import { nextStep } from "../stores/step";
import { useTranslation } from "react-i18next";
import "../App.css";

function StartButton() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const handleStartButton = () => {
    dispatch(nextStep());
  };

  return (
    <button
      className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white px-10 py-4 rounded-full text-2xl font-bold shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-pink-300 relative after:absolute after:inset-0 after:rounded-full after:opacity-0 hover:after:opacity-40 after:bg-white after:pointer-events-none"

      onClick={handleStartButton}
    >
      {t("Let's Start")}
    </button>
  );
}

export default StartButton;
