import Account from "../components/Account";
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
      </div>
      <p>liste des transactions</p>
    </main>
  );
}

export default Transactions;
