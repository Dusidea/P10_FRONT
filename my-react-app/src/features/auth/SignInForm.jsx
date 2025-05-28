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

    dispatch(setLoginError(false));
    // const data = await login({ email, password }).unwrap();
    const result = await login({ email, password });
    // gestion des retours d'erreur de l'API
    if (result.error) {
      const error = result.error;

      switch (error.code) {
        case "invalid_email":
          dispatch(setLoginError("email"));
          break;
        case "invalid_password":
          dispatch(setLoginError("password"));
          break;
        case "server_error":
          dispatch(setLoginError("server"));
          break;
        default:
          dispatch(setLoginError("unknown"));
      }

      return;
    }

    // Succès : on récupère le token et on navigue
    const token = result.data.body;
    dispatch(setCredentials(token));
    // dispatch(setCredentials());
    navigate("/user");
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
