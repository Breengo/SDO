import React from "react";
import { Link } from "react-router-dom";
import { gql, useMutation } from "@apollo/client";
import { useAppDispatch } from "../redux/store";
import { login } from "../redux/slices/auth";

const LOGIN = gql`
  mutation Login($login: String!, $password: String!) {
    login(login: $login, password: $password) {
      user {
        id
        email
        login
        isStaff
        group
      }
      token
    }
  }
`;

export default function Auth() {
  const dispatch = useAppDispatch();

  const [formData, setFormData] = React.useState({
    login: "",
    password: "",
  });

  const [createUserMutation] = useMutation(LOGIN);

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();

    createUserMutation({
      variables: { login: formData.login, password: formData.password },
    })
      .then((result) => {
        if (result.data.login.user.id) {
          const data = result.data.login;
          window.localStorage.setItem("token", data.token);
          dispatch(login(data.user));
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="bg-neutral-800 w-full h-screen flex flex-col items-center justify-center">
      <h1 className="text-5xl text-neutral-300 font-bold">Login In</h1>
      <form className="mt-12 flex flex-col items-center justify-center rounded-md ">
        <input
          value={formData.login}
          onChange={(e) => setFormData({ ...formData, login: e.target.value })}
          placeholder="Login"
          className="text-3xl text-white rounded-md p-3 bg-neutral-600 outline-none shadow-sm shadow-neutral-600"
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

        <button
          onClick={(e) => handleSubmit(e)}
          className="mt-8 text-3xl text-neutral-400 border border-neutral-600 py-3 w-full rounded-md shadow-sm shadow-neutral-600 hover:bg-neutral-600 transition-all hover:text-neutral-200"
        >
          Login
        </button>
      </form>
      <Link
        to="/reg"
        className="mt-8 text-neutral-400 text-xl hover:scale-105 transition-all"
      >
        Sign Up
      </Link>
    </div>
  );
}
