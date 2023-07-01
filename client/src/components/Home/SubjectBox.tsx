import { SubjectData } from "../../pages/Home";
import { Link } from "react-router-dom";

type Props = {
  data: SubjectData;
};

export default function SubjectBox({ data }: Props) {
  return (
    <Link
      to={`/subject/5`}
      className="flex flex-col text-neutral-300 text-3xl p-8 border-neutral-600 shadow-md shadow-neutral-600 border rounded-md mt-8 cursor-pointer hover:bg-neutral-600 transition-all"
    >
      <p className="font-bold">{data.title}</p>
      <p className="mt-4">
        <span className="font-bold">Teacher:</span> {data.login}
      </p>
    </Link>
  );
}
