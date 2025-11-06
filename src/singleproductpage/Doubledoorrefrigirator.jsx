import React, { useEffect } from "react";


import { useState } from "react";
import DescriptionReviews from "../components/DescriptionReviews";
import axios from "axios";
import { Link } from "react-router-dom";
function Doubledoorefrigirator({ongetindex}){
    
    const [currentimage,setcurrentimage] = useState(0)
    const [data,setdata] = useState([])
    useEffect(function(){
       axios.get("hhttps://finalproject-ecommerce-roj1.onrender.com/recRefirigirator").then((data)=>{
          setdata(data.data)
       })
    },[])
    let img1 ="https://res.cloudinary.com/dmfs6il6m/image/upload/v1760511632/Refrigerator/jxluxfao0volxfl5mph4.jpg"
    let img2 ="https://res.cloudinary.com/dmfs6il6m/image/upload/v1762426592/electronic-store-product-gallery-image-30-768x768_gxbm7p.jpg"
    let img3 ="https://res.cloudinary.com/dmfs6il6m/image/upload/v1762426592/electronic-store-product-gallery-image-31-768x768_fwv4fo.jpg"
    let img4 ="https://res.cloudinary.com/dmfs6il6m/image/upload/v1762426592/electronic-store-product-gallery-image-22-768x768_jnnbhs.jpg"
    const imgarray = [img1,img2,img3,img4]
    
    function onchangecurrentimage(i){
      setcurrentimage(i)
    }
   
    return(
        <div className=" lg:px-28">
        <div className="grid grid-cols-1 lg:gap-10 lg:grid-cols-2 p-5 ">
            <div>
                   <div className="">
               <div className="">
                  <img src={imgarray[currentimage]} className="w-[100%]" alt="" />
               </div>
               <div className="grid grid-cols-4 gap-2 pt-5">
                    {imgarray.map((item,i)=>{
                        return(
                            <div className="" onClick={()=>{onchangecurrentimage(i)}}>
                            <img src={item} key={i} alt="" />
                            </div>
                        )
                    })}
               </div>
            </div>
               
            </div>
            <div>
                <p className="text-sm mt-5 text-gray-500 pt-2 lg:text-[16px]">Home / Refrigerator /36″ Side-by-Side Refrigerator and Freezer with 25 Cubic Ft. Total Capacity, Black</p>
                <h1 className="text-xl font-semibold pt-3 lg:text-[27px] lg:pb-5">V-Series 5.1 Home Theater Sound Bar with Dolby Audio, Bluetooth, Wireless Subwoofer, Voice Assistant Compatible</h1>
                <div className="flex gap-2 text-2xl font-semibold pb-1"> 
                    <p className="text-gray-300 line-through">$799.00</p>
                    <p>$766.00</p>
                </div>
                <p className="lg:text-[18px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sollicitudin consequat justo in cursus. Proin non velit quam. Etiam diam turpis, elementum in gravida maximus, efficitur quis nulla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet interdum lorem. Mauris elementum justo id ante ornare consectetur.</p>
                 <h1 className="pt-4 lg:text-[20px]">Key features</h1>
                 <ul className="list-disc ps-10 text-[18px]">
                    <li className="pt-3">Newest technology</li>
                    <li>Best in class components</li>
                    <li>Dimensions -69.5 x 75.0 x 169.0</li>
                    <li>Maintenance free</li>
                    <li>12 years warranty</li>
                 </ul>
                 <div className="flex gap-2 p-3 border-b-[1px]">
                    <div className="flex">
                       <button className="bg-gray-100 border-[1px] py-1 px-4">-</button>
                       <p className="border-[1px] py-1 px-4 ">1</p>
                       <button className="bg-gray-100 border-[1px] py-1 px-4">+</button>
                    </div>
                 <div>
                  <button onClick={()=>{ongetindex(0,"refrigator")}} className="bg-black text-white py-1 px-4 ">Add to Cart</button>
                 </div>
                 </div>
                 <p className="top-2 text-sm lg:text-[16px] lg:mt-5">Category:Home appliances</p>
                <div className="p-5 flex justify-center  border-[1px] mt-2 lg:mt-5">
                    <img src="./src/images/Payment.png" alt="" />
                </div>
                 </div>
        </div>
        <div className="px-5">
          <DescriptionReviews imgarray={imgarray}></DescriptionReviews>
        </div>
        
        <div className="bg-white mt-5 p-5 ">
            <div className="">
                <h1 className="text-2xl font-semibold">Home appliences</h1>
                <button className="text-blue-500 text-xl font-medium">See More</button>
            </div>
            <div className="grid mt-8 pb-14 grid-cols-2 md:grid-cols-4 gap-5 md:mt-10 gap-y-14 ">
                  {data.map((items)=>{
                     return(
                        <div>
                            <Link to={items.to}><img src={items.image} alt="" /></Link> 
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
        </div>

        </div>
    )
}
export default Doubledoorefrigirator