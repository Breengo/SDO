import Layout from "../components/Layout";

export default function StaffCreation() {
  return (
    <Layout>
      <form className="flex flex-col items-center justify-center mt-96 w-fit m-auto">
        <input
          placeholder="Email"
          className="outline-none bg-neutral-600 rounded-md p-4 w-72 text-center text-neutral-200 text-2xl shadow-md shadow-neutral-600"
          type="text"
        />
        <input
          placeholder="Login"
          className="mt-8 outline-none bg-neutral-600 rounded-md p-4 w-72 text-center text-neutral-200 text-2xl shadow-md shadow-neutral-600"
          type="text"
        />
        <input
          placeholder="Password"
          className="mt-8 outline-none bg-neutral-600 rounded-md p-4 w-72 text-center text-neutral-200 text-2xl shadow-md shadow-neutral-600"
          type="text"
        />
        <button className="mt-8 text-3xl text-neutral-400 rounded-md border border-neutral-600 p-4 w-full hover:bg-neutral-600 hover:text-neutral-100 transition-all">
          Create
        </button>
      </form>
    </Layout>
  );
}