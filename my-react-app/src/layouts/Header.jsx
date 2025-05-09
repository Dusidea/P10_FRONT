import "../styles/main.css";
import argentBankLogo from "../assets/argentBankLogo.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
function Header() {
  return (
    <header>
      <nav className="main-nav">
        <a className="main-nav-logo" href="./index">
          <img
            className="main-nav-logo-image"
            src={argentBankLogo}
            alt="Argent Bank Logo"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </a>
        <div>
          <a className="main-nav-item" href="./sign-in">
            <FontAwesomeIcon icon={faCircleUser} />
            Sign In
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Header;
