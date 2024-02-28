import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Heading from "../common/Heading";
import SubHeading from "../common/SubHeading";
import Input from "../common/Input";
import Button from "../common/Button";
export function Signup() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  async function handleSubmit() {
      const res = await axios({
          method: 'post',
          url: 'http://localhost:3000/api/v1/user/signup',
          data: {
            username,
            firstName,
            lastName,
            password
          }
      });
      localStorage.setItem('token', res.data.token)
      
      navigate('/dashboard')
  }
  return (
    <div className="grid h-screen place-items-center bg-gray-500">
      <div className="bg-gray-100 h-4/5 w-100 p-3 content-center rounded-2xl shadow-2xl">
        <Heading label={'Sign UP'} />
        <SubHeading label={'Enter your information to create an account'} />
        <Input type={'text'} label={'First Name'} value={firstName} placeholder={'John'} onChange={(e) => {
          setFirstName(e.target.value);
        }} />
        <Input type={'text'} label={'Last Name'} value={lastName} placeholder={'Doe'} onChange={(e) => {
          setLastName(e.target.value)
        }} />
        <Input type={'text'} label={'Username'} value={username} placeholder={'johndoe@gmail.com'} onChange={(e) => {
          setUsername(e.target.value);
        }} />
        <Input type={'password'} label={'Password'} value={password} placeholder={''} onChange={(e) => {
          setPassword(e.target.value)
        }} />
        <Button label={'Sign UP'} onClick={handleSubmit} />
        <p className="mt-1 flex justify-center">Already have an account? <Link to="/signin" className="underline">Login</Link></p>
      </div>
    </div>
  )
}