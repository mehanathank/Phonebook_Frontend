
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
  console.log(data);
  return (
    <div className="App">
      <Header></Header>
      <Outlet
      context={{
        data
        }}></Outlet>
    </div>
  );
}

export default App;
