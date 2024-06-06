import { createSlice } from "@reduxjs/toolkit";
import axios from "../../utils/axios";
// import { v4 } from "uuid";
// import S3 from "../../utils/s3";
// import { S3_BUCKET_NAME } from "../../config";
// ----------------------------------------------------------------------

const initialState = {
  currentUser: {},
  user: {},
  job: {},
  applyJob: {},
  sideBar: {
    open: false,
    type: "CONTACT", // can be CONTACT, STARRED, SHARED
  },
  isLoggedIn: true,
  tab: 0, // [0, 1, 2, 3]
  snackbar: {
    open: null,
    severity: null,
    message: null,
  },
  users: [], // all users of app who are not friends and not requested yet
  allUsers: [],
  myJobs: [],
  allJobs: [],
  myApplieds: [],
  userApplieds: [],
  friends: [], // all friends
  friendRequests: [], // all friend requests
  chat_type: null,
  room_id: null,
  call_logs: [],
};

const slice = createSlice({
  name: "app",
  initialState,
  reducers: {
    fetchCallLogs(state, action) {
      state.call_logs = action.payload.call_logs;
    },
    fetchCurrentUser(state, action) {
      state.currentUser = action.payload.currentUser;
    },
    fetchUser(state, action) {
      state.user = action.payload.user;
    },
    fetchJob(state, action) {
      state.job = action.payload.job;
    },
    fetchMyJobs(state, action) {
      state.myJobs = action.payload.myJobs;
    },
    fetchAllJobs(state, action) {
      state.allJobs = action.payload.allJobs;
    },
    fetchMyApplieds(state, action) {
      state.myApplieds = action.payload.myApplieds;
    },
    fetchUserApplieds(state, action) {
      state.userApplieds = action.payload.userApplieds;
    },
    updateCurrentUser(state, action) {
      state.currentUser = action.payload.currentUser;
    },
    updateJob(state, action) {
      state.job = action.payload.job;
    },
    updateApplyJob(state, action) {
      state.applyJob = action.payload.applyJob;
    },
    // Toggle Sidebar
    toggleSideBar(state) {
      state.sideBar.open = !state.sideBar.open;
    },
    updateSideBarType(state, action) {
      state.sideBar.type = action.payload.type;
    },
    updateTab(state, action) {
      state.tab = action.payload.tab;
    },
    openSnackBar(state, action) {
      console.log(action.payload);
      state.snackbar.open = true;
      state.snackbar.severity = action.payload.severity;
      state.snackbar.message = action.payload.message;
    },
    closeSnackBar(state) {
      console.log("This is getting executed");
      state.snackbar.open = false;
      state.snackbar.message = null;
    },
    updateUsers(state, action) {
      state.users = action.payload.users;
    },
    updateAllUsers(state, action) {
      state.allUsers = action.payload.allUsers;
    },
    updateFriends(state, action) {
      state.friends = action.payload.friends;
    },
    updateFriendRequests(state, action) {
      state.friendRequests = action.payload.requests;
    },
    selectConversation(state, action) {
      state.chat_type = "individual";
      state.room_id = action.payload.room_id;
    },
  },
});

// Reducer
export default slice.reducer;

// ----------------------------------------------------------------------

export const closeSnackBar = () => async (dispatch, getState) => {
  dispatch(slice.actions.closeSnackBar());
};

export const showSnackbar =
  ({ severity, message }) =>
  async (dispatch, getState) => {
    dispatch(
      slice.actions.openSnackBar({
        message,
        severity,
      })
    );

    setTimeout(() => {
      dispatch(slice.actions.closeSnackBar());
    }, 4000);
  };

export function ToggleSidebar() {
  return async (dispatch, getState) => {
    dispatch(slice.actions.toggleSideBar());
  };
}
export function UpdateSidebarType(type) {
  return async (dispatch, getState) => {
    dispatch(slice.actions.updateSideBarType({ type }));
  };
}
export function UpdateTab(tab) {
  return async (dispatch, getState) => {
    dispatch(slice.actions.updateTab(tab));
  };
}

export const FetchUserMe = () => {
  return async (dispatch, getState) => {
    axios
      .get("/user/get-me", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${getState().auth.token}`,
        },
      })
      .then((response) => {
        console.log(response);
        dispatch(slice.actions.fetchCurrentUser({ currentUser: response.data.data }));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const FetchUserProfile = (query) => {
  return async (dispatch, getState) => {
    axios
      .get(`/user/get-profile/${query}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${getState().auth.token}`,
        },
      })
      .then((response) => {
        console.log(response);
        dispatch(slice.actions.fetchUser({ user: response.data.data }));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export function FetchUserAll() {
  return async (dispatch, getState) => {
    await axios
      .get(
        "/user/get-user-all",

        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getState().auth.token}`,
          },
        }
      )
      .then((response) => {
        console.log(response);
        dispatch(slice.actions.updateAllUsers({ allUsers: response.data.data }));
      })
      .catch((err) => {
        console.log(err);
      });
  };
}

