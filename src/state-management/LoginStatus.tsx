import { useContext } from "react";
import logContext from "./contexts/logContext";

const LoginStatus = () => {
  const { user, dispatch } = useContext(logContext);
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
