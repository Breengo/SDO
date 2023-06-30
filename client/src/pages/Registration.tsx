import React from "react";
import { Link } from "react-router-dom";
import { gql, useMutation } from "@apollo/client";

const CREATE_USER = gql`
  mutation CreateUser($data: UserData) {
    createUser(data: $data) {
      email
      password
      login
      isStaff
    }
  }
`;

export default function Registration() {
  const [unvalid, setUnvalid] = React.useState("");
  const [formData, setFormData] = React.useState({
    login: "",
    email: "",
    password: "",
    confPass: "",
  });

  const [createUserMutation] = useMutation(CREATE_USER);

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    setUnvalid("");
    if (formData.confPass !== formData.password) {
      setUnvalid("Password mismatch");
    }

    const { confPass, ...sendData } = formData;

    createUserMutation({ variables: { data: { ...sendData, isStaff: false } } })
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="bg-neutral-800 w-full h-screen flex flex-col items-center justify-center">
      <h1 className="text-5xl text-neutral-300 font-bold">Sign Up</h1>
      <form className="mt-12 flex flex-col items-center justify-center rounded-md ">
        <input
          value={formData.login}
          onChange={(e) => setFormData({ ...formData, login: e.target.value })}
          placeholder="Login"
          className="text-3xl text-white rounded-md p-3 bg-neutral-600 outline-none shadow-sm shadow-neutral-600"
          type="text"
        />
        <input
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          placeholder="Email"
          className="mt-6 text-3xl text-white rounded-md p-3 bg-neutral-600 outline-none shadow-sm shadow-neutral-600"
          type="text"
        />
        <input
          value={formData.password}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
          placeholder="Password"
          className="mt-6 text-3xl text-white rounded-md p-3 bg-neutral-600 outline-none shadow-sm shadow-neutral-600"
          type="password"
        />
        <input
          value={formData.confPass}
          onChange={(e) =>
            setFormData({ ...formData, confPass: e.target.value })
          }
          placeholder="Confirm password"
          className="mt-6 text-3xl text-white rounded-md p-3 bg-neutral-600 outline-none shadow-sm shadow-neutral-600"
          type="password"
        />
        <p className="mt-8 text-red-400 text-xl">{unvalid}</p>
        <button
          onClick={(e) => handleSubmit(e)}
          className="mt-8 text-3xl text-neutral-400 border border-neutral-600 py-3 w-full rounded-md shadow-sm shadow-neutral-600 hover:bg-neutral-600 transition-all hover:text-neutral-200"
        >
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
