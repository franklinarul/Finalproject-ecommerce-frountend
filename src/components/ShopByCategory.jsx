import React, { useState,useEffect } from "react";
import axios from "axios";
function ShopByCategory(){
//     const category=[{
//         no:"1",
//         img:"./src/images/catogery-img/electronic-store-category-image-06 (1).jpg",
//         h1:"AIR CONDITIONER",
//         p:"4 PRODUCTS"
//     },
//     {
//        no:"2",
//        img:"./src/images/catogery-img/electronic-store-category-image-08.jpg",
//         h1:"AUDIO & VEDIO",
//         p:"5 PRODUCTS" 
//     },
//      {
//        no:"3",
//        img:"./src/images/catogery-img/electronic-store-category-image-02.jpg",
//         h1:"GADGETS",
//         p:"6 PRODUCTS" 
//     },
//      {
//        no:"4",
//        img:"./src/images/catogery-img/electronic-store-category-image-07.jpg",
//         h1:"HOME APPLIANCES",
//         p:"5 PRODUCTS" 
//     },
//      {
//        no:"5",
//        img:"./src/images/catogery-img/electronic-store-category-image-05.jpg",
//         h1:"KITCHEN APPLIENCES",
//         p:"6 PRODUCTS" 
//     },
//      {
//        no:"6",
//        img:"./src/images/catogery-img/electronic-store-category-image-03.jpg",
//         h1:"PCS & LAPTOP",
//         p:"4 PRODUCTS" 
//     },
//      {
//        no:"7",
//        img:"./src/images/catogery-img/electronic-store-category-image-04.jpg",
//         h1:"REFRIGERATOR",
//         p:"4 PRODUCTS" 
//     },
//      {
//        no:"8",
//        img:"./src/images/catogery-img/electronic-store-category-image-01.jpg",
//         h1:"SMART HOME",
//         p:"5 PRODUCTS" 
//     },
// ]
const [recdata1,setrecdata1]=useState([])
const [recdata,setrecdata]=useState([])
console.log(recdata[0])
console.log(recdata1,"shop")
useEffect(function(){
 axios.get("https://finalproject-ecommerce-roj1.onrender.com/recdata").then(function(data){
       setrecdata(data.data)
   })      

  },[])
  console.log(recdata)
    return (
        <div className=" pt-5 ">
            <div className=" px-3 bg-white pb-5">
             <h1 className="text-2xl font-semibold pt-5">Shop By Category</h1>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-3 ">
               
                  {recdata.map((items,index)=>{
                    return(
                       <div key={index} className="  pt-2">
                        <div className="flex flex-col ">
                          <img  src={items.img} alt="" />
                          <h1 className="font-semibold text-center">{items.h1}</h1>
                         <p className="text-sm font- text-center">{items.P}</p>
                        
                        </div>
                       
                         
                        </div>
                    )
                  })}
               
            </div>
            </div>
            
           
        </div>
    )
}

export default ShopByCategory