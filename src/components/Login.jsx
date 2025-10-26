import React, { useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase_config";
import { useNavigate } from "react-router-dom";


function Login({setusername}){
    const [profilename,setprofilename] = useState()
    const [email,setemail]=useState()
    const [pass,setpass]=useState()
    const navigate = useNavigate()
    function onlogin(){
      signInWithEmailAndPassword(auth,email,pass).then(()=>{
        alert("sussefully logined")
        navigate("/")
        setusername(profilename)
      }).catch((err)=>{
        alert(err)
      })
    }
    return(
        <div className=" h-[100vh] flex flex-col items-center justify-center">
            <div className="w-[30%]">
                <div>
                <label className="w-[100%]" htmlFor="">Username</label>
                <input onChange={(e)=>{setprofilename(e.target.value)}} className="w-[100%] border-[1px]" type="text" name="" id="" />
            </div>
              <div>
                <label className="w-[100%]" htmlFor="">Email</label>
                <input onChange={(e)=>{setemail(e.target.value)}} className="w-[100%] border-[1px]" type="email" name="" id="" />
            </div>
            <div>
                <label className="w-[100%]" htmlFor="">Password</label>
                <input onChange={(e)=>{setpass(e.target.value)}} className="w-[100%] border-[1px]" type="email" name="" id="" />
            </div>
            <div>
                <button onClick={onlogin} className="border-[1px] rounded">submit</button>
            </div>
            </div>
           
        </div>
        
    )
}

export default Login