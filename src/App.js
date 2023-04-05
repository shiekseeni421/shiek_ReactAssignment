import "./App.css";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SiginPage from "./pages/SiginPage";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<SiginPage />}></Route>
      </Routes>
      <Routes>
        <Route path="/home" element={<HomePage />}></Route>
      </Routes>
      <Routes>
        <Route path="/login" element={<LoginPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
