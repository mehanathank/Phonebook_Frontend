import { useParams, useOutletContext, useNavigate } from 'react-router-dom';
import '../Styles/ContactDetails.css';

const ContactDetails = () => {
  const { id } = useParams();
  const { data, moveToTrash } = useOutletContext();
  const navigate = useNavigate();
  
  const contact = data?.contacts?.find(c => c.id === id);
  
  if (!contact) {
    return (
      <div className="contact-details">
        <h2>Contact not found</h2>
        <button onClick={() => navigate('/contacts')}>Back to Contacts</button>
      </div>
    );
  }

  return (
    <div className="contact-details">
      <div className="action-buttons">
        <button onClick={() => navigate('/contacts')} className="back-btn">
          ← Back to Contacts
        </button>
        <button onClick={() => navigate(`/edit/${contact.id}`)} className="edit-btn">
          Edit Contact
        </button>
        <button 
          onClick={() => {
            moveToTrash(contact.id);
            navigate('/contacts');
          }} 
          className="delete-btn"
        >
          Delete Contact
        </button>
      </div>
      
      <div className="contact-profile">
        <img 
          src={`/${contact.profilePic}`} 
          alt={contact.name}
          className="profile-image"
        />
        
        <div className="contact-info-detailed">
          <h1>{contact.name}</h1>
          <div className="info-item">
            <strong>Phone:</strong> {contact.phone}
          </div>
          <div className="info-item">
            <strong>Email:</strong> {contact.email}
          </div>
          
          <div className="info-item">
            <strong>Added:</strong> {contact.createdAt}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;