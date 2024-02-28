import { useState } from "react";
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import Heading from "../common/Heading";
import SubHeading from "../common/SubHeading";
import Input from "../common/Input";
import Button from "../common/Button";



export function Signin() {
    const [username, setUsername]  = useState('');
    const [password, setPassword] = useState('');
    const navigate  = useNavigate();

    async function handleSubmit() {
        const res = await axios({
            method: 'post',
            url: 'http://localhost:3000/api/v1/user/signin',
            data: {
                username,
                password
            }
        });
        localStorage.setItem('token', res.data.token);
        navigate('/dashboard')
    }
    return (
        <div className="grid h-screen place-items-center bg-gray-500">
          <div className="bg-gray-100 h-3/5 w-100 p-5 content-center rounded-2xl shadow-2xl">
            <Heading label={'Sign In'} />
            <SubHeading label={'Enter your credentials to acess your account'} />
            <Input type={'text'} label={'Email'} value={username} placeholder={'johndoe@gmail.com'} onChange={(e) => {
              setUsername(e.target.value);
            }} />
            <Input type={'password'} label={'Password'} value={password} placeholder={''} onChange={(e) => {
              setPassword(e.target.value)
            }} />
            <Button label={'Sign In'} onClick={handleSubmit} />
            <p className="mt-2 flex justify-center">Don't have an account?  <Link to="/signup" className="underline"> Sign Up</Link></p>
          </div>
        </div>
    )
}