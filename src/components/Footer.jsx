import React from "react";

function Footer() {
    return (
        <div>

      
        <div className="bg-gray-800 p-12 lg:p-20">
        <div className="grid grid-cols-1 lg:grid-cols-4 text-[17px] lg:text-justify text-white text-center gap-10 lg:gap-5 lg:justify-center">
            <div className="">
                <img className="pb-5" src="./src/images/electronic-store-logo.svg" alt="" />
                <p>We bring you the latest in <br></br> electronics, gadgets, and smart <br></br> home solutions—all in one place.</p>
            </div>
            <div >
                <h1 className="pb-5 text-2xl font-semibold">Shop</h1>

                <p>Hot deals</p>
                <p>Categories</p>
                <p>Brands</p>
                <p>Rebates</p>
                <p>Weekly deals</p>
            </div>

            <div>
                <h1  className="pb-5 text-2xl font-semibold">Need help?</h1>

                <p>About</p>
                <p>Contact</p>
            </div>


            <div>
                <h1  className="pb-5 text-2xl font-semibold">Contact</h1>

                <p>123 Fifth Avenue, New York, NY 10160 <br />
                    contact@info.com<br />
                    929-242-6868</p>

            </div>
        </div>

       
        </div>
         {/* copyright */}
          <div className="bg-gray-800 px-12 py-5 border-t-[1px]">
            <div className="flex justify-between text-white text-sm">
               <div>
                   <p>© 2025 Electronic Store. Powered by Electronic Store</p>
               </div>
               <div>
                   <img src="./src/images/Payment.png" alt="" />
               </div>
            </div>
        </div>
          </div>

    )
}

export default Footer