import { useState } from 'react'
import './App.css'

function App() {

  const [userData,setUserData]= useState({
    firstName: "",
    lastName: "",
    email:""
  });
  function handleChange(event){
    const {name,value} = event.target;

    setUserData((prev)=>{
      return {
        ...prev,
        [name]:value
      }
    })
  }

  return (
    <div>
      <form onSubmit={(e)=>{
        e.preventDefault();
        console.log(userData);
      }}>
        FirstName<input name="firstName" value ={userData.firstName} type='text' onChange={handleChange}/>
        <hr/>
        LastName<input name="lastName" value={userData.lastName} type='text' onChange={handleChange}/>
        <hr/>
        Email<input name="email" value={userData.email}  type="text" onChange={handleChange}/>
        <hr/>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App
