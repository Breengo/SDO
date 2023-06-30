import SubjectBox from "../components/Home/SubjectBox";
import Layout from "../components/Layout";
import { gql } from "@apollo/client/core";
import { useQuery } from "@apollo/client/react";

const GET_SUBJECTS = gql`
  query Query {
    subjects {
      description
      userId
      title
      id
    }
  }
`;

export default function Home() {
  const { loading, error, data } = useQuery(GET_SUBJECTS);
  console.log(data);

  return (
    <Layout>
      <SubjectBox />
      <SubjectBox />
      <SubjectBox />
      <SubjectBox />
      <SubjectBox />
      <SubjectBox />
      <SubjectBox />
      <SubjectBox />
      <SubjectBox />
      <SubjectBox />
      <SubjectBox />
      <SubjectBox />
      <SubjectBox />
      <SubjectBox />
      <SubjectBox />
      <SubjectBox />
      <SubjectBox />
      <SubjectBox />
      <SubjectBox />
      <SubjectBox />
    </Layout>
  );
}
