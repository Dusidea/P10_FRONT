import { useLocation } from "react-router";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../features/auth/authSlice";
import argentBankLogo from "../assets/argentBankLogo.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import "../styles/main.css";

function Header() {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const signOutClick = () => {
    navigate("/");
    dispatch(logOut());
  };

  return (
    <header>
      <nav className="main-nav">
        <Link className="main-nav-logo" to="./">
          <img
            className="main-nav-logo-image"
            src={argentBankLogo}
            alt="Argent Bank Logo"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </Link>

        {isAuthenticated ? (
          <div>
            <Link className="main-nav-item" to="./user.html">
              <FontAwesomeIcon icon={faCircleUser} className="fa-icon" />
              Tony
            </Link>
            <a onClick={() => signOutClick()} className="main-nav-item">
              <i className="fa fa-sign-out"></i>
              Sign Out
            </a>
          </div>
        ) : (
          <div>
            <Link className="main-nav-item" to="./sign-in">
              <FontAwesomeIcon icon={faCircleUser} className="fa-icon" />
              Sign In
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Header;
