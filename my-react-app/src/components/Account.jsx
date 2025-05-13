import "../styles/main.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router";

export default function Account({ title, amount, description }) {
  const [transactionMode, setTransactionMode] = useState(false);
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/transactions");
    setTransactionMode(true);
  };

  return (
    <section className="account">
      <div className="account-content-wrapper">
        <h3 className="account-title">{title}</h3>
        <p className="account-amount">{amount}</p>
        <p className="account-amount-description">{description}</p>
      </div>
      <div className="account-content-wrapper cta">
        {transactionMode ? (
          <button className="transaction-button-close">
            <FontAwesomeIcon icon={faXmark} />
          </button>
        ) : (
          <button onClick={handleClick} className="transaction-button">
            View transactions
          </button>
        )}
      </div>
    </section>
  );
}
