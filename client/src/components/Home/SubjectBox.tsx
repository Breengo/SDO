import { Link } from "react-router-dom";

export default function SubjectBox() {
  return (
    <Link
      to={`/subject/5`}
      className="flex flex-col text-neutral-300 text-3xl p-8 border-neutral-600 border rounded-md mt-8 cursor-pointer hover:bg-neutral-600 transition-all"
    >
      <p className="font-bold">Math Analys and Statistics</p>
      <p className="mt-4">
        <span className="font-bold">Teacher:</span> Soroka Beloboka
      </p>
    </Link>
  );
}
