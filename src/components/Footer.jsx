import React from "react";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <div>

      
        <div className="bg-gray-800 p-12 lg:p-20">
        <div className="grid grid-cols-1 lg:grid-cols-4 text-[17px] lg:text-justify text-white text-center gap-10 lg:gap-5 lg:justify-center">
            <div className="">
                <img className="pb-5" src="https://res.cloudinary.com/dmfs6il6m/image/upload/v1761810311/electronic-store-logo_j7xouw.svg" alt="" />
                <p>We bring you the latest in <br></br> electronics, gadgets, and smart <br></br> home solutions—all in one place.</p>
            </div>
            <div >
                <h1 className="pb-5 text-2xl font-semibold">Quick Links</h1>

                <Link to={"/homeappliences"}><p>Home appliances</p></Link>
                <Link to={"/Audio&Vedio"}><p>Audio & video</p></Link>
                <Link to={"/Refrigirator"}><p>Refrigerator</p></Link>
                <Link to={"/Airconditioner"}><p>Air conditioner</p></Link>
                <Link to={"/Airconditioner"}><p>Kitchen appliances</p></Link>
                

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
                   <img src="https://res.cloudinary.com/dmfs6il6m/image/upload/v1761810312/Payment_vhentu.png" alt="" />
               </div>
            </div>
        </div>
          </div>

    )
}

export default Footer