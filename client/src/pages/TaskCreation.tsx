import React from "react";
import Layout from "../components/Layout";
import TaskForm from "../components/TaskForm";

export default function TaskCreation() {
  const [forms, setForms] = React.useState([1, 1]);

  return (
    <Layout>
      <div className="flex flex-col items-center w-full">
        <input
          placeholder="Title"
          type="text"
          className="outline-none bg-neutral-600 rounded-md p-4 w-full text-2xl text-neutral-200"
        />
        <input
          placeholder="Description"
          type="text"
          className="mt-8 outline-none bg-neutral-600 rounded-md p-4 w-full text-2xl text-neutral-200"
        />
        {forms.map((_, index) => (
          <TaskForm index={index + 1} />
        ))}
        <button
          onClick={() => setForms([...forms, 1])}
          className="w-full mt-8 border-neutral-600 border rounded-md text-white text-2xl p-6 hover:bg-neutral-600 transition-all"
        >
          Add question
        </button>
        <button className="w-full mt-8 border-neutral-600 border rounded-md text-white text-2xl p-6 hover:bg-neutral-600 transition-all">
          Create
        </button>
      </div>
    </Layout>
  );
}
