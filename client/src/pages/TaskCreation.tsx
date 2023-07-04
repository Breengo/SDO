import React from "react";
import Layout from "../components/Layout";
import TaskForm from "../components/TaskForm";
import { gql, useMutation } from "@apollo/client";
import { useParams } from "react-router-dom";

const CREATE_TASK = gql`
  mutation Mutation($data: TaskData) {
    createTask(data: $data) {
      description
      questions
      id
      subjectId
      title
    }
  }
`;

export default function TaskCreation() {
  const subjectId = Number(useParams().sid);
  const [createTaskMutation] = useMutation(CREATE_TASK);

  const [formData, setFormData] = React.useState({
    description: "",
    title: "",
  });
  const [questions, setQuestions] = React.useState([
    { text: "", options: ["", "", "", ""], rightAns: 0 },
  ]);

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();

    createTaskMutation({
      variables: {
        data: {
          ...formData,
          questions: JSON.stringify(questions),
          subjectId,
        },
      },
    })
      .then((res) => window.location.reload())
      .catch((err) => console.log(err));
  };

  return (
    <Layout>
      <div className="flex flex-col items-center w-full">
        <input
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          placeholder="Title"
          type="text"
          className="outline-none bg-neutral-600 rounded-md p-4 w-full text-2xl text-neutral-200"
        />
        <input
          value={formData.description}
          onChange={(e) =>
            setFormData({ ...formData, description: e.target.value })
          }
          placeholder="Description"
          type="text"
          className="mt-8 outline-none bg-neutral-600 rounded-md p-4 w-full text-2xl text-neutral-200"
        />
        {questions.map((_, index) => (
          <TaskForm
            key={index}
            setQuestions={setQuestions}
            formData={questions}
            index={index + 1}
          />
        ))}
        <button
          onClick={() =>
            setQuestions([
              ...questions,
              { text: "", options: ["", "", "", ""], rightAns: 0 },
            ])
          }
          className="w-full mt-8 border-neutral-600 border rounded-md text-white text-2xl p-6 hover:bg-neutral-600 transition-all"
        >
          Add question
        </button>
        <button
          onClick={(e) => handleSubmit(e)}
          className="w-full mt-8 border-neutral-600 border rounded-md text-white text-2xl p-6 hover:bg-neutral-600 transition-all"
        >
          Create
        </button>
      </div>
    </Layout>
  );
}
