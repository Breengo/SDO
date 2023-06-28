import { Routes, Route } from "react-router-dom";
import Auth from "./pages/Auth";
import Registration from "./pages/Registration";
import Home from "./pages/Home";
import Subject from "./pages/Subject";
import GroupCreation from "./pages/GroupCreation";
import StaffCreation from "./pages/StaffCreation";
import SubjectCreation from "./pages/SubjectCreation";
import TaskCreation from "./pages/TaskCreation";
import TextCreation from "./pages/TextCreation";
import SubjectResults from "./pages/SubjectResults";
import SubjectTask from "./pages/SubjectTask";
import SubjectText from "./pages/SubjectText";

function App() {
  return (
    <>
      <Routes>
        <Route path="/auth" element={<Auth />} />
        <Route path="/reg" element={<Registration />} />
        <Route path="/" element={<Home />} />
        <Route path="/subject/:sid" element={<Subject />} />

        <Route path="/subject/:sid/task/:tid" element={<SubjectTask />} />
        <Route path="/subject/:sid/text/:tid" element={<SubjectText />} />

        <Route path="/subject/:sid/results" element={<SubjectResults />} />

        <Route path="/subject/create" element={<SubjectCreation />} />
        <Route path="/group/create" element={<GroupCreation />} />
        <Route path="/staff/create" element={<StaffCreation />} />
        <Route path="/task/create/:sid" element={<TaskCreation />} />
        <Route path="/text/create/:sid" element={<TextCreation />} />
      </Routes>
    </>
  );
}

export default App;
