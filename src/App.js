
import{Outlet} from "react-router-dom"
import './App.css';
import Header from './Components/Header';
import { useEffect, useState } from "react";

function App() {
  let [data ,setData]=useState([]);

  useEffect( ()=>{
    const fecthPhoneData=async()=>{
      try{
        const response=await fetch("/Phone.json");
        const da=await response.json();
        setData(da); 
      }catch(err){}
    };
    fecthPhoneData();
  },[]);

  const moveToTrash = (contactId) => {
    setData(prevData => ({
      ...prevData,
      contacts: prevData.contacts.map(contact => 
        contact.id === contactId ? { ...contact, trash: true } : contact
      )
    }));
  };

  const restoreFromTrash = (contactId) => {
    setData(prevData => ({
      ...prevData,
      contacts: prevData.contacts.map(contact => 
        contact.id === contactId ? { ...contact, trash: false } : contact
      )
    }));
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
