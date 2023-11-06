import { Password } from "@mui/icons-material";
import { useState } from "react";

const Login=()=>{

const [logindetails, setLogindetaile]=useState([{
    name:"",
    Password:""
}])

const handlechange=(event)=>{
    const field = event.target.name;
    let commondata = {...logindetails}
    commondata[field]=event.target.value;
    return setLogindetaile(commondata)


}
const login=(event)=>{
    event.preventDefaultvalue()

}

return(
    <div>
        <input  id="name"
        type="text"
        name="name"
        placeholder="user Id"
        value={logindetails.name}
        onChange={handlechange}
         />
         <input id="password"
         type="text"
         name="password"
         placeholder="user password"
         value={logindetails.Password}
         onchange={handlechange}/>

         


         <button onClick={login}>Login</button>
    </div>
)



}
export default Login;