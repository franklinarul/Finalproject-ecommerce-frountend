import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoMdMenu, } from "react-icons/io";
import { FaOpencart } from "react-icons/fa6";
import { FaAngleDown } from "react-icons/fa";
import { useEffect } from "react";
import HomeAppliances from "./Homeappliances";
import axios from "axios";
import { signOut } from "firebase/auth";
import auth from "../../firebase_config";
import { useNavigate } from "react-router-dom";

function Navbar({getdata,username,setcart,setlogintrue,setusername,logintrue,setgetdata,email}) {

 const[getdata1,setgetdata1] = useState([])
 const[total,settotal] = useState([0]) 
 const navigate =useNavigate()
 const[datalength,setdatalength]=useState(false)
 const[counttotal,setcounttaotal]=useState()
const[count,setcount]=useState()
 useEffect(function(){
 setgetdata1(getdata)
 setcart(getdata)

 },[getdata])

 useEffect(()=>{
    
    if (getdata1.length > 0) {

    const atotal = getdata1.reduce((sum, item) => {
      const cleanPrice = item.amount||item.cprice
        .toString()
        .replace(/,/g, "")      
        .replace(/[^0-9.]/g, ""); 

      return sum + parseFloat(cleanPrice);
    }, 0);
    settotal(atotal)
    setdatalength(true)
    }else{
          setdatalength(false)
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
        setcarttoggle(!carttoggle)
        if(logintrue==true){
         const {data} = await  axios.post("https://finalproject-ecommerce-roj1.onrender.com/payment",{amount:total});
         initpayment(data.data)
    }
    else{
        navigate("/signup")
    }
        }

 function dicrementcart(id,_id) {
   setgetdata1(prev =>
    prev.map((item, index) => {
      if (index === id) {
       const price = Number(item.cprice?.replace(/,/g, ""));  // convert string → number
      const currentcount = item.count||1
        const newCount =  currentcount- 1;
         axios.post("https://finalproject-ecommerce-roj1.onrender.com/updatecart",{count:newCount,id:_id})
        return {
          ...item,
          count: item.count>1 ? newCount : 1,
          amount: price * newCount
        };
      }
      return item;
    })
  );

 }

 function increment(id,_id) {
   setgetdata1(prev =>
    prev.map((item, index) => {
      if (index === id) {
       const price = Number(item.cprice?.replace(/,/g, ""));  // convert string → number
      const currentcount = item.count||1
        const newCount =  currentcount+ 1;
         axios.post("https://finalproject-ecommerce-roj1.onrender.com/updatecart",{count:newCount,id:_id})
        return {
          ...item,
          count: newCount,
          amount: price * newCount
        };
      }
      return item;
      
    })
  );
  
 }
  
    function initpayment(data){
        const options = {
            key:"rzp_test_RRdJkC9EV7YKIh",
            amount:data.amount,
            currency:data.currency,
            descriptions:"test payment method",
            order_id:data.id,
            handler: async (res)=>{
                await axios.post("https://finalproject-ecommerce-roj1.onrender.com/verify",res).then((res)=>{
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
    function logout(){
        signOut(auth).then(()=>{
            setlogintrue(false)
            setlogintoggle(false)
            setusername("Profile")
            setgetdata([])
        })
    }
    function popoutthecart(index){ 
        const updatedata = getdata1.filter((item)=>item._id !== index)
        setgetdata1(updatedata)
        axios.delete(`http://localhost:5000/removedata/${index}`)
    }
    return (
        <>
        <div className="relative">
        {/****************************    / nav bar start      ********************************8 */}
            <div className="w-full md:px-40 bg-blue-600 p-5 flex justify-between">
                <div className="flex gap-6 items-center">
                    <i className="text-3xl sm:flex md:hidden text-white" onClick={clickmenu}><IoMdMenu /></i>
                   <Link to="/"><i><img src="https://res.cloudinary.com/dmfs6il6m/image/upload/v1761810311/electronic-store-logo_j7xouw.svg" alt="" /></i></Link> 
                </div>
                <div className="flex gap-6">
                    <i onClick={carttoggled} className="text-3xl flex text-white cursor-pointer"><FaOpencart /><sup className="text-xl">{getdata1.length}</sup></i>
                    <p onClick={onchangelogintoggle} className="text-xl font-semibold text-white cursor-pointer">Profile</p>
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
                    <Link to="/Refrigirator"><li>Refrigerator
                    </li></Link>
                    <Link to="/Airconditioner"><li>Air Conditioner
                    </li></Link>
                    <Link to="/Kitchenappliances"><li>Kitchen Appliances
                    </li></Link>
                </div>
            </div>
            {/*                          desktop nav start                */}

            <div className="w-full bg-blue-700 p-4 hidden lg:block">
                <div className="flex text-lg font-semibold text-white justify-center gap-20 list-none   ">
                    <Link to="/allproducts"><li>All Products </li></Link>
                   <Link to="/homeappliences"><li>Home appliances</li></Link> 
                   <Link to="/Audio&Vedio "><li>Audio & video
                    </li></Link>
                    <Link to="/Refrigirator"><li>Refrigerator
                    </li></Link>
                   <Link to="/Airconditioner"><li>Air Conditioner
                    </li></Link>
                    <Link to="Kitchenappliances"><li>Kitchen Appliances
                    </li></Link>
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
                    {getdata1.map((item,index)=>{
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
                            <h1 onClick={()=>{popoutthecart(item._id)}} className="mx-3 px-1 border-[1px] cursor-pointer">x</h1>
                        </div>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex">
                                <h1 onClick={()=>{dicrementcart(index,item._id)}}  className="px-4 py-2 border-[1px] cursor-pointer">-</h1>
                                <h1 className="px-4 py-2 border-[1px]">{item.count||1}</h1>
                                <h1 onClick={()=>{increment(index,item._id)}} className="px-4 py-2 border-[1px] cursor-pointer">+</h1>
                            </div>
                            <div>
                                <p>{item.amount||Number(item.cprice?.replace(/,/g, ""))*(item.count||1)}</p>
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
                <div style={{display: datalength ? "block":"none"}}  className="px-2 flex flex-col gap-5 pt-5">
                    <Link to={"/purchasehistory"}> <button className="w-full border-[2px] p-2 bg-black text-white text-lg"> Viewcart</button></Link>
                    <button onClick={handlebynow} className="w-full border-[2px] p-2 bg-black text-white text-lg">Buy</button>
                </div>
                <div style={{display: datalength ? "none":"block"}}  className="px-2 flex flex-col gap-5 pt-5">
                    <Link to={"/allproducts"}> <button onClick={carttoggled} className="w-full border-[2px] p-2 bg-black text-white text-lg">ContinueShop</button></Link>
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
                        <h1  className="text-[20px] font-bold">{username}</h1>
                    </div>
                   <div>
                    <p onClick={onchangelogintoggle} className="font-bold cursor-pointer">x</p>
                   </div>
                </div>
                <div>
                    <div className="flex flex-col justify-between m-3 gap-3">
                       
                           <Link to={"/purchasehistory"} onClick={onchangelogintoggle}><p>Cart</p></Link> 
                          <Link><p>Purchase History</p> </Link>   
                          <Link to={"/signup"} onClick={onchangelogintoggle}><p>signup</p></Link>
                          <Link  onClick={logout}><p>Logout</p></Link> 
                        
                    </div>
                </div>
            </div>
          
        </>
    )
}

export default Navbar