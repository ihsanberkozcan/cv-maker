import { TwitterPicker } from "react-color";
import { useState, useRef } from "react";
import { useOnClickOutside } from "../hooks/hooks";
import { useDispatch } from "react-redux";
import { updateResumeColor } from "../stores/resumeColor";
import { resumeColorType } from "../types/type";
import { useTranslation } from "react-i18next";

export default function ColorPicker({
  text,
  defaultColor,
  mykey,
  ColorPickerPossition,
}: {
  text: string;
  defaultColor: string;
  mykey: keyof resumeColorType;
  ColorPickerPossition: "left" | "right";
}) {
  const { t } = useTranslation();
  const [background, setBackground] = useState<string>(defaultColor);
  const [displayColorPicker, setDisplayColorPicker] = useState<boolean>(false);
  const dispatch = useDispatch();
  const ref = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const handleChangeComplete = (color: { hex: string }) => {
    setBackground(color.hex);
    dispatch(updateResumeColor({ key: mykey, value: color.hex }));
  };

  const handleClick = () => {
    setDisplayColorPicker(!displayColorPicker);
  };

  const getContrastColor = (hexColor: string) => {
    hexColor = hexColor.replace(/^#/, "");
    const r = parseInt(hexColor.slice(0, 2), 16);
    const g = parseInt(hexColor.slice(2, 4), 16);
    const b = parseInt(hexColor.slice(4, 6), 16);
    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

    return luminance > 0.5 ? "black" : "white";
  };

  useOnClickOutside(ref, buttonRef, () => setDisplayColorPicker(false));
  return (
    <div className="relative mb-4 w-1/4">
      <button
        ref={buttonRef}
        onClick={handleClick}
        style={{
          background: `${background}`,
          color: `${getContrastColor(background)}`,
        }}
        className="text-white p-2 mb-3 rounded-md text-center w-full h-full text-xs font-semibold font-mon shadow-md"
      >
        {t(text)}
      </button>
      {displayColorPicker ? (
        <div className={`absolute z-10 ${ColorPickerPossition}-0`} ref={ref}>
          <TwitterPicker
            triangle={`top-${ColorPickerPossition}`}
            color={background}
            onChangeComplete={handleChangeComplete}
          />
        </div>
      ) : null}
    </div>
  );
}
