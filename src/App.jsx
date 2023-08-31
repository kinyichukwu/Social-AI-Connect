import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import HomePage from "./pages/HomePage";
import Main2 from "./pages/Main2";
import Calendar from "./pages/Calendar";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/" element={<Main2 />} />
        <Route path="/calender" element={<Calendar />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup/*" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
