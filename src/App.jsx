import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Navbar from "./components/global/Navbar";
import Footer from "./components/global/Footer";
import Chat from "./pages/chat/Chat";
import Auth from "./pages/Auth/auth";


import { useEffect, useState } from "react";
import firestore from "./services/firebase";

import { collection, addDoc, getDocs } from "firebase/firestore";


function App() {
  // mock unprotected routes

  const path = window.location.pathname;


  const [data, setData] = useState("");

  return (
    <>
      <Router>
        <div style={{ display: path === "/auth" ? "none" : "block" }}>
          <Navbar />
        </div>

        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/auth" element={<Auth />} />
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
