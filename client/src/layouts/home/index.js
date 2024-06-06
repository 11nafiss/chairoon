import React, { useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import NavbarHome from "./NavbarHome";
import { Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  FetchUserMe,
  showSnackbar,
} from "../../redux/slices/app";
import { socket, connectSocket } from "../../socket";

const LayoutHome = () => {
  const dispatch = useDispatch();
  const { user_id } = useSelector((state) => state.auth);
  const { isLoggedIn } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(FetchUserMe());
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (isLoggedIn) {
      window.onload = function () {
        if (!window.location.hash) {
          window.location = window.location + "#loaded";
          window.location.reload();
        }
      };

      window.onload();

      if (!socket) {
        connectSocket(user_id);
      }


      socket.on("new_friend_request", (data) => {
        dispatch(
          showSnackbar({
            severity: "success",
            message: "New friend request received",
          })
        );
      });

      socket.on("request_accepted", (data) => {
        dispatch(
          showSnackbar({
            severity: "success",
            message: "Friend Request Accepted",
          })
        );
      });

      socket.on("request_sent", (data) => {
        dispatch(showSnackbar({ severity: "success", message: data.message }));
      });
    }

    // Remove event listener on component unmount
    return () => {
      socket?.off("new_friend_request");
      socket?.off("request_accepted");
      socket?.off("request_sent");
      socket?.off("start_chat");
      socket?.off("new_message");
      socket?.off("audio_call_notification");
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  if (!isLoggedIn) {
    return <Navigate to={"/login"} />;
  }

  return (
    <>
      <Box
        sx={{
          backgroundColor: "#CECECF",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "100dvh",
          width: "100dvw",
          overflow: "hidden",
        }}
      >
        <NavbarHome />
        <Outlet />
      </Box>
    </>
  );
};

export default LayoutHome;
