import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoMdMenu, } from "react-icons/io";
import { FaOpencart } from "react-icons/fa6";
import { FaAngleDown } from "react-icons/fa";
import { useEffect } from "react";
import HomeAppliances from "./Homeappliances";
import axios from "axios";

function Navbar({getdata,username}) {

 const[getdata1,setgetdata1] = useState([])
 const[total,settotal] = useState([0]) 
useEffect(function(){
 setgetdata1(getdata)
 
},[getdata])

useEffect(()=>{
    if(getdata1.length > 0){
    const atotal = getdata1.reduce((sum,item)=> sum + Number(item.cprice),0)
    settotal(atotal)
    }
},[getdata1])
    

    const [click, setclick] = useState(false)
    const [cancel, setcancel] = useState(false)
    const [carttoggle,setcarttoggle] = useState(true)
    const[logintoggle,setlogintoggle] = useState(false)
// mobile navclick funcanility********
    function clickmenu() {
        setclick(!click);
        console.log(click)
    }
// mobile cancel funcanility*********
    function clickCancle() {
      setcancel(!cancel)
    }

    function carttoggled(){
        setcarttoggle(!carttoggle)
    }

    async function handlebynow(){
   const {data} = await  axios.post("http://localhost:5000/payment",{amount:total});
   initpayment(data.data)
    };

    function initpayment(data){
        const options = {
            key:"rzp_test_RRdJkC9EV7YKIh",
            amount:data.amount,
            currency:data.currency,
            descriptions:"test payment method",
            order_id:data.id,
            handler: async (res)=>{
                await axios.post("http://localhost:5000/verify",res).then((res)=>{
                    console.log(res.data)
                    if(res.data === true){
                        alert("payment verified");
                    }
                    else{
                        alert("payment not verified")
                    }
                })
            },
           theme:{
            color:"#3399cc"
           }
        };
        const razorpay_popup = new window.Razorpay(options);
        razorpay_popup.open();
    }
    function onchangelogintoggle(){
              setlogintoggle(!logintoggle)
    }
    return (
        <>
        <div className="relative">
        {/****************************    / nav bar start      ********************************8 */}
            <div className="w-full md:px-40 bg-blue-600 p-5 flex justify-between">
                <div className="flex gap-6 items-center">
                    <i className="text-3xl sm:flex md:hidden text-white" onClick={clickmenu}><IoMdMenu /></i>
                   <Link to="/"><i><img src="./src/images/electronic-store-logo.svg" alt="" /></i></Link> 
                </div>
                <div className="flex gap-6">
                    <i onClick={carttoggled} className="text-3xl flex text-white cursor-pointer"><FaOpencart /><sup className="text-xl">{getdata1.length}</sup></i>
                    <p onClick={onchangelogintoggle} className="text-xl font-semibold text-white cursor-pointer">Log In</p>
                </div>
            </div>
{/* **********************            *mobile navmenu contents          ************************************/}
            <div style={{ display: click ? "block" : "none" }} className="block bg-red w-full">
                <div className="list-none p-3 flex flex-col gap-5">
                    <div className="flex justify-between">
                        <li>All products</li>
                        <i onClick={clickCancle}><FaAngleDown /></i>
                    </div>
                    <div style={{ display: cancel ? "block" : "none" }} >
                        <div className="flex flex-col gap-3 px-3 py-2">
                            <li>Air Conditioner</li>
                            <li>kitchen appliances</li>
                            <li>Pcs & laptop</li>
                            <li>Gadgets</li>
                            <li>Smart Home</li>
                        </div>

                    </div>
                   <Link to="/homeappliences"><li>Home appliances</li></Link> 
                   <Link to="/Audio&Vedio "><li>Audio & video
                    </li></Link>
                    <li>Refrigerator
                    </li>
                    <li>New arrivals
                    </li>
                    <li>Today’s deal
                    </li>
                </div>
            </div>
            {/*                          desktop nav start                */}

            <div className="w-full bg-blue-700 p-4 hidden lg:block">
                <div className="flex text-lg font-semibold text-white justify-center gap-20 list-none   ">
                    <li>All Products </li>
                   <Link to="/homeappliences"><li>Home appliances</li></Link> 
                   <Link to="/Audio&Vedio "><li>Audio & video
                    </li></Link>
                    <li>Refrigerator
                    </li>
                    <li>New arrivals
                    </li>
                    <li>Today’s deal
                    </li>
                </div>
            </div>
            </div>
           {/* desktop nav end */}
           
            <div style={{display : carttoggle ? "none":"block"}} className="h-[100vh] z-40 fixed top-0 bg-white right-0 w-[100%] lg:w-[30%]  ">
                <div className="flex justify-between items-center p-3 border-b-[1px]">
                    <h1 >Shopping Cart</h1>
                    <h1  onClick={carttoggled} className="text-1xl font-bold cursor-pointer ">X</h1>
                </div>
                 <div className="h-[65%] overflow-x-auto overflow-y-auto ">
                <div className="grid grid-cols-5 mt-5 gap-5 lg:gap-2 items-center">
                    {getdata1.map((item)=>{
                        return(
                            <>
                                 <div>
                        <img src={item.image} alt="" />
                    </div>
                    <div className="col-span-4">
                        <div className="flex justify-between">
                        <div>
                        <h1>{item.name}</h1>
                        </div>
                        <div>
                            <h1 className="mx-3 px-1 border-[1px] cursor-pointer">x</h1>
                        </div>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex">
                                <h1 className="px-4 py-2 border-[1px]">-</h1>
                                <h1 className="px-4 py-2 border-[1px]">1</h1>
                                <h1 className="px-4 py-2 border-[1px]">+</h1>
                            </div>
                            <div>
                                <p>{item.cprice}</p>
                            </div>
                        </div>
                    </div>
                            </>
                        )
                    })}
                </div>
            </div>
            <div >
                <div className=" fixed lg:w-[30%] w-[100%] bottom-0 bg-white">
                 <div className="flex justify-between py-1 px-2 border-[1px]">
                <h1> Subtotal:</h1>
                <h1>{total}</h1>
                </div>
                <div className="px-2 flex flex-col gap-5 pt-5">
                    <button className="w-full border-[2px] p-2 bg-black text-white text-lg"> Viewcart</button>
                    <button onClick={handlebynow} className="w-full border-[2px] p-2 bg-black text-white text-lg">Buy</button>
                </div>
                </div>
              
            </div>
            </div>

            <div style={{display:logintoggle?"block":"none"}} className=" bg-white h-[100vh] w-96 right-0 top-0 fixed">
                <div className="flex items-center justify-between border-b-[1px] p-2">
                    <div className="flex items-center  gap-2">
                        <div className="h-16 w-16 bg-gray-400 rounded-full relative flex justify-center items-center">
                         <h1 className="text-2xl font-bold">{username[0]}</h1>
                        </div>
                        <h1 className="text-[20px] font-bold">{username}</h1>
                    </div>
                   <div>
                    <p onClick={onchangelogintoggle} className="font-bold cursor-pointer">x</p>
                   </div>
                </div>
                <div>
                    <div className="flex flex-col justify-between m-3 gap-3">
                       
                           <Link><p>Cart</p></Link> 
                          <Link><p>Purchase History</p> </Link>  
                          <Link to={"/login"} onClick={onchangelogintoggle}><p>Login</p></Link>  
                          <Link to={"/signup"} onClick={onchangelogintoggle}><p>signup</p></Link>
                        
                    </div>
                </div>
            </div>
          
        </>
    )
}

export default Navbar