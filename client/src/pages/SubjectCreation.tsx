import React from "react";
import Layout from "../components/Layout";
import { gql, useMutation } from "@apollo/client";
import { useAppSelector } from "../redux/store";

const CREATE_SUBJECT = gql`
  mutation CreateSubject($data: SubjectData) {
    createSubject(data: $data) {
      description
      userId
      title
      id
    }
  }
`;

export default function SubjectCreation() {
  const descChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    e.target.style.height = "auto";
    e.target.style.height = `${e.target.scrollHeight + 5}px`;
  };

  const userId = useAppSelector((state) => state.auth.userData?.id);

  const [createSubjectMutation] = useMutation(CREATE_SUBJECT);

  const [formData, setFormData] = React.useState({
    title: "",
    description: "",
    groups: "",
  });

  const [msg, setMsg] = React.useState("");

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    createSubjectMutation({
      variables: { data: { ...formData, userId } },
    })
      .then((result) => {
        setMsg(`Subject ${result.data.createSubject.title} created`);
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
          placeholder="Subject"
          className="outline-none bg-neutral-600 rounded-md p-4 w-full text-center text-neutral-200 text-2xl shadow-md shadow-neutral-600"
          type="text"
        />
        <input
          value={formData.groups}
          onChange={(e) => {
            setFormData({ ...formData, groups: e.target.value });
          }}
          placeholder="Groups"
          className="mt-8 outline-none bg-neutral-600 rounded-md p-4 w-full text-center text-neutral-200 text-2xl shadow-md shadow-neutral-600"
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
