import React from "react";
import Layout from "../components/Layout";
import { gql, useMutation } from "@apollo/client";

const CREATE_GROUP = gql`
  mutation Mutation($title: String!) {
    createGroup(title: $title) {
      title
      id
    }
  }
`;

export default function GroupCreation() {
  const [createUserMutation] = useMutation(CREATE_GROUP);

  const [title, setTitle] = React.useState("");
  const [msg, setMsg] = React.useState("");

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    createUserMutation({ variables: { title } })
      .then((result) => {
        setMsg(`Group ${result.data.createGroup.title} created`);
        setTitle("");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center mt-96 w-fit m-auto">
        <input
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Group"
          className="outline-none bg-neutral-600 rounded-md p-4 w-72 text-center text-neutral-200 text-2xl shadow-md shadow-neutral-600"
          type="text"
        />
        <p className="mt-4 text-neutral-400 text-2xl">{msg}</p>
        <button
          onClick={(e) => handleSubmit(e)}
          className="mt-8 text-3xl text-neutral-400 rounded-md border border-neutral-600 p-4 w-full hover:bg-neutral-600 hover:text-neutral-100 transition-all"
        >
          Create
        </button>
      </div>
    </Layout>
  );
}
