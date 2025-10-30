import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Refigerator({ongetindex}) {
    const [refrigator,setrefirigator]=useState([])
    useEffect(()=>{
        axios.get("https://finalproject-ecommerce-roj1.onrender.com/recRefirigirator").then((data)=>{
           setrefirigator(data.data)
        })
    },[])
    return (
        <div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 px-5 mt-12 mb-20 ">
                <div className="lg:col-span-2 lg:mx-14">
                    <div>
                        <h1 className="text-4xl lg:text-5xl font-bold text-blue-500 pb-5">Refrigerator</h1>
                        <p className="text-[16px] pt-3 font-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris turpis velit, iaculis vel risus non, convallis rhoncus ligula. Vestibulum ut lorem posuere, malesuada neque et, placerat quam. In hac habitasse platea dictumst. Sed bibendum porttitor sem, at sollicitudin orci placerat nec.</p>
                        <p className="pt-5 text-gray-400">showing all {refrigator.length} results</p>
                    </div>
                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-7 mt-5 mb-5 ">
                        {refrigator.map((items,index) => {
                            return (
                               <div key={index} >
                                 <Link to={items.to}><img onClick={()=>{ongetindex(index,"audio")}} src={items.image} alt="" /></Link>
                                    <div className="px-5 pt-5">
                                        <h1 className="">{items.ratings}</h1>
                                        <p className=" text-[15px] font-semibold font-sans">{items.name}</p>
                                        <div className="flex gap-1">
                                            <p className="line-through text-gray-400 font-medium">{items.oprice}</p>
                                            <p className="font-semibold">{items.cprice}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className="px-3 lg:order-first lg:text-center lg:border-r-2">
                    <h1 className="text-[24px] lg:text-[30px] font-bold">Categories</h1>
                    <div className="p-4 flex flex-col gap-3 lg:text-lg lg:items-center ">
                        <p>Home appliances</p>
                        <p>Audio & video</p>
                        <p>Refrigerator</p>
                        <p>Air conditioner</p>
                        <p>Kitchen appliances</p>
                    </div>
                </div>
                </div>
        </div>
    )
}

export default Refigerator