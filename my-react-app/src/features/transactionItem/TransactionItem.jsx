import "../../styles/main.css";
import { useSelector, useDispatch } from "react-redux";
import { disableItemOpen, enableItemOpen } from "./transactionItemSlice";

export default function TransactionItem({
  date,
  description,
  amount,
  balance,
}) {
  const dispatch = useDispatch();
  const itemOpen = useSelector((state) => state.transactionItem.itemOpen);
  const openClick = () => {
    dispatch(enableItemOpen());
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
            {/* <div>Contenu détaillé</div> */}
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
