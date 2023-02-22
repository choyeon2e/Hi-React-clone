import "./App.css";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import Clayful from "clayful/client-js";
import axios from "axios";
import { accessToken } from "./config";
import AuthContextProvider from "./context/AuthContext";

Clayful.config({
  client: `${accessToken}`,
});

Clayful.install("request", require("clayful/plugins/request-axios")(axios));

function App() {
  return (
    <AuthContextProvider>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/register" element={<RegisterPage />}></Route>
      </Routes>
    </AuthContextProvider>
  );
}

export default App;
