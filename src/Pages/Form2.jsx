import React from "react";
import { FormContext } from "../Context/AllformContext";
import { Navigate, useNavigate } from "react-router-dom";

export const FormTow = ()=>{

   
    const {
        state_of_residence, 
        address,
         pin_code ,
         name,
         age,
         date_of_birth,
         dispatch,
         handleSubmit,
         } = React.useContext(FormContext);

         if(!name || !age || !date_of_birth){
            return <Navigate to="/form1" />
        }
        
    const navi= useNavigate();

    return(
        <div className="mainData">
            <button className="naviBtn" onClick={()=>navi("/user")}>User List</button>
            <br>
            </br>
            <br></br>
            <input className="inputBoxes" type="text" 
            placeholder="Enter Sate"
            value={state_of_residence}
            onChange={(e)=>
            dispatch({ type: "CHANGE RESIDENCE" , payload: e.target.value})}
            />
            <br></br>

            <input className="inputBoxes" type="text" 
            placeholder="Enter address"
            value={address}
            onChange={(e)=>
            dispatch({ type: "CHANGE ADDRESS" , payload: e.target.value})}
            />
<br></br>
            <input className="inputBoxes" type="text" 
            placeholder="Enter pincode"
            value={pin_code}
            onChange={(e)=>
            dispatch({ type: "CHANGE PINCODE" , payload: e.target.value})}
            />
<br></br>
            <button className="submitBtn" disabled={
                !state_of_residence ||
                !address ||
                !pin_code ||
                !name ||
                !age ||
                !date_of_birth
            }
            onClick={handleSubmit } 
            >Submit</button>
        </div>
    )
}