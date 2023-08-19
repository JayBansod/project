import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Show from "./components/Show";
import Add from "./components/Add";
import Self from "./components/Self";
import Addaccount from "./components/Addaccount";
import Login from "./components/Login";
import Signup from "./components/Signup";

function App() {
  return (
    <>
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/show" element={<Show />} />
            <Route path="/add" element={<Add />} />
            <Route path="/self" element={<Self />} />
            <Route path="/addaccount" element={<Addaccount />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
