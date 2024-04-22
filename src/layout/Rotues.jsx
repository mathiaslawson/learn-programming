import Chat from "../pages/chat/Chat";
import Auth from "../pages/Auth/auth";
import Landing from "../pages/Landing";

const ROUTES = [
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
