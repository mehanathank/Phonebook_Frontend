const API_BASE_URL = 'http://localhost:5000/api';

export const api = {
  // Users
  getUsers: async () => {
    const response = await fetch(`${API_BASE_URL}/users`);
    return response.json();
  },

  getUserById: async (userId) => {
    const response = await fetch(`${API_BASE_URL}/users/${userId}`);
    return response.json();
  },

  createUser: async (userData) => {
    const response = await fetch(`${API_BASE_URL}/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
    return response.json();
  },

  updateUser: async (userId, userData) => {
    const response = await fetch(`${API_BASE_URL}/users/${userId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
    return response.json();
  },

  deleteUser: async (userId) => {
    const response = await fetch(`${API_BASE_URL}/users/${userId}`, {
      method: 'DELETE',
    });
    return response.json();
  },

  // Contacts
  getContacts: async () => {
    const response = await fetch(`${API_BASE_URL}/contacts`);
    return response.json();
  },

  getContactsByUserId: async (userId) => {
    const response = await fetch(`${API_BASE_URL}/contacts/user/${userId}`);
    return response.json();
  },

  getContactByCustomId: async (customId) => {
    const response = await fetch(`${API_BASE_URL}/contacts/custom/${customId}`);
    return response.json();
  },

  createContact: async (contactData) => {
    const response = await fetch(`${API_BASE_URL}/contacts`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(contactData),
    });
    return response.json();
  },

  updateContact: async (contactId, contactData) => {
    const response = await fetch(`${API_BASE_URL}/contacts/${contactId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(contactData),
    });
    return response.json();
  },

  deleteContact: async (contactId) => {
    const response = await fetch(`${API_BASE_URL}/contacts/${contactId}`, {
      method: 'DELETE',
    });
    return response.json();
  },

  restoreContact: async (contactId) => {
    const response = await fetch(`${API_BASE_URL}/contacts/${contactId}/restore`, {
      method: 'PUT',
    });
    return response.json();
  },

  getTrashContacts: async () => {
    const response = await fetch(`${API_BASE_URL}/contacts/trash`);
    return response.json();
  },

  permanentDeleteContact: async (contactId) => {
    const response = await fetch(`${API_BASE_URL}/contacts/${contactId}/permanent`, {
      method: 'DELETE',
    });
    return response.json();
  }
};