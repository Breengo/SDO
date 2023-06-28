import React from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import TaskBox from "../components/Subject/TaskBox";
import TextBox from "../components/Subject/TextBox";

export default function Subject() {
  const [add, setAdd] = React.useState(false);

  return (
    <Layout>
      <div className="border-neutral-600 border-2 p-8 rounded-md relative">
        <h1 className="text-5xl text-white uppercase">Subject</h1>
        <p className="text-neutral-200 mt-8 text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
          qui, pariatur obcaecati sunt labore perspiciatis dolorem, voluptatibus
          non aut neque quas adipisci! Reprehenderit accusantium, mollitia
          eligendi placeat eveniet molestiae. Facere natus eos dolor, eveniet
          hic aspernatur nulla. Consequatur neque quas deserunt repellat
          adipisci magni odit asperiores inventore ipsa molestiae. Tempore.
        </p>
        <div className="flex justify-end mt-8">
          <p className="text-white text-2xl">
            <span className="text-white font-bold">Teacher:</span> Soroka
            Beloboka
          </p>
        </div>
        <Link
          className="absolute top-0 right-0 text-neutral-300 text-xl border-b border-l border-neutral-600 pr-4 pt-2 pb-2 pl-2 rounded-bl-md hover:bg-neutral-600 hover:text-neutral-100 transition-all"
          to={`/subject/5/results`}
        >
          Results
        </Link>
      </div>

      <TaskBox />
      <TaskBox />
      <TextBox />
      <TextBox />
      <TextBox />
      <TaskBox />
      <TaskBox />

      <div
        onClick={() => (add ? "" : setAdd(true))}
        className={`flex flex-col items-center justify-center w-full border border-neutral-600 rounded-md mt-8 text-white text-xl transition-all ${
          add ? "" : "cursor-pointer hover:bg-neutral-600"
        }`}
      >
        {!add && <p className="font-bold text-2xl p-8">Add</p>}
        {add && (
          <>
            <Link
              to={`/task/create/5`}
              className="font-bold text-2xl flex items-center justify-center w-full text-center border-neutral-600 border-b p-8 cursor-pointer hover:bg-neutral-600 transition-all"
            >
              Test
            </Link>
            <Link
              to={`/text/create/5`}
              className="font-bold text-2xl flex items-center justify-center w-full text-center p-8 cursor-pointer hover:bg-neutral-600 transition-all"
            >
              Text
            </Link>
          </>
        )}
      </div>
    </Layout>
  );
}
