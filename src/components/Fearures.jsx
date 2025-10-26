import React from "react";

function Features(){
    const featureslist = [{
        logo:"",
        heading:"Free Shipping",
        para:"when you spend $80 or more"
    },
    {
        logo:"",
        heading:"We are avaliable 24/7",
        para:"need help? contact us anytime"
    },
    {
        logo:"",
        heading:"   Satisfied or return",
        para:"Easy 30-day return policy"
    },
    {
        logo:"",
        heading:"100% secure payments",
        para:"visa,mastercard,stripe,Paypal"
    }
]
    return (
        <div className="pt-5">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 bg-white  p-4">
             {featureslist.map((list)=>{
                return(
                    <div>
                        <i>{list.logo}</i>
                        <h1 className="font-semibold">{list.heading}</h1>
                        <p className="text-sm">{list.para}</p>
                    </div>
                )
             })}
          </div>
        </div>
    )
}

export default Features