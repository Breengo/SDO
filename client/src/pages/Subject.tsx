import React from "react";
import { Link, useParams } from "react-router-dom";
import Layout from "../components/Layout";
import TaskBox from "../components/Subject/TaskBox";
import TextBox from "../components/Subject/TextBox";
import { gql, useMutation } from "@apollo/client";
import { SubjectData } from "./Home";
import Loading from "../components/Loaging";
import { QuestionsData } from "../components/TaskForm";
import { useAppSelector } from "../redux/store";

export type TextData = {
  description: string;
  id: number;
  subjectId: number;
  title: string;
};

export type TaskData = {
  description: string;
  id: number;
  questions: QuestionsData[] | string;
  title: string;
  subjectId: number;
  result: number | null;
};

const GET_SUBJECT_DATA = gql`
  mutation Mutation($id: Int!) {
    getSubjectById(id: $id) {
      description
      email
      id
      login
      title
      userId
    }
  }
`;

const GET_TEXTS = gql`
  mutation Mutation($subjectId: Int!) {
    getSubjectTexts(subjectId: $subjectId) {
      description
      id
      subjectId
      title
    }
  }
`;

const GET_TASKS = gql`
  mutation Mutation($subjectId: Int, $userId: Int) {
    getSubjectTasks(subjectId: $subjectId, userId: $userId) {
      description
      id
      questions
      subjectId
      title
      result
    }
  }
`;

export default function Subject() {
  const [add, setAdd] = React.useState(false);
  const [subjectData, setSubjectData] = React.useState<SubjectData>();
  const [texts, setTexts] = React.useState<TextData[]>();
  const [tasks, setTasks] = React.useState<TaskData[]>();
  const [loading, setLoading] = React.useState(true);
  const sid = useParams().sid;
  const userData = useAppSelector((state) => state.auth.userData);

  const [getSubjectDataMutation] = useMutation(GET_SUBJECT_DATA);
  const [getTextsMutation] = useMutation(GET_TEXTS);
  const [getTasksMutation] = useMutation(GET_TASKS);

  React.useEffect(() => {
    getSubjectDataMutation({ variables: { id: Number(sid) } })
      .then((result) => {
        setSubjectData(result.data.getSubjectById);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });

    getTextsMutation({ variables: { subjectId: Number(sid) } })
      .then((result) => {
        setTexts(result.data.getSubjectTexts);
      })
      .catch((error) => {
        console.error(error);
      });

    getTasksMutation({
      variables: { subjectId: Number(sid), userId: userData?.id },
    })
      .then((result) => {
        setTasks(
          result.data.getSubjectTasks.map((task: TaskData) => {
            return {
              ...task,
              questions:
                typeof task.questions === "string"
                  ? JSON.parse(task.questions)
                  : task.questions,
            };
          })
        );
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  if (loading) return <Loading />;

  return (
    <Layout>
      <div className="border-neutral-600 border-2 p-8 rounded-md relative">
        <h1 className="text-5xl text-white uppercase">{subjectData?.title}</h1>
        <p className="text-neutral-200 mt-8 text-xl">
          {subjectData?.description}
        </p>
        <div className="flex justify-end mt-8">
          <p className="text-white text-2xl">
            <span className="text-white font-bold">Teacher:</span>{" "}
            {subjectData?.login}
          </p>
        </div>
      </div>

      {texts && texts.map((text) => <TextBox textData={text} key={text.id} />)}
      {tasks && tasks.map((task) => <TaskBox data={task} key={task.id} />)}
      {userData?.isStaff && (
        <div
          onClick={() => (add ? "" : setAdd(true))}
          className={`flex flex-col items-center justify-center w-full border border-neutral-600 rounded-md mt-8 text-white text-xl transition-all ${
            add ? "" : "cursor-pointer hover:bg-neutral-600"
          }`}
        >
          {!add && <p className="font-bold text-2xl p-8">Add</p>}
          {add && (
            <>
              <Link
                to={`/task/create/${sid}`}
                className="font-bold text-2xl flex items-center justify-center w-full text-center border-neutral-600 border-b p-8 cursor-pointer hover:bg-neutral-600 transition-all"
              >
                Test
              </Link>
              <Link
                to={`/text/create/${sid}`}
                className="font-bold text-2xl flex items-center justify-center w-full text-center p-8 cursor-pointer hover:bg-neutral-600 transition-all"
              >
                Text
              </Link>
            </>
          )}
        </div>
      )}
    </Layout>
  );
}
