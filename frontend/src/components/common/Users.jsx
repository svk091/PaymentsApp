import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom";
import User from "./User";

export default function Users() {
    const [ users, setUsers ] = useState([]);
    const navigate = useNavigate();
    async function onChangeHandler(e) {
        const res = await axios({
            method: 'get',
            url: `http://localhost:3000/api/v1/user/bulk?filter=${e.target.value}`
        })
        setUsers(res.data.user)
    }
    return (
        <div className="my-4">
            <h1 className="text-xl font-bold">Users</h1>
            {/* <input className="w-full border-2 my-3" type="text" placeholder="Search Users.." onChange={onChangeHandler} /> */}
            
<form className="flex pt-5 items-center w-full mx-auto">   
    <label htmlFor="simple-search" className="sr-only">Search</label>
    <div className="relative w-full">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
        <svg className="w-6 h-6 text-gray-800 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M16 19h4c.6 0 1-.4 1-1v-1a3 3 0 0 0-3-3h-2m-2.2-4A3 3 0 0 0 19 8a3 3 0 0 0-5.2-2M3 18v-1a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v1c0 .6-.4 1-1 1H4a1 1 0 0 1-1-1Zm8-10a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
  </svg>
        </div>
        <input type="text" onChange={onChangeHandler} id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  " placeholder="Search users..." required />
    </div>
</form>

            { 
                users.map((user) => {
                    return(
                        <div key={user.id} className="flex place-items-baseline justify-between mx-2 my-2">
                                {/* <h1 className="text-lg font-semibold">{user.firstName + ' ' + user.lastName}</h1> */}
                                <User label={user.firstName + ' ' + user.lastName} />
                                <button className="mx-2 h-10 text-white bg-black p-1 rounded-md" onClick={() => {
                                    navigate('/send ', { state : { userId: user.id, reciever: user.firstName + ' ' + user.lastName  } } );
                                }}>Send Money</button>
                        </div>
                    )
                })
            }
        </div>
    )
}