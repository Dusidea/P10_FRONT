// import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Account from "../features/account/Account";
import EditUserInfo from "../features/editUserInfo/EditUserInfo";
import "../styles/main.css";
import { Link } from "react-router";
import { setEditMode } from "../features/editUserInfo/userProfileSlice";

function UserPage() {
  const editMode = useSelector((state) => state.userProfile.editMode);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const { firstName, lastName } = useSelector((state) => state.userProfile);
  const dispatch = useDispatch();

  return isAuthenticated ? (
    <main className="main bg-dark">
      {editMode ? (
        <EditUserInfo />
      ) : (
        <div className="header">
          <h1>
            Welcome back
            <br />
            {firstName} {lastName}!
          </h1>
          <button
            onClick={() => dispatch(setEditMode())}
            className="edit-button"
          >
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
