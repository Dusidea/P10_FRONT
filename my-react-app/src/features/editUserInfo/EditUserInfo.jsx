import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useUpdateNameMutation } from "./userProfileApi";
import { disableEditMode, setUserProfile } from "./userProfileSlice";
import "../../styles/main.css";

export default function EditUserInfo() {
  const { userName, firstName, lastName } = useSelector(
    (state) => state.userProfile
  );
  const dispatch = useDispatch();
  const [newName, setNewName] = useState("");
  const [updateName] = useUpdateNameMutation();
  const handleUpdate = async (e) => {
    e.preventDefault();

    if (!newName.trim()) {
      alert("Le nom d'utilisateur ne peut pas être vide.");
      return;
    }

    try {
      const response = await updateName(newName).unwrap();
      dispatch(setUserProfile({ userName: newName }));
      dispatch(disableEditMode());
    } catch (error) {
      console.error("Erreur lors de la mise à jour :", error);
    }
  };
  const handleCancel = async (e) => {
    e.preventDefault();
    dispatch(disableEditMode());
  };
  return (
    <section className="edit-user-info">
      <h1>Edit user info</h1>
      <form>
        <div className="input-wrapper">
          <label htmlFor="username">Username: </label>
          <input
            type="text"
            id="username"
            placeholder={userName}
            onChange={(e) => setNewName(e.target.value)}
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="firstname">First name: </label>
          <input type="text" id="firstname" placeholder={firstName} disabled />
        </div>
        <div className="input-wrapper">
          <label htmlFor="lastname">Last name: </label>
          <input type="text" id="lastname" placeholder={lastName} disabled />
        </div>
        <div className="user-edit-buttons-wrapper">
          <button onClick={handleUpdate} className="user-edit-button">
            Save
          </button>
          <button onClick={handleCancel} className="user-edit-button">
            Cancel
          </button>
        </div>
      </form>
    </section>
  );
}
