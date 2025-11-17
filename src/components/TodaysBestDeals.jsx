import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function TodaysDeal(){

    const [todaysdeal,settodaysdeal]=useState([])
    
 useEffect(()=>{
    axios.get("https://finalproject-ecommerce-roj1.onrender.com/rectodaysdeal").then((data)=>{
        settodaysdeal(data.data)
    })
 },[])
    return(
        <div className="bg-white mt-5 p-5">
            <div className="">
                <h1 className="text-2xl font-semibold">Today's Best Deal</h1>
                <button className="text-blue-500 text-xl font-medium">See More</button>
            </div>
            <div className="grid mt-8 pb-14 grid-cols-2 md:grid-cols-4 gap-5 md:mt-10 gap-y-14  ">
                  {todaysdeal.map((items)=>{
                     return(
                        <div>
                           <Link to={items.to}><img src={items.image} alt="" /> </Link>
                            <br></br>
                             <i>{items.ratings}</i>
                             <p className=" text-[14px] font-medium">{items.name}</p>
                             <div className="flex gap-1">
                                <p className="line-through text-gray-400 font-medium">{items.oprice}</p>
                                <p className="font-semibold">{items.cprice}</p>
                             </div>
                        </div>
                     )
                  })}
            </div>
        </div>
    )
}

export default TodaysDeal