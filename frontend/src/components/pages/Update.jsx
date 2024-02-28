import { useEffect, useState } from "react"
import axios from "axios"
import Input from "../common/Input";
import Button from "../common/Button";
import { useNavigate } from "react-router-dom";

export default function Update() {
    const navigate = useNavigate();
    const [ firstName, setFirstName ] = useState('');
    const [ lastName, setLastName ] = useState('');
    const [ password, setPassword ] = useState('');
    useEffect(() => {
        async function fetchData() {
            const res = await axios({
                method: 'get',
                url: 'http://localhost:3000/api/v1/user/getUser',
                headers: {
                    'Authorization': localStorage.getItem('token')
                }
            });
            setFirstName(res.data.firstName);
            setLastName(res.data.lastName);
            setPassword(res.data.password);
        }
        fetchData()
    },[])
    const onClickHandler = async() => {
        const res = await axios({
            method: 'put',
            url: 'http://localhost:3000/api/v1/user/update',
            data: {
                password,
                firstName,
                lastName,
            },
            headers: {
                'Authorization': localStorage.getItem('token')
            }
        })
        console.log(res)

        navigate('/dashboard');
    }
    return (
        <div className="grid h-screen place-items-center bg-gray-500">
            <div className="bg-gray-100 h-2/4 w-1/4 p-3 content-center rounded-2xl shadow-2xl">
                <form>
                    <Input label={"First Name"} type={'text'} value={firstName} placeholder={'John'} onChange={(e) => {
                        setFirstName(e.target.value)
                    }}/>
                    <Input label={"Last Name"} type={'text'} value={lastName} placeholder={'Doe'} onChange={(e) => {
                        setLastName(e.target.value)
                    }}/>
                    <Input label={"Password"} type={'text'} value={password} onChange={(e) => {
                        setPassword(e.target.value)
                    }}/>
                    <div className="flex justify-around">
                        <Button label={'Cancel'} onClick={() => {
                            navigate('/dashboard')
                        }} />
                        <Button label={'Save'} onClick={onClickHandler} />
                    </div>
                </form>
            </div>
        </div>
    )
}