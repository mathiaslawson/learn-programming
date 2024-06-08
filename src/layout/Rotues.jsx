import Chat from "../pages/chat/Chat";
import Auth from "../pages/Auth/auth";
import Landing from "../pages/Landing";
import Courses from '../pages/Courses/Languages'

const ROUTES = [
  {
    path: "/auth",
    element: <Auth />,
    routeId: 3
  },
  {
    path: "/courses",
    element: <Courses />,
    routeId: 4
  },
  {
    path: "/auth",
    element: <Auth />,
    routeId: 3
  },
  {
    path: "/chat",
    element: <Chat />,
    routeId: 2
  },
  {
    path: "/",
    element: <Landing />,
    routeId: 1
  },
];

export default ROUTES;
