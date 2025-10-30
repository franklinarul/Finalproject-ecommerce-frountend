import React from "react";

function Testimonal(){
    const testimonallist = [{
        rating:"⭐⭐⭐⭐⭐",
        p:"Amazing service and fast delivery! Got my new phone in perfect condition. Will definitely shop here again!",
        img:"https://res.cloudinary.com/dmfs6il6m/image/upload/v1761810126/electronic-store-reviewer-avatar-image-4_cmqpnp.jpg",
        name:"Rafael Stokes"
    },{
        rating:"⭐⭐⭐⭐⭐",
        p:"Highly recommend! My laptop arrived ahead of time and customer care was super helpful.",
        img:"https://res.cloudinary.com/dmfs6il6m/image/upload/v1761810126/electronic-store-reviewer-avatar-image-5_ngljf7.jpg",
        name:"Chelsea Turner"
    },{
        rating:"⭐⭐⭐⭐⭐",
        p:"Quality products, fair prices, and lightning-fast delivery. My go-to electronics store!",
        img:"https://res.cloudinary.com/dmfs6il6m/image/upload/v1761810126/electronic-store-reviewer-avatar-image-2_bqbffv.jpg",
        name:"Jacqueline Mueller"
    },{
        rating:"⭐⭐⭐⭐⭐",
        p:"Smooth experience from browsing to delivery. Great deals and genuine gadgets!",
        img:"https://res.cloudinary.com/dmfs6il6m/image/upload/v1761810126/electronic-store-reviewer-avatar-image-1_stc2yg.jpg",
        name:"Olive Borer"
    },{
        rating:"⭐⭐⭐⭐⭐",
        p:"Impressed with the range and support. Bought a smart TV and the setup help was a bonus!",
        img:"https://res.cloudinary.com/dmfs6il6m/image/upload/v1761810126/electronic-store-reviewer-avatar-image-3_gtdwai.jpg",
        name:"Priscilla Jacobson"
    },{
        rating:"⭐⭐⭐⭐⭐",
        p:"Authentic products and great after-sales service. A reliable store for all electronics!",
        img:"https://res.cloudinary.com/dmfs6il6m/image/upload/v1761810126/electronic-store-reviewer-avatar-image-6_tyfsou.jpg",
        name:"Joseph Reinger"
    },
]
    return(
        <div className="pt-20">
            <div>
                <h1 className="text-[22px] font-semibold">What is everyone saying?</h1>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 pt-5 gap-5">
                {
                testimonallist.map((items)=>{
                   return( <div className="flex flex-col gap-3 bg-white p-5 shadow-md">
                        <h1>{items.rating}</h1>
                        <p>{items.p}</p>
                        <div className="flex items-center gap-3">
                            <img className="rounded-full h-12" src={items.img} alt="" />
                            <p>{items.name}</p>
                        </div>
                    </div>)
                })
                }
            </div>
        </div>
    )
}

export default Testimonal