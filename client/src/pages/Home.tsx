import SubjectBox from "../components/Home/SubjectBox";
import Layout from "../components/Layout";
import { gql } from "@apollo/client/core";
import { useQuery } from "@apollo/client/react";
import Loading from "../components/Loaging";
import { useAppSelector } from "../redux/store";

export type SubjectData = {
  id: number;
  title: string;
  description: string;
  userId: number;
  login: string;
  email: string;
  groups: string;
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
      groups
    }
  }
`;

export default function Home() {
  const { loading, error, data } = useQuery(GET_SUBJECTS);

  const userData = useAppSelector((state) => state.auth.userData);

  if (!data) return <Loading />;
  const subjects: SubjectData[] = data.subjects;
  return (
    <Layout>
      {subjects
        .filter(
          (subject) =>
            subject.groups
              .split(",")
              .find((value) => value === userData?.group) || userData?.isStaff
        )
        .map((subject, index) => (
          <SubjectBox data={subject} key={index} />
        ))}
    </Layout>
  );
}
