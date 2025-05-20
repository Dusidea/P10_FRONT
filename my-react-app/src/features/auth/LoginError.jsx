import "../../styles/main.css";
import { useSelector } from "react-redux";

export default function LoginError() {
  const loginError = useSelector((state) => state.auth.loginError);
  const emailError = "Votre email n'est pas reconnu";
  const passwordError = "Votre mot de passe est erroné";

  return (
    <div className="sign-in-error">
      {loginError === "email" ? emailError : passwordError}
    </div>
  );
}
