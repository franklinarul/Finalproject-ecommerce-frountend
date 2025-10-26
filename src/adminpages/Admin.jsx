import React from "react";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import AdminProduct from "./product";
import AdminHomeappliances from "./AdminHomeappliance";
import AdminAudioVedio from "./AdminAudioVedio";
import AdminAirconditioner from "./Adminairconditioner";
import KitchenAppliances from "./Kitchenappliances";
import Refirigator from "./Refirigator";
import TodaysDeal from "./TodaysDeals";
function Admin(){
    return(
        <>
       <AdminProduct></AdminProduct>
       <AdminHomeappliances></AdminHomeappliances>
       <AdminAudioVedio></AdminAudioVedio>
       <AdminAirconditioner></AdminAirconditioner>
       <KitchenAppliances></KitchenAppliances>
       <Refirigator></Refirigator>
       <TodaysDeal></TodaysDeal>
        </>
     
        
        
    )
}

export default Admin