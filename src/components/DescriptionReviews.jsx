import React from "react";
import { useState } from "react";

function DescriptionReviews({imgarray}){

    const [desc,setdesc] = useState(false)
    const [revw,setrevw] = useState(true)

    function descclick(){
        setdesc(false)
        setrevw(true)
    }
    function revwclick(){
        setdesc(true)
        setrevw(false)
        
    }
    return(
        <div>
             <div className="border-blue-500 border-t-[5px] flex flex-col lg:flex-row gap-2">
                <h1 onClick={descclick} className="cursor-pointer border-b-2">Description</h1>
                <h1 onClick={revwclick} className="cursor-pointer border-b-2">Reviews(0)</h1>
             </div>
             <div style={{display: desc ? "none" : "block"}}>
             <div className="pt-5 grid lg:grid-cols-2 lg:gap-3 items-center">
                <div>
                <h1 className="text-[28px] font-bold pb-4">More about the product</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ac massa eget urna tempor vehicula vel id nisi. Pellentesque sed felis auctor, molestie lectus vitae, elementum orci. In et nunc consequat, semper.</p>
                </div>
               <div className="flex justify-center py-5">
   <img src={imgarray[0]} alt="" />
               </div>
             </div>
             <div>
             <div className="grid lg:grid-cols-2 lg:gap-3 items-center">
                  <div className="flex justify-center ">
               <img  className="pt-5 " src={imgarray[1]} alt="" />
             </div>
                 <div className="py-3">
                    <h1 className="text-[22px] border-b-2 font-bold border-blue-500">Product's Features</h1>
                    <h1 className="text-[22px] font-bold">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</h1>
                    <ul className="px-5 list-disc flex flex-col ">
                        <li className="border-b-2 py-3">
Nunc sed justo at nisi commodo varius</li>
                        <li className="border-b-2 py-3">
Ut eu urna enim. Curabitur posuere fermentum</li>
                        <li className="border-b-2 py-3">
Curabitur at orci nec urna aliquet porta</li>
                    </ul>
                 </div>
             </div>
             </div>
              </div>

              <div>
                 <div style={{display:revw?"none":"block"}}>
                    <div>
                    <h1>Add a review</h1>
                    <p>Your email address will not be published. Required fields are marked *</p>
                        <p>Your rating</p>
                        <p>your review</p>
                        <textarea className="w-[100%] border-[1px]"></textarea>
                        <div className="lg:flex gap-4 items-center">
                        <p>Name</p>
                        <input className="w-[100%] border-[1px] p-3" type="text" />
                        <p>email</p>
                        <input  className="w-[100%] p-3 border-[1px]" type="email" />
                        </div>
                        <button className="py-2 px-4 bg-black text-white mt-2">Submit</button>
                    </div>
                 </div>
              </div>
        </div>
    )
}
export default DescriptionReviews