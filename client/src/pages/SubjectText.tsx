import React from "react";
import { gql, useMutation } from "@apollo/client";
import Layout from "../components/Layout";
import { useParams } from "react-router-dom";

const GET_TEXT = gql`
  mutation GetTextById($textId: Int!) {
    getTextById(textId: $textId) {
      content
      id
      subjectId
      title
      description
    }
  }
`;

type TextData = {
  content: string;
  id: number;
  subjectId: number;
  title: string;
  description: string;
};

export default function SubjectText() {
  const textId = Number(useParams().tid);

  const [textData, setTextData] = React.useState<TextData>();
  const [getTextMutation] = useMutation(GET_TEXT);

  React.useEffect(() => {
    getTextMutation({ variables: { textId } })
      .then((res) => setTextData(res.data.getTextById))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Layout>
      <div>
        <h2 className="text-5xl font-bold text-neutral-200">
          {textData?.title}
        </h2>
        <p className="text-2xl text-neutral-400 mt-8">{textData?.content}</p>
      </div>
    </Layout>
  );
}
