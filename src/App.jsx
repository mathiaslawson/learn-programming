import { BrowserRouter as Router } from "react-router-dom";

import LayoutWrapper from "./layout";

import AllRoutes from "./layout/Rotues";
import { AuthContextProvider } from "./context/AuthContext";

function App() {
  return (
    <>
      <Router>
        <AuthContextProvider>
          <LayoutWrapper allroutes={AllRoutes} />
        </AuthContextProvider>
      </Router>
    </>
  );
}

export default App;
