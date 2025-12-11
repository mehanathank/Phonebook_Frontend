import "../Styles/AddContact.css";
const AddContact = () => {
  return (
    <div className="add-contact">
      <h1>Add Contact</h1>

      <form>
        <input 
          type="text" 
          placeholder="Name" 
        />

        <input 
          type="text" 
          placeholder="Phone Number" 
        />

        <input 
          type="email" 
          placeholder="Email" 
        />

        <select>
          <option value="">Select Category</option>
          <option value="friends">Friends</option>
          <option value="favorites">Favorites</option>
          <option value="business">Business</option>
        </select>

        <button type="submit">Save Contact</button>
      </form>
    </div>
  );
};

export default AddContact;
