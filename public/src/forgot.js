import React, { useState } from "react";
import Register from "./Register";

const Forgot = () =>{
   const [exist,setExist] = useState(true);

   if(exist === true)
   {
    return(
        <div>
            <h1>Password recovering</h1>
            <form>
                <label>Email: <input type="text"></input></label>
            </form>
            <button>Send</button>
            <button onClick={()=>{setExist(false)}}>Back</button>
            <p>Password was: password</p>
        </div>
    )
   } else{
       return(
           <div>
            <Register/>
           </div>
       )
   }
   

}

export default Forgot;