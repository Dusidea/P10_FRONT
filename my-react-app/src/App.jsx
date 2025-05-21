import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setUserProfile } from "./features/editUserInfo/userProfileSlice";
import { useGetUserProfileQuery } from "./features/editUserInfo/userProfileApi";
import HomePage from "./pages/HomePage";
import SignInPage from "./pages/SignInPage";
import UserPage from "./pages/UserPage";
import Transactions from "./pages/Transactions";
import "./styles/main.css";

function App() {
  // calling APIroute getUserProfile to get and store user profile info
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  console.log("appjsx token is ", token);
  // this call can only happen if user token is defined
  const { data, isSuccess } = useGetUserProfileQuery(undefined, {
    skip: !token,
  });

  useEffect(() => {
    if (isSuccess && data && data.body) {
      dispatch(setUserProfile(data.body));
    }
  }, [isSuccess, data, dispatch]);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/sign-in" element={<SignInPage />} />
      <Route path="/user" element={<UserPage />} />
      <Route path="/transactions" element={<Transactions />} />
    </Routes>
  );
}

export default App;
