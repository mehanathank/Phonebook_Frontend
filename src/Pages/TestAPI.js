import { useState, useEffect } from 'react';

const TestAPI = () => {
  const [testResult, setTestResult] = useState('');
  const [contacts, setContacts] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const testAPI = async () => {
      try {
        // Test basic connectivity
        const testResponse = await fetch('http://localhost:5000/api/test');
        const testData = await testResponse.json();
        setTestResult(`API Test: ${testData.message}`);

        // Test contacts endpoint
        const contactsResponse = await fetch('http://localhost:5000/api/contacts');
        const contactsData = await contactsResponse.json();
        console.log('Contacts Response:', contactsData);
        setContacts(contactsData.contacts || []);

        // Test users endpoint
        const usersResponse = await fetch('http://localhost:5000/api/users');
        const usersData = await usersResponse.json();
        console.log('Users Response:', usersData);
        setUsers(usersData.users || []);

      } catch (error) {
        console.error('API Test Error:', error);
        setTestResult(`API Error: ${error.message}`);
      }
    };

    testAPI();
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h1>API Test Page</h1>
      <p><strong>Status:</strong> {testResult}</p>
      
      <h2>Users ({users.length})</h2>
      <ul>
        {users.map(user => (
          <li key={user._id || user.id}>{user.name} - {user.email}</li>
        ))}
      </ul>

      <h2>Contacts ({contacts.length})</h2>
      <ul>
        {contacts.map(contact => (
          <li key={contact._id || contact.id}>{contact.name} - {contact.phone}</li>
        ))}
      </ul>
    </div>
  );
};

export default TestAPI;