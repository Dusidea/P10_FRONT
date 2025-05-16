import Account from "../features/account/Account";
import TransactionItem from "../features/transactionItem/TransactionItem";
import "../styles/main.css";

function Transactions() {
  return (
    <main className="main bg-dark">
      <div className="transaction-wrapper">
        <Account
          title="exemple"
          amount="10000000"
          description="placeholder description"
        />

        <div className="transaction-array">
          <div className="transaction-array-header">Date</div>
          <div className="transaction-array-header">Description</div>
          <div className="transaction-array-header">Amount</div>
          <div className="transaction-array-header">Balance</div>
          <div className="transaction-array-header-empty"></div>
        </div>
        <TransactionItem
          date="date_holder"
          description="description_holder"
          amount="amount_older"
          balance="balance_holder"
        />
        <TransactionItem
          date="date_holder"
          description="description_holder"
          amount="amount_older"
          balance="balance_holder"
        />

        <TransactionItem
          date="date_holder"
          description="description_holder"
          amount="amount_older"
          balance="balance_holder"
        />
      </div>
    </main>
  );
}

export default Transactions;
