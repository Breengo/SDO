import { Routes, Route } from "react-router-dom";
import Auth from "./pages/Auth";
import Registration from "./pages/Registration";
import Home from "./pages/Home";
import Subject from "./pages/Subject";
import GroupCreation from "./pages/GroupCreation";
import StaffCreation from "./pages/StaffCreation";
import SubjectCreation from "./pages/SubjectCreation";

function App() {
  return (
    <>
      <Routes>
        <Route path="/auth" element={<Auth />} />
        <Route path="/reg" element={<Registration />} />
        <Route path="/" element={<Home />} />
        <Route path="/subject" element={<Subject />} />

        <Route path="/subject/create" element={<SubjectCreation />} />
        <Route path="/group/create" element={<GroupCreation />} />
        <Route path="/staff/create" element={<StaffCreation />} />
      </Routes>
    </>
  );
}

export default App;
