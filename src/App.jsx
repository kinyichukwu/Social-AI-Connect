import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Main2 from "./pages/Main2";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main2 />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup/*" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
