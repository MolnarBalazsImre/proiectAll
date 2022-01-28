import React from 'react';
import {useState} from 'react';
import axios from 'axios';
import LogedPage from './LogedPage';
import './auth.css';

const Login = () =>{
    const [loged, setLoged] = useState(false);
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const handleSubmit = (event)=>{
        event.preventDefault();
    const data = {
        name:name,
        pass:password
    }
    console.log(data);
    axios.post('http://localhost:8000/auth/login',data)
        .then(res => {console.log(res.data)
        if(res.data === "Confirmed")
    {
        setLoged(true);
    }})
    setName("");
    setPassword("");
    }
    if(loged === false)
    {
    return(
        <div>
            LOGIN <b><p></p></b>
            <form onSubmit={handleSubmit}>
                <label>Username:
                <input type="text" value={name} onChange={(e)=> setName(e.target.value)}></input></label>
                <p></p>
                <label>Password:
                <input type="password" value={password} onChange={(e)=> setPassword(e.target.value)}></input></label>
                <b><p></p></b>
                <input value="LOGIN" type="submit"/>
            </form>
            <b><p></p></b>
        </div>
    )}else{
        return(<div>
            <LogedPage/>
        </div>)
    }

}


export default Login;