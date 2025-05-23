import "../../styles/main.css";
import { useSelector, useDispatch } from "react-redux";
import { disableItemOpen, enableItemOpen } from "./transactionSlice";

export default function TransactionItem({
  date,
  description,
  amount,
  balance,
}) {
  const dispatch = useDispatch();
  const itemOpen = useSelector((state) => state.transaction.itemOpen);
  const openClick = () => {
    dispatch(enableItemOpen());
    console.log("open clic");
  };
  const closeClick = () => {
    dispatch(disableItemOpen());
  };

  return (
    <div className="transaction-item-wrapper">
      <div className="transaction-item">
        <div>{date} </div>
        <div>{description} </div>
        <div>{amount} </div>
        <div>{balance} </div>
        {itemOpen ? (
          <>
            <button onClick={() => closeClick()}>pour fermer</button>
            <div>Contenu détaillé</div>
          </>
        ) : (
          <button onClick={() => openClick()}>pour ouvrir</button>
        )}
      </div>

      <div className={`${itemOpen ? "transaction-item-details" : "hidden"}`}>
        infos détaillées{" "}
      </div>
    </div>
  );
}
