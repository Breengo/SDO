import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../redux/store";
import { logout } from "../redux/slices/auth";

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  const dispatch = useAppDispatch();

  const userData = useAppSelector((state) => state.auth.userData);

  const handleLogout = () => {
    window.localStorage.removeItem("token");
    dispatch(logout());
  };

  return (
    <div className="bg-neutral-800 w-full min-h-screen flex justify-center pb-20 pt-40">
      <div className="w-1/2">
        <nav className="w-full flex items-center justify-between text-neutral-400 text-xl mb-12">
          <div className="flex gap-8">
            <Link
              to="/"
              className="border-2 border-neutral-600 p-2 rounded-md hover:bg-neutral-600 transition-all hover:text-neutral-100 shadow-md shadow-neutral-600"
            >
              Home
            </Link>
            {userData?.isStaff && (
              <>
                <Link
                  to="/subject/create"
                  className="border-2 border-neutral-600 p-2 rounded-md hover:bg-neutral-600 transition-all hover:text-neutral-100 shadow-md shadow-neutral-600"
                >
                  Create subject
                </Link>
                <Link
                  to="/staff/create"
                  className="border-2 border-neutral-600 p-2 rounded-md hover:bg-neutral-600 transition-all hover:text-neutral-100 shadow-md shadow-neutral-600"
                >
                  Create staff
                </Link>
                <Link
                  to="/users/groups"
                  className="border-2 border-neutral-600 p-2 rounded-md hover:bg-neutral-600 transition-all hover:text-neutral-100 shadow-md shadow-neutral-600"
                >
                  Users groups
                </Link>
              </>
            )}
          </div>
          <div className="flex gap-8 items-center">
            <p className="font-bold text-neutral-100 text-2xl font-mono">
              {userData?.login}
            </p>
            <button
              onClick={handleLogout}
              className="border-2 border-neutral-600 p-2 rounded-md hover:bg-neutral-600 transition-all hover:text-neutral-100 shadow-md shadow-neutral-600"
            >
              Logout
            </button>
          </div>
        </nav>
        {children}
      </div>
    </div>
  );
}
