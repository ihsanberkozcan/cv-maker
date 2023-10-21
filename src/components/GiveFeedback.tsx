import { useState } from "react";
import Feedback from "./Feedback";
import axios from "axios";
import { useTranslation } from "react-i18next";

export default function GiveFeedback() {
  const { t } = useTranslation();
  const [feedbackComponent, setFeedbackComponent] = useState<boolean>(false);
  const [feedbackSended, setFeedbackSended] = useState<boolean>(false);
  const [feedbackRate, setfeedbackRate] = useState<number>(0);
  const handleFeedbackButton = () => {
    setFeedbackComponent(!feedbackComponent);
  };
  const closeFeedback = () => {
    setFeedbackComponent(false);
  };
  const handleSubmit = () => {
    if (feedbackRate > 0) {
      axios
        .post("https://givefeedback.vercel.app/api/givefeedback", {
          ProductId: 714108304697,
          Rate: feedbackRate,
        })
        .then(() => {
          setFeedbackSended(true);
        });
    }
  };
  return (
    <div className="fixed right-10 bottom-0 z-50">
      {feedbackComponent ? (
        <Feedback
          closeFeedback={closeFeedback}
          handleSubmit={handleSubmit}
          feedbackSended={feedbackSended}
          setfeedbackRate={setfeedbackRate}
        />
      ) : null}
      <div className="flex justify-end">
        <button
          onClick={handleFeedbackButton}
          className="bg-indigo-300 py-3 px-12 text-white rounded-t-lg z-40 shadow-lg border-2 border-indigo-200"
        >
          {t("Feedback")}
        </button>
      </div>
    </div>
  );
}
