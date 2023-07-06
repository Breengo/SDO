import React from "react";
import { QuestionsData } from "../TaskForm";

type Props = {
  data: QuestionsData;
  setPoints: (points: number[]) => void;
  points: number[];
  index: number;
};

export default function QuestionBox({ data, setPoints, points, index }: Props) {
  const [choiced, setChoiced] = React.useState(10);

  React.useEffect(() => {
    if (choiced + 1 === data.rightAns) {
      points[index] = 1;
      setPoints(points);
    } else {
      points[index] = 0;
      setPoints(points);
    }
  }, [choiced]);

  return (
    <div className="w-full border-neutral-600 border mt-8 p-8 rounded-md">
      <p className="text-2xl text-neutral-300 ">{data.text}</p>
      <div className="flex flex-col justify-around items-center mt-4">
        {[1, 2, 3, 4].map((item, index) => (
          <button
            onClick={() => setChoiced(index)}
            className={`text-neutral-300 w-full mt-4 p-4 rounded-md border border-neutral-600 ${
              choiced === index
                ? "bg-neutral-600 text-neutral-100"
                : "hover:bg-neutral-600 hover:text-neutral-100 transition-all"
            }`}
            key={index}
          >{`${data.options[index]}`}</button>
        ))}
      </div>
    </div>
  );
}
