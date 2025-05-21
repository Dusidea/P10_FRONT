import { useUpdateNameMutation } from "./userProfileApi";
import "../../styles/main.css";
import { useState } from "react";

export default function EditUserInfo() {
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
            placeholder="Tony"
            onChange={(e) => setNewName(e.target.value)}
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="firstname">First name: </label>
          <input type="text" id="firstname" placeholder="Tony" disabled />
        </div>
        <div className="input-wrapper">
          <label htmlFor="lastname">Last name: </label>
          <input type="text" id="lastname" placeholder="Stark" disabled />
        </div>
        <div className="user-edit-buttons-wrapper">
          <button onClick={handleUpdate} className="user-edit-button">
            Save
          </button>
          <button className="user-edit-button">Cancel</button>
        </div>
      </form>
    </section>
  );
}
