import { useOutletContext, useNavigate } from 'react-router-dom';
import '../Styles/Trash.css';

const Trash = () => {
    const { data, restoreFromTrash } = useOutletContext();
    const navigate = useNavigate();
    
    const trashedContacts = data?.contacts?.filter(contact => contact.trash) || [];
    
    return (
        <div className="trash-page">
            <h1>Deleted Contacts</h1>
            
            {trashedContacts.length === 0 ? (
                <p>No deleted contacts.</p>
            ) : (
                <div className="contacts-grid">
                    {trashedContacts.map(contact => (
                        <div key={contact.id} className="contact-card">
                            <img 
                                src={`/${contact.profilePic}`} 
                                alt={contact.name}
                                className="contact-image"
                            />
                            <div className="contact-info">
                                <h3>{contact.name}</h3>
                                <p>{contact.phone}</p>
                                <button 
                                    onClick={() => restoreFromTrash(contact.id)}
                                    className="restore-btn"
                                >
                                    Restore
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};
export default Trash;