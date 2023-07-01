import React from "react";
import { gql, useMutation } from "@apollo/client";
import Layout from "../components/Layout";

const CREATE_USER = gql`
  mutation CreateUser($data: UserData) {
    createUser(data: $data) {
      user {
        id
        email
        login
        isStaff
      }
      token
    }
  }
`;

export default function StaffCreation() {
  const [formData, setFormData] = React.useState({
    login: "",
    email: "",
    password: "",
  });

  const [createUserMutation] = useMutation(CREATE_USER);

  const [msg, setMsg] = React.useState("");

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    createUserMutation({ variables: { data: { ...formData, isStaff: true } } })
      .then((result) => {
        setMsg(`User ${result.data.createUser.user.login} created`);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <Layout>
      <form className="flex flex-col items-center justify-center mt-96 w-fit m-auto">
        <input
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          placeholder="Email"
          className="outline-none bg-neutral-600 rounded-md p-4 w-72 text-center text-neutral-200 text-2xl shadow-md shadow-neutral-600"
          type="text"
        />
        <input
          value={formData.login}
          onChange={(e) => setFormData({ ...formData, login: e.target.value })}
          placeholder="Login"
          className="mt-8 outline-none bg-neutral-600 rounded-md p-4 w-72 text-center text-neutral-200 text-2xl shadow-md shadow-neutral-600"
          type="text"
        />
        <input
          value={formData.password}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
          placeholder="Password"
          className="mt-8 outline-none bg-neutral-600 rounded-md p-4 w-72 text-center text-neutral-200 text-2xl shadow-md shadow-neutral-600"
          type="text"
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
