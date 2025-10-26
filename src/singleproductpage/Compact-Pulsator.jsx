import React from "react";

import img1 from "/src/images/SingleProductpage/electronic-store-product-image-12.jpg"
import img2 from "/src/images/SingleProductpage/electronic-store-product-gallery-image-21.jpg"
import img3 from "/src/images/SingleProductpage/electronic-store-product-gallery-image-32.jpg"
import img4 from "/src/images/SingleProductpage/electronic-store-product-gallery-image-35.jpg"
import { useState } from "react";
import DescriptionReviews from "../components/DescriptionReviews";
function CompactPulsator({ongetindex}){
    
    const [currentimage,setcurrentimage] = useState(0)

    const imgarray = [img1,img3,img2,img4]
    
    function onchangecurrentimage(i){
      setcurrentimage(i)
    }
    const HomeApplianceslist = [{
        no:"1",
        img:"./src/images/Home-appliences/electronic-store-product-image-27-400x400.jpg",
        ratings:"⭐⭐⭐⭐⭐",
        desc:"Multigroomer All-in-One Trimmer Series 5000, 23 Piece Mens Grooming Kit",
        previousrate:"$49.00",
        currenting:"$44.00"
    },{
        no:"2",
        img:"./src/images/Home-appliences/electronic-store-product-image-12-400x400.jpg",
        ratings:"⭐⭐⭐⭐",
        desc:"Compact Pulsator Washer for Clothes, .9 Cubic ft. Tub, White, BPAB10WH",
        previousrate:"$319.00",
        currenting:"$259.00"
    },{
        no:"3",
        img:"./src/images/Home-appliences/electronic-store-product-image-13-400x400.jpg",
        ratings:"⭐⭐⭐⭐⭐",
        desc:"Full-Automatic Compact Washer with Wheels, 1.6 cu. ft, 11 lbs capacity with 6 Wash Programs Washer",
        previousrate:"$309",
        currenting:"$279"
    },{
        no:"4",
        img:"./src/images/Home-appliences/electronic-store-product-image-14-400x400.jpg",
        ratings:"⭐⭐⭐⭐⭐",
        desc:"Small Space Heat Pump Dryer with Sensor Dry, 12 Preset Machine Cycles, 40 Minute Express Drying",
        previousrate:"",
        currenting:"$349.00"
    },
]
    return(
        <div className=" lg:px-28">
        <div className="grid grid-cols-1 lg:gap-10 lg:grid-cols-2 p-5 ">
            <div className="">
               <div className="">
                  <img src={imgarray[currentimage]} alt="" />
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
            <div>
                <p className="text-sm mt-5 text-gray-500 pt-2 lg:text-[16px]">Home / Home appliances / Compact Pulsator Washer for Clothes, .9 Cubic ft. Tub, White, BPAB10WH</p>
                <h1 className="text-xl font-semibold pt-3 lg:text-[27px] lg:pb-5">Compact Pulsator Washer for Clothes, .9 Cubic ft. Tub, White, BPAB10WH</h1>
                <div className="flex gap-2 text-2xl font-semibold pb-1"> 
                    <p className="text-gray-300 line-through">$319.00</p>
                    <p>$259.00</p>
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
                  <button onClick={()=>{ongetindex(1)}} className="bg-black text-white py-1 px-4 ">Add to Cart</button>
                 </div>
                 </div>
                 <p className="top-2 text-sm lg:text-[16px] lg:mt-5">Category:Home appliances</p>
                <div className="p-5 flex justify-center  border-[1px] mt-2 lg:mt-5">
                    <img src="./src/images/Payment.png" alt="" />
                </div>
                 </div>
        </div>
        <div className="px-5">
          <DescriptionReviews></DescriptionReviews>
        </div>
        
        <div className="bg-white mt-5 p-5 ">
            <div className="">
                <h1 className="text-2xl font-semibold">Home appliences</h1>
                <button className="text-blue-500 text-xl font-medium">See More</button>
            </div>
            <div className="grid mt-8 pb-14 grid-cols-2 md:grid-cols-4 gap-5 md:mt-10 gap-y-14 ">
                  {HomeApplianceslist.map((items)=>{
                     return(
                        <div>
                            <img src={items.img} alt="" />
                            <br></br>
                             <h1 className="">{items.ratings}</h1>
                             <p className=" text-[15px] font-semibold font-sans">{items.desc}</p>
                             <div className="flex gap-1">
                                <p className="line-through text-gray-400 font-medium">{items.previousrate}</p>
                                <p className="font-semibold">{items.currenting}</p>
                             </div>
                        </div>
                     )
                  })}
            </div>
        </div>

        </div>
    )
}
export default CompactPulsator