import { Suspense, lazy } from "react";
import { Navigate, useRoutes } from "react-router-dom";

// layouts
import LayoutFront from "../layouts/front";
import LayoutAuth from "../layouts/auth";
import LayoutHome from "../layouts/home";
import LayoutAdmin from "../layouts/admin";

// config
import { PATH_FRONT, PATH_HOME } from "../config";
import LoadingScreen from "../components/shared/LoadingScreen";

const Loadable = (Component) => (props) => {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <Component {...props} />
    </Suspense>
  );
};

export default function Router() {
  return useRoutes([
    {
      path: "/",
      element: <LayoutFront />,
      children: [
        { element: <Navigate to={PATH_FRONT} replace />, index: true },
        { path: "welcome", element: <GeneralApp /> },
      ],
    },
    {
      path: "/",
      element: <LayoutAuth />,
      children: [
        { path: "login", element: <PageLogin /> },
        { path: "auth/reset-password", element: <PageResetPassword /> },
        { path: "auth/new-password", element: <PageNewPassword /> },
        { path: "auth/verify", element: <PageVerify /> },
      ],
    },
    {
      path: "/",
      element: <LayoutHome />,
      children: [
        { element: <Navigate to={PATH_HOME} replace />, index: true },
        { path: "home", element: <PageHome /> },
        { path: "search", element: <PageSearch /> },
        { path: "setting", element: <PageOption /> },

        { path: "ch/:username", element: <PageProfile /> },
        { path: "ch/:username/resume", element: <PageResume /> },
        { path: "ch/:username/update", element: <PageUserEdit /> },

        { path: "chats", element: <PageChats /> },

        { path: "quest", element: <PageQuest /> },
        { path: "quest/:id", element: <PageQuestId /> },
        { path: "quest/:id/poster", element: <PageVacancy /> },

        { path: "post", element: <PagePost /> },
        { path: "post/:id", element: <PagePostId /> },

        { path: "recruit", element: <PageRecruit pageIndex={1} /> },
        { path: "recruit/add", element: <PageRecruit mode="add" pageIndex={0} /> },
        { path: "recruit/edit/:id", element: <PageRecruit mode="edit" pageIndex={0} /> },
        { path: "recruit/jobs", element: <PageRecruit pageIndex={2} /> },
        { path: "recruit/applicant", element: <PageRecruit pageIndex={3} /> },

        { path: "active", element: <PageActive /> },
      ],
    },
    {
      path: "/admin",
      element: <LayoutAdmin />,
      children: [
        { path: "", element: <PageLoginAdmin /> },
        { path: "dashboard", element: <PageDashBoard /> },
        { path: "userlist", element: <PageDashUsers /> },
        { path: "questlist", element: <PageDashQuests /> },
        { path: "postlist", element: <PageDashPosts /> },
        { path: "adminlist", element: <PageDashAdmins /> },
      ],
    },
    { path: "*", element: <Navigate to="/404" replace /> },
    { path: "/404", element: <Page404 /> },
  ]);
}

const Page404 = Loadable(lazy(() => import("../pages/Page404")));
const GeneralApp = Loadable(lazy(() => import("../pages/front/GeneralApp")));

const PageLogin = Loadable(lazy(() => import("../pages/auth")));
const PageResetPassword = Loadable(lazy(() => import("../pages/auth/ResetPassword")));
const PageNewPassword = Loadable(lazy(() => import("../pages/auth/NewPassword")));
const PageVerify = Loadable(lazy(() => import("../pages/auth/VerifyAccount")));

const PageHome = Loadable(lazy(() => import("../pages/user/home")));
const PageOption = Loadable(lazy(() => import("../pages/user/option")));
const PageSearch = Loadable(lazy(() => import("../pages/user/search")));

const PageProfile = Loadable(lazy(() => import("../pages/user/profile")));
const PageUserEdit = Loadable(lazy(() => import("../pages/user/profile/Edit")));
const PageResume = Loadable(lazy(() => import("../pages/user/profile/View")));

const PageQuest = Loadable(lazy(() => import("../pages/user/quest")));
const PageQuestId = Loadable(lazy(() => import("../pages/user/quest/One")));
const PageVacancy = Loadable(lazy(() => import("../pages/user/quest/View")));

const PagePost = Loadable(lazy(() => import("../pages/user/post")));
const PagePostId = Loadable(lazy(() => import("../pages/user/post/One")));

const PageRecruit = Loadable(lazy(() => import("../pages/user/recruit")));

const PageActive = Loadable(lazy(() => import("../pages/user/active")));

const PageChats = Loadable(lazy(() => import("../pages/user/chats")));

const PageLoginAdmin = Loadable(lazy(() => import("../pages/auth/AdminLogin")));
const PageDashBoard = Loadable(lazy(() => import("../pages/admin/dashboard")));
const PageDashUsers = Loadable(lazy(() => import("../pages/admin/listUser")));
const PageDashQuests = Loadable(lazy(() => import("../pages/admin/listQuest")));
const PageDashPosts = Loadable(lazy(() => import("../pages/admin/listPost")));
const PageDashAdmins = Loadable(lazy(() => import("../pages/admin/listAdmin")));
