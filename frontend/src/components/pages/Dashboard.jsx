import { useEffect } from "react";
import axios  from "axios";
import { useState } from "react";
import Appbar from "../common/Appbar";
import Balance from "../common/Balance";
import Users from "../common/Users";
export default function Dashboard() {
    const [ userData, setUserData ] = useState({});
    useEffect(() => {
        const fetchData = async() => {
            const res = await axios({
                method: 'get',
                url: 'http://localhost:3000/api/v1/user/getUser',
                headers: {
                    'Authorization': localStorage.getItem('token')
                }
            })
            setUserData(res.data);
        }
        fetchData()
    },[]);
    const dp = userData.firstName
    return(
        <div className="p-3">
            <Appbar username={userData.firstName} dp={dp} />
            <hr className="my-5 border-t-3 border-slate-500"/>
            <Balance amount={userData.amount} />
            <Users />
            
        </div>
    )
}
