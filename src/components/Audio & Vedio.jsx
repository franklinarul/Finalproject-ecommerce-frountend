import axios from "axios";
import React, { useEffect, useState } from "react";
axios

function AudioVedio({ongetindex}){
     const[audiovedio,setaudiovedio]=useState([]);
     
     useEffect(function(){
       axios.get("https://finalproject-ecommerce-roj1.onrender.com/recaudiovedio").then((data)=>{
          setaudiovedio(data.data)
       })
    },[]);
    return(
        <div className="bg-white mt-5 p-5 ">
            <div className="">
                <h1 className="text-2xl font-semibold">Audio & Video</h1>
                <button className="text-blue-500 text-xl font-medium">See More</button>
            </div>
            <div className="grid mt-8 pb-14 grid-cols-2 md:grid-cols-4 gap-5 md:mt-10 gap-y-14 ">
                  {audiovedio.map((items,index)=>{
                     return(
                        <div key={index} onClick={()=>{ongetindex(index,"audio")}}>
                            <img src={items.image} alt="" />
                            <br></br>
                             <i className="">{items.ratings}</i>
                             <p className=" text-[15px] font-semibold font-sans">{items.name}</p>
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

export default AudioVedio