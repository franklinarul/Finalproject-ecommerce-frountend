import React from "react";
import Herosection from "../components/Herosection";
import Features from "../components/Fearures";
import ShopByCategory from "../components/ShopByCategory";
import Shopnow from "../components/shopnow";
import TodaysDeal from "../components/TodaysBestDeals";
import SalesProduct from "../components/Salesproduct";
import AudioVedio from "../components/Audio & Vedio";
import HomeAppliances from "../components/Homeappliances";
import Topbrand from "../components/TopBrands";
import Testimonal from "../components/Testimonal";
import Contactus from "../components/contact";
import AirConditioner from "../components/AirConditioner";
import KitchenAppliances from "../components/Kitchenappliances";
import Refrigerator from "../components/Refigerator";

function Home({ongetindex}){
    console.log()
    return(
        <>
        <Herosection></Herosection>
        <div className="bg-blue-50 px-5 lg:px-28">
        <Features></Features>
        <ShopByCategory></ShopByCategory>
        <Shopnow></Shopnow>
        <TodaysDeal ongetindex={ongetindex}></TodaysDeal>
        <SalesProduct></SalesProduct>
        <AudioVedio ongetindex={ongetindex}></AudioVedio>
        <HomeAppliances  ongetindex={ongetindex}></HomeAppliances>
        <AirConditioner ongetindex={ongetindex}></AirConditioner>
        <KitchenAppliances ongetindex={ongetindex}></KitchenAppliances>
        <Refrigerator ongetindex={ongetindex}></Refrigerator>
        <Topbrand></Topbrand>
        <Testimonal></Testimonal>
        <Contactus></Contactus>
        </div>
        </>
        
    )

}
 export default Home