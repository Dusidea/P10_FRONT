import "../../styles/main.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import {
  disableTransactionMode,
  enableTransactionMode,
} from "../transaction/transactionSlice";

export default function Account({ title, amount, description }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const transactionMode = useSelector(
    (state) => state.transaction.transactionMode
  );
  const handleClick = () => {
    //updating redux store (transaction mode "on")
    dispatch(enableTransactionMode());
    //+ redirecting
    navigate("/transactions");
  };
  const returnClick = () => {
    dispatch(disableTransactionMode());
    navigate("/user");
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
          <button
            onClick={() => returnClick()}
            className="transaction-button-close"
          >
            <FontAwesomeIcon icon={faXmark} />
          </button>
        ) : (
          <button onClick={() => handleClick()} className="transaction-button">
            View transactions
          </button>
        )}
      </div>
    </section>
  );
}
