import { motion } from "framer-motion";

import {
  FaRegFrown,
  FaRegGrinStars,
  FaRegMeh,
  FaRegSadTear,
  FaRegSmile,
} from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { Dispatch, SetStateAction, useRef } from "react";
import { useTranslation } from "react-i18next";
import { ImSpinner8 } from "react-icons/im";
interface propsType {
  closeFeedback: () => void;
  handleSubmit: () => void;
  feedbackSended: boolean;
  setfeedbackRate: Dispatch<SetStateAction<number>>;
  disable: boolean;
}

export default function Feedback({
  closeFeedback,
  handleSubmit,
  feedbackSended,
  setfeedbackRate,
  disable,
}: propsType) {
  const { t } = useTranslation();
  const button1 = useRef(null);
  const button2 = useRef(null);
  const button3 = useRef(null);
  const button4 = useRef(null);
  const button5 = useRef(null);

  const handleRateClick = async (buttonRef: any, rate: number) => {
    setfeedbackRate(rate);
    buttonRef.current.className = "bg-indigo-50 rounded-full";
    buttonRef.current.children[0].className.baseVal =
      "fill-indigo-300 p-2 hover:scale-110 transition delay-150 duration-300 ease-in-out rounded-full";

    const buttonRefs = [button1, button2, button3, button4, button5];
    const notClicked = buttonRefs.filter((button) => button !== buttonRef);
    notClicked.map((mybutton: any) => {
      mybutton.current.className = "rounded-full";
      mybutton.current.children[0].className.baseVal =
        "hover:fill-indigo-300 p-2 hover:scale-110 transition delay-150 duration-300 ease-in-out rounded-full";
    });
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, x: 0, y: -15 }}
      transition={{ duration: 0.4 }}
    >
      <div className="px-10 py-8 bg-white rounded-md shadow-2xl flex flex-col justify-center">
        <button onClick={closeFeedback} className="absolute top-3 right-3 p-2">
          <AiOutlineClose className="hover:fill-indigo-300" />
        </button>
        {feedbackSended !== true ? (
          <div>
            <div className="text-lg font-medium mt-3">
              {t("Please rate your overall experience")}
            </div>
            <div className="w-full mt-4 flex justify-center">
              <button
                ref={button1}
                onClick={() => handleRateClick(button1, 1)}
                className="rounded-full hover:bg-indigo-50"
              >
                <FaRegSadTear
                  size={40}
                  className="hover:fill-indigo-300 p-2 hover:scale-110 transition delay-150 duration-300 ease-in-out rounded-full"
                />
              </button>
              <button
                ref={button2}
                onClick={() => handleRateClick(button2, 2)}
                className="rounded-full hover:bg-indigo-50"
              >
                <FaRegFrown
                  size={40}
                  className="hover:fill-indigo-300 p-2 hover:scale-110 transition delay-150 duration-300 ease-in-out rounded-full"
                />
              </button>
              <button
                ref={button3}
                onClick={() => handleRateClick(button3, 3)}
                className="rounded-full hover:bg-indigo-50"
              >
                <FaRegMeh
                  size={40}
                  className="hover:fill-indigo-300 p-2 hover:scale-110 transition delay-150 duration-300 ease-in-out rounded-full"
                />
              </button>

              <button
                ref={button4}
                onClick={() => handleRateClick(button4, 4)}
                className="rounded-full hover:bg-indigo-50"
              >
                <FaRegSmile
                  size={40}
                  className="hover:fill-indigo-300 p-2 hover:scale-110 transition delay-150 duration-300 ease-in-out rounded-full"
                />
              </button>
              <button
                ref={button5}
                onClick={() => handleRateClick(button5, 5)}
                className="rounded-full hover:bg-indigo-50"
              >
                <FaRegGrinStars
                  size={40}
                  className="hover:fill-indigo-300 p-2 hover:scale-110 transition delay-150 duration-300 ease-in-out rounded-full"
                />
              </button>
            </div>
            <div className="flex justify-center">
              {disable ? (
                <div className="animate-spin py-4 px-5 text-indigo-300">
                  <ImSpinner8 size={20} />
                </div>
              ) : (
                <button
                  onClick={handleSubmit}
                  className="text-indigo-300 mt-3 py-2 px-5 font-semibold hover:bg-indigo-50 rounded-full w-min"
                >
                  {t("Submit")}
                </button>
              )}
            </div>
          </div>
        ) : (
          <div className="w-[274px] h-[154px] flex justify-center items-center">
            <div className="text-xl text-center">
              {t("Thank you for the feedback")}
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
}
