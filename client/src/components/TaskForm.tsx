type Props = {
  index: number;
};

export default function TaskForm({ index }: Props) {
  return (
    <form className="border-2 border-neutral-600 rounded-md p-12 relative mt-8 w-full">
      <p className="absolute top-3 left-3 text-neutral-300 text-3xl font-mono">
        {index}
      </p>
      <input
        placeholder="Text"
        type="text"
        className="outline-none bg-neutral-600 rounded-md p-4 w-full text-2xl text-neutral-200"
      />
      <div className="mt-12 flex justify-between">
        <input
          placeholder="Option 1"
          type="text"
          className="outline-none bg-neutral-600 rounded-md p-4 text-2xl text-neutral-200"
        />
        <input
          placeholder="Option 2"
          type="text"
          className="outline-none bg-neutral-600 rounded-md p-4 text-2xl text-neutral-200"
        />
        <input
          placeholder="Option 3"
          type="text"
          className="outline-none bg-neutral-600 rounded-md p-4 text-2xl text-neutral-200"
        />
        <input
          placeholder="Option 4"
          type="text"
          className="outline-none bg-neutral-600 rounded-md p-4 text-2xl text-neutral-200"
        />
      </div>
      <div className="flex justify-center">
        <input
          placeholder="Right option"
          type="text"
          className="outline-none bg-neutral-600 rounded-md p-4 text-2xl text-neutral-200 mt-12"
        />
      </div>
    </form>
  );
}
