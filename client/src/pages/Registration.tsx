import { Link } from "react-router-dom";

export default function Registration() {
  return (
    <div className="bg-neutral-800 w-full h-screen flex flex-col items-center justify-center">
      <h1 className="text-5xl text-neutral-300 font-bold">Sign Up</h1>
      <form className="mt-12 flex flex-col items-center justify-center rounded-md ">
        <input
          placeholder="Login"
          className="text-3xl text-white rounded-md p-3 bg-neutral-600 outline-none shadow-sm shadow-neutral-600"
          type="text"
        />
        <input
          placeholder="Password"
          className="mt-6 text-3xl text-white rounded-md p-3 bg-neutral-600 outline-none shadow-sm shadow-neutral-600"
          type="password"
        />
        <input
          placeholder="Confirm password"
          className="mt-6 text-3xl text-white rounded-md p-3 bg-neutral-600 outline-none shadow-sm shadow-neutral-600"
          type="password"
        />
        <button className="mt-8 text-3xl text-neutral-400 border border-neutral-600 py-3 w-full rounded-md shadow-sm shadow-neutral-600 hover:bg-neutral-600 transition-all hover:text-neutral-200">
          Sign Up
        </button>
      </form>
      <Link
        to="/auth"
        className="mt-8 text-neutral-400 text-xl hover:scale-105 transition-all"
      >
        Login In
      </Link>
    </div>
  );
}
