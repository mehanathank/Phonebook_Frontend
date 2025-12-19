import { useOutletContext, useNavigate } from "react-router-dom";
import "../Styles/Home.css";

const Home = () => {
  const { data } = useOutletContext();
  const navigate = useNavigate();
  const contacts = data?.contacts || [];

  return (
    <div className="home">
      {/* Hero Section */}
      <div className="hero-section">
        <img src="/Images/banner.jpg" alt="Contact Manager" className="hero-image" />
        <div className="hero-content">
          <h1>Smart Contact Management</h1>
          <p>Organize, connect, and grow your network effortlessly</p>
          <div className="hero-buttons">
            <button className="cta-button" onClick={() => navigate("/login", { state: { from: "/contacts" } })}>
              Explore Contacts
            </button>
            <button className="about-button" onClick={() => navigate("/about")}>
              About Us
            </button>
          </div>
        </div>
      </div>

      

      <div className="categories-section">
        <h2>Manage Your Contacts</h2>
        <div className="categories-grid">
          <div className="category-card" onClick={() => navigate("/login", { state: { from: "/contacts" } })}>
            <img src="/Images/all contact.png" alt="All Contacts" />
            <h3>All Contacts</h3>
            <p>{contacts.filter(c => !c.trash).length} contacts</p>
          </div>
          <div className="category-card" onClick={() => navigate("/login", { state: { from: "/add" } })}>
            <img src="/Images/add-contact.jpg" alt="Add Contact" />
            <h3>Add New</h3>
            <p>Create contact</p>
          </div>
          <div className="category-card" onClick={() => navigate("/login", { state: { from: "/trash" } })}>
            <img src="/Images/trash.jpg" alt="Trash" />
            <h3>Trash</h3>
            <p>{contacts.filter(c => c.trash).length} deleted</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
