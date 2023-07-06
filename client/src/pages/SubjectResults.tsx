import React from "react";
import { gql, useMutation } from "@apollo/client";
import Layout from "../components/Layout";
import ResultBox from "../components/Subject/ResultBox";
import { useParams } from "react-router-dom";
import { UserData } from "../components/UserBox";

export type ResultData = {
  value: number;
  userId: number;
  taskId: number;
  id: number;
  user: UserData;
};

const GET_RESULTS = gql`
  mutation Mutation($taskId: Int) {
    getTaskResults(taskId: $taskId) {
      value
      userId
      taskId
      id
      user {
        email
        group
        id
        isStaff
        login
      }
    }
  }
`;

export default function SubjectResults() {
  const taskId = Number(useParams().tid);
  const [getResultsMutation] = useMutation(GET_RESULTS);

  const [results, setResults] = React.useState<ResultData[]>([]);

  React.useEffect(() => {
    getResultsMutation({ variables: { taskId } })
      .then((res) => setResults(res.data.getTaskResults))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Layout>
      <div>
        {results.map((result) => (
          <ResultBox data={result} key={result.id} />
        ))}
      </div>
    </Layout>
  );
}
