import { useOutletContext, useNavigate } from "react-router-dom";
import "../Styles/Home.css";

const Home = () => {
  const { data } = useOutletContext();
  const navigate = useNavigate();
  const contacts = data?.contacts || [];

  return (
    <div className="home">
      <h1>Contact Manager</h1>
      <div className="contact-summary">
        <h2>Total Contacts: {contacts.length}</h2>
        <div className="button-container">
          <button className="view-contacts-btn" onClick={() => navigate("/contacts")}>
            View All Contacts
          </button>
          <button className="add-contact-btn" onClick={() => navigate("/add")}>
            Add Contact
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
