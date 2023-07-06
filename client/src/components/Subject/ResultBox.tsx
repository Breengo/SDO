import { ResultData } from "../../pages/SubjectResults";

type Props = {
  data: ResultData;
};

export default function ResultBox({ data }: Props) {
  return (
    <div className="flex items-center text-neutral-300 text-3xl p-8 border-neutral-600 border rounded-md mt-8">
      <p className="font-bold">{data.user.login}:</p>
      <p className="ml-8">{data.value} points</p>
    </div>
  );
}
