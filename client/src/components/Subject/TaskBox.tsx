import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { TaskData } from "../../pages/Subject";
import { useAppSelector } from "../../redux/store";

type Props = {
  data: TaskData;
};

export default function TaskBox({ data }: Props) {
  const [onResult, setOnResult] = React.useState(false);

  const userData = useAppSelector((state) => state.auth.userData);

  const sid = useParams().sid;
  const navigate = useNavigate();

  const handleClick = () => {
    if (!data.result) {
      navigate(`/subject/${sid}/task/${data.id}`);
    }
  };

  return (
    <div
      onClick={handleClick}
      className={`w-full border border-neutral-600 rounded-md mt-8 p-8 text-white text-xl ${
        data.result ? "bg-neutral-700 opacity-90" : ""
      } ${
        onResult || data.result
          ? ""
          : `hover:bg-neutral-600 transition-all cursor-pointer`
      } relative`}
    >
      {userData?.isStaff && (
        <Link
          onClick={(e) => e.stopPropagation()}
          onMouseLeave={(e) => setOnResult(false)}
          onMouseOver={(e) => setOnResult(true)}
          className="absolute top-2 -right-24 text-neutral-300 text-xl border border-neutral-600 pr-4 pt-2 pb-2 pl-4 rounded-r-md hover:bg-neutral-600 hover:text-neutral-100 transition-all"
          to={`/subject/${sid}/task/${data.id}/results`}
        >
          Results
        </Link>
      )}
      <p className="font-bold text-2xl">{data.title}</p>
      <p className="mt-4 text-2xl">{data.description}</p>
      {data.result && (
        <div className="flex justify-end w-full">
          <p className="text-xl">{data.result} Points</p>
        </div>
      )}
    </div>
  );
}
