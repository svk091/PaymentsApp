import { useLocation, useNavigate } from "react-router-dom"
import Heading from "../common/Heading";
import User from "../common/User";
import Input from "../common/Input";
import { useState } from "react";
import Button from "../common/Button";
import axios from "axios";

export default function SendMoney() {
    const [ amount, setAmount ] = useState(0);
    const { state } = useLocation();
    const { userId, reciever } = state;
    const navigate = useNavigate();
    console.log(userId)
    console.log(localStorage.getItem('token'))

    async function onClickHandler() {
        try {
            const res = await axios({
                method: 'post',
                url: 'http://localhost:3000/api/v1/account/transfer',
                data: {
                    to: userId,
                    amount: parseFloat(amount)
                },
                headers: {
                    'Authorization': localStorage.getItem('token')
                }
            })
            navigate('/dashboard');
        }catch(err) {
            console.log('err: ' + err)
        }

    }
    return (
        <div className="grid h-screen bg-gray-400 place-items-center">
            <div className="bg-gray-100 w-1/3 rounded-2xl shadow-2xl h-3/5 p-5 flex flex-col ">
                <div>{localStorage.getItem('token')}</div>
                <Heading label={'Send Money'} />
                <User label={reciever} />
                <Input label={'Amount (in Rs)'} type={'number'} value={amount} placeholder={'Enter amount'} onChange={(e) => {
                    setAmount(e.target.value);
                }} />
                <Button label={'Initiate Transfer'} onClick={onClickHandler} />
            </div>
        </div>
    )
}