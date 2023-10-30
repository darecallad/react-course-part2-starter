import React from "react";
import UserDetail from "./UserDetail";
import { Outlet } from "react-router-dom";
import UserList from "./UserList";

const User = () => {
  return (
    <div className="row">
      <div className="col">
        <UserList />
      </div>
      <div className="col">
        <Outlet />
      </div>
    </div>
  );
};

export default User;
