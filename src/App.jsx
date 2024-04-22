import { BrowserRouter as Router } from "react-router-dom";

import LayoutWrapper from "./layout";

import AllRoutes from "./layout/Rotues";

function App() {
  return (
    <>
      <Router>
        <LayoutWrapper allroutes={AllRoutes} />
      </Router>
    </>
  );
}

export default App;
