import React from "react";

function SalesProduct(){
    return(
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pt-8">
         <div className="flex justify-between lg:gap-10 bg-gray-200 p-5 h-36 lg:h-72">
             <div>
                 <h1 className="text-[26px] font-semibold lg:text-[40px]">Wireless headphones</h1>
                <p className="pt-3 text-gray-500">Starting at $49</p>
                <button className="pt-3 text-xl font-semibold text-blue-500">Shop now</button>
             </div>
             <div className="w-[22%] lg:w-[50%]">
                <img src="./src/images/salesproduct-img/electronic-store-wireless-headphone.png" alt="" />
             </div>
         </div>
          <div className="flex justify-between lg:gap-20 bg-gray-200 p-5 h-36 lg:h-72">
             <div>
                 <h1 className="text-[26px] font-semibold lg:text-[40px]">Grooming</h1>
                <p className="pt-3 text-gray-500">Starting at $49</p>
                <button className="pt-3 text-xl font-semibold text-blue-500">Shop now</button>
             </div>
             <div className="w-[15%] lg:w-[50%]">
                <img src="./src/images/salesproduct-img/electronic-store-grooming.png" alt="" />
             </div>
         </div>
         <div className="flex justify-between lg:gap-10 bg-yellow-200 p-5 h-36 lg:h-72">
             <div>
                 <h1 className="text-[26px] font-semibold lg:text-[40px]">Vedio Gmaes</h1>
                <p className="pt-3 text-gray-500">Starting at $49</p>
                <button className="pt-3 text-xl font-semibold text-blue-500">Shop now</button>
             </div>
             <div className="w-[20%] lg:w-[50%]">
                <img src="./src/images/salesproduct-img/electronic-store-video-games.png" alt="" />
             </div>
         </div>
    </div>)
}
 export default SalesProduct