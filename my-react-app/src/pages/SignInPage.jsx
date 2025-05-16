import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import SignInForm from "../features/auth/SignInForm";
import "../styles/main.css";

function SignInPage() {
  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <FontAwesomeIcon icon={faCircleUser} className="fa-icon sign-in-icon" />
        <h1>Sign In</h1>
        <SignInForm />
      </section>
    </main>
  );
}
export default SignInPage;
