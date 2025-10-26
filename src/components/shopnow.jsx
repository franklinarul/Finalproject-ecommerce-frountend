import React from "react";

function Shopnow(){

    return(
           <div className="grid grid-cols-1  md:grid-cols-2 gap-5 pt-5">
            <div className="text-white font-bold  flex flex-col items-center justify-center h-[240px] md:h-[] bg-[url(./src/images/shoping.jpg)] bg-cover bg-no-repeat">
                <p className="text-2xl">the only case you need</p>
                <button className="text-lg">shop now</button>
            </div>
             <div className="text-white font-bold  flex flex-col items-center justify-center h-[240px] bg-[url(./src/images/shpoing2.jpg)] bg-cover bg-no-repeat">
                <p className="text-2xl">Get 30% OFF</p>
                <button className="text-lg"> Shop Now</button>
            </div>
            </div>
    
    )

}

export default Shopnow