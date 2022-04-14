import React from  "react";
import axios from "axios";
import {  useNavigate } from "react-router-dom";

export const Users = ()=>{
    const [users , setUsers] = React.useState([]);

    React.useEffect(()=>{
        axios.get("http://localhost:3030/users").then(Response=>setUsers(Response.data))
    },[]);
const navi = useNavigate();
    return(
        <div className="mainData">
            <button className="naviBtn" onClick={()=>{navi("/form1")}}>Fill form</button>
            <table className="dataTable">
                <thead>
                    <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Date_Of_Birth</th>
                    <th>state_of_residence</th>
                    <th>Address</th>
                    <th>Pin-Code</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((users)=>(
                    <tr key={users.id}>
                    <td>{users.name}</td>
                    <td>{users.age}</td>
                    <td>{users.date_of_birth}</td>
                    <td>{users.state_of_residence}</td>
                    <td>{users.address}</td>
                    <td>{users.pin_code}</td>
                </tr>
                    ))}
                
                </tbody>
            </table>
        </div>
    )


}