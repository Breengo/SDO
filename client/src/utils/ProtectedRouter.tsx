import { Navigate, Outlet } from "react-router-dom";
import Loading from "../components/Loaging";

interface IProtectedRoute {
  isAllowed: boolean;
  redirect?: string;
}

const ProtectedRoute: React.FC<IProtectedRoute> = ({ isAllowed, redirect }) => {
  if (isAllowed) {
    return <Outlet />;
  } else {
    if (redirect) {
      return <Navigate to={`${redirect}`} />;
    } else {
      return <Loading />;
    }
  }
};

export default ProtectedRoute;
