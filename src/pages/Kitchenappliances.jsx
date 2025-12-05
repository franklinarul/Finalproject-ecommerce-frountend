import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import '../components/home.css'
import { BsBasket } from "react-icons/bs";

function Kitchenappliance({ongetindex}) {
    const [Kitchenappliances,setkitchen]=useState([])
    useEffect(()=>{
        axios.get("https://finalproject-ecommerce-roj1.onrender.com/reckitchenappliances").then((data)=>{
           setkitchen(data.data)
        })
    },[])
    return (
        <div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 px-5 mt-12 mb-20 ">
                <div className="lg:col-span-2 lg:mx-14">
                    <div>
                        <h1 className="text-4xl lg:text-5xl font-bold text-blue-500 pb-5">Airconditioner</h1>
                        <p className="text-[16px] pt-3 font-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris turpis velit, iaculis vel risus non, convallis rhoncus ligula. Vestibulum ut lorem posuere, malesuada neque et, placerat quam. In hac habitasse platea dictumst. Sed bibendum porttitor sem, at sollicitudin orci placerat nec.</p>
                        <p className="pt-5 text-gray-400">showing all {Kitchenappliances.length} results</p>
                    </div>
                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-7 mt-5 mb-5 ">
                        {Kitchenappliances.map((items,index) => {
                            return (
                               <div key={index} >
                                 <div className="relative cartdoggle">
                                                                  <Link to={items.to}><img src={items.image} alt="" /></Link>
                                                                 <p onClick={()=>{ongetindex(index,"kitchen")}} className="absolute top-2 right-2 z-10 hidden p-3 border-[1px] cursor-pointer rounded-full bg-white transform transition-transform"><BsBasket /></p>
                                                                 </div>
                                    <div className="px-5 pt-5">
                                        <h1 className="">{items.ratings}</h1>
                                        <p className=" text-[15px] font-semibold font-sans">{items.name}</p>
                                        <div className="flex gap-1">
                                            <p className="line-through text-gray-400 font-medium">₹{items.oprice}</p>
                                            <p className="font-semibold">₹{items.cprice}</p>
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
                       <Link to={"/homeappliences"}><p>Home appliances</p></Link>
                                       <Link to={"/Audio&Vedio"}><p>Audio & video</p></Link>
                                       <Link to={"/Refrigirator"}><p>Refrigerator</p></Link>
                                       <Link to={"/Airconditioner"}><p>Air conditioner</p></Link>
                                       <Link to={"/Airconditioner"}><p>Kitchen appliances</p></Link>
                    </div>
                </div>
                </div>
        </div>
    )
}

export default Kitchenappliance