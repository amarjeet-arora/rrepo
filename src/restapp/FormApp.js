


import React, { useState } from 'react';
import axios from 'axios'

function FormApp( ) {
const [uname,setUname]= useState('')
const [email,setEmail]= useState('')
const [password,setPassword]= useState('')
const [users,setUsers]= useState([])
     
const addUser=(e)=>{
e.preventDefault()
setUsers([
    ...users,{uname,email,password}
   
    ])
    axios.post('http://localhost:4000/adduser',...users,"Content-Type:application/json")
    .then((response)=>{
        console.log(response.data);
        console.log(...users);

    })

}     

     
    return (
        <div>
            <p>User Registration</p>
        <form onSubmit={addUser}>
            Username:<input type='text'  value={uname} onChange={(e)=>setUname(e.target.value)}/>
            Email:<input type='email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
            Password:<input type='password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
            <button>Register</button>
        </form>
        </div>
    );
}

export default FormApp;