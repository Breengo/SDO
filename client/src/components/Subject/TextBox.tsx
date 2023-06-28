import { useNavigate } from "react-router-dom";

export default function TextBox() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/subject/5/text/5`);
  };

  const isDone = false;
  return (
    <div
      onClick={handleClick}
      className="w-full border border-neutral-600 rounded-md mt-8 p-8 text-white text-xl cursor-pointer hover:bg-neutral-600 transition-all"
    >
      <p className="font-bold text-2xl">Text</p>
      <p className="mt-4 text-2xl">Text</p>
      {isDone && (
        <div className="flex justify-end w-full">
          <p className="text-xl">34 Points</p>
        </div>
      )}
    </div>
  );
}
