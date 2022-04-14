
import { useNavigate } from "react-router-dom"
export const Home = ()=>{
      const navigate = useNavigate()
    return (
<div className="mainData">
<button className="naviBtn" onClick={()=>{navigate("/user")}}>User List</button>
        <button className="naviBtn" onClick={()=>{navigate("/form1")}}>Fill Form</button>
        </div>
    )
}