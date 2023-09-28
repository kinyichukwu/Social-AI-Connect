import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import HomePage from "./pages/HomePage";
import Calendar from "./pages/Calendar";
import Loading from "./components/Loading/Loading";
import MainPageInstagram from "./pages/MainPageInstagram";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/*" element={<MainPageInstagram />} />
        <Route path="/l" element={<Loading />} />

        <Route path="/calendar" element={<Calendar />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup/*" element={<SignUp />} />
      </Routes>

      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </BrowserRouter>
  );
}

export default App;
