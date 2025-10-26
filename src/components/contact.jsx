import React from "react";

function Contactus(){
return(
    <div className="pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-4 lg:items-center gap-4">
            <div className="grid justify-center border-b-[1px] lg:order-last">
                <img src="./src/images/electronic-store-support-team.png" alt="" />
            </div>
           <div className="border-b-[1px]  ">
              <p className="underline ">Have any questions?.</p>
              <h1 className="text-2xl font-semibold">Contact us</h1>
           </div>
           <div className=" border-b-[1px] ">
              <p className="underline">Customer service</p>
              <h1 className="text-2xl font-semibold">1-222-345-6789</h1>
           </div>
           <div className=" border-b-[1px] ">
              <p className="underline">Expert advice</p>
              <h1 className="text-2xl font-semibold">123-456-7890</h1>
           </div>
        </div>
    </div>
)
}

export default Contactus