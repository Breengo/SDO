import { gql, useMutation } from "@apollo/client";
import React from "react";

export type UserData = {
  login: string;
  email: string;
  isStaff: boolean;
  group: string;
  id: number;
};

type Props = {
  userData: UserData;
};

const SET_GROUP = gql`
  mutation Mutation($group: String!, $uid: Int!) {
    setGroup(group: $group, uid: $uid)
  }
`;

export default function UserBox({ userData }: Props) {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [msg, setMsg] = React.useState("");

  const [createUserMutation] = useMutation(SET_GROUP);

  const handleSetGroup = () => {
    createUserMutation({
      variables: { group: inputRef.current?.value, uid: userData.id },
    })
      .then((result) => {
        setMsg(result.data.setGroup);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="w-full grid grid-cols-4  border border-neutral-600 text-neutral-300 text-xl rounded-md p-8 mt-8">
      <p className="m-auto">{userData.login}</p>
      <p className="m-auto">{userData.email}</p>
      <p className="m-auto">{userData.isStaff ? "Staff" : "User"}</p>
      <div className="flex flex-col mt-8">
        <input
          ref={inputRef}
          defaultValue={userData.group}
          className="m-auto bg-neutral-600 text-neutral-300 rounded-md w-24 text-center outline-none font-bold text-xl p-2"
        />
        <p className="m-auto">{msg}</p>
        <button
          onClick={handleSetGroup}
          className="m-auto mt-2 rounded-md border border-neutral-600 w-24 p hover:bg-neutral-600 transition-all"
        >
          Save
        </button>
      </div>
    </div>
  );
}
