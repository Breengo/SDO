import React from "react";
import Layout from "../components/Layout";
import UserBox, { UserData } from "../components/UserBox";
import { gql, useQuery } from "@apollo/client";
import Loading from "../components/Loaging";

const GET_USERS = gql`
  query Users {
    users {
      password
      login
      isStaff
      id
      email
      group
    }
  }
`;

export default function UsersGroups() {
  const { loading, error, data } = useQuery(GET_USERS);

  if (loading) return <Loading />;

  return (
    <Layout>
      <div className="w-full grid grid-cols-4  border border-neutral-600 text-neutral-300 text-xl rounded-md p-8 mt-8">
        <p className="m-auto">Login</p>
        <p className="m-auto">Email</p>
        <p className="m-auto">Staff</p>
        <p className="m-auto">Group</p>
      </div>
      {data.users?.map((userData: UserData) => (
        <UserBox key={userData.id} userData={userData} />
      ))}
    </Layout>
  );
}
