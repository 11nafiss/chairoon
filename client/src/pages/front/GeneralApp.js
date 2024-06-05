import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const GeneralApp = () => {
  const { isLoggedIn } = useSelector((state) => state.auth);

  if (!isLoggedIn) {
    return <Navigate to={"/login"} />;
  }

  if(isLoggedIn) {
    return <Navigate to={"/home"} />;
  }

  return <>App</>;
};

export default GeneralApp;
