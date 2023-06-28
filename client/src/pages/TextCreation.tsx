import Layout from "../components/Layout";

export default function TextCreation() {
  const descChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    e.target.style.height = "auto";
    e.target.style.height = `${e.target.scrollHeight + 5}px`;
  };
  return (
    <Layout>
      <form className="flex flex-col items-center justify-center mt-96 w-full m-auto">
        <input
          placeholder="Title"
          className="outline-none bg-neutral-600 rounded-md p-4 w-full text-center text-neutral-200 text-2xl shadow-md shadow-neutral-600"
          type="text"
        />
        <textarea
          onChange={(e) => descChange(e)}
          placeholder="Description"
          className="mt-8 w-full resize-none outline-none bg-neutral-600 rounded-md p-4 text-neutral-200 text-xl shadow-md shadow-neutral-600"
        />
        <button className="mt-8 text-3xl text-neutral-400 rounded-md border border-neutral-600 p-4 w-full hover:bg-neutral-600 hover:text-neutral-100 transition-all">
          Create
        </button>
      </form>
    </Layout>
  );
}
