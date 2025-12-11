import { useState } from 'react';
import { useOutletContext, useNavigate } from 'react-router-dom';
import '../Styles/ListContacts.css';

const ListContacts = () => {
  const { data } = useOutletContext();
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('all');

  const contacts = data?.contacts || [];
  const categories = data?.categories || [];
  
  console.log('Data:', data);
  console.log('Contacts:', contacts);
  console.log('Categories:', categories);

  let filteredContacts = contacts.filter(contact => !contact.trash);
  
  if (search) {
    filteredContacts = filteredContacts.filter(contact => 
      contact.name.toLowerCase().includes(search.toLowerCase()) ||
      contact.phone.includes(search) ||
      contact.email.toLowerCase().includes(search.toLowerCase())
    );
  }
  
  if (category !== 'all') {
    filteredContacts = filteredContacts.filter(contact => contact.category === category);
  }

  const groupedContacts = categories.reduce((acc, cat) => {
    acc[cat] = filteredContacts.filter(contact => contact.category === cat);
    return acc;
  }, {});

  return (
    <div className="list-contacts">
      <h1>Contact List</h1>
      
      <div className="search-filter">
        <input
          type="text"
          placeholder="Search contacts..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-bar"
        />
        
        <select 
          value={category} 
          onChange={(e) => setCategory(e.target.value)}
          className="category-filter"
        >
          <option value="all">All Categories</option>
          {categories.map(cat => (
            <option key={cat} value={cat}>
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </option>
          ))}
        </select>
      </div>

      {category === 'all' ? (
        categories.map(cat => (
          groupedContacts[cat].length > 0 && (
            <div key={cat} className="category-section">
              <h2 className="category-title">{cat.charAt(0).toUpperCase() + cat.slice(1)}</h2>
              <div className="contacts-grid">
                {groupedContacts[cat].map(contact => (
                  <div 
                    key={contact.id} 
                    className="contact-card"
                    onClick={() => navigate(`/contact/${contact.id}`)}
                  >
                    <img 
                      src={`/${contact.profilePic}`} 
                      alt={contact.name}
                      className="contact-image"
                    />
                    <div className="contact-info">
                      <h3>{contact.name}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )
        ))
      ) : (
        <div className="contacts-grid">
          {filteredContacts.map(contact => (
            <div 
              key={contact.id} 
              className="contact-card"
              onClick={() => navigate(`/contact/${contact.id}`)}
            >
              <img 
                src={`/${contact.profilePic}`} 
                alt={contact.name}
                className="contact-image"
              />
              <div className="contact-info">
                <h3>{contact.name}</h3>
              </div>
            </div>
          ))}
        </div>
      )}
      
      {filteredContacts.length === 0 && (
        <p className="no-contacts">No contacts found.</p>
      )}
    </div>
  );
};

export default ListContacts;