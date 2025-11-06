import React from "react";
import { Link } from "react-router-dom";

function AdminNavbar(){

    return(
        <div className="bg-blue-600 text-white min-h-[100vh]">
            <div className="fixed top-0">
             <div className="p-3">
                <Link><img src="https://res.cloudinary.com/dmfs6il6m/image/upload/v1761810311/electronic-store-logo_j7xouw.svg" alt="" /></Link>
             </div>
             <div className="p-3 flex flex-col gap-5 text-lg">
               <Link to={"/admin/productlist"}><p>Products list</p></Link>
               <Link to={"/admin/addproduct"}><p>Add new products</p> </Link>
               <Link to={"/admin/userinfo"}><p>User info</p></Link>
             </div>
             <div className="p-3 text-lg">
                <h1>LogOut</h1>
             </div>
             </div>
        </div>
    )

}
export default AdminNavbar