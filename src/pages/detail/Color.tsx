import { useState } from "react";
import { DetailProps } from "../../types";
import { colors } from "../../utils/constants";

const Color = ({ data }: DetailProps) => {
  const [selected, setSelected] =
    useState<string>("");

  const toggle = (id: string) => {
    const isSame = selected === id;

    if (isSame) {
      setSelected("");
    } else {
      setSelected(id);
    }
  };

  return (
    <div>
      <h2 className="font-semibold mb-3">
        Renk Seçiniz
      </h2>

      <div className="flex gap-5">
        {data.color.split(",").map((id) => {
          const color = colors.find(
            (i) => i.id === id
          );

          const isSelected = selected == id;

          return (
            <div
              className={
                isSelected
                  ? " ring ring-blue rounded-full"
                  : ""
              }
            >
              <div
                onClick={() => toggle(id)}
                className="m-1 size-9 rounded-full cursor-pointer"
                style={{
                  background: color?.code,
                }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Color;
