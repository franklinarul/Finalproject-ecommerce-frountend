import React from "react";

function Topbrand(){
    const logolist=[
        {
        img:"https://res.cloudinary.com/dmfs6il6m/image/upload/v1761822816/electronic-store-top-brand-logo-2_qqducw.svg"
    },{
         img:"https://res.cloudinary.com/dmfs6il6m/image/upload/v1761822816/electronic-store-top-brand-logo-4_b2q1wg.svg"
    },
    {
         img:"https://res.cloudinary.com/dmfs6il6m/image/upload/v1761822816/electronic-store-top-brand-logo-4_b2q1wg.svg"
    },
    {
         img:"https://res.cloudinary.com/dmfs6il6m/image/upload/v1761822816/electronic-store-top-brand-logo-3_pditpq.svg"
    },
    {
         img:"https://res.cloudinary.com/dmfs6il6m/image/upload/v1761822817/electronic-store-top-brand-logo-5_mkfzce.svg"
    },
    {
         img:"https://res.cloudinary.com/dmfs6il6m/image/upload/v1761822818/electronic-store-top-brand-logo-1_ev8kdu.svg"
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