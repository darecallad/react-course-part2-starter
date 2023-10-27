interface LogIn {
  type: "LOGIN";
  username: string;
}

interface LogOut {
  type: "LOGOUT";
}

type LogAction = LogIn | LogOut;

const logReducer = (state: string, action: LogAction): string => {
  switch (action.type) {
    case "LOGIN":
      return action.username;
    case "LOGOUT":
      return "";
  }
};

export default logReducer;
