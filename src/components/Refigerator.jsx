import axios from "axios";
import React, { useEffect, useState } from "react";
import './home.css'
import { BsBasket } from "react-icons/bs";
import { Link } from "react-router-dom";
function Refrigerator({ongetindex}){
    const [refrigerator,setrefrigitor]= useState([])
   useEffect(()=>{
    axios.get("https://finalproject-ecommerce-roj1.onrender.com/recRefirigirator").then((data)=>{
        setrefrigitor(data.data)
    })
   },[])
    return(
        <div className="bg-white mt-5 p-5 ">
            <div className="lg:flex justify-between">
                <h1 className="text-2xl font-semibold">Home appliences</h1>
                <button className="text-blue-500 text-xl font-medium">See More</button>
            </div>
            <div className="grid mt-8 pb-14 grid-cols-2 md:grid-cols-4 gap-5 md:mt-10 gap-y-14 ">
                  {refrigerator.map((items,index)=>{
                     return(
                        <div>
                              <div className="relative cartdoggle">
                            <Link to={items.to}>  <img  src={items.image} alt="" /> </Link>
                            <p onClick={()=>{ongetindex(index,"refrigator")}} className="absolute top-2 right-2 z-10 hidden p-3 border-[1px] cursor-pointer rounded-full bg-white transform transition-transform"><BsBasket /></p>
                           </div>
                            <br></br>
                             <h1 className="">{items.ratings}</h1>
                             <p className=" text-[15px] font-semibold font-sans">{items.name}</p>
                             <div className="flex gap-1">
                                <p className="line-through text-gray-400 font-medium">₹{items.oprice}</p>
                                <p className="font-semibold">₹{items.cprice}</p>
                             </div>
                        </div>
                     )
                  })}
            </div>
        </div>)
}

export default Refrigerator