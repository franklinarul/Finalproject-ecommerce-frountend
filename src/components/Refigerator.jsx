import axios from "axios";
import React, { useEffect, useState } from "react";

function Refrigerator(){
    const [refrigerator,setrefrigitor]= useState([])
   useEffect(()=>{
    axios.get("https://finalproject-ecommerce-roj1.onrender.com/recRefirigirator").then((data)=>{
        setrefrigitor(data.data)
    })
   },[])
    return(
        <div className="bg-white mt-5 p-5 ">
            <div className="">
                <h1 className="text-2xl font-semibold">Home appliences</h1>
                <button className="text-blue-500 text-xl font-medium">See More</button>
            </div>
            <div className="grid mt-8 pb-14 grid-cols-2 md:grid-cols-4 gap-5 md:mt-10 gap-y-14 ">
                  {refrigerator.map((items)=>{
                     return(
                        <div>
                            <img src={items.image} alt="" />
                            <br></br>
                             <h1 className="">{items.ratings}</h1>
                             <p className=" text-[15px] font-semibold font-sans">{items.name}</p>
                             <div className="flex gap-1">
                                <p className="line-through text-gray-400 font-medium">{items.oprice}</p>
                                <p className="font-semibold">{items.cprice}</p>
                             </div>
                        </div>
                     )
                  })}
            </div>
        </div>)
}

export default Refrigerator