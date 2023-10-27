import { useReducer, useState } from "react";
import logReducer from "./reducer/logReducer";

const LoginStatus = () => {
  const [user, dispatch] = useReducer(logReducer, "");

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
