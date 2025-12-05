import React, { useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase_config";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";


function Login({setusername,setlogintrue}){
    const [profilename,setprofilename] = useState()
    const [email,setemail]=useState()
    const [pass,setpass]=useState()
    const navigate = useNavigate()
    function onlogin(){
    
      signInWithEmailAndPassword(auth,email,pass).then(()=>{
        alert("sussefully logined")
        setusername(profilename)
        navigate("/")
        setlogintrue(true)
        
      }).catch((err)=>{
        alert(err)
      })
    }
    return(
        <div className="grid mx-3 lg:mx-60 grid-cols-2  justify-center items-center h-[100vh] ">
            <div className="bg-blue-600 rounded h-[50vh] text-white lg:text-center flex flex-col justify-center">
                <div className="mx-2 flex flex-col gap-5">
                <h1 className="text-2xl font-bold pb-2  text-center">Come Join us!</h1>
                <p className="text-md pb-2">We are so axicted to have you here.if you havent already,create an account to get access to exclusive offers,rewards and discounts</p>
                <Link to={'/signup'}><button className="border-blue-800 p-1 mx-[10%] bg-blue-700 rounded-full lg:p-3"> haven't have an account? Signup</button></Link>
                </div>
            </div>
            <div className="h-[50vh] flex flex-col gap-5 px-2 justify-center bg-gray-100 ">
            
                <div>
                    <h1 className="text-2xl pb-2 text-center font-bold">Login</h1>
                </div>
                 <div>
                <input onChange={(e)=>{setprofilename(e.target.value)}} className="w-[100%] border-[1px]   p-2 rounded-md" type="text" name="" id="" placeholder="User Name"/>
            </div>
              <div>
                <input  onChange={(e)=>{setemail(e.target.value)}} className="w-[100%] border-[1px]  p-2 rounded-md" type="email" name="" id="" placeholder="Emailid" />
            </div>
            <div>
                <input onChange={(e)=>{setpass(e.target.value)}} className="w-[100%] border-[1px]   p-2 rounded-md" type="number" name="" id="" placeholder="password"/>
            </div>
            <div>
                <button onClick={onlogin} className="border-[1px] rounded px-8 py-2 bg-blue-600 text-white font-bold ">submit</button>
            </div>
           
        </div>
        </div>
        
    )
}

export default Login