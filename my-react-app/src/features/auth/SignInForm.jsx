import { useLoginMutation } from "./authApi";
import { setCredentials } from "./authSlice";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import "../../styles/main.css";
import { useState } from "react";

export default function SignInForm() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [setCredentials, { isLoading, error }] = useLoginMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await setCredentials({ email, password }).unwrap();
      console.log("data is ", data);
      // data is
      // {status: 200, message: 'User successfully logged in', body: {…}}
      // body
      // :
      // {token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4M…DQ3fQ.YTaDWarMn-ZUDh-V4pHuTicvDI-iHjbhY0DOR2-JG6A'}
      // message
      // :
      // "User successfully logged in"
      // status
      // :
      // 200
      dispatchEvent(setCredentials(data)); // pour stocker user et token dans redux
      navigate("/user");
    } catch (err) {
      console.error("Login failed:", err);
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
      {/* ici écouter le clic sur le bouton ? ou l'envoi du form pour déclencher appel API
          tentative de co 
          si succès => navigate to /user
          si échec => détail des erreurs => pb email vs pb mot de passe */}
    </form>
  );
}
