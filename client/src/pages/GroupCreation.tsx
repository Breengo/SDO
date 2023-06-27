import Layout from "../components/Layout";

export default function GroupCreation() {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center mt-96 w-fit m-auto">
        <input
          placeholder="Group"
          className="outline-none bg-neutral-600 rounded-md p-4 w-72 text-center text-neutral-200 text-2xl shadow-md shadow-neutral-600"
          type="text"
        />
        <button className="mt-8 text-3xl text-neutral-400 rounded-md border border-neutral-600 p-4 w-full hover:bg-neutral-600 hover:text-neutral-100 transition-all">
          Create
        </button>
      </div>
    </Layout>
  );
}
