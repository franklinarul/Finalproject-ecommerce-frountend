import axios from "axios";
import React, { useEffect, useState } from "react";

function Adminproductlist(){

    const [home,sethome] = useState([])
    const [audio,setrecaudio] = useState([])
    const [Airconditioner,setrecairconditioner] = useState([])
    const [kitchen,setkitchen] = useState([])
    const [refrigirator,setrefirigator] = useState([])

    useEffect(function(){
        axios.get("https://finalproject-ecommerce-roj1.onrender.com/rechomeappliance").then(function(data){
       sethome(data.data)
 })
 axios.get("https://finalproject-ecommerce-roj1.onrender.com/recaudiovedio").then(function(data){
        setrecaudio(data.data)
 })
 axios.get("https://finalproject-ecommerce-roj1.onrender.com/recairconditioner").then(function(data){
  setrecairconditioner(data.data)
 })
  axios.get("https://finalproject-ecommerce-roj1.onrender.com/reckitchenappliances").then(function(data){
  setkitchen(data.data)
 })
  axios.get("https://finalproject-ecommerce-roj1.onrender.com/recRefirigirator").then(function(data){
  setrefirigator(data.data)
    })
},[])
   return(
       <div className="flex flex-col justify-center">
             <table className="border-[1px]">
                <thead className="border-[1px]">
                    <tr className="text-[16px] font-bold">
                    <td className="text-center p-5">SNO</td>
                    <td className="text-center p-5">Product Name</td>
                    <td className=" p-5">Price</td>
                    <td className=" p-5">Rtings</td>
                    <td className=" p-5">product image</td>
                    </tr>
                    
                </thead>
                <tbody className="border-[1px]">
                    <tr >
                        <td  colSpan={5} className="text-center text-2xl font-bold p-5">Home appliance products</td>
                    </tr>
                    {home.map((item,index)=>{
                        return(
                          <tr className="border-[1px]">
                            <td className="p-5">{index+ 1}</td>
                            <td className="p-5">{item.name}</td>
                            <td className="p-5">{item.cprice}</td>
                            <td className="p-5">{item.ratings}</td>
                            <td className="p-5"><img src={item.image} alt="" className="h-[130px]"/></td>
                          </tr>    
                        )
                    })}
                    <tr >
                        <td  colSpan={5} className="text-center text-2xl font-bold p-5">Audio & Vedio</td>
                    </tr>
                    {audio.map((item,index)=>{
                        return(
                          <tr className="border-[1px]">
                            <td className="p-5">{index+ 1}</td>
                            <td className="p-5">{item.name}</td>
                            <td className="p-5">{item.cprice}</td>
                            <td className="p-5">{item.ratings}</td>
                            <td className="p-5"><img src={item.image} alt="" className="h-[130px]"/></td>
                          </tr>    
                        )
                    })}
                     <tr >
                        <td  colSpan={5} className="text-center text-2xl font-bold p-5">Airconditoner</td>
                    </tr>
                    {Airconditioner.map((item,index)=>{
                        return(
                          <tr className="border-[1px]">
                            <td className="p-5">{index+ 1}</td>
                            <td className="p-5">{item.name}</td>
                            <td className="p-5">{item.cprice}</td>
                            <td className="p-5">{item.ratings}</td>
                            <td className="p-5"><img src={item.image} alt="" className="h-[130px]"/></td>
                          </tr>    
                        )
                    })}
                     <tr >
                        <td  colSpan={5} className="text-center text-2xl font-bold p-5">Kitchen Appliances</td>
                    </tr>
                    {kitchen.map((item,index)=>{
                        return(
                          <tr className="border-[1px]">
                            <td className="p-5">{index+ 1}</td>
                            <td className="p-5">{item.name}</td>
                            <td className="p-5">{item.cprice}</td>
                            <td className="p-5">{item.ratings}</td>
                            <td className="p-5"><img src={item.image} alt="" className="h-[130px]"/></td>
                          </tr>    
                        )
                    })}
                     <tr >
                        <td  colSpan={5} className="text-center text-2xl font-bold p-5">Refrigirator</td>
                    </tr>
                    {refrigirator.map((item,index)=>{
                        return(
                          <tr className="border-[1px]">
                            <td className="p-5">{index+ 1}</td>
                            <td className="p-5">{item.name}</td>
                            <td className="p-5">{item.cprice}</td>
                            <td className="p-5">{item.ratings}</td>
                            <td className="p-5"><img src={item.image} alt="" className="h-[130px]"/></td>
                          </tr>    
                        )
                    })}
                </tbody>
             </table>
   </div>
   )
   

    
}

export default Adminproductlist