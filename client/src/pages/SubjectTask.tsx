import React from "react";
import { gql, useMutation } from "@apollo/client";
import Layout from "../components/Layout";
import QuestionBox from "../components/Subject/QuestionBox";
import { useNavigate, useParams } from "react-router-dom";
import { TaskData } from "./Subject";
import { useAppSelector } from "../redux/store";

const GET_TASK = gql`
  mutation GetTaskById($taskId: Int) {
    getTaskById(taskId: $taskId) {
      description
      id
      questions
      subjectId
      title
    }
  }
`;

const CREATE_RESULT = gql`
  mutation Mutation($data: ResultData) {
    createResult(data: $data) {
      id
      taskId
      userId
      value
    }
  }
`;

const GET_USER_RESULT = gql`
  mutation Mutation($userId: Int, $taskId: Int) {
    getTaskUserResult(userId: $userId, taskId: $taskId) {
      taskId
      id
      userId
      value
    }
  }
`;

export default function SubjectTask() {
  const navigate = useNavigate();
  const sid = useParams().sid;
  const taskId = Number(useParams().tid);
  const [getTaskMutation] = useMutation(GET_TASK);
  const [createTaskMutation] = useMutation(CREATE_RESULT);
  const [getUserResult] = useMutation(GET_USER_RESULT);

  const userId = useAppSelector((state) => state.auth.userData?.id);

  const [points, setPoints] = React.useState([0]);
  const [taskData, setTaskData] = React.useState<TaskData>();

  React.useEffect(() => {
    getUserResult({ variables: { userId, taskId } })
      .then((res) =>
        res.data.getTaskUserResult ? navigate(`/subject/${sid}`) : ""
      )
      .catch();
    getTaskMutation({ variables: { taskId } })
      .then((res) =>
        setTaskData({
          ...res.data.getTaskById,
          questions: JSON.parse(res.data.getTaskById.questions),
        })
      )
      .catch((err) => console.log(err));
  }, []);

  const handleTestEnd = () => {
    if (taskData) {
      const value =
        (points.reduce((prev, acc) => acc + prev) /
          taskData?.questions.length) *
        100;

      createTaskMutation({ variables: { data: { taskId, userId, value } } })
        .then((res) => window.location.reload())
        .catch((err) => console.log(err));
    }
  };

  return (
    <Layout>
      <div>
        <h2 className="text-5xl font-bold text-neutral-200">
          {taskData?.title}
        </h2>
        <p className="mt-8 mb-8 text-2xl text-neutral-400">
          {taskData?.description}
        </p>
        {typeof taskData?.questions !== "string" &&
          taskData?.questions.map((question, index) => (
            <QuestionBox
              index={index}
              points={[...points]}
              setPoints={setPoints}
              data={question}
              key={index}
            />
          ))}

        <button
          onClick={handleTestEnd}
          className="w-full mt-8 rounded-md border border-neutral-600 p-4 text-neutral-300 hover:text-neutral-100 hover:bg-neutral-600 transition-all"
        >
          End test
        </button>
      </div>
    </Layout>
  );
}
