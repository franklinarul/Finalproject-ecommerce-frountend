import React from "react";

function Shopnow(){

    return(
           <div className="grid grid-cols-1  md:grid-cols-2 gap-5 pt-5">
            <div className="text-white font-bold  flex flex-col items-center justify-center h-[240px] md:h-[340px] bg-[url(https://res.cloudinary.com/dmfs6il6m/image/upload/v1761758176/shoping_nmv34w.jpg)] bg-cover  bg-no-repeat">
                <p className="text-2xl">the only case you need</p>
                <button className="text-lg">shop now</button>
            </div>
             <div className="text-white font-bold  flex flex-col items-center justify-center h-[240px] md:h-[340px] bg-[url(https://res.cloudinary.com/dmfs6il6m/image/upload/v1761758175/shpoing2_gcjtzj.jpg)] bg-cover bg-no-repeat">
                <p className="text-2xl">Get 30% OFF</p>
                <button className="text-lg"> Shop Now</button>
            </div>
            </div>
    
    )

}

export default Shopnow