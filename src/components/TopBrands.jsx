import React from "react";

function Topbrand(){
    const logolist=[
        {
        img:"./src/images/brand-logo/electronic-store-top-brand-logo-6.svg"
    },{
         img:"./src/images/brand-logo/electronic-store-top-brand-logo-5.svg"
    },
    {
         img:"./src/images/brand-logo/electronic-store-top-brand-logo-4.svg"
    },
    {
         img:"./src/images/brand-logo/electronic-store-top-brand-logo-3.svg"
    },
    {
         img:"./src/images/brand-logo/electronic-store-top-brand-logo-2.svg"
    },
    {
         img:"./src/images/brand-logo/electronic-store-top-brand-logo-1.svg"
    },
    
]
    return(
        <div className="pt-5">
            <div className="pb-5">
                <h1 className="text-2xl font-semibold">Top Brands</h1>
            </div>
        <div className="grid grid-cols-2 lg:grid-cols-6 bg-gray-200">
           {
            logolist.map((items)=>{
               return (<div className="grid justify-center border-r-[1px] border-b-[1px] pt-7 pb-7 border-black">
            <img src={items.img} alt="" />
           </div>
                        )})
           }
        </div>
        </div>
    )
}

export default Topbrand