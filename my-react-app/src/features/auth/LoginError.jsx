import "../../styles/main.css";
import { useSelector } from "react-redux";

export default function LoginError() {
  const loginError = useSelector((state) => state.auth.loginError);
  const errorMessages = {
    email: "Votre email n'est pas reconnu",
    password: "Votre mot de passe est erroné",
    server: "Le serveur ne répond pas",
    unknown: "Une erreur inconnue est survenue",
  };

  const errorMessage = errorMessages[loginError];

  return errorMessage ? (
    <div className="sign-in-error">{errorMessage}</div>
  ) : null;
}
