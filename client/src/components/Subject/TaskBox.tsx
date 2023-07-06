import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { TaskData } from "../../pages/Subject";

type Props = {
  data: TaskData;
};

export default function TaskBox({ data }: Props) {
  const [onResult, setOnResult] = React.useState(false);

  const sid = useParams().sid;
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/subject/${sid}/task/${data.id}`);
  };

  const isTest = true;
  return (
    <div
      onClick={handleClick}
      className={`w-full border border-neutral-600 rounded-md mt-8 p-8 text-white text-xl cursor-pointer ${
        onResult ? "" : `hover:bg-neutral-600 transition-all`
      } relative`}
    >
      <Link
        onClick={(e) => e.stopPropagation()}
        onMouseLeave={(e) => setOnResult(false)}
        onMouseOver={(e) => setOnResult(true)}
        className="absolute top-2 -right-24 text-neutral-300 text-xl border border-neutral-600 pr-4 pt-2 pb-2 pl-4 rounded-r-md hover:bg-neutral-600 hover:text-neutral-100 transition-all"
        to={`/subject/${sid}/task/${data.id}/results`}
      >
        Results
      </Link>
      <p className="font-bold text-2xl">{data.title}</p>
      <p className="mt-4 text-2xl">{data.description}</p>
      {isTest && (
        <div className="flex justify-end w-full">
          <p className="text-xl">34 Points</p>
        </div>
      )}
    </div>
  );
}
