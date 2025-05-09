import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SignInPage from "./pages/SignInPage";
import UserPage from "./pages/UserPage";

import "./styles/main.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/sign-in" element={<SignInPage />} />
      <Route path="/user" element={<UserPage />} />
    </Routes>
  );
}

export default App;
