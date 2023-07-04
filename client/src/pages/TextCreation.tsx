import React from "react";
import Layout from "../components/Layout";
import { gql, useMutation } from "@apollo/client";
import { useParams } from "react-router-dom";

const CREATE_TEXT = gql`
  mutation Mutation($data: TextData) {
    createText(data: $data) {
      description
      id
      subjectId
      title
    }
  }
`;

export default function TextCreation() {
  const subjectId = Number(useParams().sid);

  const [createTextMutation] = useMutation(CREATE_TEXT);

  const [msg, setMsg] = React.useState("");
  const [formData, setFormData] = React.useState({
    title: "",
    description: "",
    content: "",
  });

  const descChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    e.target.style.height = "auto";
    e.target.style.height = `${e.target.scrollHeight + 5}px`;
  };

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    createTextMutation({
      variables: { data: { ...formData, subjectId } },
    })
      .then((result) => {
        setMsg(`Text ${result.data.createText.title} created`);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <Layout>
      <form className="flex flex-col items-center justify-center mt-96 w-full m-auto">
        <input
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          placeholder="Title"
          className="outline-none bg-neutral-600 rounded-md p-4 w-full text-center text-neutral-200 text-2xl shadow-md shadow-neutral-600"
          type="text"
        />
        <textarea
          value={formData.description}
          onChange={(e) => {
            descChange(e);
            setFormData({ ...formData, description: e.target.value });
          }}
          placeholder="Description"
          className="mt-8 w-full resize-none outline-none bg-neutral-600 rounded-md p-4 text-neutral-200 text-xl shadow-md shadow-neutral-600"
        />
        <textarea
          value={formData.content}
          onChange={(e) => {
            descChange(e);
            setFormData({ ...formData, content: e.target.value });
          }}
          placeholder="Content"
          className="mt-8 w-full resize-none outline-none bg-neutral-600 rounded-md p-4 text-neutral-200 text-xl shadow-md shadow-neutral-600"
        />
        <p className="mt-4 text-neutral-400 text-2xl">{msg}</p>
        <button
          onClick={(e) => handleSubmit(e)}
          className="mt-8 text-3xl text-neutral-400 rounded-md border border-neutral-600 p-4 w-full hover:bg-neutral-600 hover:text-neutral-100 transition-all"
        >
          Create
        </button>
      </form>
    </Layout>
  );
}
