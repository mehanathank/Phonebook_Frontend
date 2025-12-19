import{Outlet} from "react-router-dom"
import './App.css';
import Header from './Components/Header';
import { useEffect, useState } from "react";
import { api } from './services/api';

function App() {
  let [data ,setData]=useState([]);

  useEffect( ()=>{
    const fetchPhoneData=async()=>{
      try{
        console.log('Fetching data from API...');
        const [usersData, contactsData] = await Promise.all([
          api.getUsers(),
          api.getContacts()
        ]);
        
        console.log('Users data:', usersData);
        console.log('Contacts data:', contactsData);
        
        setData({
          users: usersData.users || [],
          contacts: contactsData.contacts || [],
          categories: ["friends", "favorites", "business"]
        });
      }catch(err){
        console.error("Error fetching data:", err);
        // Fallback to empty data
        setData({
          users: [],
          contacts: [],
          categories: ["friends", "favorites", "business"]
        });
      }
    };
    fetchPhoneData();
  },[]);

  const moveToTrash = async (contactId) => {
    try {
      const contact = data.contacts.find(c => c.id === contactId);
      await api.deleteContact(contact._id);
      
      setData(prevData => ({
        ...prevData,
        contacts: prevData.contacts.map(contact => 
          contact.id === contactId ? { ...contact, trash: true } : contact
        )
      }));
    } catch (err) {
      console.error("Error moving to trash:", err);
    }
  };

  const restoreFromTrash = async (contactId) => {
    try {
      const contact = data.contacts.find(c => c.id === contactId);
      await api.restoreContact(contact._id);
      
      setData(prevData => ({
        ...prevData,
        contacts: prevData.contacts.map(contact => 
          contact.id === contactId ? { ...contact, trash: false } : contact
        )
      }));
    } catch (err) {
      console.error("Error restoring from trash:", err);
    }
  };

  console.log(data);
  return (
    <div className="App">
      <Header></Header>
      <Outlet
      context={{
        data,
        moveToTrash,
        restoreFromTrash
        }}></Outlet>
    </div>
  );
}

export default App;
