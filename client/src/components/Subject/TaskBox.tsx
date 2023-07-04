import { useNavigate, useParams } from "react-router-dom";
import { TaskData } from "../../pages/Subject";

type Props = {
  data: TaskData;
};

export default function TaskBox({ data }: Props) {
  const sid = useParams().sid;
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/subject/${sid}/task/${data.id}`);
  };

  const isTest = true;
  return (
    <div
      onClick={handleClick}
      className="w-full border border-neutral-600 rounded-md mt-8 p-8 text-white text-xl cursor-pointer hover:bg-neutral-600 transition-all"
    >
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
