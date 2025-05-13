import "../styles/main.css";

export default function EditUserInfo() {
  return (
    <section className="edit-user-info">
      <h1>Edit user info</h1>
      <form>
        <div className="input-wrapper">
          <label htmlFor="username">Username: </label>
          <input type="text" id="username" placeholder="Tony" />
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
          <button className="user-edit-button">Save</button>
          <button className="user-edit-button">Cancel</button>
        </div>
      </form>
    </section>
  );
}
