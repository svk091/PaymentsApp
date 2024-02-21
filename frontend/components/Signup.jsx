import axios from "axios";
import { useState } from "react";
export function Signup() {
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    function onClickEvent() {
        axios({
            method: 'post',
            url: 'http://localhost:3000/api/v1/user/signup',
            data: {
                "username": username,
                "firstName": firstname,
                "lastName": lastname,
                "password": password
            }
        });
    }
    return (
        <div className="bg-green">
          <label htmlFor="firstname">First Name</label>
          <input type="text" name="firstname" placeholder="John" onChange={(e) => {
            setFirstname(e.target.value);
          }} />
          <label htmlFor="lastname">Last Name</label>
          <input type="text" name="lastname" placeholder="Doe" onChange={(e) => {
            setLastname(e.target.value);
          }} />
          <label htmlFor="username">Username</label>
          <input type="text" name="username" placeholder="johndoe@gmail.com" onChange={(e) => {
            setUsername(e.target.value);
          }} />
          <label htmlFor="password">Password</label>
          <input type="text" name="password"  onChange={(e) => {
            setPassword(e.target.value);
          }} />
          <button onClick={onClickEvent}>Sign UP</button>
        </div>
    )
}