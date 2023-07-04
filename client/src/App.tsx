import React from "react";
import { Routes, Route } from "react-router-dom";
import Auth from "./pages/Auth";
import Registration from "./pages/Registration";
import Home from "./pages/Home";
import Subject from "./pages/Subject";
import StaffCreation from "./pages/StaffCreation";
import SubjectCreation from "./pages/SubjectCreation";
import TaskCreation from "./pages/TaskCreation";
import TextCreation from "./pages/TextCreation";
import SubjectResults from "./pages/SubjectResults";
import SubjectTask from "./pages/SubjectTask";
import SubjectText from "./pages/SubjectText";
import ProtectedRoute from "./utils/ProtectedRouter";
import { useAppDispatch, useAppSelector } from "./redux/store";
import { gql, useMutation } from "@apollo/client";
import { login } from "./redux/slices/auth";
import UserGroup from "./pages/UsersGroups";

const AUTH = gql`
  mutation Check($token: String!) {
    check(token: $token) {
      id
      email
      login
      isStaff
      group
    }
  }
`;

function App() {
  const dispatch = useAppDispatch();

  const [createUserMutation] = useMutation(AUTH);

  const isAuth = useAppSelector((state) => state.auth.isAuth);

  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const token = window.localStorage.getItem("token");
    if (token) {
      createUserMutation({
        variables: { token },
      })
        .then((result) => {
          if (result.data && result.data.check) {
            dispatch(login(result.data.check));
          }
          setLoading(false);
        })
        .catch((error) => {
          setLoading(false);
          console.error(error);
        });
    } else {
      setLoading(false);
    }
  }, []);

  return (
    <>
      <Routes>
        <Route element={<ProtectedRoute isAllowed={!loading} />}>
          <Route element={<ProtectedRoute isAllowed={!isAuth} redirect="/" />}>
            <Route path="/auth" element={<Auth />} />
            <Route path="/reg" element={<Registration />} />
          </Route>

          <Route
            element={<ProtectedRoute isAllowed={isAuth} redirect="/auth" />}
          >
            <Route path="/" element={<Home />} />
            <Route path="/subject/:sid" element={<Subject />} />

            <Route path="/subject/:sid/task/:tid" element={<SubjectTask />} />
            <Route path="/subject/:sid/text/:tid" element={<SubjectText />} />

            <Route path="/subject/:sid/results" element={<SubjectResults />} />

            <Route path="/subject/create" element={<SubjectCreation />} />
            <Route path="/staff/create" element={<StaffCreation />} />
            <Route path="/task/create/:sid" element={<TaskCreation />} />
            <Route path="/text/create/:sid" element={<TextCreation />} />
            <Route path="/users/groups" element={<UserGroup />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
