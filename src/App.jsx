import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Navbar from "./components/global/Navbar";
import Chat from "./pages/chat/Chat";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/chat" element={<Chat />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
