import { useParams, useNavigate } from "react-router-dom";
import { useForm } from 'react-hook-form';
import { useState, useEffect } from 'react';
import "../Styles/Edit.css";

const Edit = () => {
    const { editid } = useParams();
    const navigate = useNavigate();
    const [contact, setContact] = useState(null);
    const [contacts, setContacts] = useState([]);
    const [selectedContactId, setSelectedContactId] = useState(editid || '');
    const [loading, setLoading] = useState(true);

    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm();

    useEffect(() => {
        fetch('/Phone.json')
            .then(response => response.json())
            .then(data => {
                setContacts(data.contacts);
                if (editid) {
                    const foundContact = data.contacts.find(c => c.id === editid);
                    if (foundContact) {
                        setContact(foundContact);
                        populateForm(foundContact);
                    }
                }
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching contact:', error);
                setLoading(false);
            });
    }, [editid, setValue]);

    const populateForm = (contactData) => {
        setValue('name', contactData.name);
        setValue('phone', contactData.phone);
        setValue('email', contactData.email);
        setValue('category', contactData.category);
    };

    const handleContactClick = (contactData) => {
        setSelectedContactId(contactData.id);
        setContact(contactData);
        populateForm(contactData);
    };

    const onSubmitHandler = (formData) => {
        const updatedContact = {
            ...contact,
            ...formData
        };
        console.log('Updated contact:', updatedContact);
        navigate('/contacts');
    };

    if (loading) return <div>Loading...</div>;

    return (
        <div className="edit-container">
            <div className="contact-list">
                <h2>Select Contact</h2>
                <div>
                    {contacts.map(c => (
                        <div 
                            key={c.id} 
                            onClick={() => handleContactClick(c)}
                            className={`contact-item ${selectedContactId === c.id ? 'selected' : ''}`}
                        >
                            <img 
                                src={c.profilePic} 
                                alt={c.name}
                                className="contact-avatar"
                            />
                            <div>
                                <div className="contact-name">{c.name}</div>
                                <div className="contact-phone">{c.phone}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            
            <div className="edit-form-section">
                <h1 className="edit-title">Edit Contact</h1>
                {contact ? (
                    <div className="form-card">
                        <form onSubmit={handleSubmit(onSubmitHandler)}>
                            <div className="form-group">
                                <label className="form-label">Name:</label>
                                <input {...register("name", { required: "Name is required" })} 
                                    type="text" 
                                    className="form-input"
                                />
                                {errors.name && <span className="error-message">{errors.name.message}</span>}
                            </div>

                            <div className="form-group">
                                <label className="form-label">Phone Number:</label>
                                <input {...register("phone", { required: "Phone is required" })} 
                                    type="text" 
                                    className="form-input"
                                />
                                {errors.phone && <span className="error-message">{errors.phone.message}</span>}
                            </div>

                            <div className="form-group">
                                <label className="form-label">Email:</label>
                                <input {...register("email", { required: "Email is required" })} 
                                    type="email" 
                                    className="form-input"
                                />
                                {errors.email && <span className="error-message">{errors.email.message}</span>}
                            </div>

                            <div className="form-group">
                                <label className="form-label">Category:</label>
                                <select {...register("category", { required: "Category is required" })}
                                    className="form-select"
                                >
                                    <option value="">Select Category</option>
                                    <option value="friends">Friends</option>
                                    <option value="favorites">Favorites</option>
                                    <option value="business">Business</option>
                                </select>
                                {errors.category && <span className="error-message">{errors.category.message}</span>}
                            </div>

                            <div className="form-buttons">
                                <button 
                                    type="button" 
                                    onClick={() => navigate('/contacts')}
                                    className="btn-cancel"
                                >
                                    Cancel
                                </button>
                                <button 
                                    type="submit"
                                    className="btn-submit"
                                >
                                    Update Contact
                                </button>
                            </div>
                        </form>
                    </div>
                ) : (
                    <div className="no-selection">
                        <p>Select a contact from the left to edit</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Edit;