import { setLoginError } from "./authSlice";
import { useLoginMutation } from "./authApi";
import { setCredentials } from "./authSlice";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import "../../styles/main.css";
import { useState } from "react";

export default function SignInForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login] = useLoginMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(setLoginError(false));
      const data = await login({ email, password }).unwrap();
      // to store the token via Redux (we could also use the browser's local storage)
      const token = data.body;
      dispatch(setCredentials(token));
      navigate("/user");
    } catch (err) {
      console.error("Login failed:", err);
      if (err.status === 400 && err.data.message) {
        if (err.data.message.includes("User")) {
          dispatch(setLoginError("email"));
        } else dispatch(setLoginError("password"));
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-wrapper">
        <label htmlFor="username">Username</label>
        <input
          type="email"
          id="username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="input-wrapper">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <div className="input-remember">
        <input type="checkbox" id="remember-me" />
        <label htmlFor="remember-me">Remember me</label>
      </div>
      <button className="sign-in-button" type="submit">
        Sign In
      </button>
    </form>
  );
}
