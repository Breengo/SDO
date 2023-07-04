import { useNavigate, useParams } from "react-router-dom";
import { TextData } from "../../pages/Subject";

type Props = {
  textData: TextData;
};

export default function TextBox({ textData }: Props) {
  const sid = useParams().sid;

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/subject/${sid}/text/${textData.id}`);
  };

  return (
    <div
      onClick={handleClick}
      className="w-full border border-neutral-600 rounded-md mt-8 p-8 text-white text-xl cursor-pointer hover:bg-neutral-600 transition-all"
    >
      <p className="font-bold text-2xl">{textData.title}</p>
      <p className="mt-4 text-2xl">{textData.description}</p>
    </div>
  );
}
