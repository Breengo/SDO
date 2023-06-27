import React from "react";
import Layout from "../components/Layout";
import TaskForm from "../components/TaskForm";

export default function TaskCreation() {
  const [forms, setForms] = React.useState([1, 1]);

  return (
    <Layout>
      <div className="flex flex-col items-center w-full">
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
