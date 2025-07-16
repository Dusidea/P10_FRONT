import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import SignInForm from "../features/auth/SignInForm";
import LoginError from "../features/auth/LoginError";
import "../styles/main.css";

function SignInPage() {
  const loginError = useSelector((state) => state.auth.loginError);
  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <FontAwesomeIcon icon={faCircleUser} className="fa-icon sign-in-icon" />
        <h1>Sign In</h1>
        {loginError && <LoginError />}
        <SignInForm />
      </section>
    </main>
  );
}
export default SignInPage;