export function FetchUsers() {
  return async (dispatch, getState) => {
    await axios
      .get(
        "/user/get-users",

        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getState().auth.token}`,
          },
        }
      )
      .then((response) => {
        console.log(response);
        dispatch(slice.actions.updateUsers({ users: response.data.data }));
      })
      .catch((err) => {
        console.log(err);
      });
  };
}
export function FetchVerifiedUsers() {
  return async (dispatch, getState) => {
    await axios
      .get(
        "/user/get-all-verified-users",

        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getState().auth.token}`,
          },
        }
      )
      .then((response) => {
        console.log(response);
        dispatch(slice.actions.updateAllUsers({ users: response.data.data }));
      })
      .catch((err) => {
        console.log(err);
      });
  };
}
export function FetchFriends() {
  return async (dispatch, getState) => {
    await axios
      .get(
        "/user/get-friends",

        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getState().auth.token}`,
          },
        }
      )
      .then((response) => {
        console.log(response);
        dispatch(slice.actions.updateFriends({ friends: response.data.data }));
      })
      .catch((err) => {
        console.log(err);
      });
  };
}
export function FetchFriendRequests() {
  return async (dispatch, getState) => {
    await axios
      .get(
        "/user/get-requests",

        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getState().auth.token}`,
          },
        }
      )
      .then((response) => {
        console.log(response);
        dispatch(
          slice.actions.updateFriendRequests({ requests: response.data.data })
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };
}

export const SelectConversation = ({ room_id }) => {
  return async (dispatch, getState) => {
    dispatch(slice.actions.selectConversation({ room_id }));
  };
};

export const FetchCallLogs = () => {
  return async (dispatch, getState) => {
    axios
      .get("/user/get-call-logs", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${getState().auth.token}`,
        },
      })
      .then((response) => {
        console.log(response);
        dispatch(
          slice.actions.fetchCallLogs({ call_logs: response.data.data })
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const UpdateUserProfile = (formValues) => {
  return async (dispatch, getState) => {
    axios
      .patch(
        "/user/update-me",
        formValues,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getState().auth.token}`,
          },
        }
      )
      .then((response) => {
        console.log(response);
        dispatch(slice.actions.updateCurrentUser({ currentUser: response.data.data }));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const FetchQuestAll = () => {
  return async (dispatch, getState) => {
    axios
      .get(`/quest/get-job-all`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${getState().auth.token}`,
        },
      })
      .then((response) => {
        console.log(response);
        dispatch(slice.actions.fetchAllJobs({ allJobs: response.data.data }));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const FetchQuestId = ({ questId }) => {
  return async (dispatch, getState) => {
    axios
      .get(`/quest/get-job-id/${questId}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${getState().auth.token}`,
        },
      })
      .then((response) => {
        console.log(response);
        dispatch(slice.actions.fetchJob({ job: response.data.result }));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const FetchQuestMine = ({ userId }) => {
  return async (dispatch, getState) => {
    axios
      .get(`/quest/get-my-jobs/${userId}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${getState().auth.token}`,
        },
      })
      .then((response) => {
        console.log(response);
        dispatch(slice.actions.fetchMyJobs({ myJobs: response.data.result }));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const CreateRequestsJob = (formValues) => {
  return async (dispatch, getState) => {
    axios
      .post(
        `/quest/create-job`,
        formValues,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getState().auth.token}`,
          },
        }
      )
      .then((response) => {
        console.log(response);
        dispatch(slice.actions.updateJob({ job: response.data.data }));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const UpdateRequestsJob = (formValues) => {
  return async (dispatch, getState) => {
    axios
      .patch(
        `/quest/update-job/${formValues._id}`,
        formValues,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getState().auth.token}`,
          },
        }
      )
      .then((response) => {
        console.log(response);
        dispatch(slice.actions.updateJob({ job: response.data.result }));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const DeleteRequestsJob = ({ questId }) => {
  return async (dispatch, getState) => {
    axios
      .delete(
        `/quest/delete-job/${questId}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getState().auth.token}`,
          },
        }
      )
      .catch((err) => {
        console.log(err);
      });
  };
};

export const CreateActivitiesJob = (formValues) => {
  return async (dispatch, getState) => {
    axios
      .post(
        `/apply/new-job`,
        formValues,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getState().auth.token}`,
          },
        }
      )
      .then((response) => {
        console.log(response);
        dispatch(slice.actions.updateApplyJob({ applyJob: response.data.result }));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const FetchRecruitersJob = ({userId}) => {
  return async (dispatch, getState) => {
    axios
      .get(
        `/apply/get-recruiter-jobs/${userId}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getState().auth.token}`,
          },
        }
      )
      .then((response) => {
        console.log(response);
        dispatch(slice.actions.fetchUserApplieds({ userApplieds: response.data.result }));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const FetchApplicantsJob = ({userId}) => {
  return async (dispatch, getState) => {
    axios
      .get(
        `/apply/get-applicant-jobs/${userId}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getState().auth.token}`,
          },
        }
      )
      .then((response) => {
        console.log(response);
        dispatch(slice.actions.fetchUserApplieds({ userApplieds: response.data.result }));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const UpdateAppliedsJob = (formValues) => {
  return async (dispatch, getState) => {
    axios
      .patch(
        `/apply/update-applied/${formValues._id}`,
        formValues,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getState().auth.token}`,
          },
        }
      )
      .then((response) => {
        console.log(response);
        dispatch(slice.actions.updateApplyJob({ applyJob: response.data.result }));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};