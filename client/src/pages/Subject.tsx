import React from "react";
import Layout from "../components/Layout";
import TaskBox from "../components/Subject/TaskBox";

export default function Subject() {
  const [add, setAdd] = React.useState(false);

  return (
    <Layout>
      <div className="border-neutral-600 border-2 p-8 rounded-md">
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
      </div>

      <TaskBox />
      <TaskBox />
      <TaskBox />
      <TaskBox />
      <TaskBox />
      <TaskBox />
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
            <p className="font-bold text-2xl flex items-center justify-center w-full text-center border-neutral-600 border-b p-8 cursor-pointer hover:bg-neutral-600 transition-all">
              Test
            </p>
            <p className="font-bold text-2xl flex items-center justify-center w-full text-center p-8 cursor-pointer hover:bg-neutral-600 transition-all">
              Text
            </p>
          </>
        )}
      </div>
    </Layout>
  );
}
