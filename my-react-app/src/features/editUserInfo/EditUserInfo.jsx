import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useUpdateNameMutation } from "./userProfileApi";
import { disableEditMode } from "./userProfileSlice";
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
    try {
      const response = await updateName(newName).unwrap();
      console.log("Profil mis à jour :", response);
    } catch (error) {
      console.error("Erreur lors de la mise à jour :", error);
    }
  };
  const handleCancel = async (e) => {
    e.preventDefault();
    dispatch(disableEditMode());
    // ajouter fermeture setEditMode false => passer editMode dans redux
  };
  console.log("newName ", newName);
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
