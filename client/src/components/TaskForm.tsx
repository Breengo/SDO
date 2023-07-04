export type QuestionsData = {
  text: string;
  rightAns: number;
  options: string[];
};

type Props = {
  index: number;
  formData: QuestionsData[];
  setQuestions: (formData: QuestionsData[]) => void;
};

export default function TaskForm({ index, formData, setQuestions }: Props) {
  return (
    <form className="border-2 border-neutral-600 rounded-md p-12 relative mt-8 w-full">
      <p className="absolute top-3 left-3 text-neutral-300 text-3xl font-mono">
        {index}
      </p>
      <input
        onChange={(e) =>
          setQuestions(
            formData.map((question, qindex) =>
              qindex === index - 1
                ? { ...question, text: e.target.value }
                : question
            )
          )
        }
        value={formData[index - 1].text}
        placeholder="Text"
        type="text"
        className="outline-none bg-neutral-600 rounded-md p-4 w-full text-2xl text-neutral-200"
      />
      <div className="mt-12 flex justify-between">
        {[1, 2, 3, 4].map((number) => (
          <input
            onChange={(e) =>
              setQuestions(
                formData.map((question, qindex) =>
                  qindex === index - 1
                    ? {
                        ...question,
                        options: question.options.map((qst, ind) =>
                          ind === number - 1 ? e.target.value : qst
                        ),
                      }
                    : question
                )
              )
            }
            key={number}
            value={formData[index - 1].options[number - 1]}
            placeholder={`Option ${number}`}
            type="text"
            className="outline-none bg-neutral-600 rounded-md p-4 text-2xl text-neutral-200"
          />
        ))}
      </div>
      <div className="flex justify-center">
        <input
          onChange={(e) =>
            setQuestions(
              formData.map((question, qindex) =>
                qindex === index - 1
                  ? { ...question, rightAns: Number(e.target.value) }
                  : question
              )
            )
          }
          value={formData[index - 1].rightAns}
          placeholder="Right option"
          type="text"
          className="outline-none bg-neutral-600 rounded-md p-4 text-2xl text-neutral-200 mt-12"
        />
      </div>
    </form>
  );
}
