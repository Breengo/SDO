import SubjectBox from "../components/Home/SubjectBox";
import Layout from "../components/Layout";
import { gql } from "@apollo/client/core";
import { useQuery } from "@apollo/client/react";
import Loading from "../components/Loaging";

export type SubjectData = {
  id: number;
  title: string;
  description: string;
  userId: number;
  login: string;
  email: string;
};

const GET_SUBJECTS = gql`
  query Query {
    subjects {
      description
      id
      title
      userId
      login
      email
    }
  }
`;

export default function Home() {
  const { loading, error, data } = useQuery(GET_SUBJECTS);

  if (!data) return <Loading />;
  const subjects: SubjectData[] = data.subjects;
  return (
    <Layout>
      {subjects.map((subject, index) => (
        <SubjectBox data={subject} key={index} />
      ))}
    </Layout>
  );
}
