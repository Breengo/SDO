export default function TaskBox() {
  const isTest = true;
  return (
    <div className="w-full border border-neutral-600 rounded-md mt-8 p-8 text-white text-xl cursor-pointer hover:bg-neutral-600 transition-all">
      <p className="font-bold text-2xl">Test</p>
      <p className="mt-4 text-2xl">Test description</p>
      {isTest && (
        <div className="flex justify-end w-full">
          <p className="text-xl">34 Points</p>
        </div>
      )}
    </div>
  );
}
