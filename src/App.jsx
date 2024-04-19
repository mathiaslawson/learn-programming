import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Navbar from "./components/global/Navbar";

function App() {
  // mock unprotected routes

  const path = window.location.pathname;

  return (
    <>
      <Router>
        <div style={{ display: path === "/auth" ? "none" : "block" }}>
          <Navbar />
        </div>

        <Routes>
          <Route path="/" element={<Landing />} />
        </Routes>
        {
          <div style={{ display: path === "/auth" ? "none" : "block" }}>
            <Footer />
          </div>
        }
      </Router>
    </>
  );
}

export default App;
