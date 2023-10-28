import { useContext } from "react";
import logContext from "./logContext";

const useLog = () => useContext(logContext);

const LoginStatus = () => {
  const { user, dispatch } = useLog();
  if (user)
    return (
      <>
        <div>
          <span className="mx-2">{user}</span>
          <a onClick={() => dispatch({ type: "LOGOUT" })} href="#">
            Logout
          </a>
        </div>
      </>
    );
  return (
    <div>
      <a
        onClick={() => dispatch({ type: "LOGIN", username: " JOHN" })}
        href="#"
      >
        Login
      </a>
    </div>
  );
};

export default LoginStatus;
