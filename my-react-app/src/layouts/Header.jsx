import { useLocation } from "react-router";
import "../styles/main.css";
import argentBankLogo from "../assets/argentBankLogo.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";

function Header() {
  const location = useLocation();
  const pathname = location.pathname;

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

        {/* div sign-in si url = home ou sign-in, opérateur ternaire, sinon div sign-out*/}

        {["/", "/sign-in"].includes(pathname) ? (
          <div>
            <a className="main-nav-item" href="./sign-in">
              <FontAwesomeIcon icon={faCircleUser} className="fa-icon" />
              Sign In
            </a>
          </div>
        ) : (
          <div>
            <a className="main-nav-item" href="./user.html">
              <FontAwesomeIcon icon={faCircleUser} className="fa-icon" />
              Tony
            </a>
            <a className="main-nav-item" href="./index.html">
              <i className="fa fa-sign-out"></i>
              Sign Out
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Header;
