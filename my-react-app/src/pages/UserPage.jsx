import { useState } from "react";
import { useSelector } from "react-redux";

import Account from "../features/account/Account";
import EditUserInfo from "../features/editUserInfo/EditUserInfo";
import "../styles/main.css";
import { Link } from "react-router";

function UserPage() {
  const [editMode, setEditMode] = useState(false);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return isAuthenticated ? (
    <main className="main bg-dark">
      {editMode ? (
        <EditUserInfo />
      ) : (
        <div className="header">
          <h1>
            Welcome back
            <br />
            Tony Jarvis!
          </h1>
          <button onClick={() => setEditMode(true)} className="edit-button">
            Edit Name
          </button>
        </div>
      )}
      <h2 className="sr-only">Accounts</h2>
      <Account
        title="Argent Bank Checking (x8349)"
        amount="$2,082.79"
        description="Available Balance"
        transactionMode={false}
      />
      <Account
        title="Argent Bank Savings (x6712)"
        amount="$10,928.42"
        description="Available Balance"
        transactionMode={false}
      />
      <Account
        title="Argent Bank Credit Card (x8349)"
        amount="$184.30"
        description="Current Balance"
        transactionMode={false}
      />
    </main>
  ) : (
    <main className="main bg-dark">
      <section className="sign-in-content">
        Pour accéder à vos comptes rendez-vous sur la page de{" "}
        <Link to="/sign-in">connexion</Link>.
      </section>
    </main>
  );
}
export default UserPage;
