import React from 'react';
import {useState} from 'react';
import axios from 'axios';

const Register = ()=>{
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const handleSubmit = (event)=>{
        event.preventDefault();
        const data = {
            name:name,
            pass:password,
            email:email
        }
    console.log(data);
    axios.post('http://localhost:8000/auth/register',data)
        .then(res => console.log(res))
    setName("");
    setPassword("");
    }

    return(
        <div>
            
            REGISTER <b><p></p></b>
            <form onSubmit={handleSubmit}>
                <label>Username:
                <input type="text" value={name} onChange={(e)=> setName(e.target.value)}></input></label>
                <p></p>
                <label>E-mail:   
                <input type="text" value={email} onChange={(e)=> setEmail(e.target.value)}></input></label>
                <p></p>
                <label>Password: 
                <input type="text" value={password} onChange={(e)=> setPassword(e.target.value)}></input></label>
                <b><p></p></b>
                <input value="REGISTRATION" type="submit"/>
            </form>
            <b><p></p></b>
        </div>
    )
}

export default Register