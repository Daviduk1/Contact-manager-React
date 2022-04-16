import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import { Routes, Route, useNavigate } from 'react-router-dom'
import Home from "./pages/Home";
import About from "./pages/About";
import Add from "./pages/Add";
import './components/css/add.css'
import './components/css/nav.css'
import './components/css/home.css'
import './components/css/about.css'
import { getUsers } from "./Api/requests";


function App() {
  const navigate = useNavigate()
  const [data, setData] = useState([])

  const [isUpdating, setIsUpdating] = useState()
  const [dataToBeUpdated, setDataToBeUpdated] = useState({})

  useEffect(() => {
    getUsers().then(data => {
        setData(data)
        console.log(data)
    })
  }, [])

  const editContact = (id) => {
    let contact = data.find(contact => contact.id === id)
    console.log(contact);
    setDataToBeUpdated(contact)
    setIsUpdating(true)
    navigate('/add')
  }

  const deleteContact = (id) => {
    let newContacts = data.filter(contact => contact.id !== id)
    setData(newContacts)
    console.log(data);
  }

  const getUpdatedData = (updatedData) => {
    console.log(updatedData);
  }

  const addUser = ({ name, email, phone }) => {
    let { id } = data[data.length -1]
    let newUser = { id: id  +1, name, email, phone }
    setData([ ...data, newUser ])
  }

  return (
    <div className="App">
       
           <Navbar />
           <Routes>
             <Route path="/"element={<Home data={data} setIsUpdating={setIsUpdating} editContact={editContact} deleteContact={deleteContact} />} />
             <Route path="/add"element={<Add isUpdating={isUpdating} setIsUpdating={setIsUpdating} dataToBeUpdated={dataToBeUpdated} getUpdatedData={getUpdatedData} addUser={addUser} />} />
             <Route path="/about"element={<About />} />
             
           </Routes>
        
        
    </div>
  );
}

export default App;
