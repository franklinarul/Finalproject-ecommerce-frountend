import React from "react";

function PurchaseHistory({cart}){

const cartdata = cart

return(
    <div className="px-5 lg:px-28 lg:pt-10">
    <h1 className="text-3xl font-bold pb-10">Cart</h1>
    <div className="grid gap-5 lg:grid-cols-6 grid-cols-1 ">
    <div className="col-span-4">
        
        <table className="w-[100%] border-[1px] sm:transform-[rotate(90deg)]">
        <thead className="border-[1px]">
            <td className=" px-5 text-center"></td>
            <td className="px-5 text-center ">name</td>
            <td className="px-5 text-center">price</td>
            <td className="px-5 text-center">Quantity</td>
            <td className="px-5 text-center">subtotal</td>
        </thead>
        <tbody>
             {cartdata.map((item,index)=>{
                return(
                    <tr className=" items-center border-[1px] ">
                        <td className="pt-4 pb-4 "><div className="flex lg:px-4  lg:gap-5 gap-2 items-center "><span className="cursor-pointer">X</span><img className="lg:h-[150px] h-[80px]" src={item.image} alt="" /></div></td>
                        <td className=" lg:w-[30%] ps-7 ">{item.name}</td>
                        <td className="text-center">{item.cprice}</td>
                        <td className="text-center">{item.count}</td>
                        <td className="text-center">{item.cprice*item.count}</td>
                    </tr>
                )
             })}
        </tbody>
      </table>
    </div>
    <div className="col-span-2 ">
        <div className="border-[1px]">
         <div className="px-4 py-4 border-[1px]">
        <h1 className="text-[1.30rem] font-bold ">Cart totals</h1>
      </div>
      <div className="px-5">
         <div className="flex gap-10 py-4 border-b-[1px]">
        <h1>Subtotal</h1>
        <p>1,131.00</p>
      </div>
      <div className="flex gap-10 py-4 border-b-[1px]">
        <h1>Subtotal</h1>
        <p>1,131.00</p>
      </div>
      <div className="py-4">
       <h1 className="pb-4">Have a coupon?</h1>
       <button className="px-5  w-[100%] text-xl py-3 bg-black text-white">Proceed to checkout</button>
      </div>
      </div>
        </div>
     
     
    </div>
     </div>
     </div>
)
}

export default PurchaseHistory